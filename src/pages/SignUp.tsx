import { useNavigate } from 'react-router-dom';
import { SignUpForm } from '../components/auth/SignUpForm';
import { Layout } from '../components/layout/Layout';
// import { useToast } from '@/hooks/use-toast';

const SignUp = () => {
  const navigate = useNavigate();
//   const { toast } = useToast();

  const handleSignUp = (username: string, password: string, email: string) => {
    // In a real app, this would create the account
    // toast({
    //   title: "Account Created",
    //   description: "Your account has been created successfully!",
    // });
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/');
  };

  return (
    <Layout showSidebar={false} activeItem="" onItemClick={() => {}}>
      <SignUpForm onSignUp={handleSignUp} onSignIn={handleSignIn} />
    </Layout>
  );
};

export default SignUp;