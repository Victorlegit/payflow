import { Link } from "react-router-dom";
import { CreditCard, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <CreditCard className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold tracking-tight text-white">
                PayFlow
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Making global payments seamless, secure, and fast for businesses of all sizes.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/features" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Payments
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Checkout
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Fraud Prevention
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/pricing" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/developers" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Contact Sales
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} PayFlow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
