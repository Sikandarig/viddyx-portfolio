import { Instagram, Linkedin } from "lucide-react";
import BrandMark from "./BrandMark";

function YouTubeBrandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      role="img"
      aria-labelledby="youtube-brand-title"
      className="block h-8 w-8"
    >
      <title id="youtube-brand-title">YouTube</title>
      <path
        fill="#FF0000"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"
      />
      <path fill="#FFFFFF" d="M9.545 15.568 15.818 12 9.545 8.432v7.136Z" />
    </svg>
  );
}

export default function Footer() {
  const companyLinks = [
    { label: "About Us", href: "#social-proof" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#cta" },
    { label: "Blog", href: "#" },
  ];

  const serviceLinks = [
    { label: "YouTube Videos", href: "#services" },
    { label: "Short Form Content", href: "#services" },
    { label: "Podcast Editing", href: "#services" },
    { label: "Ad Creatives", href: "#services" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/sikandarkhan2677/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/m-sikandar/", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <BrandMark className="mb-4" />
            <p className="text-gray-400 leading-relaxed max-w-md">
              We create stunning video content that elevates brands and drives real results. Your vision, our expertise.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid={`footer-company-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid={`footer-service-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid={`footer-legal-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2025 ZELWICK. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
            <a
              href="https://www.youtube.com/@sikvideoeditor/videos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              data-testid="social-youtube"
              className="inline-flex min-h-8 min-w-8 items-center justify-center"
            >
              <YouTubeBrandIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
