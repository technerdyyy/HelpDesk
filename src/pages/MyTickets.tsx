import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { TicketList } from "../components/tickets/TicketList";
import { mockTickets } from '../data/mockData';

const MyTickets = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('my-tickets');

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
      <TicketList tickets={mockTickets} />
    </Layout>
  );
};

export default MyTickets;