@echo off
echo Installing dependencies...

:: Install Next.js and React
npm install next@14.0.3 react@^18 react-dom@^18

:: Install TypeScript and type definitions
npm install --save-dev typescript@^5 @types/react@^18 @types/node@^20 @types/react-dom@^18

:: Install UI and styling dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-react

:: Install authentication
npm install next-auth@^4.24.5

:: Install additional UI components
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu

:: Install Tailwind CSS and PostCSS
echo Installing Tailwind CSS and PostCSS...
npm install --save-dev tailwindcss@^3.3.0 postcss@^8 autoprefixer@^10.0.1

:: Initialize Tailwind CSS
npx tailwindcss init -p

echo Installation complete! Run 'npm run dev' to start the development server.
