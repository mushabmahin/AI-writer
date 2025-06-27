import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Report');
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    // Placeholder output for now
    setOutput(
      'Weekly report on project development: Progress made in UI design, front-end integration completed, database structure finalized, testing phase mmend. Upcoming tasks include refining UI, backend integration, and debugging.'
    );
  };

  return (
    <div className="aiw-container">
      <h1 className="aiw-title">AI Writing Assistant</h1>
      <p className="aiw-desc">Generate letters, reports, and convert handwritten text with ease.</p>
      <div className="aiw-tabs">
        <button className={activeTab === 'Letter' ? 'aiw-tab active' : 'aiw-tab'} onClick={() => setActiveTab('Letter')}>📄 Letter</button>
        <button className={activeTab === 'Report' ? 'aiw-tab active' : 'aiw-tab'} onClick={() => setActiveTab('Report')}>📑 Report</button>
        <button className={activeTab === 'OCR' ? 'aiw-tab active' : 'aiw-tab'} onClick={() => setActiveTab('OCR')}>🖼️ OCR</button>
      </div>
      <div className="aiw-card">
        <h2 className="aiw-section-title">Generate a {activeTab}</h2>
        <label className="aiw-label">Enter your prompt:</label>
        <input
          className="aiw-input"
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button className="aiw-generate-btn" onClick={handleGenerate}>Generate {activeTab}</button>
      </div>
      <div className="aiw-card">
        <h2 className="aiw-section-title">Generated Output:</h2>
        <div className="aiw-output-box">
          {output}
        </div>
      </div>
    </div>
  );
}

export default App;
