# Travel Companion - Admin Dashboard

A modern travel agency website with a secure admin dashboard for managing tour packages.

## Features

- **Public Website**: Beautiful, responsive travel agency website showcasing tour packages
- **Admin Dashboard**: Secure CRUD operations for managing tours
- **Supabase Backend**: Full database integration with authentication
- **Row Level Security**: Secure database access with RLS policies
- **Admin-Only Access**: Single admin email authentication system

## Tech Stack

- React 19
- TypeScript
- Vite
- Supabase (PostgreSQL + Authentication)
- Tailwind CSS
- Lucide React Icons

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Settings** > **API** to get your project URL and anon key
3. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

4. Fill in your Supabase credentials in `.env`:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_ADMIN_EMAIL=admin@travelcompanion.com
```

### 3. Set Up Database

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run the SQL script from `supabase/schema.sql` to create the tours table and RLS policies

### 4. Configure Admin Email

After running the schema, you need to set the admin email in Supabase:

1. Go to **Settings** > **Database** > **Custom Config**
2. Add a new configuration:
   - **Name**: `app.admin_email`
   - **Value**: Your admin email (e.g., `admin@travelcompanion.com`)

Alternatively, you can set it via SQL:

```sql
ALTER DATABASE postgres SET app.admin_email = 'your-admin@email.com';
```

### 5. Create Admin User

1. Go to **Authentication** > **Users** in Supabase dashboard
2. Click **Add User** > **Create New User**
3. Enter your admin email and set a password
4. **Important**: Disable public signups in **Authentication** > **Settings** > **Auth Providers** > **Email** > **Disable Sign Up**

### 6. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Security Features

### Authentication

- Only the email specified in `VITE_ADMIN_EMAIL` can authenticate
- Public signups are disabled in Supabase
- All authentication is handled through Supabase Auth

### Row Level Security (RLS)

- **Public Read**: Anyone can view tours (for the public website)
- **Admin Only Write**: Only authenticated admin can create, update, or delete tours
- RLS policies check the admin email from JWT token

### Route Protection

- Frontend guards prevent non-admin users from accessing admin routes
- Auth state is checked on every admin action
- Automatic logout if admin status is lost

## Project Structure

```
travelCompanion/
├── components/          # React components
│   ├── AdminDashboard.tsx
│   ├── AdminLogin.tsx
│   └── ...
├── lib/                 # Utility functions
│   ├── supabase.ts     # Supabase client
│   ├── auth.ts         # Authentication helpers
│   └── tours.ts        # Tour CRUD operations
├── supabase/
│   └── schema.sql      # Database schema and RLS policies
├── .env.example         # Environment variables template
└── README.md
```

## Admin Dashboard Features

- **Category Management**: Filter tours by International, Domestic, or Umrah
- **Search**: Search tours by name or location
- **CRUD Operations**:
  - Create new tour packages
  - Read/View all tours
  - Update existing tours
  - Delete tours
- **Image Upload**: Upload images from computer (stored as base64)
- **Real-time Updates**: Changes reflect immediately on the public site

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon/public key | Yes |
| `VITE_ADMIN_EMAIL` | Email address of the admin user | Yes |

## Troubleshooting

### "Missing Supabase environment variables" error

Make sure your `.env` file exists and contains all required variables.

### "Access denied" on login

- Verify the email matches `VITE_ADMIN_EMAIL` exactly
- Check that the user exists in Supabase Authentication
- Ensure public signups are disabled

### RLS policies blocking operations

- Verify `app.admin_email` is set in Supabase database config
- Check that you're logged in with the correct admin email
- Review RLS policies in `supabase/schema.sql`

### Images not displaying

- Check that images are being converted to base64 correctly
- Verify image size is under 10MB
- Check browser console for errors

## Production Deployment

1. Set environment variables in your hosting platform
2. Build the application: `npm run build`
3. Deploy the `dist` folder
4. Ensure Supabase project is in production mode
5. Review and tighten RLS policies if needed

## License

Private project - All rights reserved
