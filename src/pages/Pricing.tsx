import { SectionWrapper } from "../components/SectionWrapper";
import { PricingCard } from "../components/PricingCard";
import { pricingTiers } from "../data/content";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";

export function Pricing() {
  return (
    <div className="bg-white pt-24">
      <SEO 
        title="Pricing" 
        description="Simple, transparent pricing. No hidden fees, no surprise charges. Pay only for what you use with PayFlow." 
      />
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing that scales with you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, transparent pricing. No hidden fees, no surprise charges. Pay only for what you use.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8">
          {pricingTiers.map((tier) => (
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

      {/* FAQ Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a different question and can't find the answer you're looking for? Reach out to our support team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 sm:space-y-0">
            {[
              {
                q: "What's the best thing about PayFlow?",
                a: "Our API is designed by developers, for developers. It's clean, consistent, and easy to use.",
              },
              {
                q: "Do you offer custom pricing?",
                a: "Yes, for businesses processing over $100,000 per month, we offer custom volume-based pricing.",
              },
              {
                q: "How long do payouts take?",
                a: "Standard payouts take 2-3 business days. Instant payouts are available for eligible businesses.",
              },
              {
                q: "Is there a setup fee?",
                a: "No, there are no setup fees, monthly fees, or hidden costs. You only pay when you process a transaction.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.q}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      <CtaSection />
    </div>
  );
}
