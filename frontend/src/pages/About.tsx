import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Create shortened URLs instantly with our optimized service",
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Your URLs are encrypted and stored securely on our servers",
    },
    {
      icon: "📊",
      title: "Track Analytics",
      description: "Monitor clicks and engagement on your shortened links",
    },
    {
      icon: "🔗",
      title: "Easy Sharing",
      description: "Share shortened URLs effortlessly across all platforms",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Works seamlessly on all devices and screen sizes",
    },
    {
      icon: "♾️",
      title: "Unlimited Links",
      description: "Create as many shortened links as you need",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            About LinkShort
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making the web more efficient, one shortened URL at a time. Our
            mission is to provide a fast, secure, and reliable URL shortening
            service for everyone.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What We Do
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                LinkShort is a modern URL shortening service designed to make
                your links more manageable and trackable. Whether you're sharing
                links on social media, in emails, or anywhere else online, our
                service makes it simple.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that web sharing should be simple, fast, and secure.
                That's why we've built LinkShort with these principles at its
                core.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg p-8 text-white text-center">
              <div className="text-6xl font-bold mb-4">100K+</div>
              <p className="text-lg">URLs Shortened</p>
              <div className="mt-6 pt-6 border-t border-white border-opacity-30">
                <p className="text-sm">Join thousands of users worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full font-bold text-2xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Paste Your URL
              </h3>
              <p className="text-gray-600">
                Enter your long URL into our simple interface
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full font-bold text-2xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Get Short Link
              </h3>
              <p className="text-gray-600">
                Instantly receive a shortened URL ready to share
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full font-bold text-2xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Track & Share
              </h3>
              <p className="text-gray-600">
                Monitor clicks and share across all platforms
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start shortening your URLs and tracking your links with LinkShort.
            It's free, fast, and easy to use.
          </p>
          <Link
            to="/shortlink"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Create Your First Short Link
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            FAQ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Is LinkShort free?
              </h3>
              <p className="text-gray-600">
                Yes! LinkShort is completely free to use. You can create as many
                shortened links as you need without any cost.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How long do links stay active?
              </h3>
              <p className="text-gray-600">
                Your shortened links remain active indefinitely. They won't
                expire unless you delete them manually.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Can I customize my short links?
              </h3>
              <p className="text-gray-600">
                Currently, short links are auto-generated. Custom aliases are
                coming in a future update!
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Is my data safe?
              </h3>
              <p className="text-gray-600">
                Yes, all your data is encrypted and stored securely on our
                servers. We take privacy seriously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
