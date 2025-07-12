import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Cloud,
  Settings,
  Coffee,
  Leaf,
  Package,
  MessageSquare,
  Figma,
  BookOpen,
  Github,
  Palette,
  FileText,
} from "lucide-react";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #334155;
`;

const TechIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: #0ea5e9;
`;

const Skills = () => {
  const getTechIcon = (techName) => {
    const iconMap = {
      React: <Code size={20} />,
      JavaScript: <Code size={20} />,
      HTML: <FileText size={20} />,
      CSS: <Palette size={20} />,
      Java: <Coffee size={20} />,
      Spring: <Leaf size={20} />,
      MySQL: <Database size={20} />,
      Redis: <Database size={20} />,
      AWS: <Cloud size={20} />,
      Docker: <Package size={20} />,
      RabbitMQ: <MessageSquare size={20} />,
      "Apache Kafka": <MessageSquare size={20} />,
      Figma: <Figma size={20} />,
      Notion: <BookOpen size={20} />,
      Github: <Github size={20} />,
    };

    return iconMap[techName] || <Code size={20} />;
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
      ],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [{ name: "Java" }, { name: "Spring" }],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: [{ name: "MySQL" }, { name: "Redis" }],
    },
    {
      title: "DevOps",
      icon: <Cloud size={24} />,
      skills: [
        { name: "AWS" },
        { name: "Docker" },
        { name: "RabbitMQ" },
        { name: "Apache Kafka" },
      ],
    },
    {
      title: "Tools",
      icon: <Settings size={24} />,
      skills: [{ name: "Figma" }, { name: "Notion" }, { name: "Github" }],
    },
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
          <span>Skills</span>
        </Title>
        <SubTitle>도전과 성장의 과정에서 익힌 기술 스택입니다.</SubTitle>
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
                    <SkillName>{skill.name}</SkillName>
                    <TechIcon>{getTechIcon(skill.name)}</TechIcon>
                  </SkillRow>
                ))}
              </div>
            </Card>
          ))}
        </Grid>
      </CenterBox>
    </Section>
  );
};

export default Skills;
