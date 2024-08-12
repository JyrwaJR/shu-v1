import { Text } from '@components/text';
import { useRouter } from 'next/navigation';
import { ProjectType } from '@src/contents/my-projects';
import { Card } from '../ui/card';
import Link from 'next/link';
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
        <div className="absolute inset-0 flex flex-col items-center justify-end space-y-2 bg-black bg-opacity-50 py-2">
          <Text weight="bold" className="text-center uppercase text-white">
            {project.type}
          </Text>
          <Text weight="bold" className=" text-center uppercase text-white">
            View Project
          </Text>
        </div>
      </div>
    </Card>
  );
};
