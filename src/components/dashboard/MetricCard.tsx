import { Card } from '../ui/card';

interface MetricCardProps {
  title: string;
  value: number;
  color: 'blue' | 'green' | 'red' | 'yellow';
}

const colorClasses = {
  blue: 'bg-metric-blue',
  green: 'bg-metric-green', 
  red: 'bg-metric-red',
  yellow: 'bg-metric-yellow'
};

export function MetricCard({ title, value, color }: MetricCardProps) {
  return (
    <Card className={`${colorClasses[color]} text-white p-6 border-0 shadow-md`}>
      <div className="text-center">
        <div className="text-3xl font-bold mb-2">{value}</div>
        <div className="text-sm font-medium">{title}</div>
      </div>
    </Card>
  );
}