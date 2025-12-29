import { Hero } from '@/components/ui/Hero';
import { ProjectsGrid } from '@/components/ui/ProjectsGrid';
import { Experience } from '@/components/ui/Experience';
import { Skills } from '@/components/ui/Skills';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ProjectsGrid />
      <Experience />
      <Skills />
    </div>
  );
}
