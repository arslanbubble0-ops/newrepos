import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle } from 'lucide-react';

const EFileMail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-gray-200"
      >
        <div className="px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">E-File / Mail</h1>
          <p className="text-gray-600 mt-1">Manage electronic filing and postal mailing</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto space-y-8"
        >
          {/* Information Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              Neither 1096 nor W-3 are required when you e-file.
            </p>
          </div>

          {/* E-File Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">E-file to IRS</h2>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                  <Send className="h-4 w-4 mr-2" />
                  E-File All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Schedule IRS E-file Date</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">QTY</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-4 text-gray-900">
                        NEC <span className="text-gray-600">2025-10-16 (recommended)</span>
                      </td>
                      <td className="px-4 py-4 text-gray-700">2</td>
                      <td className="px-4 py-4 text-gray-700">--</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-4 text-gray-900">
                        MISC <span className="text-gray-600">2025-10-16 (recommended)</span>
                      </td>
                      <td className="px-4 py-4 text-gray-700">1</td>
                      <td className="px-4 py-4 text-gray-700">--</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-gray-200">
                      <td className="px-4 py-4 font-semibold text-gray-900">Total</td>
                      <td className="px-4 py-4 font-semibold text-gray-900">3</td>
                      <td className="px-4 py-4 font-semibold text-gray-900">$9.30</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {/* E-Deliver Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">E-deliver to Recipients</h2>
                <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700">
                  <Mail className="h-4 w-4 mr-2" />
                  E-Deliver All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Schedule e-delivery date</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">QTY</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-4 text-gray-900">
                        NEC and MISC <span className="text-gray-600">2025-10-16 (recommended)</span>
                      </td>
                      <td className="px-4 py-4 text-gray-700">2</td>
                      <td className="px-4 py-4 text-green-600 font-medium">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Postal Mail Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Postal Mail to Recipients</h2>
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700">
                  <Mail className="h-4 w-4 mr-2" />
                  Mail All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Mailing method</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">QTY</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-4 text-gray-900">
                        NEC <span className="text-gray-600">Print & mail yourself for free</span>
                      </td>
                      <td className="px-4 py-4 text-gray-700">1</td>
                      <td className="px-4 py-4 text-green-600 font-medium">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Address Verification Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Address Verification Service</h2>
                <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Verify All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Service</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">QTY</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-4 text-gray-900">
                        NEC and MISC forms <br />
                        <span className="text-gray-600">Verify addresses ($0.07)</span>
                      </td>
                      <td className="px-4 py-4 text-gray-700">2</td>
                      <td className="px-4 py-4 text-gray-700">$0.14</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* TIN Matching Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">TIN Matching Service</h2>
                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Match All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Service</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">QTY</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-4 text-gray-900">
                        NEC and MISC <br />
                        <span className="text-gray-600">Do TIN matching ($0.45)</span>
                      </td>
                      <td className="px-4 py-4 text-gray-700">3</td>
                      <td className="px-4 py-4 text-green-600 font-medium">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="max-w-md ml-auto">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">$9.44</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sales tax:</span>
                  <span className="font-medium">None</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>$9.44</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm font-medium text-blue-900 mb-1">Secure Payments</p>
                <p className="text-xs text-blue-800">AES-256 Encryption</p>
              </div>

              <div className="mt-4 p-3 bg-gray-100 rounded">
                <p className="text-sm font-medium text-gray-900 mb-1">When will my mail be sent?</p>
                <p className="text-xs text-gray-600">
                  Mail submitted daily at 9pm Pacific<br />
                  Schedule mail by January 27th 9pm Pacific to be postmarked by January 31st.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EFileMail;
