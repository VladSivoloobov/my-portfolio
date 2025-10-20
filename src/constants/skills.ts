import {
  Code2,
  Smartphone,
  Database,
  Layers,
  Palette,
  Server,
  Cloud,
  FileCode,
  Terminal,
  Cpu,
  GitBranch,
  Blocks,
} from 'lucide-react';

export const PRIMARY_SKILLS = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Layers },
  { name: 'React Native', icon: Smartphone },
  { name: 'TypeScript', icon: FileCode },
  { name: 'JavaScript', icon: Terminal },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'CSS/SCSS', icon: Palette },
  { name: 'Node.js', icon: Server },
  { name: 'Nest.js', icon: Server },
  { name: 'Express', icon: Cloud },
  { name: 'MongoDB', icon: Database },
  { name: 'Prisma', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'REST API', icon: Cloud },
  { name: 'GraphQL', icon: Blocks },
] as const;

export const SECONDARY_SKILLS = [
  { name: 'C#', icon: Code2 },
  { name: 'Swift', icon: Smartphone },
  { name: 'C++', icon: Cpu },
] as const;
