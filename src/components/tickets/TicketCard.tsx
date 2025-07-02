import type { Ticket } from '../../types';

interface TicketCardProps {
  ticket: Ticket;
  onClick: (ticket: Ticket) => void;
}

const statusColors = {
  'New': 'bg-status-new',
  'In Progress': 'bg-status-progress', 
  'Resolved': 'bg-status-resolved',
  'Closed': 'bg-status-closed'
};

const priorityColors = {
  'Low': 'text-green-600',
  'Medium': 'text-yellow-600',
  'High': 'text-orange-600', 
  'Critical': 'text-red-600'
};

export function TicketCard({ ticket, onClick }: TicketCardProps) {
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
    <tr className="border-b border-border hover:bg-muted/50 cursor-pointer" onClick={() => onClick(ticket)}>
      <td className="px-4 py-3">
        <span className="text-primary hover:underline">{ticket.ticketNo}</span>
      </td>
      <td className="px-4 py-3">{ticket.subject}</td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 rounded text-white text-xs ${statusColors[ticket.status]}`}>
          {ticket.status}
        </span>
      </td>
      <td className="px-4 py-3">
        <span className={`font-medium ${priorityColors[ticket.priority]}`}>
          {ticket.priority}
        </span>
      </td>
      <td className="px-4 py-3">{ticket.date}</td>
      <td className="px-4 py-3">
        {renderStars(ticket.rating)}
      </td>
    </tr>
  );
}