# Getting Started with Satoshi Agent

This guide will help you set up and run the Satoshi Agent application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- npm or yarn package manager
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/satoshi-agent.git
   cd satoshi-agent
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Configuration

1. Create environment variables:
   Create a `.env.local` file in the frontend directory with the following:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   ANTHROPIC_API_KEY=your_anthropic_key
   OPENAI_API_KEY=your_openai_key
   ```

2. Set up authentication:
   - Create a Clerk account at https://clerk.dev
   - Create a new application
   - Copy the API keys to your `.env.local` file

3. Set up Convex:
   - Create a Convex account at https://convex.dev
   - Create a new project
   - Copy the URL to your `.env.local` file

4. Set up AI providers:
   - Get API keys from Anthropic and/or OpenAI
   - Add them to your `.env.local` file

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. Sign in using Clerk authentication

## First Steps

1. **Create Your First Chat**
   - Click "New Chat" in the dashboard
   - Start a conversation with the AI assistant
   - Try out different cold calling scenarios

2. **Explore Features**
   - Test real-time responses
   - Try different conversation flows
   - Explore the dashboard analytics

3. **Customize Settings**
   - Adjust AI parameters
   - Configure workflow preferences
   - Set up custom templates

## Next Steps

- Read the [Architecture Guide](./architecture.md) to understand the system
- Check out [Features](./features.md) for detailed feature documentation
- Visit [Development Guide](./development.md) to start contributing

## Need Help?

- Check the [Troubleshooting](./troubleshooting.md) guide
- Join our community discussions
- Contact support
