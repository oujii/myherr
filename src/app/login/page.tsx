import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
        <p className="text-gray-600 mb-8 text-center">Sign in to your myHerräng account</p>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-herrang-blue hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me for 30 days
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full herrang-btn-green">Sign In</Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link href="/register" className="text-herrang-blue hover:underline">
                Create one now
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
