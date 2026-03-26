import { ArrowUpRight } from 'lucide-react';
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import AnimatedBorderButton from '../components/AnimatedBorderButton';

const projects = [
  {
    title: "Ecommerce Dashboard",
    description: "I will make user friendly ecommerce website",
    image: "/projects/images.jpeg",
    tags: ["React", "Javascript", "html", "tailwindcss", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    title: "Authentication project",
    description: "I will make user friendly authentication website",
    image: "/projects/p3.png",
    tags: ["React", "Javascript", "Nodemailer", "tailwindcss", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    title: "weather application",
    description: "I will make user friendly weather website",
    image: "/projects/maxresdefault.jpg",
    tags: ["React", "Javascript", "html", "tailwindcss", "Node.js"],
    link: "#",
    github: "#"
  }
];

function Projects() {
  return (
    <div>
      <section id="projects" className="py-32 relative overflow-hidden">

        {/* background effects */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">

          {/* header */}
          <div className='text-center mx-auto max-w-3xl mb-16'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
              Featured work
            </span>

            <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
              Projects that
              <span className="font-serif italic font-normal text-white">
                {" "}make an impact.
              </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A selection of my recent work, from complex web applications to
              innovative tools that solve real-world problems.
            </p>
          </div>

          {/* projects grid */}
          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >

                {/* image */}
                <div className='relative overflow-hidden aspect-video'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60' />

                  {/* overlay buttons */}
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300'>
                    <a
                      href={project.link}
                      className='p-3 rounded-full glass hover:bg-primary-foreground transition-all'
                    >
                      <ArrowUpRight className='w-5 h-5' />
                    </a>

                    <a
                      href={project.github}
                      className='p-3 rounded-full glass hover:bg-primary-foreground transition-all'
                    >
                      <FaGithub className='w-5 h-5' />
                    </a>
                  </div>
                </div>

                {/* content */}
                <div className='p-6 space-y-4'>
                  <div className='flex items-start justify-between'>
                    <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                      {project.title}
                      <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all' />
                    </h3>
                  </div>

                  <p className='text-muted-foreground text-sm'>
                    {project.description}
                  </p>

                  {/* tags */}
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag, tagidx) => (
                      <span
                        key={`${tag}-${tagidx}`}
                        className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* button */}
          <div className='text-center mt-12 animate-fade-in animation-delay-500'>
            <AnimatedBorderButton>
              View All Projects
            </AnimatedBorderButton>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Projects