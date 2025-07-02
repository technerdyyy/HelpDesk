import { MetricCard } from './MetricCard';
import type { DashboardStats as StatsType } from '../../types';

interface DashboardStatsProps {
  stats: StatsType;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard title="New Tickets" value={stats.newTickets} color="blue" />
      <MetricCard title="In Progress" value={stats.inProgress} color="green" />
      <MetricCard title="Resolved" value={stats.resolved} color="red" />
      <MetricCard title="Closed" value={stats.closed} color="yellow" />
    </div>
  );
}