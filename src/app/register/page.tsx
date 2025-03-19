import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Create Your Account</h1>
        <p className="text-gray-600 mb-8 text-center">Join myHerräng to book your courses for the 2025 dance camp</p>

        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Enter your details to create your dancer profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a secure password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
            </div>

            <div className="space-y-3">
              <Label>Preferred Dance Role</Label>
              <RadioGroup defaultValue="both" className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="leader" id="leader" />
                  <Label htmlFor="leader" className="flex items-center cursor-pointer">
                    <span className="mr-2 text-lg">🕺</span>
                    I primarily dance as a Leader
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="follower" id="follower" />
                  <Label htmlFor="follower" className="flex items-center cursor-pointer">
                    <span className="mr-2 text-lg">💃</span>
                    I primarily dance as a Follower
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both" className="flex items-center cursor-pointer">
                    <span className="mr-2 text-lg">🕺💃</span>
                    I dance both roles regularly
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Dance Experience</Label>
              <RadioGroup defaultValue="intermediate" className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="cursor-pointer">
                    Beginner (0-1 years)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="cursor-pointer">
                    Intermediate (1-3 years)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="cursor-pointer">
                    Advanced (3+ years)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="marketing" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="marketing" className="font-medium cursor-pointer">
                  Marketing communications
                </Label>
                <p className="text-sm text-gray-500">
                  Receive updates about Herräng Dance Camp events and news
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="terms" className="font-medium cursor-pointer">
                  Terms and Conditions
                </Label>
                <p className="text-sm text-gray-500">
                  I agree to the <Link href="#" className="text-herrang-blue underline">Terms of Service</Link> and <Link href="#" className="text-herrang-blue underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full herrang-btn-green">Create Account</Button>
            <p className="text-sm text-center">
              Already have an account? <Link href="/login" className="text-herrang-blue hover:underline">Sign in</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
