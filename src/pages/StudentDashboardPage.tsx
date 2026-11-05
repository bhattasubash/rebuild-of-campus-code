import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUser, UserProfile } from '../data/user';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopNav from '../components/dashboard/DashboardTopNav';
import OverviewView from '../components/dashboard/OverviewView';
import MyEventsView from '../components/dashboard/MyEventsView';
import EventsView from '../components/dashboard/EventsView';
import PlaceholderView from '../components/dashboard/PlaceholderView';

export default function StudentDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [user, setUser] = useState<UserProfile>(mockUser);

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const handleRefresh = () => {
    // Soft reload
    const prev = activeTab;
    setActiveTab('');
    setTimeout(() => setActiveTab(prev), 100);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewView userName={user.name} onNavigateTab={setActiveTab} />;
      case 'My Events':
        return <MyEventsView />;
      case 'Events':
        return <EventsView />;
      default:
        return <PlaceholderView title={activeTab} />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#f7f7f4] text-[#111111]">
      <DashboardSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        userName={user.name}
        onLogout={handleLogout}
      />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <DashboardTopNav
          activeTab={activeTab}
          userName={user.name}
          onRefresh={handleRefresh}
        />
        <main className="flex-1 p-8">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}
