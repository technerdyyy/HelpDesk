import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ProfileSettings } from '../components/profile/ProfileSettings';
import { mockUser } from '../data/mockData';
// import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const navigate = useNavigate();
//   const { toast } = useToast();
  const [activeItem, setActiveItem] = useState('');

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

  const handleSave = (userData: any) => {
    // toast({
    //   title: "Profile Updated",
    //   description: "Your profile has been updated successfully!",
    // });
    navigate('/profile');
  };

  return (
    <Layout activeItem={activeItem} onItemClick={handleItemClick}>
      <ProfileSettings user={mockUser} onSave={handleSave} />
    </Layout>
  );
};

export default Settings;