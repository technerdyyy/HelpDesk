import { cn } from "../../lib/utils";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'new-ticket', label: 'New Ticket', icon: '➕' },
  { id: 'my-tickets', label: 'My Ticket', icon: '🎫' }
];

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <div className="w-48 bg-sidebar h-screen flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="text-sidebar-foreground font-bold text-lg">Helpdesk</h1>
      </div>
      <nav className="flex-1 p-2">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 mb-1 rounded text-left transition-colors",
              activeItem === item.id
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            )}
          >
            <span className="text-sm">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}