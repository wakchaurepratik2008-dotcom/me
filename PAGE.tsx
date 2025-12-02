import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to Your Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Sign in to access your professional dashboard
        </p>
        <div className="mt-8 space-y-4">
          <Button asChild className="w-full" size="lg">
            <Link href="/login">Sign In</Link>
          </Button>
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
