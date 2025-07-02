import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import type { User } from '../../types';

interface UserProfileProps {
  user: User;
  onEditProfile: () => void;
  onGiveFeedback: () => void;
}

export function UserProfile({ user, onEditProfile, onGiveFeedback }: UserProfileProps) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-foreground mb-6">User Profile</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-0 shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">{user.name}</h3>
            <p className="text-muted-foreground text-sm mb-1">{user.department}</p>
            <p className="text-muted-foreground text-sm">{user.email}</p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="bg-card border-0 shadow-sm">
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">Give Your Feedback</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We value your feedback to improve our service
              </p>
              <Button 
                onClick={onGiveFeedback}
                className="w-full bg-primary hover:bg-helpdesk-teal/90"
              >
                Submit Feedback
              </Button>
            </CardContent>
          </Card>

          <Button 
            onClick={onEditProfile}
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10"
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}