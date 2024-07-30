import { ProjectType, shuProjects } from '@src/contents/my-projects';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { Text } from '../text';
import Fade from '../fade';
import ReactPlayer from 'react-player';

const ProjectPage = () => {
  const search = useSearchParams().get('id');
  const project: ProjectType | undefined = shuProjects.find(
    (project) => project.id === search
  );
  useEffect(() => {
    if (!search) {
      window.location.href = '/';
    }
  }, [search]);
  return (
    <div className=" flex flex-col items-start justify-between space-x-2 space-y-4 md:container md:flex-row md:space-y-0">
      <div className="order-2 flex h-full w-full flex-col space-y-4 md:order-1">
        {project && project.video && (
          <div className="aspect-video h-full w-full">
            <video
              controls
              width={'100%'}
              height={'100%'}
              loop
              autoPlay
              poster={project.image[0]}
            >
              <source src={project.video.url} type="video/mp4" />
            </video>
          </div>
        )}
        {project &&
          project.image.map((image, index) => (
            <Fade
              type="just"
              delay={index * 0.3}
              key={index}
              className="h-full w-full"
            >
              <img
                src={image}
                alt={project.name}
                className="aspect-video h-full w-full object-cover object-center"
              />
            </Fade>
          ))}
      </div>
      <div className="order-1 flex h-full flex-col space-y-4 py-2 md:order-2 md:w-[40%] md:py-0">
        <div className="h-full">
          <Text size={'displayM'} className="capitalize" weight={'bold'}>
            {project?.name}
          </Text>
        </div>
        <div className="h-full w-full space-y-4">
          <div className="flex space-x-2">
            <p className="font-bold">Project Type:</p>
            <p className="capitalize">{project?.type}.</p>
          </div>
          <div className="flex space-x-2">
            <p className="font-bold">Location:</p>
            <p className="capitalize">{project?.location}.</p>
          </div>
          {project?.desc && (
            <div className="flex space-x-2">
              <p>
                <span className="font-bold">Description:</span> {project?.desc}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
