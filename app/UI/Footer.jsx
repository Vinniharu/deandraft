"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this to your API
    // This is just a mock success for demonstration
    setSubscribeStatus("success");
    setEmail("");
    setTimeout(() => setSubscribeStatus(null), 3000);
  };

  const currentYear = new Date().getFullYear();

  // Navigation categories based on Navbar.jsx structure
  const footerLinks = {
    About: [
      { name: "Mission", path: "/about" },
      { name: "Vision", path: "/about#vision" },
      { name: "Team", path: "/about#team" },
      { name: "Boards", path: "/about#boards" },
    ],
    "Our Programs": [
      { name: "Education", path: "/programs/education" },
      { name: "Climate Action", path: "/programs/climate-action" },
      { name: "Democracy", path: "/programs/democracy" },
      { name: "Governance", path: "/programs/governance" },
    ],
    Resources: [
      { name: "Publications", path: "/publications" },
      { name: "Press", path: "/media/press" },
      { name: "Blog", path: "/media/blog" },
      { name: "Gallery", path: "/media/gallery" },
    ],
    "Get Involved": [
      { name: "Volunteer", path: "/volunteer" },
      { name: "Donate", path: "/donate" },
      { name: "Partner With Us", path: "/partner" },
      { name: "Contact Us", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 xl:gap-8">
          {/* Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/deanlogo.png"
                alt="DEAN Initiative Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-6">
              Empowering youth through digital skills development and advocacy
              for sustainable futures in Africa.
            </p>

            <div className="space-y-2">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3 text-[var(--dean-blue)] flex-shrink-0 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm leading-tight">
                  <span className="block font-medium">
                    Global Goals Community Center
                  </span>
                  <span className="block">No 1, Q Close, Phase 1,</span>
                  <span className="block">Opposite Obana Gwalagada,</span>
                  <span className="block">FCT, Abuja, Nigeria</span>
                </p>
              </div>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3 text-[var(--dean-blue)]"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                +234 810 123 4567
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3 text-[var(--dean-blue)]"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                info@dean.com.ng
              </p>
            </div>
          </div>

          {/* Footer Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-sm hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 text-[var(--dean-blue)]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            {/* <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-sm mb-4">
                            Subscribe to our newsletter for updates on our programs and initiatives.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full min-w-0 appearance-none rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-base text-white placeholder-gray-500 focus:border-[var(--dean-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--dean-blue)] sm:text-sm"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-[var(--dean-blue)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--dean-blue)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--dean-blue)] focus:ring-offset-2"
                            >
                                Subscribe
                            </button>
                            {subscribeStatus === 'success' && (
                                <p className="text-green-400 text-xs mt-2">Successfully subscribed! Thank you.</p>
                            )}
                        </form> */}

            {/* Social Media */}
            {/* <div className="mt-6">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                                Follow Us
                            </h3>
                            <div className="flex space-x-4">
                                {[
                                    { name: 'Facebook', icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' },
                                    { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.028 10.028 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z' },
                                    { name: 'Instagram', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' },
                                    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                                    { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                                ].map((item) => (
                                    <a
                                        key={item.name}
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d={item.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div> */}
          </div>
        </div>
        <p className="text-sm font-semibold text-[var(--dean-blue)] leading-6 italic">
          DEAN: Empowered Youths = Transformative Change!
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} DEAN Initiative. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
