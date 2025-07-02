import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { mockStats } from '../data/mockData';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    
    switch (item) {
      case 'dashboard':
        navigate('/dashboard');
        break;
      case 'new-ticket':
        navigate('/new-ticket');
        break;
      case 'my-tickets':
        navigate('/my-tickets');
        break;
    }
  };

  return (
    <Layout activeItem={activeItem} onItemClick={handleItemClick}>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        </div>
        <DashboardStats stats={mockStats} />
      </div>
    </Layout>
  );
};

export default Dashboard;