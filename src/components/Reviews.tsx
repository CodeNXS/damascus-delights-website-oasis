
const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The baklava here is absolutely divine! It reminds me of my grandmother's recipe from Aleppo. The layers are perfectly crispy and the syrup is just the right sweetness. You can taste the authenticity in every bite.",
      location: "Toronto, ON",
      date: "March 2024"
    },
    {
      name: "Ahmed K.",
      rating: 5,
      text: "Finally found a place that makes proper Syrian food! The kebabs are tender and perfectly spiced, and the mezze platter is generous and fresh. The family who runs this place puts so much love into their cooking.",
      location: "Vancouver, BC", 
      date: "February 2024"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "I ordered the mixed sweets box for a dinner party and it was a huge hit! The maamoul cookies were incredibly fresh and the presentation was beautiful. Everyone kept asking where I got them from.",
      location: "Montreal, QC",
      date: "January 2024"
    },
    {
      name: "Omar S.",
      rating: 5,
      text: "This place brings back memories of home. The muhallabia is creamy perfection and the falafel wrap is exactly how my mother used to make it. Thank you for keeping our traditions alive!",
      location: "Calgary, AB",
      date: "March 2024"
    },
    {
      name: "Lisa R.",
      rating: 5,
      text: "Outstanding catering service! They catered our wedding and the food was the highlight of the evening. Guests are still talking about the incredible flavors. Professional, delicious, and authentic.",
      location: "Ottawa, ON",
      date: "February 2024"
    },
    {
      name: "Hassan A.",
      rating: 5,
      text: "Best Syrian restaurant I've found in Canada. The atmosphere is warm and welcoming, and you can tell each dish is made with care and traditional techniques. The Damascus Delights team feels like family.",
      location: "Edmonton, AB",
      date: "January 2024"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-damascus-gold' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-damascus-cream/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="script-text text-4xl md:text-5xl font-bold text-damascus-burgundy mb-4">
            Customer Reviews
          </h2>
          <p className="arabic-accent text-damascus-gold text-xl mb-4">آراء عملائنا</p>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Hear from our beloved customers who have experienced the warmth and authenticity 
            of Damascus Delights
          </p>
          <div className="w-24 h-1 bg-damascus-gold mx-auto mt-6"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="parchment rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-damascus-gold/20 rounded-bl-lg"></div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(review.rating)}</div>
              </div>

              {/* Review Text */}
              <blockquote className="text-foreground/80 italic mb-6 leading-relaxed">
                "{review.text}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="border-t border-damascus-gold/30 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="script-text text-damascus-burgundy font-semibold text-lg">
                      {review.name}
                    </p>
                    <p className="text-foreground/60 text-sm">{review.location}</p>
                  </div>
                  <p className="text-damascus-gold text-xs">{review.date}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-2 left-6 w-12 h-px bg-damascus-gold/40"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="parchment rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="script-text text-2xl font-bold text-damascus-burgundy mb-4">
              Share Your Experience
            </h3>
            <p className="text-foreground/70 mb-6">
              We'd love to hear about your Damascus Delights experience! 
              Your feedback helps us continue serving the authentic flavors you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://google.com/reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-damascus-burgundy hover:bg-damascus-deepRed text-white rounded-md transition-colors"
              >
                Leave a Google Review
              </a>
              <a 
                href="mailto:feedback@damascusdelights.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-damascus-gold text-damascus-burgundy hover:bg-damascus-gold hover:text-white rounded-md transition-colors"
              >
                Send Us Feedback
              </a>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="script-text text-3xl font-bold text-damascus-burgundy mb-2">500+</div>
            <p className="text-foreground/70">Happy Customers</p>
          </div>
          <div className="animate-scale-in">
            <div className="script-text text-3xl font-bold text-damascus-burgundy mb-2">4.9⭐</div>
            <p className="text-foreground/70">Average Rating</p>
          </div>
          <div className="animate-scale-in">
            <div className="script-text text-3xl font-bold text-damascus-burgundy mb-2">200+</div>
            <p className="text-foreground/70">Five Star Reviews</p>
          </div>
          <div className="animate-scale-in">
            <div className="script-text text-3xl font-bold text-damascus-burgundy mb-2">3</div>
            <p className="text-foreground/70">Years Serving</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
