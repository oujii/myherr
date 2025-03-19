import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Book Course - Herräng Dance Camp',
  description: 'Book your course at Herräng Dance Camp',
};
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

// This would come from an API in a real application
const courses = [
  {
    id: 1,
    title: "Lindy Hop BI",
    level: "Beginner-Intermediate",
    description: "Perfect for dancers who have a basic understanding of Lindy Hop fundamentals.",
    week: 1,
    availability: {
      leader: 8,
      follower: 5
    },
    price: 6500,
  },
  {
    id: 2,
    title: "Lindy Hop IA/AD",
    level: "Intermediate-Advanced",
    description: "For experienced dancers looking to refine their technique and add complexity.",
    week: 1,
    availability: {
      leader: 6,
      follower: 4
    },
    price: 6500,
  },
  {
    id: 3,
    title: "Lindy Hop IN",
    level: "Intermediate",
    description: "A solid grasp of Lindy Hop fundamentals and ready to take their dancing to the next level.",
    week: 1,
    availability: {
      leader: 10,
      follower: 10
    },
    price: 6500,
  },
  {
    id: 4,
    title: "Solo Jazz BI",
    level: "Beginner-Intermediate",
    description: "Learn the fundamentals of solo jazz movement and basic jazz steps.",
    week: 1,
    availability: {
      leader: 15,
      follower: 15
    },
    price: 6500,
  },
  {
    id: 5,
    title: "Solo Jazz IN",
    level: "Intermediate",
    description: "Expand your solo jazz vocabulary and work on your improvisation skills.",
    week: 1,
    availability: {
      leader: 12,
      follower: 12
    },
    price: 6500,
  },
  {
    id: 6,
    title: "3 in 1",
    level: "Mixed Level",
    description: "Dive into Lindy Hop, Tap, and Solo Jazz with this unique program.",
    week: 1,
    availability: {
      leader: 20,
      follower: 20
    },
    price: 6500,
  },
  // Week 2 courses
  {
    id: 7,
    title: "Lindy Hop BI",
    level: "Beginner-Intermediate",
    description: "Perfect for dancers who have a basic understanding of Lindy Hop fundamentals.",
    week: 2,
    availability: {
      leader: 8,
      follower: 5
    },
    price: 6500,
  },
  {
    id: 8,
    title: "Balboa BI-IN",
    level: "Beginner-Intermediate to Intermediate",
    description: "Learn the fundamentals of Balboa, a partner dance that evolved along with swing music.",
    week: 2,
    availability: {
      leader: 10,
      follower: 8
    },
    price: 6500,
  },
  {
    id: 9,
    title: "Solo Jazz IA-AD",
    level: "Intermediate-Advanced",
    description: "Advanced solo jazz techniques and improvisation for experienced dancers.",
    week: 2,
    availability: {
      leader: 6,
      follower: 6
    },
    price: 6500,
  },
  // Week 3 courses
  {
    id: 10,
    title: "Lindy Hop IA/AD",
    level: "Intermediate-Advanced",
    description: "For experienced dancers looking to refine their technique and add complexity.",
    week: 3,
    availability: {
      leader: 4,
      follower: 2
    },
    price: 6500,
  },
  {
    id: 11,
    title: "Tap BI",
    level: "Beginner-Intermediate",
    description: "Learn the basics of tap dancing and develop rhythm and musicality.",
    week: 3,
    availability: {
      leader: 15,
      follower: 15
    },
    price: 6500,
  },
  {
    id: 12,
    title: "Chorus Line Half Time",
    level: "Intermediate to Advanced",
    description: "Step into the legacy of the great African American chorus lines.",
    week: 3,
    availability: {
      leader: 8,
      follower: 8
    },
    price: 4800,
  },
  // Week 4 courses
  {
    id: 13,
    title: "Lindy Hop IN",
    level: "Intermediate",
    description: "A solid grasp of Lindy Hop fundamentals and ready to take their dancing to the next level.",
    week: 4,
    availability: {
      leader: 5,
      follower: 3
    },
    price: 6500,
  },
  {
    id: 14,
    title: "Solo Jazz IA-AD",
    level: "Intermediate-Advanced",
    description: "Advanced solo jazz techniques and improvisation for experienced dancers.",
    week: 4,
    availability: {
      leader: 7,
      follower: 7
    },
    price: 6500,
  },
  {
    id: 15,
    title: "The Xperience Track",
    level: "Open Level",
    description: "A unique immersive experience combining various dance styles and cultural elements.",
    week: 4,
    availability: {
      leader: 20,
      follower: 20
    },
    price: 6500,
  },
];

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

