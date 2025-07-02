import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { UserProfile } from '../components/profile/UserProfile';
import { mockUser } from '../data/mockData';
// import { useToast } from '@/hooks/use-toast';

const Profile = () => {
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

  const handleEditProfile = () => {
    navigate('/settings');
  };

  const handleGiveFeedback = () => {
    // toast({
    //   title: "Feedback Submitted",
    //   description: "Thank you for your feedback!",
    // });
  };

  return (
    <Layout activeItem={activeItem} onItemClick={handleItemClick}>
      <UserProfile 
        user={mockUser}
        onEditProfile={handleEditProfile}
        onGiveFeedback={handleGiveFeedback}
      />
    </Layout>
  );
};

export default Profile;