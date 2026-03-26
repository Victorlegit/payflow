import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

interface PricingCardProps {
  key?: string | number;
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];
  mostPopular: boolean;
}

export function PricingCard({
  name,
  id,
  href,
  priceMonthly,
  description,
  features,
  mostPopular,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-8 ring-1 xl:p-10 transition-all duration-300 hover:shadow-xl",
        mostPopular
          ? "bg-gray-900 ring-gray-900 text-white"
          : "ring-gray-200 bg-white"
      )}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h3
          id={id}
          className={cn(
            "text-lg font-semibold leading-8",
            mostPopular ? "text-white" : "text-gray-900"
          )}
        >
          {name}
        </h3>
        {mostPopular ? (
          <p className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-400">
            Most popular
          </p>
        ) : null}
      </div>
      <p
        className={cn(
          "mt-4 text-sm leading-6",
          mostPopular ? "text-gray-300" : "text-gray-600"
        )}
      >
        {description}
      </p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span
          className={cn(
            "text-4xl font-bold tracking-tight",
            mostPopular ? "text-white" : "text-gray-900"
          )}
        >
          {priceMonthly}
        </span>
      </p>
      <Link
        to={href}
        aria-describedby={id}
        className={cn(
          "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors",
          mostPopular
            ? "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500"
            : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
        )}
      >
        Get started
      </Link>
      <ul
        role="list"
        className={cn(
          "mt-8 space-y-3 text-sm leading-6 xl:mt-10",
          mostPopular ? "text-gray-300" : "text-gray-600"
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <Check
              className={cn(
                "h-6 w-5 flex-none",
                mostPopular ? "text-white" : "text-indigo-600"
              )}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
