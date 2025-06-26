
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" }
  ];

  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Order Online", href: "#order" },
    { name: "Our Story", href: "#story" },
    { name: "Visit Us", href: "#visit" },
    { name: "Reviews", href: "#reviews" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-damascus-burgundy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="script-text text-3xl font-bold text-damascus-gold mb-4">
              Damascus Delights
            </h3>
            <p className="arabic-accent text-damascus-cream mb-4 text-lg">
              حلويات دمشق
            </p>
            <p className="text-damascus-cream/80 leading-relaxed mb-6">
              Bringing the authentic flavors and warm hospitality of Syria to your table. 
              Every dish tells a story, every bite carries tradition, and every visit 
              feels like coming home.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="text-damascus-cream/80">
                📍 1234 Damascus Street, Little Syria District, Toronto
              </p>
              <p className="text-damascus-cream/80">
                📞 (416) 555-SYRIA
              </p>
              <p className="text-damascus-cream/80">
                ✉️ hello@damascusdelights.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="elegant-text text-lg font-semibold text-damascus-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-damascus-cream/80 hover:text-damascus-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="elegant-text text-lg font-semibold text-damascus-gold mb-4">
              Hours & Social
            </h4>
            
            <div className="mb-6">
              <p className="text-damascus-cream/80 text-sm mb-2">
                <strong>Wed-Fri:</strong> 11AM - 8PM
              </p>
              <p className="text-damascus-cream/80 text-sm mb-2">
                <strong>Saturday:</strong> 10AM - 9PM
              </p>
              <p className="text-damascus-cream/80 text-sm mb-2">
                <strong>Sunday:</strong> 12PM - 7PM
              </p>
              <p className="text-damascus-gold text-sm italic">
                Closed Mon-Tue
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="text-damascus-cream/80 hover:text-damascus-gold transition-colors text-lg"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-damascus-gold/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-damascus-cream/60 text-sm mb-4 md:mb-0">
              © {currentYear} Damascus Delights. All rights reserved. Made with ❤️ and tradition.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-damascus-cream/60 hover:text-damascus-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-damascus-cream/60 hover:text-damascus-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2 opacity-40">
              <div className="w-8 h-px bg-damascus-gold"></div>
              <div className="w-1 h-1 bg-damascus-gold rounded-full"></div>
              <div className="w-8 h-px bg-damascus-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
