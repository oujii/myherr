import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-herrang-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Herräng Dance Camp Experience</h1>
            <p className="text-xl mb-8">Join us for four weeks of dances, stunning Swedish nature, and lifelong memories at the world-renowned Herräng Dance Camp</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button className="herrang-btn-green text-lg py-6 px-8">Browse Courses</Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg py-6 px-8">Register Account</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Dates */}
      <section className="py-12 bg-herrang-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Herräng Dance Camp 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WeekCard
              weekNum={1}
              dates="5-11 July"
              color="bg-herrang-yellow"
              courses={["Lindy Hop (All levels)", "Solo Jazz (BI & IN)", "3 in 1"]}
            />
            <WeekCard
              weekNum={2}
              dates="12-18 July"
              color="bg-herrang-blue"
              courses={["Lindy Hop (All levels)", "Balboa (All levels)", "Solo Jazz (IA-AD & IN)"]}
            />
            <WeekCard
              weekNum={3}
              dates="19-25 July"
              color="bg-herrang-red"
              courses={["Lindy Hop (All levels)", "Solo Jazz (BI & IN)", "Tap (BI)", "Chorus Line"]}
            />
            <WeekCard
              weekNum={4}
              dates="26 July - 1 August"
              color="bg-herrang-purple"
              courses={["Lindy Hop (All levels)", "Solo Jazz (All levels)", "Tap (IN-IA)", "Xperience Track"]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Book Through myHerräng?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Easy Registration"
              description="Create your dancer profile once and use it for all your bookings"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-herrang-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />
            <FeatureCard
              title="Seamless Course Booking"
              description="Browse and book courses for any week with real-time availability"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-herrang-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <FeatureCard
              title="Leader/Follower Balance"
              description="Specify your dance role to help us maintain the perfect balance in classes"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-herrang-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-herrang-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Dance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Register now to create your account and book your courses for Herräng Dance Camp 2025</p>
          <Link href="/register">
            <Button className="herrang-btn-green text-lg py-6 px-8">Get Started</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function WeekCard({ weekNum, dates, color, courses }: { weekNum: number, dates: string, color: string, courses: string[] }) {
  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <div className={`${color} p-4`}>
        <h3 className="text-2xl font-bold text-white">Week {weekNum}</h3>
        <p className="text-white/90 font-medium">{dates}</p>
      </div>
      <CardContent className="pt-6">
        <ul className="space-y-2">
          {courses.map((course, i) => (
            <li key={i} className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-herrang-green mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {course}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={`/courses?week=${weekNum}`} className="w-full">
          <Button className="w-full herrang-btn-outline">View Courses</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
