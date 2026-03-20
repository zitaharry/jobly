# Jobly - Modern Job Board Platform

Jobly is a full-stack job board platform designed for candidates and recruiters. Built with speed and developer experience in mind using Convex, Next.js, and Clerk.

## 🚀 Tech Stack

- **Backend:** [Convex](https://convex.dev/) (Database, Serverless Functions, Real-time sync)
- **Frontend:** [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Authentication:** [Clerk](https://clerk.com/) (User management, Organizations, RBAC)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Editor:** [TipTap](https://tiptap.dev/) (Rich text for job descriptions)
- **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Key Features

### For Candidates
- **Professional Profiles:** Build your profile with work experience, education, and certifications.
- **Resume Management:** Upload and manage multiple resumes, set a default for quick applications.
- **Job Search:** Real-time job search with filters for workplace type, employment type, and more.
- **Favorites:** Save jobs to apply later.
- **Application Tracking:** Monitor the status of your applications in real-time.
- **Notifications:** Get instant alerts for application status updates and new opportunities.

### For Companies / Recruiters
- **Company Workspaces:** Manage team members and job listings under a unified organization.
- **Flexible Plans:** Support for Free, Starter, and Growth plans with seat and job limits.
- **Job Management:** Create, edit, and close job listings with rich text descriptions.
- **Applicant Tracking (ATS):** Review applications, manage candidate statuses, and track application volume.
- **Team Collaboration:** Invite members with specific roles (Admin, Recruiter, Member).

## 🛠️ Getting Started

### Prerequisites

- Node.js installed
- A [Convex](https://www.convex.dev/) account
- A [Clerk](https://clerk.com/) account

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   pnpm install
   ```

2. Set up Convex:
   ```bash
   npx convex dev
   ```
   Follow the prompts to create a new project.

3. Configure Environment Variables:
   Add your Clerk keys to your `.env.local` file:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. Configure Clerk Webhooks:
   - Go to Clerk Dashboard -> Webhooks.
   - Point webhooks to `https://your-deployment.convex.site/api/clerk-users-webhook` (for users) and organizations.
   - Add the `CLERK_WEBHOOK_SECRET` to your Convex environment variables.

### Running the App

```bash
npm run dev
pnpm dev
```

This starts both the Next.js frontend and the Convex backend.

## 📖 Learn More

- [Convex Documentation](https://docs.convex.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
