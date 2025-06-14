import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Facebook,
  Instagram,
  MapPin,
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
} from 'lucide-react';
import { CountdownTimer } from '@/components/countdown-timer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NumberTicker } from '@/components/magicui/number-ticker';
import Disney from '@/components/icons/DisneyIcon';
import Google from '@/components/icons/GoogleIcon';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
        <div className="container flex h-16 items-center justify-between max-w-7xl px-10">
          <div className="flex items-center gap-2">
            <Link href="#top">
              <Image
                src="/logo.jpg"
                alt="Hash House Harriers Logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Gallery
            </Link>
            <Link
              href="#venue"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Venue
            </Link>
            <Link
              href="#packages"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Packages
            </Link>
            <Link
              href="#sponsors"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sponsors
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              href="#register"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Register
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#register">Register Now</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/10 to-background flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-7xl">
                  Hash House Harriers{' '}
                  <NumberTicker
                    value={2026}
                    startValue={2000}
                    className="whitespace-pre-wrap tracking-tighter text-black dark:text-white"
                    disableFormatting
                  />
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join the biggest running community event of the year.
                  Challenge yourself, connect with fellow runners, and celebrate
                  fitness together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#register">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#packages">View Packages</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">June 15, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Melaka, Malacca</span>
                </div>
              </div>
              <div className="mt-12 mb-6">
                <h3 className="text-2xl font-semibold mb-2">Event Countdown</h3>
                <CountdownTimer
                  targetDate={new Date('June 15, 2026 07:00:00')}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About The Event
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hash House Harriers is a bi-annual community running event
                  that brings together runners of all levels. From beginners to
                  professionals, everyone is welcome to join this celebration of
                  fitness and community spirit.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Multiple Race Categories
                      </h3>
                      <p className="text-muted-foreground">
                        Choose from 5K, 10K, half marathon, and full marathon
                        distances to match your fitness level.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Professional Timing</h3>
                      <p className="text-muted-foreground">
                        Get accurate race timing with our professional chip
                        timing system.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Community Experience
                      </h3>
                      <p className="text-muted-foreground">
                        Connect with fellow runners, join training groups, and
                        be part of a supportive community.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1524646349956-1590eacfa324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={600}
                  height={400}
                  alt="Runners at the starting line"
                  className="rounded-lg object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 md:shadow-xl">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">
                  <NumberTicker
                    value={1000}
                    startValue={80}
                    className="whitespace-pre-wrap tracking-tighter text-black dark:text-white"
                  />
                  + Participants
                </h3>
                <p className="text-center text-muted-foreground">
                  Join runners from across the country
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 md:shadow-xl">
                <MapPin className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Scenic Routes</h3>
                <p className="text-center text-muted-foreground">
                  Beautiful city and park views
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 md:shadow-xl">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">All Day Event</h3>
                <p className="text-center text-muted-foreground">
                  Activities from 7 AM to 5 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
        >
          <div className="container px-4 md:px-6 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Event Gallery
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Highlights from our previous running events
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Image
                src="/hash.jpg"
                width={400}
                height={300}
                alt="Runners crossing finish line"
                className="aspect-video rounded-lg object-cover shadow-xl drop-shadow-2xl"
              />
              <Image
                src="/hash2.jpg"
                width={400}
                height={300}
                alt="Marathon participants"
                className="aspect-video rounded-lg object-cover shadow-xl drop-shadow-2xl"
              />
              <Image
                src="/hash3.jpg"
                width={400}
                height={300}
                alt="Award ceremony"
                className="aspect-video rounded-lg object-cover shadow-xl drop-shadow-2xl"
              />
              <Image
                src="/hash4.jpg"
                width={400}
                height={300}
                alt="Runners with medals"
                className="aspect-video rounded-lg object-cover shadow-xl drop-shadow-2xl"
              />
              <Image
                src="/hash5.jpg"
                width={400}
                height={300}
                alt="Community running group"
                className="aspect-video rounded-lg object-cover shadow-xl drop-shadow-2xl"
              />
              <Image
                src="/hash6.jpg"
                width={400}
                height={300}
                alt="Event preparation"
                className="aspect-video rounded-lg object-cover shadow-xl drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section
          id="venue"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Event Venue
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Melaka, Malacca - The perfect location for our running
                  community event
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/melaka.jpg"
                  width={600}
                  height={400}
                  alt="Central Park venue"
                  className="rounded-lg object-cover drop-shadow-2xl md:shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex flex-col items-center md:grid gap-2">
                  <h3 className="text-xl font-bold">Location Details</h3>
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Melaka, Malacca</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>June 15, 2025</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Starting at 7:00 AM</span>
                    </li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Facilities</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Water Stations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Medical Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Changing Rooms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Bag Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Food Vendors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Restrooms</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages & Pricing Section */}
        <section
          id="packages"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Packages & Pricing
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the package that suits your running goals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* 5K Package */}
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">5K Run</h3>
                  <div className="text-4xl font-bold">
                    <span className="text-2xl font-bold">RM</span>100
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Perfect for beginners and casual runners
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Official race bib</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Finisher medal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Event T-shirt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Chip timing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Post-race refreshments</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button className="w-full" asChild>
                    <Link href="#register">Register Now</Link>
                  </Button>
                </div>
              </div>

              {/* 10K Package */}
              <div className="flex flex-col rounded-lg border bg-background p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  Popular
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">10K Run</h3>
                  <div className="text-4xl font-bold">
                    <span className="text-2xl font-bold">RM</span>150
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">
                  For intermediate runners looking for a challenge
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Official race bib</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Premium finisher medal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Technical running shirt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Chip timing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Post-race meal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Digital race photos</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button className="w-full" asChild>
                    <Link href="#register">Register Now</Link>
                  </Button>
                </div>
              </div>

              {/* Half Marathon Package */}
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Half Marathon</h3>
                  <div className="text-4xl font-bold">
                    <span className="text-2xl font-bold">RM</span>250
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">
                  For experienced runners seeking a greater challenge
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Official race bib</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Exclusive finisher medal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Premium technical shirt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Chip timing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Post-race meal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Digital race photos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Training plan access</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button className="w-full" asChild>
                    <Link href="#register">Register Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section
          id="sponsors"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Sponsors
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Thank you to our amazing sponsors who make this event possible
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-xl font-bold mb-6 text-center">
                Gold Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                <Disney className="size-24" />
                <Disney className="size-24" />
                <Disney className="size-24" />
              </div>

              <h3 className="text-xl font-bold mb-6 mt-12 text-center">
                Silver Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <Google className="size-24" />
                <Google className="size-24" />
                <Google className="size-24" />
                <Google className="size-24" />
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4">Become a Sponsor</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in sponsoring our event? Contact us for sponsorship
                  opportunities.
                </p>
                <Button variant="outline" asChild>
                  <Link href="mailto:sponsors@hashhouseharriers.com">
                    Contact for Sponsorship
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about Malacca Hash House Harriers
                  2026
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What time does the event start?
                  </AccordionTrigger>
                  <AccordionContent>
                    The event officially begins at 7:00 AM with the half
                    marathon start. The 10K race starts at 8:00 AM, and the 5K
                    race starts at 9:00 AM. We recommend arriving at least 60
                    minutes before your race start time to collect your race
                    packet, warm up, and find your starting position.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do I register for the event?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can register for Hash House Harriers 2026 by filling out
                    the registration form on this website. Scroll down to the
                    Register Now section or click the Register Now button in
                    the navigation menu. You will need to provide your personal
                    details, select your race package, and complete the payment
                    process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What is included in the registration fee?
                  </AccordionTrigger>
                  <AccordionContent>
                    Your registration fee includes an official race bib with
                    timing chip, a finisher medal, an event T-shirt, access to
                    water stations and medical support during the race,
                    post-race refreshments, and entry to the post-race
                    celebration. Depending on your package, you may also receive
                    additional benefits like digital race photos and training
                    plans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    What is the refund policy?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a 100% refund if you cancel 90 days before the
                    event, a 50% refund if you cancel 60 days before the event,
                    and a 25% refund if you cancel 30 days before the event. No
                    refunds are available for cancellations less than 30 days
                    before the event. All refund requests must be sent to
                    refunds@hashhouseharriers.com.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Where can I pick up my race packet?
                  </AccordionTrigger>
                  <AccordionContent>
                    Race packet pickup will be available at the Central Park
                    Visitor Center on June 13-14, 2025 (two days before the
                    event) from 10:00 AM to 7:00 PM. Limited race-day pickup
                    will be available from 5:30 AM to 8:30 AM, but we strongly
                    encourage participants to pick up their packets in advance
                    to avoid race-day stress.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Still have questions?
                </p>
                <Button variant="outline" asChild>
                  <Link href="mailto:info@hashhouseharriers.com">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section
          id="register"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Register Now
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Secure your spot in Hash House Harriers 2026
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg space-y-6 py-12">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="package"
                    className="text-sm font-medium leading-none"
                  >
                    Select Package
                  </label>
                  <Select>
                    <SelectTrigger id="package">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k">5K Run - $30</SelectItem>
                      <SelectItem value="10k">10K Run - $45</SelectItem>
                      <SelectItem value="half">Half Marathon - $65</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="tshirt"
                    className="text-sm font-medium leading-none"
                  >
                    T-Shirt Size
                  </label>
                  <Select>
                    <SelectTrigger id="tshirt">
                      <SelectValue placeholder="Select your size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="xxl">XXL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Special Requests or Questions
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Any special requests or questions?"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Complete Registration
                </Button>
              </form>
              <div className="text-center text-sm text-muted-foreground">
                <p>By registering, you agree to our terms and conditions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="flex flex-col items-center justify-center gap-4 py-10 md:py-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-18">
            <div className='flex flex-col items-center md:items-start text-center'>
              <h3 className="text-2xl font-bold pb-2">Stay Connected</h3>
              <p className="py-2">
                Follow us on social media for updates and community highlights!
              </p>
              <div className="flex gap-4 py-3">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Facebook className="h-8 w-8" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="h-8 w-8" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="md:pl-10 flex flex-col items-center md:items-start text-center">
              <h3 className="text-2xl font-bold pb-2">Contact Us</h3>

              <div className="flex flex-col gap-4 py-3">
                <Link
                  href="mailto:info@hashhouseharriers.com"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4"
                >
                  <Mail className="h-7 w-7" />
                  <span className="sr-only">Email</span>
                  info@hashhouseharriers.com
                </Link>
                <Link
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4"
                >
                  <Phone className="h-7 w-7" />
                  <span className="sr-only">Phone</span>
                  +60 12-345-6789
                </Link>
              </div>
            </div>
          </div>
          <span className="h-0.5 w-full max-w-6xl bg-gray-200"></span>
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Hash House Harriers. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
