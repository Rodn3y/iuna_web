import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-6 text-xl text-gray-300">
              Get in touch with our team to learn how our AI vision systems can transform your manufacturing processes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and one of our experts will get back to you within 24 hours.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <Input type="text" id="first-name" name="first-name" className="mt-1" required />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <Input type="text" id="last-name" name="last-name" className="mt-1" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <Input type="text" id="company" name="company" className="mt-1" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input type="email" id="email" name="email" className="mt-1" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Input type="tel" id="phone" name="phone" className="mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} className="mt-1" required />
                </div>

                <div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our team is ready to answer your questions and discuss how our AI vision systems can help your
                  business.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">Email</p>
                      <p className="mt-1 text-gray-600">contact@visionai.com</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">Phone</p>
                      <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">Office</p>
                      <p className="mt-1 text-gray-600">
                        123 Tech Park, Innovation Drive
                        <br />
                        San Francisco, CA 94043
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">Working Hours</p>
                      <p className="mt-1 text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-lg bg-gray-50 p-6">
                <h3 className="text-lg font-medium text-gray-900">Looking for a demo?</h3>
                <p className="mt-2 text-gray-600">
                  Schedule a personalized demonstration of our AI vision systems to see how they can benefit your
                  specific manufacturing processes.
                </p>
                <div className="mt-4">
                  <Button variant="outline" className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

