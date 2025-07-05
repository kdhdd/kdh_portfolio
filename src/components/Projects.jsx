import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Section = styled.section`
  width: 100vw;
  background: #fff;
  color: #0f172a;
  padding: 4rem 0;
`;
const CenterBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  span {
    background: linear-gradient(to right, #0ea5e9, #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;
const SubTitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 32rem;
`;
const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  width: 100vw;
  max-width: 1200px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 #0001;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const ProjectImageBox = styled.div`
  position: relative;
  height: 16rem;
  overflow: hidden;
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;
const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0009, transparent);
`;
const ProjectLinks = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
`;
const ProjectLinkBtn = styled(motion.a)`
  width: 2.5rem;
  height: 2.5rem;
  background: #fff3;
  backdrop-filter: blur(4px);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: background 0.2s;
  &:hover { background: #fff5; }
`;
const ProjectContent = styled.div`
  padding: 2rem;
  background: #fff;
`;
const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 0.75rem;
`;
const ProjectDesc = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const ProjectTag = styled.span`
  background: #bae6fd;
  color: #0ea5e9;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
`;
const OtherGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100vw;
  max-width: 1200px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const OtherCard = styled(motion.div)`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 #0001;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const OtherImageBox = styled.div`
  position: relative;
  height: 12rem;
  overflow: hidden;
`;
const OtherImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  ${OtherCard}:hover & {
    transform: scale(1.05);
  }
`;
const OtherOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0009, transparent);
`;
const OtherLinks = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  gap: 0.5rem;
`;
const OtherLinkBtn = styled(motion.a)`
  width: 2rem;
  height: 2rem;
  background: #fff3;
  backdrop-filter: blur(4px);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: background 0.2s;
  &:hover { background: #fff5; }
`;
const OtherContent = styled.div`
  padding: 1.25rem;
  background: #fff;
`;
const OtherTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;
const OtherDesc = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
`;
const OtherTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;
const OtherTag = styled.span`
  background: #bae6fd;
  color: #0ea5e9;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 9999px;
  padding: 0.15rem 0.6rem;
`;
const CTABox = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
`;
const CTAButton = styled(motion.button)`
  background: #0284c7;
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #0369a1; }
`;

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Framer Motion', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that displays current weather and forecasts using OpenWeatherMap API with location-based services.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenWeatherMap API', 'Geolocation', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode support.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, message history, and file sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking app with workout planning, progress monitoring, and nutrition tracking features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'AsyncStorage'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <Section id="projects">
      <CenterBox>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Projects</span>
        </Title>
        <SubTitle>
          A showcase of my recent work and projects that demonstrate my skills and passion for development
        </SubTitle>
        <FeaturedGrid>
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImageBox>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectOverlay />
                <ProjectLinks>
                  <ProjectLinkBtn
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </ProjectLinkBtn>
                  <ProjectLinkBtn
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </ProjectLinkBtn>
                </ProjectLinks>
              </ProjectImageBox>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.description}</ProjectDesc>
                <ProjectTags>
                  {project.technologies.map((tech, techIndex) => (
                    <ProjectTag key={techIndex}>{tech}</ProjectTag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </FeaturedGrid>
        <OtherGrid>
          {projects.filter(p => !p.featured).map((project, index) => (
            <OtherCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <OtherImageBox>
                <OtherImage src={project.image} alt={project.title} />
                <OtherOverlay />
                <OtherLinks>
                  <OtherLinkBtn
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye size={14} />
                  </OtherLinkBtn>
                  <OtherLinkBtn
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={14} />
                  </OtherLinkBtn>
                </OtherLinks>
              </OtherImageBox>
              <OtherContent>
                <OtherTitle>{project.title}</OtherTitle>
                <OtherDesc>{project.description}</OtherDesc>
                <OtherTags>
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <OtherTag key={techIndex}>{tech}</OtherTag>
                  ))}
                  {project.technologies.length > 3 && (
                    <OtherTag>+{project.technologies.length - 3}</OtherTag>
                  )}
                </OtherTags>
              </OtherContent>
            </OtherCard>
          ))}
        </OtherGrid>
        <CTABox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
            Interested in working together? Let's discuss your project!
          </p>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </CTAButton>
        </CTABox>
      </CenterBox>
    </Section>
  );
};

export default Projects; 