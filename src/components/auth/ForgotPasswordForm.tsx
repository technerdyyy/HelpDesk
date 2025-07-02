import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => void;
  onSignIn: () => void;
}

export function ForgotPasswordForm({ onSubmit, onSignIn }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-card-foreground">
            Helpdesk System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-muted-foreground mb-4">
            <p>Don't worry! Enter your email below and we will</p>
            <p>send you a link to change password</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border"
              />
            </div>
            <Button type="submit" className="w-full bg-helpdesk-teal hover:bg-helpdesk-teal/90">
              Submit
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onSignIn}
              className="w-full border-primary text-primary hover:bg-primary/10"
            >
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}