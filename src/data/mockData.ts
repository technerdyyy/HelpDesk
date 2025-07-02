import type { User, Ticket, DashboardStats } from '../../src/types';

export const mockUser: User = {
  id: '1',
  username: 'admin@helpdesk.com',
  email: 'admin@helpdesk.com',
  name: 'John Doe',
  avatar: '',
  department: 'IT Support'
};

export const mockStats: DashboardStats = {
  newTickets: 12,
  inProgress: 8,
  resolved: 2,
  closed: 2
};

export const mockTickets: Ticket[] = [
  {
    id: '1234',
    ticketNo: '1234',
    name: 'Login Issue',
    subject: 'Cannot login to system',
    status: 'New',
    priority: 'High',
    date: '14/08/23',
    rating: 5,
    description: 'User cannot login to the system with correct credentials',
    category: 'Technical',
    type: 'Bug'
  },
  {
    id: '1235',
    ticketNo: '1235',
    name: 'Password Reset',
    subject: 'Need password reset',
    status: 'In Progress',
    priority: 'Medium',
    date: '14/08/23',
    rating: 4,
    description: 'User forgot password and needs reset',
    category: 'Account',
    type: 'Request'
  },
  {
    id: '1236',
    ticketNo: '1236',
    name: 'Software Installation',
    subject: 'Install new software',
    status: 'Resolved',
    priority: 'Low',
    date: '13/08/23',
    rating: 5,
    description: 'Request to install new software on workstation',
    category: 'Software',
    type: 'Request'
  },
  {
    id: '1237',
    ticketNo: '1237',
    name: 'Network Issue',
    subject: 'Internet connection problem',
    status: 'Closed',
    priority: 'Critical',
    date: '12/08/23',
    rating: 3,
    description: 'No internet connection in office',
    category: 'Network',
    type: 'Incident'
  }
];

export const dummyCredentials = {
  username: 'admin@helpdesk.com',
  password: 'password123'
};