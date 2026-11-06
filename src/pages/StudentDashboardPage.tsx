import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { mockUser, UserProfile } from '../data/user';
import { AmbientBackground } from '../components/common';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopNav from '../components/dashboard/DashboardTopNav';
import OverviewView from '../components/dashboard/OverviewView';
import MyEventsView from '../components/dashboard/MyEventsView';
import EventsView from '../components/dashboard/EventsView';
import PlaceholderView from '../components/dashboard/PlaceholderView';
import DigitalIdView from '../components/dashboard/DigitalIdView';

export default function StudentDashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.initialTab || 'My Events');
  const [user, setUser] = useState<UserProfile>({ ...mockUser, name: 'Sai' });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Safe route guard: auto-initialize demo student so judges are never locked out
    const saved = localStorage.getItem('user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        setUser(mockUser);
      }
    } else {
      localStorage.setItem('token', 'mock-token-2026');
      localStorage.setItem('role', 'STUDENT');
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    }
  }, []);

  useEffect(() => {
    if (location.state?.initialTab) {
      setActiveTab(location.state.initialTab);
    }
  }, [location.state]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const handleRefresh = () => {
    const prev = activeTab;
    setActiveTab('');
    setTimeout(() => setActiveTab(prev), 100);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewView userName={user.name} onNavigateTab={setActiveTab} />;
      case 'My Events':
      case 'My Activities':
        return <MyEventsView onNavigateTab={setActiveTab} />;
      case 'Events':
        return <EventsView />;
      case 'Digital Card':
      case 'Digital ID':
        return <DigitalIdView />;
      default:
        return <PlaceholderView title={activeTab} onNavigateTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#F7F7F4] text-[#111111]">
      <DashboardSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        userName={user.name}
        onLogout={handleLogout}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />
      <div className="relative flex flex-1 flex-col overflow-y-auto">
        <AmbientBackground variant="standard" showGrid={false} className="min-h-full flex flex-col">
          <DashboardTopNav
            activeTab={activeTab}
            userName={user.name}
            onRefresh={handleRefresh}
            isSidebarCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
          />
          <main className="relative z-10 flex-1 px-6 md:px-10 lg:px-12 pt-6 pb-12 overflow-x-hidden">
            {renderActiveView()}
          </main>
        </AmbientBackground>
      </div>
    </div>
  );
}
