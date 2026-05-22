# Supabase Setup Guide

Follow these steps to set up Supabase for your Travel Companion application.

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Fill in your project details:
   - **Name**: Travel Companion (or your preferred name)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose the closest region
4. Wait for the project to be created (takes ~2 minutes)

## Step 2: Get API Credentials

1. In your Supabase project dashboard, go to **Settings** > **API**
2. Copy the following:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys" > "anon public")

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your values:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   VITE_ADMIN_EMAIL=admin@travelcompanion.com
   ```

   **Important**: Set `VITE_ADMIN_EMAIL` to the email you'll use for admin login.

## Step 4: Set Up Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Open `supabase/schema.sql` from this project
4. **IMPORTANT**: Before running, update the admin email in the `is_admin()` function:
   ```sql
   admin_email TEXT := 'your-admin@email.com'; -- Change this!
   ```
   Replace `'your-admin@email.com'` with the same email you set in `VITE_ADMIN_EMAIL`
5. Copy the entire SQL script and paste it into the SQL Editor
6. Click **Run** (or press Ctrl+Enter)
7. Verify the table was created: Go to **Table Editor** and you should see a `tours` table

## Step 5: Create Admin User

1. In Supabase dashboard, go to **Authentication** > **Users**
2. Click **Add User** > **Create New User**
3. Fill in:
   - **Email**: Use the same email as `VITE_ADMIN_EMAIL`
   - **Password**: Choose a strong password
   - **Auto Confirm User**: ✅ Check this box
4. Click **Create User**

## Step 6: Disable Public Signups

1. Go to **Authentication** > **Settings** > **Auth Providers**
2. Click on **Email** provider
3. Scroll down to **Email Auth Settings**
4. **Disable Sign Up**: ✅ Toggle this ON
5. Click **Save**

This ensures only you (the admin) can create accounts.

## Step 7: Test the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open `http://localhost:3000`

3. Click **Admin Login** in the footer

4. Log in with:
   - **Email**: The email you set in `VITE_ADMIN_EMAIL`
   - **Password**: The password you set when creating the user

5. You should now see the Admin Dashboard!

## Troubleshooting

### "Missing Supabase environment variables" error

- Make sure `.env` file exists in the project root
- Verify all three variables are set
- Restart the dev server after creating/updating `.env`

### "Access denied" on login

- Verify the email matches `VITE_ADMIN_EMAIL` exactly (case-insensitive)
- Check that the user exists in Supabase Authentication > Users
- Ensure public signups are disabled

### RLS policies blocking operations

- Verify you updated the admin email in the `is_admin()` function in `schema.sql`
- Make sure you're logged in with the correct admin email
- Check Supabase logs: **Logs** > **Postgres Logs**

### Can't see tours after creating them

- Check browser console for errors
- Verify RLS policies are set correctly
- Check Supabase logs for database errors

## Security Checklist

- ✅ Public signups disabled
- ✅ Admin email set in both `.env` and `schema.sql`
- ✅ RLS policies enabled on `tours` table
- ✅ Admin-only policies for INSERT, UPDATE, DELETE
- ✅ Public read access for SELECT (for website display)

## Next Steps

- Add your first tour package through the admin dashboard
- Customize the admin email if needed
- Consider setting up email notifications for admin actions
- Review Supabase dashboard for usage and performance metrics
