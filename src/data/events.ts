export interface EventItem {
  id: string;
  title: string;
  code: string;
  event_type: 'hackathon' | 'quiz';
  category: string;
  status: 'LIVE' | 'OPEN' | 'UPCOMING' | 'COMPLETED';
  mode: 'ONLINE' | 'HYBRID' | 'OFFLINE';
  start_date: string;
  end_date: string;
  registration_deadline?: string;
  description: string;
  invite_only: boolean;
  registration_id?: string;
  team_name?: string;
  is_registered?: boolean;
}

export const mockEvents: EventItem[] = [
  {
    id: 'evt_rebuild26',
    title: "ReBuild '26",
    code: 'CC-RB26',
    event_type: 'hackathon',
    category: 'RECREATE & REBUILD',
    status: 'LIVE',
    mode: 'ONLINE',
    start_date: '06 Nov 2026',
    end_date: '07 Nov 2026',
    registration_deadline: '05 Nov 2026, 6:00 PM',
    description: 'Recreate it faithfully on Friday. Rebuild it beautifully on Saturday. Individual hackathon. Frontend only. Mock data fine.',
    invite_only: true,
    registration_id: 'CC-REG-2026-001',
    team_name: 'Solo Builder (Tracking)',
    is_registered: true,
  },
  {
    id: 'evt_quiz_2',
    title: "FirstCommit '26 Quiz Competition 2.0",
    code: 'CC-FCQ2',
    event_type: 'quiz',
    category: 'SPEED QUIZ',
    status: 'COMPLETED',
    mode: 'ONLINE',
    start_date: '28 Oct 2026',
    end_date: '28 Oct 2026',
    description: 'Speed competition testing frontend engineering, modern web standards, and UI precision.',
    invite_only: false,
    registration_id: 'CC-REG-2026-002',
    team_name: 'Individual',
    is_registered: true,
  },
  {
    id: 'evt_quiz_1',
    title: "FirstCommit '26 Quiz Competition",
    code: 'CC-FCQ1',
    event_type: 'quiz',
    category: 'SPEED QUIZ',
    status: 'COMPLETED',
    mode: 'ONLINE',
    start_date: '20 Oct 2026',
    end_date: '20 Oct 2026',
    description: 'Inaugural CampusCode engineering trivia and algorithm contest.',
    invite_only: false,
    registration_id: 'CC-REG-2026-003',
    team_name: 'Individual',
    is_registered: true,
  },
  {
    id: 'evt_ai_innovate',
    title: 'AI Innovation Challenge',
    code: 'CC-AI26',
    event_type: 'hackathon',
    category: 'ARTIFICIAL INTELLIGENCE',
    status: 'OPEN',
    mode: 'ONLINE',
    start_date: '15 Nov 2026',
    end_date: '17 Nov 2026',
    description: 'Build intelligent solutions for problems that matter in student and campus life.',
    invite_only: false,
    is_registered: false,
  },
  {
    id: 'evt_future_web',
    title: 'Future Web Hackathon',
    code: 'CC-FW26',
    event_type: 'hackathon',
    category: 'WEB DEVELOPMENT',
    status: 'OPEN',
    mode: 'ONLINE',
    start_date: '22 Nov 2026',
    end_date: '24 Nov 2026',
    description: 'Design and ship the next generation of digital experiences.',
    invite_only: false,
    is_registered: false,
  },
  {
    id: 'evt_campus_tech',
    title: 'Campus Tech Arena',
    code: 'CC-CT26',
    event_type: 'hackathon',
    category: 'SMART TECHNOLOGY',
    status: 'UPCOMING',
    mode: 'ONLINE',
    start_date: '01 Dec 2026',
    end_date: '03 Dec 2026',
    description: 'Create technology that makes student life better.',
    invite_only: false,
    is_registered: false,
  },
];
