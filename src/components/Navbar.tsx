import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (target: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '' },
    { label: 'About', href: '#about' },
    { label: 'Quiz', href: '#quiz' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: 'blog' },
  ];

  const getFullHref = (href: string) => {
    if (href.startsWith('#')) return href;
    return `${import.meta.env.BASE_URL}${href}`;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) {
      // Path navigation (blog, home)
      e.preventDefault();
      onNavigate?.(href);
    } else {
      // Section anchor — only intercept on subpages
      const base = import.meta.env.BASE_URL;
      const relative = window.location.pathname.startsWith(base)
        ? window.location.pathname.slice(base.length).replace(/\/$/, '')
        : '';
      if (relative !== '') {
        e.preventDefault();
        onNavigate?.(href);
      }
      // On homepage, let default anchor behavior handle scroll
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href={import.meta.env.BASE_URL}
            onClick={(e) => { e.preventDefault(); onNavigate?.(''); }}
            className="flex items-center space-x-2 min-w-0"
          >
            <img src={`${import.meta.env.BASE_URL}logo-icon.svg`} alt="Nancy The Health Coach" className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10" />
            <span className="font-display font-bold text-base sm:text-lg md:text-xl text-nancy-charcoal truncate">
              Nancy<span className="text-nancy-teal">TheHealthCoach</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={getFullHref(link.href)}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-nancy-teal ${
                  scrolled ? 'text-nancy-charcoal' : 'text-nancy-charcoal'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/nancythehealthcoach-1/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Book Free Consultation
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-nancy-charcoal"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={getFullHref(link.href)}
                onClick={(e) => {
                  handleClick(e, link.href);
                  setIsOpen(false);
                }}
                className="block text-nancy-charcoal hover:text-nancy-teal font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/nancythehealthcoach-1/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center mt-4"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
