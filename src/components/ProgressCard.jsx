import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useUser } from '../context/UserContext';

const { FiTrendingUp, FiTarget, FiAward, FiBarChart3 } = FiIcons;

const ProgressCard = () => {
  const { userStats } = useUser();

  const progressPercentage = (userStats.connectionsMade / userStats.monthlyGoal) * 100;
  const analysisProgressPercentage = (userStats.analysesUsed / userStats.totalAnalyses) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
    >
      <h3 className="text-xl font-semibold text-navy-900 mb-6 flex items-center space-x-2">
        <SafeIcon icon={FiBarChart3} className="text-navy-600" />
        <span>Your Progress</span>
      </h3>

      {/* Monthly Goal Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Monthly Goal</span>
          <span className="text-sm text-gray-600">{userStats.connectionsMade}/{userStats.monthlyGoal}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="progress-bar h-2"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Meaningful Connections Initiated</p>
      </div>

      {/* Analysis Usage */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Analyses Used</span>
          <span className="text-sm text-gray-600">{userStats.analysesUsed}/{userStats.totalAnalyses}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-navy-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${analysisProgressPercentage}%` }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Free tier limit (10 per month)</p>
      </div>

      {/* Ice Breaker Score */}
      <div className="mb-6 p-4 bg-navy-50 rounded-lg">
        <div className="flex items-center space-x-3 mb-2">
          <SafeIcon icon={FiTrendingUp} className="text-navy-600" />
          <span className="font-medium text-navy-900">Ice Breaker Score</span>
        </div>
        <div className="text-2xl font-bold text-navy-900">85/100</div>
        <p className="text-xs text-gray-600">Based on your recent connections</p>
      </div>

      {/* Badges */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center space-x-2">
          <SafeIcon icon={FiAward} className="text-gray-500" />
          <span>Badges Earned</span>
        </h4>
        <div className="space-y-2">
          {userStats.badges.map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="badge text-xs"
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upgrade Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="p-4 bg-gradient-to-r from-navy-600 to-navy-800 rounded-lg text-white text-center"
      >
        <SafeIcon icon={FiTarget} className="text-2xl mb-2 mx-auto" />
        <h4 className="font-semibold mb-1">Upgrade to Pro</h4>
        <p className="text-xs text-navy-100 mb-3">Unlimited analyses & advanced features</p>
        <button className="w-full bg-white text-navy-900 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
          Upgrade Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProgressCard;