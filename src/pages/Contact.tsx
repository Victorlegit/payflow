import { SectionWrapper } from "../components/SectionWrapper";
import { SEO } from "../components/SEO";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-white pt-24">
      <SEO 
        title="Contact Us" 
        description="Get in touch with PayFlow. Have questions about pricing, integration, or our features? Our team is here to help." 
      />
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Contact Us
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in touch
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions about pricing, integration, or our features? Our team is here to help.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Our Offices
              </h3>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                We have offices around the world to support our global customer base.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: MapPin, text: "123 Market St, San Francisco, CA 94105" },
                  { icon: Phone, text: "+1 (555) 123-4567" },
                  { icon: Mail, text: "support@payflow.com" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Send us a message
              </h3>
              {/* Mock Formspree/Tally iframe */}
              <div className="w-full h-[500px] border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-gray-500 mb-4">Contact form embedded here</p>
                  <p className="text-sm text-gray-400 max-w-sm mx-auto">
                    (In a real deployment, this would be an iframe from Tally, Jotform, or Formspree)
                  </p>
                  <form className="mt-6 text-left space-y-4 max-w-sm mx-auto">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="button" className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
