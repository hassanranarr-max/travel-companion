-- Create tours table
CREATE TABLE IF NOT EXISTS tours (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  duration TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('International', 'Domestic', 'Umrah')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create index on category for faster queries
CREATE INDEX IF NOT EXISTS idx_tours_category ON tours(category);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_tours_created_at ON tours(created_at DESC);

-- Enable Row Level Security
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;

-- Policy: Only authenticated admin users can read tours
-- This allows public read access for the main site, but you can restrict it if needed
CREATE POLICY "Public read access for tours"
  ON tours
  FOR SELECT
  USING (true);

-- Function to check if user is admin
-- Replace 'your-admin@email.com' with your actual admin email
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
DECLARE
  admin_email TEXT := 'hassanranarr@gmail.com'; -- Must match VITE_ADMIN_EMAIL in .env
BEGIN
  RETURN (
    auth.role() = 'authenticated' AND
    LOWER(auth.jwt() ->> 'email') = LOWER(admin_email)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Policy: Only authenticated admin users can insert tours
CREATE POLICY "Admin only insert tours"
  ON tours
  FOR INSERT
  WITH CHECK (is_admin());

-- Policy: Only authenticated admin users can update tours
CREATE POLICY "Admin only update tours"
  ON tours
  FOR UPDATE
  USING (is_admin())
  WITH CHECK (is_admin());

-- Policy: Only authenticated admin users can delete tours
CREATE POLICY "Admin only delete tours"
  ON tours
  FOR DELETE
  USING (is_admin());

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on tour updates
CREATE TRIGGER update_tours_updated_at
  BEFORE UPDATE ON tours
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Note: To set the admin email, run this in Supabase SQL Editor:
-- ALTER DATABASE postgres SET app.admin_email = 'your-admin@email.com';
-- Or use Supabase Dashboard > Settings > Database > Custom Config
