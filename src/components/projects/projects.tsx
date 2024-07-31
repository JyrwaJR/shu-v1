import React from 'react';
import Fade from '@components/fade';
import { ProjectsCard } from '@components/projects/projects-card';
import { shuProjects } from '@src/contents/my-projects';
import { Text } from '@components/text';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '../ui/carousel';
const Project = () => {
  const projectDesigns = shuProjects.filter(
    (project) => project.category === 'project'
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="projects" className="h-full overflow-hidden">
      <div className="h-full">
        <div className="flex flex-col items-center justify-center space-y-10 py-5">
          <Text
            size="displayL"
            weight="extraBold"
            className="whitespace-nowrap text-lightestSlate"
          >
            Project Designs
          </Text>
          <div className="flex w-full max-w-sm flex-col items-center justify-center px-4 md:max-w-6xl">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent className="space-x-4">
                {projectDesigns.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectsCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground md:hidden">
              Slide {current} of {count}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
