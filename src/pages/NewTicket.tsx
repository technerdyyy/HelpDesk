import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { TicketForm } from '../components/tickets/TicketForm';
// import { useToast } from '@/hooks/use-toast';

const NewTicket = () => {
  const navigate = useNavigate();
//   const { toast } = useToast();
  const [activeItem, setActiveItem] = useState('new-ticket');

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

  const handleTicketSubmit = (ticketData: any) => {
    // toast({
    //   title: "Ticket Created",
    //   description: "Your ticket has been submitted successfully!",
    // });
    navigate('/my-tickets');
  };

  return (
    <Layout activeItem={activeItem} onItemClick={handleItemClick}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Create New Ticket</h1>
        <TicketForm onSubmit={handleTicketSubmit} />
      </div>
    </Layout>
  );
};

export default NewTicket;