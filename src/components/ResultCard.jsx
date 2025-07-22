import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCopy, FiThumbsUp, FiThumbsDown } = FiIcons;

const ResultCard = ({ title, content, explanation, onCopy, isCopied }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-navy-900">{title}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={onCopy}
            className={`copy-button p-2 rounded-lg transition-colors ${
              isCopied
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
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="text-gray-900 italic">"{content}"</p>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-900">Why this works:</span> {explanation}
        </p>
      </div>
    </motion.div>
  );
};

export default ResultCard;