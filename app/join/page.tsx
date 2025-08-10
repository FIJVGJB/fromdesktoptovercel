import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function JoinPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black py-12">
      <Card className="w-full max-w-md bg-dark-gray border-yellow-500/30 glow-yellow text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-cinzel-decorative text-yellow-400">Join Aether Machina</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-cormorant-garamond">
              Username
            </label>
            <Input
              id="username"
              type="text"
              placeholder="LeonardoDaVinci"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
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
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="text-sm font-cormorant-garamond">
              Confirm Password
            </label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="********"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Checkbox
              id="terms"
              className="border-yellow-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:text-black"
            />
            <label htmlFor="terms" className="font-cormorant-garamond">
              I agree to the{" "}
              <Link href="#" className="text-yellow-400 hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 glow-yellow">
            Sign Up
          </Button>
          <div className="text-center text-sm font-cormorant-garamond">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-400 hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
