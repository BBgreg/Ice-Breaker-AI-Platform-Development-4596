import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useUser } from '../context/UserContext';
import ConnectionAnimation from './ConnectionAnimation';
import SignupModal from './SignupModal';

const { FiArrowRight, FiCheck, FiUsers, FiTarget, FiTrendingUp, FiZap } = FiIcons;

const LandingPage = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const features = [
    {
      icon: FiTarget,
      title: 'Dual Profile Analysis',
      description: 'AI analyzes both profiles to find shared connections, interests, and opportunities.'
    },
    {
      icon: FiUsers,
      title: 'F.O.R.D. Framework',
      description: 'Generate ice breakers based on Family, Occupation, Recreation, and Dreams.'
    },
    {
      icon: FiTrendingUp,
      title: 'Value-Add Suggestions',
      description: 'Get specific, actionable recommendations to provide genuine value.'
    },
    {
      icon: FiZap,
      title: 'Instant Results',
      description: 'Generate personalized conversation starters in seconds, not hours.'
    }
  ];

  const handleGetStarted = () => {
    setShowSignupModal(true);
  };

  const handleSignupSuccess = (userData) => {
    setUser(userData);
    setShowSignupModal(false);
    navigate('/dashboard');
  };

  return (
    <div className="relative min-h-screen">
      <ConnectionAnimation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              Ice Breakers, Build Relationships,<br />
              <span className="text-gray-600">Make Connections</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional-grade AI generates value-add ice breakers and conversation starters 
              from dual profile analysis. Transform cold connections into warm conversations.
            </p>

            <motion.button
              onClick={handleGetStarted}
              className="inline-flex items-center space-x-3 bg-navy-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Generate Ice Breakers</span>
              <SafeIcon icon={FiArrowRight} className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Why Ice Breaker BluePrint Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI analyzes profiles, context, and goals to generate actionable strategies 
              that turn introductions into opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="text-2xl text-navy-900" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more power
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200"
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Ice Breakers</p>
              <div className="text-4xl font-bold text-navy-900 mb-6">$0<span className="text-lg text-gray-600">/month</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="text-success" />
                  <span>10 Profile analyses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="text-success" />
                  <span>10 Ice Breaker conversation starters</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="text-success" />
                  <span>Profile analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="text-success" />
                  <span>Success tips</span>
                </li>
              </ul>

              <button
                onClick={handleGetStarted}
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started Free
              </button>
            </motion.div>

            {/* Pro Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl shadow-xl p-8 border-2 border-navy-600 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-navy-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">Everything You Need</p>
              <div className="text-4xl font-bold text-navy-900 mb-6">$9.97<span className="text-lg text-gray-600">/month</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="text-success" />
                  <span>Unlimited analyses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="text-success" />
                  <span>Unlimited Ice Breaker conversation starters</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="text-success" />
                  <span>Follow-up suggestion engine</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="text-success" />
                  <span>Conversation rescue strategies</span>
                </li>
              </ul>

              <button
                onClick={handleGetStarted}
                className="w-full bg-navy-900 text-white py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
              >
                Start Pro Trial
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Better Relationships?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already using Ice Breaker BluePrint 
              to make meaningful connections.
            </p>
            <motion.button
              onClick={handleGetStarted}
              className="inline-flex items-center space-x-3 bg-white text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Free Today</span>
              <SafeIcon icon={FiArrowRight} className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Signup Modal */}
      <SignupModal 
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSuccess={handleSignupSuccess}
      />
    </div>
  );
};

export default LandingPage;