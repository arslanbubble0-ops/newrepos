import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, Send } from 'lucide-react';
import recipientsData from '../data/recipients.json';

const FormsSummary = () => {
  const [activeSubTab, setActiveSubTab] = useState('unscheduled');

  const subTabs = [
    { id: 'unscheduled', label: 'Unscheduled' },
    { id: 'scheduled', label: 'Scheduled & Sent' },
    { id: 'state', label: 'State E-file' },
    { id: 'address', label: 'Address Verification' },
    { id: 'tin', label: 'TIN Match' },
    { id: 'box', label: 'Box Totals' },
  ];

  const getSubTabData = () => {
    switch (activeSubTab) {
      case 'unscheduled':
        return recipientsData.map(recipient => ({
          recipient: recipient.name,
          form: recipient.formType,
          box1: `$${recipient.amount.toFixed(2)}`,
          status: 'OK for E-File, No Email Error',
          action: 'Error'
        }));
      case 'scheduled':
        return recipientsData.slice(0, 3).map(recipient => ({
          recipient: recipient.name,
          form: recipient.formType,
          box1: `$${recipient.amount.toFixed(2)}`,
          status: 'Sent',
          action: 'Success'
        }));
      case 'state':
        return [
          { recipient: 'State forms ready for e-file', form: 'Multiple', box1: 'Available', status: 'Ready', action: 'Submit' }
        ];
      case 'address':
        return [
          { recipient: 'Address verification completed', form: 'NEC/MISC', box1: 'Verified', status: 'Complete', action: 'Download' }
        ];
      case 'tin':
        return [
          { recipient: 'TIN matching completed', form: 'NEC/MISC', box1: 'Matched', status: 'Complete', action: 'Download' }
        ];
      case 'box':
        return [
          { recipient: 'Box 1 Totals', form: 'Summary', box1: `$${recipientsData.reduce((sum, r) => sum + r.amount, 0).toFixed(2)}`, status: 'Total', action: 'Export' },
          { recipient: 'Box 2 Totals', form: 'Summary', box1: `$${recipientsData.reduce((sum, r) => sum + r.amount, 0).toFixed(2)}`, status: 'Total', action: 'Export' }
        ];
      default:
        return [];
    }
  };

  const tableData = getSubTabData();

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Forms Summary</h1>

        {/* Sub Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {subTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeSubTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recipient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Form
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Box 1
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.recipient}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.form}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.box1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-2">
                          {row.action === 'Error' && (
                            <button className="text-gray-400 hover:text-gray-600">
                              <Eye className="h-4 w-4" />
                            </button>
                          )}
                          {row.action === 'Success' && (
                            <button className="text-gray-400 hover:text-gray-600">
                              <Download className="h-4 w-4" />
                            </button>
                          )}
                          {row.action === 'Submit' && (
                            <button className="text-gray-400 hover:text-gray-600">
                              <Send className="h-4 w-4" />
                            </button>
                          )}
                          {row.action === 'Download' && (
                            <button className="text-gray-400 hover:text-gray-600">
                              <Download className="h-4 w-4" />
                            </button>
                          )}
                          {row.action === 'Export' && (
                            <button className="text-gray-400 hover:text-gray-600">
                              <Download className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{recipientsData.length}</div>
              <div className="text-sm text-gray-600">Total Recipients</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {recipientsData.filter(r => r.formType === 'NEC').length}
              </div>
              <div className="text-sm text-gray-600">NEC Forms</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {recipientsData.filter(r => r.formType === 'MISC').length}
              </div>
              <div className="text-sm text-gray-600">MISC Forms</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                ${recipientsData.reduce((sum, r) => sum + r.amount, 0).toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">Total Amount</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FormsSummary;
