import {
  ShieldCheck,
  Zap,
  Globe2,
  Code2,
  CreditCard,
  BarChart3,
  Smartphone,
  Lock,
} from "lucide-react";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Developers", href: "/developers" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const features = [
  {
    name: "Global Reach",
    description:
      "Accept payments from anywhere in the world with support for over 135 currencies and dozens of local payment methods.",
    icon: Globe2,
  },
  {
    name: "Lightning Fast",
    description:
      "Experience sub-second transaction processing times. Get your funds settled faster than ever before.",
    icon: Zap,
  },
  {
    name: "Bank-Grade Security",
    description:
      "PCI-DSS Level 1 certified. We use advanced machine learning to detect and prevent fraud in real-time.",
    icon: ShieldCheck,
  },
  {
    name: "Developer First",
    description:
      "Integrate in minutes with our robust APIs, comprehensive documentation, and SDKs for all major languages.",
    icon: Code2,
  },
  {
    name: "Smart Routing",
    description:
      "Automatically route transactions to the acquiring bank most likely to approve them, maximizing your success rate.",
    icon: CreditCard,
  },
  {
    name: "Real-time Analytics",
    description:
      "Gain deep insights into your business performance with our powerful, real-time reporting dashboard.",
    icon: BarChart3,
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "/contact",
    priceMonthly: "2.9%",
    description: "Perfect for new businesses just getting started.",
    features: [
      "Standard processing fees (+ 30¢ per transaction)",
      "Basic fraud protection",
      "Standard email support",
      "Hosted checkout pages",
      "Basic reporting",
    ],
    mostPopular: false,
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "/contact",
    priceMonthly: "2.5%",
    description: "Ideal for growing companies with higher volume.",
    features: [
      "Lower processing fees (+ 25¢ per transaction)",
      "Advanced ML fraud protection",
      "Priority 24/7 support",
      "Custom checkout integration",
      "Advanced analytics & reporting",
      "Multi-currency settlement",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "/contact",
    priceMonthly: "Custom",
    description: "Dedicated support and infrastructure for large scale.",
    features: [
      "Custom volume-based pricing",
      "Dedicated account manager",
      "Custom contract terms",
      "SLA guarantees",
      "White-glove onboarding",
      "Custom reporting & data exports",
    ],
    mostPopular: false,
  },
];

export const trustedCompanies = [
  "Acme Corp",
  "GlobalTech",
  "Nexus Industries",
  "Stark Enterprises",
  "Wayne Corp",
  "Cyberdyne",
];

export const howItWorks = [
  {
    step: "01",
    title: "Create an Account",
    description: "Sign up in minutes. No lengthy paperwork or setup fees required to get started.",
  },
  {
    step: "02",
    title: "Integrate the API",
    description: "Use our simple, well-documented APIs or drop-in UI components to connect your app.",
  },
  {
    step: "03",
    title: "Start Processing",
    description: "Begin accepting payments globally and watch your revenue grow in real-time.",
  },
];

export const codeSnippet = `// Initialize PayFlow
const payflow = new PayFlow('sk_test_12345');

// Create a payment intent
const paymentIntent = await payflow.paymentIntents.create({
  amount: 2000, // $20.00
  currency: 'usd',
  payment_method_types: ['card'],
  description: 'Premium Subscription',
});

// Confirm the payment
const result = await payflow.confirmPayment({
  clientSecret: paymentIntent.client_secret,
  paymentMethod: 'pm_card_visa',
});

if (result.status === 'succeeded') {
  console.log('Payment successful!');
}`;

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Cross-Border Payments in Africa",
    slug: "future-of-cross-border-payments",
    excerpt: "Explore how new technologies and regulatory frameworks are making it easier than ever to send money across borders in Africa.",
    date: "March 24, 2026",
    author: "Jane Doe",
    imageUrl: "https://picsum.photos/seed/africa/800/600",
    content: "Cross-border payments in Africa have historically been slow, expensive, and opaque. However, with the rise of mobile money, blockchain technology, and new regulatory frameworks like the Pan-African Payment and Settlement System (PAPSS), the landscape is rapidly changing. In this post, we explore the key drivers of this transformation and what it means for businesses operating on the continent. We'll look at how PayFlow is leveraging these advancements to provide seamless, instant settlement across multiple currencies, reducing the friction that has long hindered intra-African trade."
  },
  {
    id: 2,
    title: "Understanding PCI-DSS Compliance for Startups",
    slug: "understanding-pci-dss-compliance",
    excerpt: "A comprehensive guide to navigating Payment Card Industry Data Security Standard requirements for early-stage companies.",
    date: "March 18, 2026",
    author: "John Smith",
    imageUrl: "https://picsum.photos/seed/security/800/600",
    content: "For any startup handling credit card information, achieving and maintaining PCI-DSS compliance is a critical requirement. But the complex set of rules can be daunting for small teams. This guide breaks down the 12 core requirements of PCI-DSS into actionable steps. We also explain how using a payment gateway like PayFlow can significantly reduce your compliance burden by tokenizing sensitive data and keeping it off your servers entirely."
  },
  {
    id: 3,
    title: "How to Optimize Your Checkout Conversion Rate",
    slug: "optimize-checkout-conversion-rate",
    excerpt: "Learn the top 5 strategies to reduce cart abandonment and increase your revenue with a frictionless checkout experience.",
    date: "March 10, 2026",
    author: "Sarah Jenkins",
    imageUrl: "https://picsum.photos/seed/checkout/800/600",
    content: "Cart abandonment is a major challenge for e-commerce businesses, with average rates hovering around 70%. A clunky or confusing checkout process is often the culprit. In this article, we share five proven strategies to streamline your checkout flow, from offering guest checkout and local payment methods to optimizing for mobile devices and displaying clear trust signals. Discover how small tweaks to your payment UI can lead to significant gains in your bottom line."
  }
];
