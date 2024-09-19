"use client";
import { Button } from "@src/components/ui/button";
import { Card, CardContent } from "@src/components/ui/card";
import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BikeEventPage() {
  return (
    <div className="min-h-screen bg-bg text-text_dark ">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1639927674259-c61e1538548b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bike Event Hero"
          layout="fill"
          objectFit="cover"
          className="brightness-50 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-primary_light ">
            BikeFest 2023
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            The Ultimate Mountain Biking Experience
          </p>
          <Button size="lg" className="bg-primary text-white">
            Get Tickets
          </Button>
        </div>
      </section>

      {/* Event Overview */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-16  text-center">
            <div>
              <CalendarIcon className="h-8 w-8 mx-auto mb-2" />
              <p className="font-bold">September 15-17, 2023</p>
            </div>
            <div>
              <MapPinIcon className="h-8 w-8 mx-auto mb-2" />
              <p className="font-bold">Whistler Mountain, BC</p>
            </div>
            <div>
              <UserIcon className="h-8 w-8 mx-auto mb-2" />
              <p className="font-bold">50+ Pro Riders</p>
            </div>
            <div>
              <ClockIcon className="h-8 w-8 mx-auto mb-2" />
              <p className="font-bold">3 Days of Action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Downhill Race",
                description:
                  "Experience heart-pounding action on our expert-level course",
              },
              {
                title: "Freestyle Competition",
                description: "Watch pros defy gravity with jaw-dropping tricks",
              },
              {
                title: "Enduro Challenge",
                description:
                  "Test your skills and endurance on our multi-stage trail",
              },
            ].map((highlight, index) => (
              <Card key={index} className="bg-gray-800 border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 border-b border-b-gray-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Action Shots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Image
                key={num}
                src={`https://images.unsplash.com/photo-1435244837924-21c508f9db25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt={`Gallery Image ${num}`}
                width={500}
                height={500}
                className="rounded-lg hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rider Profiles */}
      <section className="py-16 border-b border-b-gray-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Riders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rider",
                specialty: "Downhill Specialist",
                image:
                  "https://images.unsplash.com/photo-1611004061262-3a925aa7fc31?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Sam Speed",
                specialty: "Freestyle Champion",
                image:
                  "https://plus.unsplash.com/premium_photo-1697968233472-72ec2a8466b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Max Air",
                specialty: "Enduro Expert",
                image:
                  "https://images.unsplash.com/photo-1516968527147-69393e550fea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((rider, index) => (
              <Card
                key={index}
                className="bg-white shadow-xl border-none overflow-hidden"
              >
                <Image
                  src={rider.image}
                  alt={rider.name}
                  width={300}
                  height={300}
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">{rider.name}</h3>
                  <p className="text-text_para">{rider.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 border-b border-b-gray-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Event Schedule
          </h2>
          <div className="space-y-8">
            {[
              {
                day: "Day 1",
                events: [
                  { time: "9:00 AM", title: "Registration Opens" },
                  { time: "11:00 AM", title: "Qualifying Rounds - Downhill" },
                  { time: "2:00 PM", title: "Freestyle Exhibition" },
                ],
              },
              {
                day: "Day 2",
                events: [
                  { time: "10:00 AM", title: "Enduro Challenge Begins" },
                  { time: "1:00 PM", title: "Downhill Finals" },
                  { time: "4:00 PM", title: "Awards Ceremony" },
                ],
              },
              {
                day: "Day 3",
                events: [
                  { time: "9:00 AM", title: "Amateur Competition" },
                  { time: "12:00 PM", title: "Pro Rider Showcase" },
                  { time: "3:00 PM", title: "Closing Ceremony" },
                ],
              },
            ].map((day, index) => (
              <Card
                key={index}
                className="bg-white shadow-xl border-none w-[80%] mx-auto"
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{day.day}</h3>
                  <ul className="space-y-2">
                    {day.events.map((event, eventIndex) => (
                      <li
                        key={eventIndex}
                        className="flex items-center space-x-3"
                      >
                        <ClockIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{event.time}</span>
                        <span className="text-text_para">{event.title}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 border-b border-b-gray-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Event Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.6844332823816!2d-122.95750678439788!3d50.11616397943201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54873cb203957b87%3A0x4ab741e875f5cff6!2sWhistler%20Mountain%20Bike%20Park!5e0!3m2!1sen!2sus!4v1621436361526!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <MapPinIcon className="h-6 w-6 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>
                    Tech Convention Center, 123 Innovation Ave, San Francisco,
                    CA 94105
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Join us for TechConf 2023, the premier gathering for technology
                enthusiasts, innovators, and industry leaders. Explore
                cutting-edge technologies, network with peers, and gain insights
                from world-renowned experts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="flex justify-center bg-gray-800 p-3 rounded-lg"
              >
                <Image
                  src="/images/Logo2.png"
                  alt={`Sponsor ${num}`}
                  width={200}
                  height={100}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FF5810] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for the Ride of Your Life?
          </h2>
          <p className="text-xl mb-8">
            Don't miss out on BikeFest 2023. Get your tickets now!
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Register Now
          </Button>
        </div>
      </section>
    </div>
  );
}
