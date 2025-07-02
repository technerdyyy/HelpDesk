export interface User {
    id: string;
    username: string;
    email: string;
    name: string;
    avatar?: string;
    department: string;
  }
  
  export interface Ticket {
    id: string;
    ticketNo: string;
    name: string;
    subject: string;
    status: 'New' | 'In Progress' | 'Resolved' | 'Closed';
    priority: 'Low' | 'Medium' | 'High' | 'Critical';
    date: string;
    rating?: number;
    description?: string;
    category: string;
    type: string;
  }
  
  export interface DashboardStats {
    newTickets: number;
    inProgress: number;
    resolved: number;
    closed: number;
  }