import Image from "next/image"
import { ChevronRight, Check, Zap, Shield, Cpu, DollarSign, Target, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AIScanner() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header-ai-scanner.jpeg"
            alt="IUNA AI Scanner - Automated visual inspection system"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            IUNA AI Scanner
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
            Automated visual inspection for your production
          </p>
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="group">
              Request Demo
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            The intelligent camera system for your quality assurance
          </h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-600">
            <p>
              With the IUNA AI Scanner, we offer you a system that can be used flexibly in quality assurance. Each AI
              scanner is individually configured for your manufacturing process. By optimally coordinating software and
              hardware, we maximize the reliability of the inspection.
            </p>
            <p>
              For our AI Scanner, we combine high-resolution industrial cameras and customized AI models. This allows us
              to offer you automated testing with maximum precision.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Application */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Areas of Application</h2>
              <p className="text-lg text-gray-600 mb-6">
                With the AI Scanner you can automate various testing and inspection processes:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Presence check</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Product feature inspection</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Surface inspection</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Optical character recognition (OCR)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Completeness check</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ai-scanner-interface.png"
                alt="IUNA AI Scanner - Quality control interface showing inspection results"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* System Components Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Modular design for maximum flexibility</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our system consists of three main components that work together seamlessly
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Industry Camera */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/high-res-industrial-camera.webp"
                  alt="High-resolution industrial camera for AI Scanner"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Camera</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">One or more high-resolution industrial cameras</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Customized lighting design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Can be integrated into existing production</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Software */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/ai-scanner-software.png"
                  alt="IUNA AI Vision Software interface"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vision Software</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Easy-to-use user interface</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Real-time visualization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">AI-supported</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Station */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/ai-station.jpeg"
                  alt="IUNA AI Station for automated visual inspection"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Box</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Small and efficient AI computer designed for image processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Robust and reliable</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">
                      Compatible with common interfaces (PROFINET, ProfiBus, digital IOs,...)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Automation without limits</h2>
            <p className="mt-4 text-lg text-gray-600">
              The IUNA AI Scanner offers numerous advantages for your production
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simple</h3>
              <p className="text-gray-600">
                The user interface of our inspection software can be set up without any expert knowledge and with a few
                clicks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent</h3>
              <p className="text-gray-600">
                For our software, we combine the latest methods and AI models, for maximum of accuracy and flexibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe</h3>
              <p className="text-gray-600">
                The security of your data is our top priority. All data processing runs locally or via an encrypted
                cloud system.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost efficient</h3>
              <p className="text-gray-600">
                With the AI Scanner you save working time and money. At the same time, costs are predictable and
                amortize early.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Powerful</h3>
              <p className="text-gray-600">
                Due to Muti-GPU processing the AI Scanner can process large amounts of data very fast and comply short
                cycle times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precise</h3>
              <p className="text-gray-600">
                By selecting the hardware individually, we maximize the reliability of the test according to your use
                case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The four steps to autonomous inspection</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our proven implementation process ensures a smooth integration of the IUNA AI Scanner into your production
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Evaluation of Use Case</h3>
              <p className="text-gray-600">
                Contact us. Together, we will check your use case and the implementation options. After that we will
                select the required hardware components.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System installation</h3>
              <p className="text-gray-600">
                We integrate the camera, light module and AI box into your production process and install our AI vision
                software.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Labeling</h3>
              <p className="text-gray-600">
                The first image data is used to teach the AI inspection software. Even a small amount of images is
                sufficient for this.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous inspection</h3>
              <p className="text-gray-600">
                From now on, the AI Scanner takes over your inspection fully automatically. With the help of the user
                interface with statistics function, you get full transparency about your quality level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to automate your quality control?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Contact our team to schedule a personalized demonstration of the IUNA AI Scanner.
            </p>
            <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary">
                Schedule Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

