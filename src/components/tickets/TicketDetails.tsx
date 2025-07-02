import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import type { Ticket } from '../../types';

interface TicketDetailsProps {
  ticket: Ticket;
  onClose: () => void;
}

export function TicketDetails({ ticket, onClose }: TicketDetailsProps) {
  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Ticket Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Ticket No:</span>
              <p>{ticket.ticketNo}</p>
            </div>
            <div>
              <span className="font-medium">Date:</span>
              <p>{ticket.date}</p>
            </div>
          </div>

          <div>
            <span className="font-medium text-sm">Name:</span>
            <p>{ticket.name}</p>
          </div>

          <div>
            <span className="font-medium text-sm">Title:</span>
            <p>{ticket.subject}</p>
          </div>

          <div>
            <span className="font-medium text-sm">Description:</span>
            <p className="text-sm text-muted-foreground">{ticket.description}</p>
          </div>

          <div>
            <span className="font-medium text-sm">Priority:</span>
            <p>{ticket.priority}</p>
          </div>

          <div>
            <span className="font-medium text-sm">Status:</span>
            <p>{ticket.status}</p>
          </div>

          <div>
            <span className="font-medium text-sm">Rating:</span>
            {renderStars(ticket.rating)}
          </div>

          <div className="flex justify-end pt-4">
            <Button 
              onClick={onClose}
              className="bg-[#03cc17] hover:bg-[#35cf44]"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}