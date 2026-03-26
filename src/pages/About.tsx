import { SectionWrapper } from "../components/SectionWrapper";
import { CtaSection } from "../components/CtaSection";
import { SEO } from "../components/SEO";

export function About() {
  return (
    <div className="bg-white pt-24">
      <SEO 
        title="About Us" 
        description="Learn more about PayFlow. Our mission is to increase the GDP of the internet by removing the barriers to online commerce." 
      />
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            About Us
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our mission is to increase the GDP of the internet
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're building the financial infrastructure of the future. By removing the barriers to online commerce, we help more new businesses get started, expedite growth for existing companies, and increase economic output and trade globally.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                Founded in 2020, PayFlow started with a simple idea: accepting payments online should be as easy as sending an email. Today, we process billions of dollars a year for forward-thinking businesses around the world.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                We're a team of engineers, designers, and problem solvers who are passionate about building tools that empower entrepreneurs and businesses to succeed in the digital economy.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-100 p-8 shadow-xl ring-1 ring-gray-900/10">
              <img
                src="https://picsum.photos/seed/team/800/600"
                alt="Our team"
                className="rounded-xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="bg-gray-900" dark>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by businesses worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're proud to support a diverse community of businesses, from ambitious startups to global enterprises.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {[
              { id: 1, name: "Transactions processed", value: "1B+" },
              { id: 2, name: "Businesses supported", value: "100k+" },
              { id: 3, name: "Countries served", value: "135+" },
            ].map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
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
