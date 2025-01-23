import React from 'react';

const HackathonRules: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">Hackathon Rules</h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Team Formation</h3>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Team size: 1-2 members</li>
            <li>✓ Cross-college teams are allowed</li>
            <li>✓ All team members must register on the MIRA platform</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Code of Conduct</h3>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Original work only, no plagiarism</li>
            <li>✓ Respect for all participants</li>
            <li>✓ Follow ethical AI principles</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Technical Requirements</h3>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Must use at least one API or SDK model from Mira</li>
            <li>✓ Solution must incorporate AI technologies</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Submission Guidelines</h3>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Submit before deadline</li>
            <li>✓ Include documentation</li>
            <li>✓ Present working prototype</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HackathonRules;