import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const Section = styled.section`
  width: 100vw;
  background: #f8fafc;
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
  gap: 2rem;
  width: 100vw;
  max-width: 1200px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Card = styled(motion.div)`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 #0001;
  padding: 2rem;
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;
const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: #bae6fd;
  color: #0ea5e9;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0f172a;
`;
const SkillRow = styled.div`
  margin-bottom: 1.25rem;
`;
const SkillLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;
const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #334155;
`;
const SkillLevel = styled.span`
  font-size: 0.95rem;
  color: #64748b;
`;
const SkillBarBg = styled.div`
  width: 100%;
  background: #e2e8f0;
  border-radius: 9999px;
  height: 0.5rem;
`;
const SkillBar = styled(motion.div)`
  height: 0.5rem;
  border-radius: 9999px;
`;
const getLevelColor = (level) => {
  if (level >= 90) return '#22c55e';
  if (level >= 80) return '#0ea5e9';
  if (level >= 70) return '#eab308';
  return '#94a3b8';
};
const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
const TechItem = styled(motion.div)`
  background: #fff;
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 1px 4px 0 #0001;
  font-size: 1rem;
  font-weight: 500;
  color: #334155;
`;
const TechTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;
const TechDesc = styled.p`
  color: #64748b;
  margin-bottom: 1.5rem;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Firebase', level: 85 },
      ]
    },
    {
      title: 'Design & Tools',
      icon: <Palette size={24} />,
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Webpack', level: 75 },
        { name: 'Jest', level: 80 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 60 },
        { name: 'Mobile UI/UX', level: 80 },
        { name: 'App Store', level: 70 },
        { name: 'Firebase Mobile', level: 75 },
      ]
    },
    {
      title: 'Other Skills',
      icon: <Globe size={24} />,
      skills: [
        { name: 'SEO', level: 75 },
        { name: 'Performance', level: 80 },
        { name: 'Testing', level: 85 },
        { name: 'CI/CD', level: 75 },
        { name: 'Agile', level: 90 },
        { name: 'Team Leadership', level: 85 },
      ]
    }
  ];

  return (
    <Section id="skills">
      <CenterBox>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Skills</span>
        </Title>
        <SubTitle>
          A comprehensive overview of my technical expertise and professional capabilities
        </SubTitle>
        <Grid>
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <CardHeader>
                <CardIcon>{category.icon}</CardIcon>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillRow key={skillIndex}>
                    <SkillLabelRow>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>{skill.level}%</SkillLevel>
                    </SkillLabelRow>
                    <SkillBarBg>
                      <SkillBar
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{ background: getLevelColor(skill.level), width: `${skill.level}%` }}
                      />
                    </SkillBarBg>
                  </SkillRow>
                ))}
              </div>
            </Card>
          ))}
        </Grid>
        <TechTitle>Languages & Tools</TechTitle>
        <TechDesc>Technologies I work with on a daily basis</TechDesc>
        <TechGrid>
          {[
            'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL',
            'AWS', 'Docker', 'Git', 'Figma', 'Jest', 'Webpack'
          ].map((tech, index) => (
            <TechItem
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </TechItem>
          ))}
        </TechGrid>
      </CenterBox>
    </Section>
  );
};

export default Skills; 