export default function BookPage({ params }: { params: { id: string } }) {
  const courseId = Number(params.id);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    notFound();
    return null;
  }

  const weekColor = getWeekColor(course.week);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/courses" className="text-herrang-dark flex items-center mb-6 hover:underline">
        <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Courses
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">Book Course</h1>
          <p className="text-gray-600 mb-8">Complete your booking for Week {course.week}</p>

          <Card className="mb-8 overflow-hidden border-t-4" style={{ borderTopColor: weekColor }}>
            <CardHeader>
              <CardTitle className="text-2xl">{course.title}</CardTitle>
              <CardDescription>Week {course.week}: {getWeekDates(course.week)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">Level: {course.level}</p>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex gap-4 items-center p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="text-sm font-medium">Availability:</p>
                  <div className="flex gap-4 mt-1">
                    <span className="text-sm">🕺 Leaders: {course.availability.leader}</span>
                    <span className="text-sm">💃 Followers: {course.availability.follower}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Choose Your Role</CardTitle>
              <CardDescription>Please select whether you will dance as a leader or follower in this course</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="leader" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="leader" id="leader" />
                  <Label htmlFor="leader" className="flex items-center cursor-pointer">
                    <span className="mr-2 text-lg">🕺</span>
                    Leader
                    <span className="ml-2 text-sm text-gray-500">({course.availability.leader} spots available)</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="follower" id="follower" />
                  <Label htmlFor="follower" className="flex items-center cursor-pointer">
                    <span className="mr-2 text-lg">💃</span>
                    Follower
                    <span className="ml-2 text-sm text-gray-500">({course.availability.follower} spots available)</span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Additional Options</CardTitle>
              <CardDescription>Select any additional options for your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="accommodation" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="accommodation" className="font-medium cursor-pointer">
                    Add accommodation (Shared dormitory)
                  </Label>
                  <p className="text-sm text-gray-500">7 nights, shared room with 3-5 other dancers: 2,100 SEK</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="food" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="food" className="font-medium cursor-pointer">
                    Add meal package
                  </Label>
                  <p className="text-sm text-gray-500">7 days, breakfast, lunch and dinner: 2,800 SEK</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="t-shirt" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="t-shirt" className="font-medium cursor-pointer">
                    Herräng 2025 T-shirt
                  </Label>
                  <p className="text-sm text-gray-500">Limited edition camp t-shirt: 350 SEK</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="font-medium cursor-pointer">
                    I agree to the terms and conditions
                  </Label>
                  <p className="text-sm text-gray-500">
                    By booking this course, I agree to the <Link href="#" className="text-herrang-blue underline">Terms and Conditions</Link> and <Link href="#" className="text-herrang-blue underline">Code of Conduct</Link> of Herräng Dance Camp.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>{course.title}</span>
                <span>{course.price} SEK</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>{course.price} SEK</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full herrang-btn-green">Complete Booking</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function getWeekDates(week: number): string {
  switch (week) {
    case 1: return "5-11 July";
    case 2: return "12-18 July";
    case 3: return "19-25 July";
    case 4: return "26 July - 1 August";
    default: return "";
  }
}

function getWeekColor(week: number): string {
  switch (week) {
    case 1: return "#e3b152"; // Yellow
    case 2: return "#4f9eba"; // Blue
    case 3: return "#b42b3e"; // Red
    case 4: return "#e19cb9"; // Purple
    default: return "#000000";
  }
}
