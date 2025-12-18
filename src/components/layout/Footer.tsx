import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import companyLogo from "@/assets/company_logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={companyLogo} alt="Company Logo" className="w-8 h-8 rounded-lg object-cover" />
              <span className="font-semibold text-lg">PhotonFluxCapital</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              A leading quantitative and proprietary trading firm combining 
              cutting-edge technology with deep market expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "What We Do", path: "/what-we-do" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                      className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold mb-4">Careers</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Open Positions
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Life at PhotonFlux
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Finance District,<br />
                  Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@photonfluxcapital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} PhotonFluxCapital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacypolicy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
