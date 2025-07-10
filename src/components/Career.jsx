import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  color: #0f172a;
  padding: 4rem 0;
`;
const CenterBox = styled.div`
  margin-top: 1.5rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
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
const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #0f172a;
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
  white-space: pre-line;
`;

const Career = () => {
  const experiences = [
    {
      title: "멋쟁이사자처럼 프론트엔드 아기사자",
      company: "LIKELION UNIV 13TH",
      period: "2025.03.15 - Present",
      description:
        "Led development of multiple React applications, mentored junior developers, and implemented best practices for code quality and performance.",
    },
    {
      title: "서경SW 아카데미",
      company: "Seokyeong University",
      period: "2025.02.17 - 2025.07.01",
      description:
        "Built and maintained web applications using React, Node.js, and MongoDB. Collaborated with design and product teams.",
    },
    {
      title: "멋쟁이사자처럼 백엔드 아기사자",
      company: "LIKELION UNIV 12TH",
      period: "2024.03.09 - 2024.12.02",
      description:
        "Developed responsive websites and web applications. Worked with various technologies including JavaScript, HTML, CSS.",
    },
  ];

  const awards = [
    {
      title: "동상",
      organization: "HECTO",
      period: "2025.06.26",
      description: "서경SW 아카데미 HECTO 주관 동상 수상",
    },
  ];

  return (
    <Section id="career">
      <CenterBox>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Career</span>
        </Title>
        <SubTitle>배움과 도전의 발자취를 소개합니다.</SubTitle>
        <Grid>
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
          </motion.div>
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Awards</SectionTitle>
            <div>
              {awards.map((award, index) => (
                <ExperienceCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExpHeader>
                    <ExpTitle>{award.title}</ExpTitle>
                    <ExpPeriod>{award.period}</ExpPeriod>
                  </ExpHeader>
                  <ExpCompany>{award.organization}</ExpCompany>
                  <ExpDesc>{award.description}</ExpDesc>
                </ExperienceCard>
              ))}
            </div>
          </motion.div>
        </Grid>
      </CenterBox>
    </Section>
  );
};

export default Career;
