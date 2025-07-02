import { useNavigate } from 'react-router-dom';
import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';
import { Layout } from '../components/layout/Layout';
// import { useToast } from '@/hooks/use-toast';

const ForgotPassword = () => {
  const navigate = useNavigate();
//   const { toast } = useToast();

  const handleSubmit = (email: string) => {
    // toast({
    //   title: "Reset Link Sent",
    //   description: "Password reset link has been sent to your email!",
    // });
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/');
  };

  return (
    <Layout showSidebar={false} activeItem="" onItemClick={() => {}}>
      <ForgotPasswordForm onSubmit={handleSubmit} onSignIn={handleSignIn} />
    </Layout>
  );
};

export default ForgotPassword;