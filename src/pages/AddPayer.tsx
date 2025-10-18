import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Save } from 'lucide-react';

const AddPayer = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const [formData, setFormData] = useState({
    recordType: '',
    paymentYear: '2024',
    combinedFederalStateFiling: false,
    issuerTIN: '',
    issuerNameControl: '',
    lastFilingIndicator: false,
    typeOfReturn: '',
    amountCodes: '',
    foreignEntityIndicator: false,
    firstIssuerNameLine: '',
    secondIssuerNameLine: '',
    transferAgentIndicator: false,
    issuerShippingAddress: '',
    issuerCity: '',
    issuerState: '',
    issuerZipCode: '',
    issuerTelephoneNumber: '',
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
      recordType: record.recordType || '',
      paymentYear: record.paymentYear || '2024',
      combinedFederalStateFiling: record.combinedFederalStateFiling || false,
      issuerTIN: record.issuerTIN || '',
      issuerNameControl: record.issuerNameControl || '',
      lastFilingIndicator: record.lastFilingIndicator || false,
      typeOfReturn: record.typeOfReturn || '',
      amountCodes: record.amountCodes || '',
      foreignEntityIndicator: record.foreignEntityIndicator || false,
      firstIssuerNameLine: record.firstIssuerNameLine || '',
      secondIssuerNameLine: record.secondIssuerNameLine || '',
      transferAgentIndicator: record.transferAgentIndicator || false,
      issuerShippingAddress: record.issuerShippingAddress || '',
      issuerCity: record.issuerCity || '',
      issuerState: record.issuerState || '',
      issuerZipCode: record.issuerZipCode || '',
      issuerTelephoneNumber: record.issuerTelephoneNumber || '',
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
          recordType: '',
          paymentYear: '2024',
          combinedFederalStateFiling: false,
          issuerTIN: '',
          issuerNameControl: '',
          lastFilingIndicator: false,
          typeOfReturn: '',
          amountCodes: '',
          foreignEntityIndicator: false,
          firstIssuerNameLine: '',
          secondIssuerNameLine: '',
          transferAgentIndicator: false,
          issuerShippingAddress: '',
          issuerCity: '',
          issuerState: '',
          issuerZipCode: '',
          issuerTelephoneNumber: '',
        });
      } else {
        // Create new record
        console.log('Creating new record:', formData);
        alert('New record created successfully!');
      }
      // Navigate back to payers page after saving
      navigate('/payers');
    }, 1500);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditingRecord(null);
    setFormData({
      recordType: '',
      paymentYear: '2024',
      combinedFederalStateFiling: false,
      issuerTIN: '',
      issuerNameControl: '',
      lastFilingIndicator: false,
      typeOfReturn: '',
      amountCodes: '',
      foreignEntityIndicator: false,
      firstIssuerNameLine: '',
      secondIssuerNameLine: '',
      transferAgentIndicator: false,
      issuerShippingAddress: '',
      issuerCity: '',
      issuerState: '',
      issuerZipCode: '',
      issuerTelephoneNumber: '',
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
                {isEditMode ? 'Edit Issuer' : 'Add New Issuer'}
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
                ? 'Edit the issuer record details below.'
                : 'You can either manually add a new record below or upload a CSV file.'
              }
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Issuer Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Record Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Record Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.recordType}
                    onChange={(e) => handleInputChange('recordType', e.target.value)}
                    placeholder="Enter record type (T, P, R)"
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

                {/* Combined Federal/State Filing Program */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="combinedFederalStateFiling"
                    checked={formData.combinedFederalStateFiling}
                    onChange={(e) => handleInputChange('combinedFederalStateFiling', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="combinedFederalStateFiling" className="ml-2 block text-sm text-gray-700">
                    Combined Federal/State Filing Program
                  </label>
                </div>

                {/* Issuer TIN */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer TIN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.issuerTIN}
                    onChange={(e) => handleInputChange('issuerTIN', e.target.value)}
                    placeholder="12-3456789"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Issuer Name Control */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer Name Control
                  </label>
                  <input
                    type="text"
                    value={formData.issuerNameControl}
                    onChange={(e) => handleInputChange('issuerNameControl', e.target.value)}
                    placeholder="Enter name control"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Last Filing Indicator */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="lastFilingIndicator"
                    checked={formData.lastFilingIndicator}
                    onChange={(e) => handleInputChange('lastFilingIndicator', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="lastFilingIndicator" className="ml-2 block text-sm text-gray-700">
                    Last Filing Indicator
                  </label>
                </div>

                {/* Type of Return */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Return <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.typeOfReturn}
                    onChange={(e) => handleInputChange('typeOfReturn', e.target.value)}
                    placeholder="Enter type of return (O, C, V)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Amount Codes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount Codes <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.amountCodes}
                    onChange={(e) => handleInputChange('amountCodes', e.target.value)}
                    placeholder="Enter amount codes"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Foreign Entity Indicator */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="foreignEntityIndicator"
                    checked={formData.foreignEntityIndicator}
                    onChange={(e) => handleInputChange('foreignEntityIndicator', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="foreignEntityIndicator" className="ml-2 block text-sm text-gray-700">
                    Foreign Entity Indicator
                  </label>
                </div>

                {/* First Issuer Name Line */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Issuer Name Line <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstIssuerNameLine}
                    onChange={(e) => handleInputChange('firstIssuerNameLine', e.target.value)}
                    placeholder="Enter first name line"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Second Issuer Name Line */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Second Issuer Name Line
                  </label>
                  <input
                    type="text"
                    value={formData.secondIssuerNameLine}
                    onChange={(e) => handleInputChange('secondIssuerNameLine', e.target.value)}
                    placeholder="Enter second name line"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Transfer Agent Indicator */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="transferAgentIndicator"
                    checked={formData.transferAgentIndicator}
                    onChange={(e) => handleInputChange('transferAgentIndicator', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="transferAgentIndicator" className="ml-2 block text-sm text-gray-700">
                    Transfer Agent Indicator
                  </label>
                </div>

                {/* Issuer Shipping Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer Shipping Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.issuerShippingAddress}
                    onChange={(e) => handleInputChange('issuerShippingAddress', e.target.value)}
                    placeholder="Enter shipping address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Issuer City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.issuerCity}
                    onChange={(e) => handleInputChange('issuerCity', e.target.value)}
                    placeholder="Enter city"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Issuer State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.issuerState}
                    onChange={(e) => handleInputChange('issuerState', e.target.value)}
                    placeholder="Enter state (e.g., CA, NY, TX)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Issuer Zip Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.issuerZipCode}
                    onChange={(e) => handleInputChange('issuerZipCode', e.target.value)}
                    placeholder="12345"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Issuer Telephone Number & Extension */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuer Telephone Number & Extension <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="tel"
                      value={formData.issuerTelephoneNumber}
                      onChange={(e) => handleInputChange('issuerTelephoneNumber', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Ext"
                      className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AddPayer;
