import { Text } from '@components/text';
import { buttonVariants } from '@components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icons from '@components/icon';
import { useRouter } from 'next/navigation';
import { ProjectType } from '@src/contents/my-projects';
import { Card } from '../ui/card';
export type ProjectsCardProps = {
  projectName: string;
  projectDescription: string;
  projectTechStack: string;
  projectLink?: string;
  githubLink?: string;
};

export const ProjectsCard = ({ project }: { project: ProjectType }) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`projects?id=${project.id}`)}
      className="relative aspect-[9/16] w-96 overflow-hidden hover:cursor-pointer"
    >
      <div className="flex h-full items-center justify-center">
        <img
          className="h-full w-full object-cover object-center"
          src={project.image[0]}
          alt={project.name}
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50">
          <Text weight="bold" className="p-4 text-center uppercase text-white">
            {project.type}
          </Text>
        </div>
      </div>
    </Card>
  );
};
