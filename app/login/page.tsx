import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black py-12">
      <Card className="w-full max-w-md bg-dark-gray border-yellow-500/30 glow-yellow text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-cinzel-decorative text-yellow-400">Login to Aether Machina</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-cormorant-garamond">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="m.davinci@aethermachina.com"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-cormorant-garamond">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="border-yellow-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:text-black"
              />
              <label htmlFor="remember" className="font-cormorant-garamond">
                Remember me
              </label>
            </div>
            <Link href="#" className="text-yellow-400 hover:underline font-cormorant-garamond">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 glow-yellow">
            Login
          </Button>
          <div className="text-center text-sm font-cormorant-garamond">
            Don't have an account?{" "}
            <Link href="/join" className="text-yellow-400 hover:underline">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
