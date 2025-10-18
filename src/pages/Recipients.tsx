import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Save } from 'lucide-react';

const Recipients = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const [formData, setFormData] = useState({
    // Basic Fields
    formType: '',
    recordType: '',
    paymentYear: '2024',
    correctedReturnIndicator: false,
    nameControl: '',
    typeOfTIN: '',
    payeesTIN: '',
    issuersAccountNumberForPayee: '',
    issuersOfficeCode: '',

    // 1099-NEC Specific Fields
    nonemployeeCompensation: '',
    directSales: '',
    excessGoldenParachutePayments: '',
    federalIncomeTaxWithheld: '',
    stateTaxWithheld: '',
    stateName: '',
    payersStateNo: '',
    stateIncome: '',
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBulkUpload = () => {
    // Handle bulk upload functionality
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,.xlsx';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Process the uploaded file
        console.log('Processing file:', file.name);
        // Here you would typically parse the CSV/Excel file
        // For now, we'll just show a success message
        alert(`File "${file.name}" uploaded successfully!`);
      }
    };
    input.click();
  };

  const handleEditRecord = (record) => {
    setIsEditMode(true);
    setEditingRecord(record);
    setFormData({
      formType: record.formType || '',
      recordType: record.recordType || '',
      paymentYear: record.paymentYear || '2024',
      correctedReturnIndicator: record.correctedReturnIndicator || false,
      nameControl: record.nameControl || '',
      typeOfTIN: record.typeOfTIN || '',
      payeesTIN: record.payeesTIN || '',
      issuersAccountNumberForPayee: record.issuersAccountNumberForPayee || '',
      issuersOfficeCode: record.issuersOfficeCode || '',
      nonemployeeCompensation: record.nonemployeeCompensation || '',
      directSales: record.directSales || '',
      excessGoldenParachutePayments: record.excessGoldenParachutePayments || '',
      federalIncomeTaxWithheld: record.federalIncomeTaxWithheld || '',
      stateTaxWithheld: record.stateTaxWithheld || '',
      stateName: record.stateName || '',
      payersStateNo: record.payersStateNo || '',
      stateIncome: record.stateIncome || '',
    });
  };

  const handleSave = async () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (isEditMode) {
        // Update existing record
        console.log('Updating record:', formData);
        alert('Record updated successfully!');
        setIsEditMode(false);
        setEditingRecord(null);
        // Reset form for new entry
        setFormData({
          formType: '',
          recordType: '',
          paymentYear: '2024',
          correctedReturnIndicator: false,
          nameControl: '',
          typeOfTIN: '',
          payeesTIN: '',
          issuersAccountNumberForPayee: '',
          issuersOfficeCode: '',
          nonemployeeCompensation: '',
          directSales: '',
          excessGoldenParachutePayments: '',
          federalIncomeTaxWithheld: '',
          stateTaxWithheld: '',
          stateName: '',
          payersStateNo: '',
          stateIncome: '',
        });
      } else {
        // Create new record
        console.log('Creating new record:', formData);
        alert('New record created successfully!');
      }
      // Navigate back to forms summary after saving
      navigate('/forms-summary');
    }, 1500);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditingRecord(null);
    setFormData({
      formType: '',
      recordType: '',
      paymentYear: '2024',
      correctedReturnIndicator: false,
      nameControl: '',
      typeOfTIN: '',
      payeesTIN: '',
      issuersAccountNumberForPayee: '',
      issuersOfficeCode: '',
      nonemployeeCompensation: '',
      directSales: '',
      excessGoldenParachutePayments: '',
      federalIncomeTaxWithheld: '',
      stateTaxWithheld: '',
      stateName: '',
      payersStateNo: '',
      stateIncome: '',
    });
    navigate('/payers');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-gray-200"
      >
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCancel}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Payers
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                {isEditMode ? 'Edit Payee' : 'Add New Payee'}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleBulkUpload}
                className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
              >
                <Upload className="h-4 w-4 mr-2" />
                Bulk Upload
              </button>

              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                {isLoading ? 'Saving...' : (isEditMode ? 'Update' : 'Save')}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Description */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800">
              {isEditMode
                ? 'Edit the payee record details below.'
                : 'You can either manually add a new record below or upload a CSV file.'
              }
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Payee Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Form Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.formType}
                    onChange={(e) => handleInputChange('formType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Form Type</option>
                    <option value="1099-NEC">1099-NEC</option>
                    <option value="1099-MISC">1099-MISC</option>
                  </select>
                </div>

                {/* Record Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Record Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.recordType}
                    onChange={(e) => handleInputChange('recordType', e.target.value)}
                    placeholder="Enter record type (R)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Payment Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.paymentYear}
                    onChange={(e) => handleInputChange('paymentYear', e.target.value)}
                    placeholder="Enter payment year (e.g., 2024)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Corrected Return Indicator */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="correctedReturnIndicator"
                    checked={formData.correctedReturnIndicator}
                    onChange={(e) => handleInputChange('correctedReturnIndicator', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="correctedReturnIndicator" className="ml-2 block text-sm text-gray-700">
                    Corrected Return Indicator
                  </label>
                </div>

                {/* Name Control */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name Control
                  </label>
                  <input
                    type="text"
                    value={formData.nameControl}
                    onChange={(e) => handleInputChange('nameControl', e.target.value)}
                    placeholder="Enter name control"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Type of TIN */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of TIN
                  </label>
                  <input
                    type="text"
                    value={formData.typeOfTIN}
                    onChange={(e) => handleInputChange('typeOfTIN', e.target.value)}
                    placeholder="Enter TIN type (1-EIN, 2-SSN, 9-Other)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Payee's TIN */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payee's TIN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.payeesTIN}
                    onChange={(e) => handleInputChange('payeesTIN', e.target.value)}
                    placeholder="XXX-XX-XXXX"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Issuer's Account Number for Payee */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer's Account Number for Payee <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.issuersAccountNumberForPayee}
                    onChange={(e) => handleInputChange('issuersAccountNumberForPayee', e.target.value)}
                    placeholder="Enter account number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Issuer's Office Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer's Office Code
                  </label>
                  <input
                    type="text"
                    value={formData.issuersOfficeCode}
                    onChange={(e) => handleInputChange('issuersOfficeCode', e.target.value)}
                    placeholder="Enter office code"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 1099-NEC Specific Fields - 1. Nonemployee compensation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    1. Nonemployee compensation
                  </label>
                  <input
                    type="text"
                    value={formData.nonemployeeCompensation}
                    onChange={(e) => handleInputChange('nonemployeeCompensation', e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 2. Direct sales ≥ $5,000 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    2. Direct sales ≥ $5,000
                  </label>
                  <input
                    type="text"
                    value={formData.directSales}
                    onChange={(e) => handleInputChange('directSales', e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 3. Excess golden parachute payments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    3. Excess golden parachute payments
                  </label>
                  <input
                    type="text"
                    value={formData.excessGoldenParachutePayments}
                    onChange={(e) => handleInputChange('excessGoldenParachutePayments', e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 4. Federal income tax withheld */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    4. Federal income tax withheld
                  </label>
                  <input
                    type="text"
                    value={formData.federalIncomeTaxWithheld}
                    onChange={(e) => handleInputChange('federalIncomeTaxWithheld', e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 5. State tax withheld */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    5. State tax withheld
                  </label>
                  <input
                    type="text"
                    value={formData.stateTaxWithheld}
                    onChange={(e) => handleInputChange('stateTaxWithheld', e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 6.i. State name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    6.i. State name
                  </label>
                  <input
                    type="text"
                    value={formData.stateName}
                    onChange={(e) => handleInputChange('stateName', e.target.value)}
                    placeholder="Enter state name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 6.ii. Payer's state no. */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    6.ii. Payer's state no.
                  </label>
                  <input
                    type="text"
                    value={formData.payersStateNo}
                    onChange={(e) => handleInputChange('payersStateNo', e.target.value)}
                    placeholder="Enter payer's state number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 7. State income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    7. State income
                  </label>
                  <input
                    type="text"
                    value={formData.stateIncome}
                    onChange={(e) => handleInputChange('stateIncome', e.target.value)}
                    placeholder="Enter state income"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Recipients;
