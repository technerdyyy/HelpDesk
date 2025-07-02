import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { User } from '../../types';

interface ProfileSettingsProps {
  user: User;
  onSave: (userData: Partial<User>) => void;
}

export function ProfileSettings({ user, onSave }: ProfileSettingsProps) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    department: user.department
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto mt-14 overflow-y-auto h-[calc(100vh-3.5rem)]">
      <Card className="bg-card border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">User Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-helpdesk-teal">Edit Account</label>
              </div>
              <div></div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-muted"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Current Password</label>
              <Input
                type="password"
                value={formData.currentPassword}
                onChange={(e) => setFormData({...formData, currentPassword: e.target.value})}
                className="bg-muted"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">New Password</label>
              <Input
                type="password"
                value={formData.newPassword}
                onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                className="bg-muted"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <Input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="bg-muted"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-muted"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input
                value={formData.name.split(' ')[0]}
                onChange={(e) => setFormData({...formData, name: e.target.value + ' ' + formData.name.split(' ')[1]})}
                className="bg-muted"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input
                value={formData.name.split(' ')[1] || ''}
                onChange={(e) => setFormData({...formData, name: formData.name.split(' ')[0] + ' ' + e.target.value})}
                className="bg-muted"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Department</label>
              <Input
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="bg-muted"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                type="submit"
                className="bg-helpdesk-teal hover:bg-helpdesk-teal/90"
              >
                Update Data
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}