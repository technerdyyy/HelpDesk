import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  activeItem: string;
  onItemClick: (item: string) => void;
  showSidebar?: boolean;
}

export function Layout({ children, activeItem, onItemClick, showSidebar = true }: LayoutProps) {
  if (!showSidebar) {
    return <div className="min-h-screen bg-background">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Navbar/>
      <Sidebar activeItem={activeItem} onItemClick={onItemClick} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}