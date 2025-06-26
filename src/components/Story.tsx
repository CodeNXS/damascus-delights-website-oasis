
const Story = () => {
  return (
    <section id="story" className="py-20 bg-damascus-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="script-text text-4xl md:text-5xl font-bold text-damascus-burgundy mb-4">
              Our Story
            </h2>
            <p className="arabic-accent text-damascus-gold text-xl">حكايتنا</p>
            <div className="w-24 h-1 bg-damascus-gold mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Image */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-damascus-gold/20 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Traditional Syrian architecture" 
                className="relative rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-damascus-pattern rounded-full opacity-50"></div>
            </div>

            {/* Story Content */}
            <div className="animate-fade-in">
              <div className="parchment rounded-lg p-8 shadow-lg">
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  In the ancient streets of Damascus, where the scent of jasmine mingles with warm spices, 
                  our family's culinary journey began over three generations ago. Our grandmother, 
                  <span className="script-text text-damascus-burgundy font-semibold"> Sitt Fatima</span>, 
                  first crafted these treasured recipes in her modest kitchen, sharing the warmth of Syrian hospitality 
                  with every neighbor who passed by.
                </p>
                
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  Each baklava layer tells a story, every maamoul cookie carries a prayer, and every 
                  dish we serve is infused with the love and tradition passed down through our family. 
                  From the bustling souks of Old Damascus to your table, we bring you the authentic 
                  flavors that have delighted hearts for centuries.
                </p>
                
                <p className="script-text text-damascus-burgundy text-xl font-semibold mb-4">
                  "Food is love made visible"
                </p>
                
                <p className="text-foreground/70 text-base italic">
                  Today, we continue this beautiful tradition, ensuring that every bite transports 
                  you to the warm embrace of Syrian culture and the timeless art of Middle Eastern cuisine.
                </p>

                {/* Signature */}
                <div className="mt-8 pt-4 border-t border-damascus-gold/30">
                  <p className="script-text text-damascus-burgundy text-lg">
                    With love and tradition,
                  </p>
                  <p className="script-text text-damascus-gold text-xl font-bold">
                    The Damascus Delights Family
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Heritage Elements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-damascus-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="arabic-accent text-white text-2xl font-bold">٣</span>
              </div>
              <h3 className="elegant-text text-xl font-semibold text-damascus-burgundy mb-2">
                Three Generations
              </h3>
              <p className="text-foreground/70">
                Family recipes passed down with love and care
              </p>
            </div>

            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-damascus-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏺</span>
              </div>
              <h3 className="elegant-text text-xl font-semibold text-damascus-burgundy mb-2">
                Authentic Traditions
              </h3>
              <p className="text-foreground/70">
                Time-honored techniques and original recipes
              </p>
            </div>

            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-damascus-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="elegant-text text-xl font-semibold text-damascus-burgundy mb-2">
                Made with Love
              </h3>
              <p className="text-foreground/70">
                Every dish crafted with passion and care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
