# Website Expansion & CRM Walkthrough

The website has been successfully expanded into a Next.js application with a built-in CRM backend.

## Key Features

### 1. Modern Tech Stack
- **Next.js 15**: React framework for performance and SEO.
- **Tailwind CSS**: Utility-first styling (integrated with legacy styles).
- **Prisma + SQLite**: Local database for managing contacts and users.
- **NextAuth.js**: Secure authentication for the admin dashboard.

### 2. CRM Features
- **Contact Form**: Fully functional form on the `/contact` page. Submissions are saved to the database.
- **Admin Dashboard**: View all contact submissions at `/admin`.
- **Authentication**: Protected admin area.

## How to Run

1.  **Start the Development Server**:
    ```bash
    npm run dev
    ```
2.  **Open the Website**:
    - Go to [http://localhost:3000](http://localhost:3000) to view the site.

## Admin Access

1.  **Go to the Admin Dashboard**:
    - Navigate to [http://localhost:3000/admin](http://localhost:3000/admin).
2.  **Login**:
    - **Username**: `admin`
    - **Password**: `password123`
3.  **Manage Leads**:
    - You will see a list of all contact form submissions.

## Project Structure

- `app/`: Contains all pages and API routes.
- `components/`: Reusable React components (e.g., `ContactForm`).
- `prisma/`: Database schema and seed script.
- `public/`: Static assets (images).
- `_legacy/`: Original HTML/CSS files (kept for reference).

## Next Steps

- **Customize Content**: Update the text in `app/about/page.tsx` and `app/works/page.tsx`.
- **Add Work Projects**: Create individual pages for your projects under `app/works/`.
- **Deploy**: When ready, deploy to Vercel (recommended for Next.js). *Note: For SQLite, you'll need a persistent storage solution or switch to PostgreSQL/MySQL for production.*
