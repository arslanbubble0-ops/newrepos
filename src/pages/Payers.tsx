import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Table from '../components/Table';
import payersData from '../data/payers.json';

const Payers = () => {
  const navigate = useNavigate();

  const columns = [
    { key: 'name', header: 'Payer Name' },
    { key: 'ein', header: 'EIN' },
    {
      key: 'address',
      header: 'Address',
      render: (value: string, row: any) => (
        <div className="text-sm">
          <div>{value}</div>
          <div className="text-gray-500">
            {row.city}, {row.state} {row.zip}
          </div>
        </div>
      ),
    },
    { key: 'contact', header: 'Contact' },
    { key: 'email', header: 'Email' },
    {
      key: 'id',
      header: 'Actions',
      render: () => (
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="danger" size="sm">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  const handleAddNewPayer = () => {
    navigate('/payers/add');
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Payer Overview</h1>
          </div>
          <div className="flex space-x-3">
            <Button variant="primary" onClick={handleAddNewPayer}>
              <Plus className="h-4 w-4 mr-2" />
              Add New Payer
            </Button>
            <Button variant="secondary">
              View All Payers
            </Button>
          </div>
        </div>

        <Card>
          <div className="p-6">
            <Table
              columns={columns}
              data={payersData}
              onRowClick={() => {
                // In real app, this would set the active payer in context
                // For now, we'll navigate to recipients page
                navigate('/recipients');
              }}
              emptyMessage="No payers found. Add your first payer to get started."
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Payers;
