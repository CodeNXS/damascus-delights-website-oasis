
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Visit = () => {
  const storeInfo = {
    address: "1234 Damascus Street, Little Syria District, Toronto, ON M5V 2A8",
    phone: "(416) 555-SYRIA",
    email: "hello@damascusdelights.com"
  };

  const hours = [
    { day: "Monday - Tuesday", hours: "Closed", special: true },
    { day: "Wednesday - Friday", hours: "11:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 7:00 PM" }
  ];

  return (
    <section id="visit" className="py-20 bg-damascus-cream/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="script-text text-4xl md:text-5xl font-bold text-damascus-burgundy mb-4">
            Visit Us
          </h2>
          <p className="arabic-accent text-damascus-gold text-xl mb-4">زورونا</p>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Step into our warm and welcoming space where the aromas of Damascus 
            fill the air and every visit feels like coming home.
          </p>
          <div className="w-24 h-1 bg-damascus-gold mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Store Information */}
            <div className="space-y-8">
              {/* Address & Contact */}
              <Card className="p-6 border-damascus-gold/20">
                <h3 className="elegant-text text-2xl font-bold text-damascus-burgundy mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-damascus-gold" />
                  Location & Contact
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Address:</p>
                    <p className="text-foreground/70">{storeInfo.address}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Phone:</p>
                    <a 
                      href={`tel:${storeInfo.phone}`}
                      className="text-damascus-burgundy hover:text-damascus-deepRed transition-colors"
                    >
                      {storeInfo.phone}
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Email:</p>
                    <a 
                      href={`mailto:${storeInfo.email}`}
                      className="text-damascus-burgundy hover:text-damascus-deepRed transition-colors"
                    >
                      {storeInfo.email}
                    </a>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-damascus-burgundy hover:bg-damascus-deepRed text-white"
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(storeInfo.address)}`, '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </Card>

              {/* Hours */}
              <Card className="p-6 border-damascus-gold/20">
                <h3 className="elegant-text text-2xl font-bold text-damascus-burgundy mb-6">
                  Opening Hours
                </h3>
                
                <div className="space-y-3">
                  {hours.map((schedule, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center py-2 ${
                        schedule.special ? 'text-damascus-gold font-semibold' : 'text-foreground'
                      }`}
                    >
                      <span>{schedule.day}</span>
                      <span className={schedule.special ? 'italic' : ''}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-damascus-gold/10 rounded-lg">
                  <p className="text-sm text-foreground/70">
                    <strong>Note:</strong> We're closed Mondays & Tuesdays to prepare fresh ingredients 
                    and spend time with family - a cherished Syrian tradition.
                  </p>
                </div>
              </Card>

              {/* Special Features */}
              <div className="parchment rounded-lg p-6">
                <h3 className="script-text text-xl font-bold text-damascus-burgundy mb-4">
                  What to Expect
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-damascus-gold">✓</span>
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-damascus-gold">✓</span>
                    <span>Takeout Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-damascus-gold">✓</span>
                    <span>Wheelchair Accessible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-damascus-gold">✓</span>
                    <span>Parking Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-damascus-gold">✓</span>
                    <span>Family Friendly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-damascus-gold">✓</span>
                    <span>Halal Certified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder & Atmosphere */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="overflow-hidden border-damascus-gold/20">
                <div className="relative h-64 bg-gradient-to-br from-damascus-cream to-damascus-sand flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-damascus-burgundy mx-auto mb-4" />
                    <p className="text-damascus-burgundy font-semibold">Interactive Map</p>
                    <p className="text-foreground/70 text-sm">
                      Little Syria District, Toronto
                    </p>
                  </div>
                  
                  {/* Decorative Pattern Overlay */}
                  <div className="absolute inset-0 damascus-pattern opacity-20"></div>
                </div>
              </Card>

              {/* Store Atmosphere */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Syrian cafe atmosphere" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="script-text text-2xl font-bold drop-shadow-lg">
                    Authentic Atmosphere
                  </p>
                  <p className="text-sm drop-shadow-lg">
                    Traditional Syrian hospitality awaits
                  </p>
                </div>
              </div>

              {/* Neighborhood Info */}
              <div className="parchment rounded-lg p-6">
                <h3 className="script-text text-xl font-bold text-damascus-burgundy mb-4">
                  Our Neighborhood
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Located in the heart of Toronto's vibrant Little Syria district, 
                  Damascus Delights is surrounded by authentic Middle Eastern shops, 
                  cultural centers, and the warm community that makes this area special. 
                  Visit us and explore the rich tapestry of Syrian-Canadian culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
