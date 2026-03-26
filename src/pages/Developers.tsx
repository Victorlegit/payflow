import { SectionWrapper } from "../components/SectionWrapper";
import { codeSnippet } from "../data/content";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";
import { Terminal, Code, BookOpen, Key } from "lucide-react";

export function Developers() {
  return (
    <div className="bg-white pt-24">
      <SEO 
        title="Developers" 
        description="A powerful, clean, and consistent API. Integrate PayFlow into your application in minutes, not months." 
      />
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            For Developers
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Built for developers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A powerful, clean, and consistent API. Integrate PayFlow into your application in minutes, not months.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Simple Integration
              </h3>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                Our APIs are designed to be intuitive and predictable. Whether you're building a simple checkout or a complex marketplace, PayFlow provides the tools you need.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: Code, text: "SDKs for Node.js, Python, Ruby, PHP, and more." },
                  { icon: Terminal, text: "Comprehensive CLI for testing and managing webhooks." },
                  { icon: BookOpen, text: "Detailed API reference and interactive guides." },
                  { icon: Key, text: "Test mode with simulated cards for safe development." },
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
            
            <div className="rounded-2xl bg-gray-900 p-8 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm font-mono text-gray-400">checkout.js</div>
              </div>
              <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CtaSection />
    </div>
  );
}
