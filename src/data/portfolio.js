import portfolioDashboard from '../assets/porfoliodashboard.png';
import prism from '../assets/prism.png';
import wicc from '../assets/wicc.png';
import cooked from '../assets/cooked.png';
import bonk from '../assets/bonk.png';
import critterWorld from '../assets/critterworld.png';
import prodify from '../assets/prodify.png';
import bure from '../assets/bure.png';
import polygence from '../assets/polygence.png';
import art from '../assets/art.png';

export const portfolioData = {
  work: [
    {
      id: 'work-1',
      title: 'ML & Backend Developer + Project Manager',
      company: 'LinkedIn x Cornell Bowers CIS ASCEND Program',

      dateRange: 'Aug 2025 – Present',
      thumbnail: prism,
      techStack: [],
      link: null
    },
    {
      id: 'work-2',
      title: 'Backend Developer',
      company: 'Women in Computing at Cornell x Enhansys',

      dateRange: 'Feb 2026 – Present',
      thumbnail: wicc,
      techStack: ['Python', 'PostgreSQL', 'TimeScaleDB', 'FastAPI', 'Docker'],
      link: null
    },
    {
      id: 'work-3',
      title: 'Junior Software Engineer',
      company: 'CampusEdge AI',
      dateRange: 'Feb 2026 – May 2026',
      thumbnail: portfolioDashboard,
      techStack: ['Python', 'Claude API', 'Snowflake', 'DuckDB', 'FastAPI', 'Next.js'],
      link: null
    }
  ],

  projects: [
    {
      id: 'project-1',
      title: 'Overcooked in OCaml | Cooked',
      company: 'CS 3110',

      dateRange: 'Mar 2026 – May 2026',
      thumbnail: cooked,
      techStack: ['OCaml', 'RayLib'],
      link: null
    },
    {
      id: 'project-2',
      title: 'Share Your Screen With Your Friends For Live Accountability | Bonk',
      company: null,

      dateRange: 'Mar 2026 – Mar 2026',
      thumbnail: bonk,
      techStack: ['Node.js', 'Express', 'Socket.io', 'WebRTC', 'OAuth', 'Figma'],
      link: null
    },
    {
      id: 'project-3',
      title: 'Critter World Simulation',
      company: 'CS 2112',

      dateRange: 'Oct 2025– Dec 2025',
      thumbnail: critterWorld,
      techStack: ['Java', 'JavaFX'],
      link: null
    },
    {
      id: 'project-4',
      title: 'Local Community Productivity App | Prodify',
      company: 'Girl Scouts of Western Washington',

      dateRange: 'Aug 2023 – Apr 2024',
      thumbnail: prodify,
      techStack: ['iOS'],
      link: null
    }
  ],
  research: [
    {
      id: 'research-1',
      title: 'Research Assistant',
      company: 'Cornell BURE Program',

      dateRange: 'June 2026 – Present',
      thumbnail: bure,
      techStack: [],
      link: null
    },
    {
      id: 'research-2',
      title: 'Highlighting Conflicting Stakeholder Values in Ethical AI Development',
      company: 'Polygence Research Program',

      dateRange: 'Jan 2024 – Dec 2024',
      thumbnail: polygence,
      techStack: [],
      link: null
    }
  ],

  hobbies: [
    {
      id: 'hobby-1',
      title: '(Mostly Celebrity) Digital Art',
      company: null,

      dateRange: '2018 – Present',
      thumbnail: art,
      techStack: ['IbisPaint X', 'Krita'],
      link: null
    }
  ]
};
