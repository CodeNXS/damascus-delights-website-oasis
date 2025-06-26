
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 damascus-pattern opacity-30"></div>
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-damascus-burgundy/20 via-transparent to-damascus-gold/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Arabic Calligraphy Accent */}
          <p className="arabic-accent text-damascus-gold text-2xl md:text-3xl mb-4">
            أهلاً وسهلاً
          </p>
          
          {/* Main Heading */}
          <h1 className="script-text text-5xl md:text-7xl lg:text-8xl font-bold text-damascus-burgundy mb-6">
            Damascus Delights
          </h1>
          
          {/* Subtitle */}
          <p className="elegant-text text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Authentic Syrian Sweets & Traditional Cuisine
            <br />
            <span className="text-lg md:text-xl text-damascus-gold">
              From the Heart of Damascus to Your Table
            </span>
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('menu')}
              size="lg"
              className="bg-damascus-burgundy hover:bg-damascus-deepRed text-white px-8 py-3 text-lg animate-scale-in"
            >
              Explore Our Menu
            </Button>
            <Button 
              onClick={() => scrollToSection('order')}
              variant="outline"
              size="lg"
              className="border-damascus-gold text-damascus-burgundy hover:bg-damascus-gold hover:text-white px-8 py-3 text-lg animate-scale-in"
            >
              Order Online
            </Button>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center items-center space-x-4 opacity-60">
            <div className="w-16 h-px bg-damascus-gold"></div>
            <div className="w-2 h-2 bg-damascus-gold rounded-full"></div>
            <div className="w-16 h-px bg-damascus-gold"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
