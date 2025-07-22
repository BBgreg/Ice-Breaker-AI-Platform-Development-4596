import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useUser } from '../context/UserContext';
import ResultCard from './ResultCard';

const { FiCopy, FiThumbsUp, FiThumbsDown, FiRefreshCw, FiArrowLeft } = FiIcons;

const Results = () => {
  const { analysisData } = useUser();
  const [activeTab, setActiveTab] = useState('icebreakers');
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!analysisData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">No Analysis Data</h2>
          <p className="text-gray-600">Please complete an analysis first.</p>
        </div>
      </div>
    );
  }

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const tabs = [
    { id: 'icebreakers', label: 'Ice Breakers', count: analysisData.iceBreakers?.length || 0 },
    { id: 'discovery', label: 'Discovery Questions', count: analysisData.discoveryQuestions?.length || 0 },
    { id: 'valueadds', label: 'Value-Adds', count: analysisData.valueAdds?.length || 0 }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <button className="inline-flex items-center space-x-2 text-gray-600 hover:text-navy-900 mb-4">
            <SafeIcon icon={FiArrowLeft} />
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Your Ice Breakers & Connection Blueprint
          </h1>
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Executive Summary & Strategy</h2>
          <p className="text-gray-700 leading-relaxed">{analysisData.strategy}</p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors tab-button ${
                    activeTab === tab.id ? 'active' : ''
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Ice Breakers Tab */}
          {activeTab === 'icebreakers' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {analysisData.iceBreakers?.map((icebreaker, index) => (
                <ResultCard
                  key={index}
                  title={`Ice Breaker ${index + 1}`}
                  content={icebreaker.content}
                  explanation={icebreaker.why}
                  onCopy={() => handleCopy(icebreaker.content, `ice-${index}`)}
                  isCopied={copiedIndex === `ice-${index}`}
                />
              ))}
            </motion.div>
          )}

          {/* Discovery Questions Tab */}
          {activeTab === 'discovery' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {analysisData.discoveryQuestions?.map((question, index) => (
                <ResultCard
                  key={index}
                  title={`Discovery Question ${index + 1}`}
                  content={question.content}
                  explanation={question.why}
                  onCopy={() => handleCopy(question.content, `discovery-${index}`)}
                  isCopied={copiedIndex === `discovery-${index}`}
                />
              ))}
            </motion.div>
          )}

          {/* Value-Adds Tab */}
          {activeTab === 'valueadds' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {analysisData.valueAdds?.map((valueAdd, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-navy-900">
                      Value-Add {index + 1}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleCopy(valueAdd.template, `value-${index}`)}
                        className={`copy-button p-2 rounded-lg transition-colors ${
                          copiedIndex === `value-${index}`
                            ? 'bg-success text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <SafeIcon icon={FiCopy} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-success">
                        <SafeIcon icon={FiThumbsUp} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-error">
                        <SafeIcon icon={FiThumbsDown} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Action:</h4>
                      <p className="text-gray-700">{valueAdd.action}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Message Template:</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 italic">"{valueAdd.template}"</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Why this works:</span> {valueAdd.why}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Follow-up Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-8"
        >
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">Follow-Up & Nurturing</h2>
          <div className="bg-navy-50 p-4 rounded-lg">
            <p className="text-navy-900 font-medium mb-2">Next Step:</p>
            <p className="text-gray-700 mb-3">
              Set a reminder to follow up in 2 weeks if you don't hear back. 
              Suggested Topic: "Ask about the outcome of the conference they mentioned attending."
            </p>
            <button className="inline-flex items-center space-x-2 bg-navy-900 text-white px-4 py-2 rounded-lg hover:bg-navy-800 transition-colors">
              <SafeIcon icon={FiRefreshCw} />
              <span>Practice This Conversation</span>
            </button>
          </div>
        </motion.div>

        {/* Upgrade Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-navy-600 to-navy-800 rounded-xl p-6 text-white text-center mt-8"
        >
          <h3 className="text-xl font-semibold mb-2">Want More Advanced Features?</h3>
          <p className="text-navy-100 mb-4">
            Upgrade to Pro for unlimited analyses, follow-up suggestions, and conversation rescue strategies.
          </p>
          <button className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Upgrade to Pro - $9.97/month
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;