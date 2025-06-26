
import { useState } from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-damascus-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="script-text text-3xl md:text-4xl font-bold text-damascus-burgundy">
              Damascus Delights
            </h1>
            <span className="arabic-accent text-damascus-gold ml-2 hidden md:inline">دمشق</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-damascus-burgundy transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="text-foreground hover:text-damascus-burgundy transition-colors"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-damascus-burgundy transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-damascus-burgundy transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('visit')}
              className="text-foreground hover:text-damascus-burgundy transition-colors"
            >
              Visit Us
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-damascus-burgundy hover:bg-damascus-deepRed text-white hidden md:flex"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Order Online
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-damascus-gold/20 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-damascus-burgundy transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('story')}
                className="text-left text-foreground hover:text-damascus-burgundy transition-colors py-2"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-left text-foreground hover:text-damascus-burgundy transition-colors py-2"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-foreground hover:text-damascus-burgundy transition-colors py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('visit')}
                className="text-left text-foreground hover:text-damascus-burgundy transition-colors py-2"
              >
                Visit Us
              </button>
              <Button 
                onClick={() => scrollToSection('order')}
                className="bg-damascus-burgundy hover:bg-damascus-deepRed text-white w-full mt-4"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Online
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
