import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (hash: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(hash);
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <footer className="bg-nancy-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo-icon.svg`} alt="Nancy The Health Coach" className="h-10 w-10" loading="lazy" />
              <span className="font-display font-bold text-xl">
                Nancy<span className="text-nancy-teal">TheHealthCoach</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Brain health coaching for busy professionals. Helping you reclaim focus, energy,
              and clarity through science-backed nutrition strategies.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              San Diego, CA &mdash; Virtual sessions available nationwide
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nancy-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-nancy-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-nancy-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-nancy-gold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-nancy-teal transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-nancy-teal transition-colors">About Nancy</a></li>
              <li><a href="#services" className="hover:text-nancy-teal transition-colors">Services & Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-nancy-teal transition-colors">Testimonials</a></li>
              <li>
                <a
                  href="#blog-page"
                  onClick={(e) => handleNavClick(e, '#blog-page')}
                  className="hover:text-nancy-teal transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#starter-kit"
                  onClick={(e) => handleNavClick(e, '#starter-kit')}
                  className="hover:text-nancy-teal transition-colors"
                >
                  Free Starter Kit
                </a>
              </li>
              <li><a href="#faq" className="hover:text-nancy-teal transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-nancy-gold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400 text-sm mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-nancy-teal" />
                <span>nancythehealthcoach@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
              <img src={`${import.meta.env.BASE_URL}amen-badge.png`} alt="Certified Elite Brain Health Clinician - Amen University" className="h-12 w-12 flex-shrink-0" loading="lazy" />
              <div>
                <p className="text-xs font-semibold text-white">Amen University</p>
                <p className="text-[11px] text-gray-400">Certified Elite Brain Health Coach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Nancy Ryan. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-nancy-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-nancy-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
