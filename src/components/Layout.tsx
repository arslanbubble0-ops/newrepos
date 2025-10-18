import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Upload, Download } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState('2024');

  // Tab navigation items
  const navTabs = [
    { id: 'payers', label: '1. Payer', path: '/payers' },
    { id: 'add-recipient', label: '2. Add Recipient ▾', path: '/recipients' },
    { id: 'forms-summary', label: '3. Forms Summary', path: '/forms-summary' },
    { id: 'efile', label: '4. E-file', path: '/efile-mail' },
    { id: 'mail', label: '5. Mail', path: '/efile-mail' },
    { id: 'download', label: '6. Download | Import Data', path: '/efile-mail' },
  ];

  const getActiveTab = () => {
    const activePath = location.pathname;
    return navTabs.find(tab => tab.path === activePath)?.id || 'payers';
  };

  const getPayerName = () => {
    return 'Tp Testing'; // This would come from state/context in real app
  };

  const getFormCounts = () => {
    return { MISC: 1, NEC: 3 }; // This would come from state/context in real app
  };

  const handleViewAllPayers = () => {
    navigate('/payers');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Header - Enhanced Track1099 style */}
      <motion.header
        initial={{ y: -186 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 sticky top-0 z-40"
        style={{ height: 186 }}
      >
        {/* Top Section */}
        <div className="px-8 pt-4 h-24">
          <div className="flex items-center justify-between h-full">
            {/* Left: Year and View All Payers */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <button
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeYear === '2024'
                      ? 'bg-white text-blue-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setActiveYear('2024')}
                >
                  2024
                </button>
                <button
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeYear === '2023'
                      ? 'bg-white text-blue-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setActiveYear('2023')}
                >
                  2023
                </button>
                <button
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeYear === '2022'
                      ? 'bg-white text-blue-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setActiveYear('2022')}
                >
                  2022
                </button>
              </div>

              <button
                onClick={handleViewAllPayers}
                className="px-4 py-2 bg-white text-blue-600 text-xs font-medium uppercase rounded hover:bg-gray-50 transition-colors"
              >
                ← VIEW ALL PAYERS
              </button>
            </div>

            {/* Center: Payer Name and Form Counters */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2">
                {getPayerName()}
              </h1>

              {/* Form Counters */}
              <div className="flex items-center justify-center space-x-4">
                {Object.entries(getFormCounts()).map(([type, count]) => (
                  <div key={type} className="flex items-center space-x-2">
                    <span className="text-white text-sm font-medium">{type}</span>
                    <span className="inline-flex items-center justify-center bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-bold min-w-[24px]">
                      {count}
                    </span>
                  </div>
                ))}

                <button className="ml-4 px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                  ADD FORMS +
                </button>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-white text-blue-600 text-sm font-medium rounded hover:bg-gray-50 transition-colors flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download All
              </button>
              <button className="px-4 py-2 bg-white text-blue-600 text-sm font-medium rounded hover:bg-gray-50 transition-colors flex items-center">
                <Upload className="h-4 w-4 mr-2" />
                Import Data
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="px-8 pb-4 h-16 bg-header-dark">
          <nav className="flex items-center h-full">
            {navTabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`flex-1 text-center px-4 py-3 text-white text-sm font-medium transition-all duration-200 relative ${
                  getActiveTab() === tab.id
                    ? 'bg-white/10 border-b-2 border-white'
                    : 'hover:bg-white/5'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Page Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
