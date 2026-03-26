import { SectionWrapper } from "../components/SectionWrapper";
import { FeatureCard } from "../components/FeatureCard";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";
import { features } from "../data/content";

export function Features() {
  return (
    <div className="bg-white pt-24">
      <SEO 
        title="Features" 
        description="Explore the powerful features of PayFlow. Everything you need to scale your business and accept payments globally." 
      />
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to scale your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            PayFlow is built with the most advanced technology stack to ensure reliability, security, and speed. We handle the complexity of payments so you can focus on your product.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.name} 
                name={feature.name}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </dl>
        </div>
      </SectionWrapper>

      <SectionWrapper dark className="bg-gray-900">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Security First
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bank-grade security built-in
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are PCI-DSS Level 1 certified. Our infrastructure is designed from the ground up to protect your data and your customers' sensitive information.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                title: "Data Encryption",
                desc: "All data is encrypted at rest and in transit using AES-256 and TLS 1.3.",
              },
              {
                title: "Fraud Prevention",
                desc: "Advanced machine learning models analyze every transaction in real-time.",
              },
              {
                title: "Compliance",
                desc: "Fully compliant with GDPR, CCPA, and global financial regulations.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CtaSection />
    </div>
  );
}
