
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    specialRequests: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted!",
      description: "Thank you! We'll contact you shortly to confirm your order.",
    });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      specialRequests: ''
    });
  };

  const orderOptions = [
    {
      title: "Pickup",
      subtitle: "استلام",
      description: "Order ahead and pick up at our store",
      icon: "🏪",
      time: "Ready in 30-45 minutes"
    },
    {
      title: "Delivery",
      subtitle: "توصيل",
      description: "We'll bring Damascus to your doorstep",
      icon: "🚗",
      time: "Delivered in 45-60 minutes"
    },
    {
      title: "Catering",
      subtitle: "تقديم الطعام",
      description: "Perfect for events and celebrations",
      icon: "🎉",
      time: "24-hour advance notice"
    }
  ];

  return (
    <section id="order" className="py-20 bg-damascus-cream/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="script-text text-4xl md:text-5xl font-bold text-damascus-burgundy mb-4">
            Order Online
          </h2>
          <p className="arabic-accent text-damascus-gold text-xl mb-4">اطلب الآن</p>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Bring the authentic taste of Damascus to your home. Order online for pickup, 
            delivery, or special catering services.
          </p>
          <div className="w-24 h-1 bg-damascus-gold mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Order Options */}
            <div className="space-y-8">
              <h3 className="elegant-text text-2xl font-bold text-damascus-burgundy mb-6">
                Choose Your Order Type
              </h3>
              
              {orderOptions.map((option, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-damascus-gold/20 hover:border-damascus-gold/40"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{option.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="elegant-text text-xl font-bold text-damascus-burgundy">
                          {option.title}
                        </h4>
                        <span className="arabic-accent text-damascus-gold text-sm">
                          {option.subtitle}
                        </span>
                      </div>
                      <p className="text-foreground/70 mb-2">{option.description}</p>
                      <p className="text-damascus-gold text-sm font-semibold">{option.time}</p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Quick Order Buttons */}
              <div className="parchment rounded-lg p-6">
                <h4 className="script-text text-xl font-bold text-damascus-burgundy mb-4">
                  Quick Order Options
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-damascus-burgundy hover:bg-damascus-deepRed text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Sweet Box
                  </Button>
                  <Button className="bg-damascus-gold hover:bg-damascus-darkGold text-white">
                    Family Meal
                  </Button>
                  <Button variant="outline" className="border-damascus-burgundy text-damascus-burgundy">
                    Mezze Platter
                  </Button>
                  <Button variant="outline" className="border-damascus-gold text-damascus-gold">
                    Chef's Special
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <h3 className="elegant-text text-2xl font-bold text-damascus-burgundy mb-6">
                Place Your Order
              </h3>
              
              <Card className="p-6 border-damascus-gold/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-damascus-gold/30 focus:border-damascus-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-damascus-gold/30 focus:border-damascus-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-damascus-gold/30 focus:border-damascus-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Delivery Address (if applicable)
                    </label>
                    <Textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="border-damascus-gold/30 focus:border-damascus-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Special Requests or Dietary Requirements
                    </label>
                    <Textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Please let us know about any allergies, preferences, or special instructions..."
                      className="border-damascus-gold/30 focus:border-damascus-gold"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-damascus-burgundy hover:bg-damascus-deepRed text-white py-3 text-lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Submit Order Request
                  </Button>

                  <p className="text-xs text-foreground/60 text-center">
                    * We'll contact you to confirm your order and arrange payment
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
