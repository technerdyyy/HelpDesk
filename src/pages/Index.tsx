import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { Layout } from '../components/layout/Layout';
import { dummyCredentials } from '../data/mockData';
// import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const navigate = useNavigate();
//   const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === dummyCredentials.username && password === dummyCredentials.password) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    //   toast({
    //     title: "Login Successful",
    //     description: "Welcome to the Helpdesk System!",
    //   });
    } else {
    //   toast({
    //     title: "Login Failed",
    //     description: "Invalid credentials. Please try again.",
    //     variant: "destructive",
    //   });
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <Layout showSidebar={false} activeItem="" onItemClick={() => {}}>
      <LoginForm 
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        onForgotPassword={handleForgotPassword}
      />
    </Layout>
  );
};

export default Index;
