
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Menu = () => {
  const menuCategories = [
    {
      title: "Traditional Sweets",
      subtitle: "الحلويات التقليدية",
      items: [
        {
          name: "Baklava Assortment",
          arabic: "بقلاوة",
          description: "Layers of flaky phyllo pastry with pistachios, walnuts, and sweet syrup",
          price: "$18.99",
          image: "https://images.unsplash.com/photo-1571197119276-7ba81848e68c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Maamoul Cookies",
          arabic: "معمول",
          description: "Date and nut-filled semolina cookies, a festival favorite",
          price: "$14.99",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Muhallabia",
          arabic: "مهلبية",
          description: "Silky milk pudding topped with pistachios and rose water",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Savory Delights",
      subtitle: "المأكولات الشهية",
      items: [
        {
          name: "Mezze Platter",
          arabic: "مقبلات",
          description: "Hummus, baba ganoush, tabbouleh, and fresh vegetables with pita",
          price: "$22.99",
          image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Damascus Kebab",
          arabic: "كباب دمشقي",
          description: "Tender grilled lamb with aromatic spices and grilled vegetables",
          price: "$26.99",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Falafel Wrap",
          arabic: "فلافل",
          description: "Crispy chickpea fritters with tahini sauce in fresh pita bread",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-damascus-cream/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="script-text text-4xl md:text-5xl font-bold text-damascus-burgundy mb-4">
            Our Menu
          </h2>
          <p className="arabic-accent text-damascus-gold text-xl mb-4">قائمة طعامنا</p>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the authentic flavors of Syria through our carefully curated selection 
            of traditional sweets and savory dishes, each prepared with love and heritage.
          </p>
          <div className="w-24 h-1 bg-damascus-gold mx-auto mt-6"></div>
        </div>

        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div className="text-center mb-12">
              <h3 className="elegant-text text-3xl font-bold text-damascus-burgundy mb-2">
                {category.title}
              </h3>
              <p className="arabic-accent text-damascus-gold text-lg">{category.subtitle}</p>
            </div>

            {/* Menu Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card 
                  key={itemIndex} 
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in border-damascus-gold/20"
                >
                  {/* Item Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="script-text text-white text-2xl font-bold drop-shadow-lg">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h4 className="elegant-text text-xl font-bold text-damascus-burgundy mb-1">
                        {item.name}
                      </h4>
                      <p className="arabic-accent text-damascus-gold text-sm">{item.arabic}</p>
                    </div>
                    
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <Button 
                      className="w-full bg-damascus-burgundy hover:bg-damascus-deepRed text-white"
                      onClick={() => {
                        const element = document.getElementById('order');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Add to Order
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="parchment rounded-lg p-8 max-w-2xl mx-auto">
            <p className="script-text text-damascus-burgundy text-2xl font-bold mb-4">
              Can't decide? Try our Chef's Special!
            </p>
            <p className="text-foreground/70 mb-6">
              Let our kitchen surprise you with a curated selection of our most beloved dishes, 
              perfect for sharing and experiencing the full spectrum of Syrian flavors.
            </p>
            <Button 
              size="lg"
              className="bg-damascus-gold hover:bg-damascus-darkGold text-white px-8"
              onClick={() => {
                const element = document.getElementById('order');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Order Chef's Special
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
