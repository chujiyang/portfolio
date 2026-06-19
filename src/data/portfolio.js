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
      title: 'ML & Backend Developer + PM',
      company: 'LinkedIn x Cornell Bowers CIS ASCEND Program',

      dateRange: 'Aug 2025 – Present',
      thumbnail: prism,
      techStack: ['Python', 'NLP', 'Transformers', 'Pydantic', 'FastAPI'],
      link: 'https://bowers.cornell.edu/belonging-bowers/ascend',
      linkLabel: 'ASCEND Website'
    },
    {
      id: 'work-2',
      title: 'Backend Developer',
      company: 'Women in Computing at Cornell x Enhansys',

      dateRange: 'Feb 2026 – Present',
      thumbnail: wicc,
      techStack: ['Python', 'PostgreSQL', 'TimeScaleDB', 'FastAPI', 'Docker'],
      link: 'https://wicc.cornell.edu/#/',
      linkLabel: 'WICC Website'
    },
    {
      id: 'work-3',
      title: 'Junior Software Engineer',
      company: 'CampusEdge AI',
      dateRange: 'Feb 2026 – May 2026',
      thumbnail: portfolioDashboard,
      techStack: ['Python', 'Claude API', 'Snowflake', 'DuckDB', 'FastAPI', 'Next.js'],
      link: 'https://www.campusedge.ai/',
      linkLabel: 'CampusEdge AI Website'
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
      link: 'https://github.com/julyc25/Bonk',
      linkLabel: 'Bonk GitHub'
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
      title: 'LLM Tutoring Evaluation Across Languages | Research Assistant',
      company: 'Cornell BURE Program',

      dateRange: 'June 2026 – Present',
      thumbnail: bure,
      techStack: [],
      link: 'https://bowers.cornell.edu/research/undergraduate-research/bowers-undergraduate-research-experience',
      linkLabel: 'BURE Website'
    },
    {
      id: 'research-2',
      title: 'Marketplace Challenges and Conflicts of Ethical AI Policy',
      company: 'Polygence Research Program',

      dateRange: 'Jan 2024 – Dec 2024',
      thumbnail: polygence,
      techStack: [],
      link: 'https://www.academia.edu/125005015/Ethical_Regulation_in_the_AI_Marketplace',
      linkLabel: 'Research Paper Link'
    }
  ],

  hobbies: [
    {
      id: 'hobby-1',
      title: 'Digital Art',
      company: null,

      dateRange: '2018 – Present',
      thumbnail: art,
      techStack: [],
      link: null
    }
  ]
};
