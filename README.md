# AutoVibe - Car Subscription Website

 Next.js web application for AutoVibe car subscription service, featuring Strapi CMS.

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Strapi CMS (local or hosted)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory with:

```env
# Strapi CMS
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here  # Optional

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. Set up Strapi CMS:
   - Install Strapi: `npx create-strapi-app@latest autovibe-strapi --quickstart`
   - Start Strapi: `yarn dev:strapi`

4. Run the development server:
```bash
npm run dev
```
