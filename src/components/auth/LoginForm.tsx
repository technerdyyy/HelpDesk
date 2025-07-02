import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { dummyCredentials } from '../../data/mockData';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
}

export function LoginForm({ onLogin, onSignUp, onForgotPassword }: LoginFormProps) {
  const [username, setUsername] = useState(dummyCredentials.username);
  const [password, setPassword] = useState(dummyCredentials.password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
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
            <Button type="submit" className="w-full bg-helpdesk-yellow hover:bg-helpdesk-yellow/90 text-black font-semibold">
              Sign In
            </Button>
          </form>
          
          <div className="flex justify-between text-sm">
            <button 
              onClick={onForgotPassword}
              className="text-primary hover:underline"
            >
              Forgot password
            </button>
            <button 
              onClick={onSignUp}
              className="text-primary hover:underline"
            >
              Sign Up
            </button>
          </div>
          
          <div className="text-xs text-muted-foreground text-center mt-4 p-2 bg-muted rounded">
            <p><strong>Demo Login:</strong></p>
            <p>Username: {dummyCredentials.username}</p>
            <p>Password: {dummyCredentials.password}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}