import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

// Mock data for user information and bookings
const user = {
  name: "Anna Lindbäck",
  email: "anna.lindback@example.com",
  role: "Follower",
  experience: "Intermediate (1-3 years)"
};

const bookings = [
  {
    id: 123,
    courseId: 2,
    courseName: "Lindy Hop IA/AD",
    week: 1,
    dates: "5-11 July 2025",
    role: "Follower",
    price: 6500,
    extras: ["Accommodation", "Meal Package"],
    totalPrice: 11400,
    status: "Confirmed"
  },
  {
    id: 124,
    courseId: 14,
    courseName: "Solo Jazz IA-AD",
    week: 4,
    dates: "26 July - 1 August 2025",
    role: "Follower",
    price: 6500,
    extras: ["Accommodation"],
    totalPrice: 8600,
    status: "Confirmed"
  }
];

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">My Account</h1>
      <p className="text-gray-600 mb-8">Manage your profile and view your bookings</p>

      <Tabs defaultValue="bookings" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
          <TabsTrigger value="bookings">My Bookings</TabsTrigger>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="bookings" className="mt-0">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>

            {bookings.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {bookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">No bookings yet</h3>
                <p className="text-gray-600 mb-6">You haven't booked any courses for Herräng Dance Camp 2025</p>
                <Link href="/courses">
                  <Button className="herrang-btn-green">Browse Courses</Button>
                </Link>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="profile" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>Your personal information and dance preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-sm text-gray-500">Full Name</h3>
                      <p className="mt-1">{user.name}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-gray-500">Email Address</h3>
                      <p className="mt-1">{user.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-sm text-gray-500">Primary Dance Role</h3>
                      <p className="mt-1">{user.role}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-gray-500">Dance Experience</h3>
                      <p className="mt-1">{user.experience}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Edit Profile</Button>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Password & Security</CardTitle>
                  <CardDescription>Manage your account security settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h3 className="font-medium text-sm text-gray-500">Password</h3>
                    <p className="mt-1">••••••••••••</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Change Password</Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Book New Course
                  </Button>
                  <Button className="w-full" variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    View Camp Schedule
                  </Button>
                  <Button className="w-full" variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function BookingCard({ booking }: { booking: any }) {
  // Helper function to determine week color
  const getWeekColor = (week: number): string => {
    switch (week) {
      case 1: return "border-herrang-yellow bg-herrang-yellow/10";
      case 2: return "border-herrang-blue bg-herrang-blue/10";
      case 3: return "border-herrang-red bg-herrang-red/10";
      case 4: return "border-herrang-purple bg-herrang-purple/10";
      default: return "border-gray-200";
    }
  };

  return (
    <Card className={`border-l-4 ${getWeekColor(booking.week)}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{booking.courseName}</CardTitle>
            <CardDescription>Booking #{booking.id}</CardDescription>
          </div>
          <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {booking.status}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-sm text-gray-500">Week & Dates</h3>
            <p className="mt-1">Week {booking.week}: {booking.dates}</p>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-500">Dance Role</h3>
            <p className="mt-1">{booking.role}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-sm text-gray-500">Extras</h3>
          <ul className="mt-1 list-disc list-inside">
            {booking.extras.map((extra: string, i: number) => (
              <li key={i} className="text-gray-700">{extra}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <span className="font-medium">Total Price</span>
          <span className="font-bold text-lg">{booking.totalPrice} SEK</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Link href={`/bookings/${booking.id}`} className="flex-1">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
        <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">Cancel</Button>
      </CardFooter>
    </Card>
  );
}
