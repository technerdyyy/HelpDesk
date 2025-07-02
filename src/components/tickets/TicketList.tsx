import { useState } from 'react';
import { Input } from '../ui/input';
import { TicketCard } from './TicketCard';
import { TicketDetails } from './TicketDetails';
import type { Ticket } from '../../types';

interface TicketListProps {
  tickets: Ticket[];
}

export function TicketList({ tickets }: TicketListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.ticketNo.includes(searchTerm)
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">List of Ticket</h2>
        <div className="flex items-center gap-4 mb-4">
          <Input
            placeholder="Find tickets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs bg-input"
          />
          <select className="px-3 py-2 border border-border rounded-md bg-input">
            <option>Show</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="text-sm text-muted-foreground">entries</span>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium">Ticket #</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Priority</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Rate</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <TicketCard 
                key={ticket.id} 
                ticket={ticket} 
                onClick={setSelectedTicket}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
        <span>Showing 1 to {filteredTickets.length} of {filteredTickets.length} entries</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-border rounded">←</button>
          <button className="px-3 py-1 bg-primary text-primary-foreground rounded">1</button>
          <button className="px-3 py-1 border border-border rounded">→</button>
        </div>
      </div>

      {selectedTicket && (
        <TicketDetails 
          ticket={selectedTicket} 
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
}