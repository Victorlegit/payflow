import { Hero } from "../components/Hero";
import { FeatureCard } from "../components/FeatureCard";
import { PricingCard } from "../components/PricingCard";
import { CtaSection } from "../components/CtaSection";
import { SectionWrapper } from "../components/SectionWrapper";
import { SEO } from "../components/SEO";
import { features, trustedCompanies, howItWorks, pricingTiers } from "../data/content";

export function Home() {
  return (
    <div className="bg-white">
      <SEO 
        title="Payment Gateway Platform" 
        description="Accept payments seamlessly across Africa with PayFlow. The complete financial infrastructure for the internet." 
      />
      <Hero />

      {/* Logo Cloud */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world's most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {trustedCompanies.map((company, index) => (
            <div
              key={company}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-xl font-bold text-gray-400">{company}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <SectionWrapper id="features" className="bg-gray-50">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to accept payments
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            PayFlow provides a complete toolkit for building your payment flow. From drop-in UI components to powerful APIs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.slice(0, 4).map((feature) => (
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

      {/* How it works */}
      <SectionWrapper id="how-it-works">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Simple integration
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How PayFlow works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get up and running in minutes, not months. Our developer-friendly approach makes integration a breeze.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="flex flex-col">
                <dt className="text-5xl font-bold text-gray-200 mb-4">{step.step}</dt>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      {/* Pricing Preview */}
      <SectionWrapper id="pricing" className="bg-gray-50">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            No hidden fees, no surprise charges. Pay only for what you use.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8">
          {pricingTiers.slice(0, 2).map((tier) => (
            <PricingCard 
              key={tier.name}
              name={tier.name}
              id={tier.id}
              href={tier.href}
              priceMonthly={tier.priceMonthly}
              description={tier.description}
              features={tier.features}
              mostPopular={tier.mostPopular}
            />
          ))}
        </div>
      </SectionWrapper>

      <CtaSection />
    </div>
  );
}
