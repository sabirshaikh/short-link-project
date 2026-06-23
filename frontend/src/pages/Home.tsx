import { Link } from "react-router-dom";

const Home = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Instant Results",
      description: "Get your shortened URL in milliseconds",
    },
    {
      icon: "📈",
      title: "Track Performance",
      description: "Monitor clicks and visitor analytics",
    },
    {
      icon: "🌐",
      title: "Global Access",
      description: "Share links anywhere in the world",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Digital Marketer",
      feedback: "LinkShort has made sharing links so much easier!",
      avatar: "👤",
    },
    {
      name: "Jane Smith",
      role: "Content Creator",
      feedback: "Love the simplicity and the analytics features.",
      avatar: "👤",
    },
    {
      name: "Mike Johnson",
      role: "Business Owner",
      feedback: "Essential tool for our social media campaigns.",
      avatar: "👤",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Shorten Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Links
              </span>{" "}
              Instantly
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform long, unwieldy URLs into short, shareable links. Track
              engagement and optimize your online presence with our powerful URL
              shortening service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shortlink"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Get Started Free
              </Link>
              <Link
                to="/about"
                className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-800 font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">🔗</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">100K+</div>
              <p className="text-gray-600 text-lg">URLs Shortened</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">
                500K+
              </div>
              <p className="text-gray-600 text-lg">Total Clicks</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                50K+
              </div>
              <p className="text-gray-600 text-lg">Active Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose LinkShort?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy URL</h3>
              <p className="text-blue-100">Copy your long URL</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-4xl">→</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Paste</h3>
              <p className="text-blue-100">Paste into LinkShort</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Share</h3>
              <p className="text-blue-100">Share your short link</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <div className="flex mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Shorten Your Links?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users already using LinkShort to manage their URLs
          </p>
          <Link
            to="/shortlink"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg"
          >
            Create Your First Short Link Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 LinkShort. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
