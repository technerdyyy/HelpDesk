import { cn } from "../../lib/utils";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'new-ticket', label: 'New Ticket' },
  { id: 'my-tickets', label: 'My Ticket'}
];

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <div className="w-48 bg-[#cecece] h-[calc(100vh-3.5rem)] mt-14 flex flex-col overflow-y-auto">
      
      <nav className="flex-1 p-2">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 mb-1 rounded text-left font-bold transition-colors",
              activeItem === item.id
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            )}
          >
            
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}