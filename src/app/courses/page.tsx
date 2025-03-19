import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

type CoursesPageProps = {
  params: {};
  searchParams: { week?: string };
}

export default function CoursesPage({ searchParams }: CoursesPageProps) {
  const initialTab = searchParams.week || "1";

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Courses</h1>
      <p className="text-gray-600 mb-8">Browse and book your courses for Herräng Dance Camp 2025</p>

      <Tabs defaultValue={initialTab} className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-3xl mb-8">
          <TabsTrigger value="1" className="data-[state=active]:bg-herrang-yellow data-[state=active]:text-white">Week 1</TabsTrigger>
          <TabsTrigger value="2" className="data-[state=active]:bg-herrang-blue data-[state=active]:text-white">Week 2</TabsTrigger>
          <TabsTrigger value="3" className="data-[state=active]:bg-herrang-red data-[state=active]:text-white">Week 3</TabsTrigger>
          <TabsTrigger value="4" className="data-[state=active]:bg-herrang-purple data-[state=active]:text-white">Week 4</TabsTrigger>
        </TabsList>

        {[1, 2, 3, 4].map((week) => (
          <TabsContent key={week} value={week.toString()} className="mt-0">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Week {week}: {getWeekDates(week)}</h2>
              <p className="text-gray-600">Select a course to book. Availability is shown for each role.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter(course => course.week === week)
                .map(course => (
                  <CourseCard key={course.id} course={course} weekColor={getWeekColor(week)} />
                ))
              }
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function CourseCard({ course, weekColor }: {
  course: {
    id: number;
    title: string;
    level: string;
    description: string;
    week: number;
    availability: { leader: number; follower: number };
    price: number;
  };
  weekColor: string;
}) {
  return (
    <Card className="overflow-hidden border-t-4" style={{ borderTopColor: weekColor }}>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>Level: {course.level}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
          <div>
            <p className="text-sm font-medium">Availability:</p>
            <div className="flex gap-4 mt-1">
              <span className="text-sm">🕺 Leaders: {course.availability.leader}</span>
              <span className="text-sm">💃 Followers: {course.availability.follower}</span>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold">{course.price} SEK</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/courses/${course.id}/book`} className="w-full">
          <Button className="w-full herrang-btn-green">Book Course</Button>
        </Link>
      </CardFooter>
    </Card>
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
