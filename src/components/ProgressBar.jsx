// src/components/ProgressBar.jsx

import React from 'react';

const ProgressBar = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-6">
      <div className="bg-primary h-4 animate-progressBar w-full transition-all duration-1000"></div>
    </div>
  );
};

export default ProgressBar;
