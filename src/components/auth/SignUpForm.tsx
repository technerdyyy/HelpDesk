import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface SignUpFormProps {
  onSignUp: (username: string, password: string, email: string) => void;
  onSignIn: () => void;
}

export function SignUpForm({ onSignUp, onSignIn }: SignUpFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp(username, password, email);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-card-foreground">
            Helpdesk System
          </CardTitle>
          <p className="">Sign up here</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-input border-border"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border"
              />
            </div>
            <Button type="submit" className="w-full bg-helpdesk-blue hover:bg-helpdesk-blue/90">
              Sign Up
            </Button>
          </form>
          
          <div className="flex justify-between text-sm">
            <button 
              onClick={onSignIn}
              className="text-red-500 hover:underline"
            >
              Forgot password
            </button>
            <button 
              onClick={onSignIn}
              className=" hover:underline"
            >
              Sign In
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}