import styled from 'styled-components';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react';

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
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  width: 100vw;
  max-width: 1200px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Card = styled(motion.div)`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 #0001;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;
const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;
const InfoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: #bae6fd;
  color: #0ea5e9;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
const InfoLabel = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 0.1rem;
`;
const InfoValue = styled.p`
  color: #0f172a;
  font-size: 1.05rem;
`;
const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #0f172a;
`;
const Story = styled.div`
  margin-top: 2rem;
`;
const StoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #0f172a;
`;
const StoryText = styled.p`
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1rem;
`;
const ExperienceCard = styled(Card)`
  margin-bottom: 1.5rem;
`;
const ExpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;
const ExpTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
`;
const ExpPeriod = styled.span`
  font-size: 0.95rem;
  color: #0ea5e9;
  font-weight: 500;
`;
const ExpCompany = styled.p`
  color: #0ea5e9;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const ExpDesc = styled.p`
  color: #64748b;
  font-size: 0.98rem;
  line-height: 1.6;
`;

const About = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Your Name' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Seoul, South Korea' },
    { icon: <Calendar size={20} />, label: 'Birthday', value: 'January 1, 1990' },
    { icon: <Mail size={20} />, label: 'Email', value: 'your.email@example.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+82 10-1234-5678' },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Led development of multiple React applications, mentored junior developers, and implemented best practices for code quality and performance.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      period: '2020 - 2022',
      description: 'Built and maintained web applications using React, Node.js, and MongoDB. Collaborated with design and product teams.',
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Developed responsive websites and web applications. Worked with various technologies including JavaScript, HTML, CSS.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University Name',
      period: '2014 - 2018',
      description: 'Focused on software engineering and web development.',
    },
  ];

  return (
    <Section id="about">
      <CenterBox>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span>Me</span>
        </Title>
        <SubTitle>
          Passionate developer with a love for creating innovative solutions and beautiful user experiences
        </SubTitle>
        <Grid>
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Personal Information</SectionTitle>
            <div>
              {personalInfo.map((info, index) => (
                <InfoRow key={index}>
                  <InfoIcon>{info.icon}</InfoIcon>
                  <div>
                    <InfoLabel>{info.label}</InfoLabel>
                    <InfoValue>{info.value}</InfoValue>
                  </div>
                </InfoRow>
              ))}
            </div>
            <Story>
              <StoryTitle>My Story</StoryTitle>
              <StoryText>
                I'm a passionate full-stack developer with over 5 years of experience in creating 
                web applications. I love solving complex problems and turning ideas into reality 
                through clean, efficient code. When I'm not coding, you can find me exploring new 
                technologies, contributing to open-source projects, or enjoying a good cup of coffee.
              </StoryText>
              <StoryText>
                My journey in tech started with curiosity and has evolved into a deep passion for 
                creating meaningful digital experiences. I believe in writing code that not only 
                works but is also maintainable, scalable, and user-friendly.
              </StoryText>
            </Story>
          </motion.div>
          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Experience</SectionTitle>
            <div>
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExpHeader>
                    <ExpTitle>{exp.title}</ExpTitle>
                    <ExpPeriod>{exp.period}</ExpPeriod>
                  </ExpHeader>
                  <ExpCompany>{exp.company}</ExpCompany>
                  <ExpDesc>{exp.description}</ExpDesc>
                </ExperienceCard>
              ))}
            </div>
            <SectionTitle>Education</SectionTitle>
            <div>
              {education.map((edu, index) => (
                <ExperienceCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExpHeader>
                    <ExpTitle>{edu.degree}</ExpTitle>
                    <ExpPeriod>{edu.period}</ExpPeriod>
                  </ExpHeader>
                  <ExpCompany>{edu.school}</ExpCompany>
                  <ExpDesc>{edu.description}</ExpDesc>
                </ExperienceCard>
              ))}
            </div>
          </motion.div>
        </Grid>
      </CenterBox>
    </Section>
  );
};

export default About; 