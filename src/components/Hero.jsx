import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(to bottom right, #f0f9ff, #fff);
`;

const BgPattern = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
  background: linear-gradient(to bottom right, #f0f9ff, #fff);
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.5;
    background: linear-gradient(to right, #bae6fd33, #7dd3fc33);
  }
`;

const CenterBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  span {
    background: linear-gradient(to right, #0ea5e9, #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: #64748b;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonRow = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
  flex-direction: column;
  align-items: center;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: #0284c7;
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #0369a1; }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #0284c7;
  color: #0284c7;
  font-weight: 500;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #0284c7;
    color: #fff;
  }
`;

const ScrollButton = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  background: #f8fafc;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover { color: #0ea5e9; }
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 9999px;
  opacity: 0.2;
  filter: blur(32px);
`;

const FloatingCircle1 = styled(FloatingCircle)`
  top: 5rem;
  right: 5rem;
  width: 8rem;
  height: 8rem;
  background: #bae6fd;
`;
const FloatingCircle2 = styled(FloatingCircle)`
  bottom: 5rem;
  left: 5rem;
  width: 6rem;
  height: 6rem;
  background: #7dd3fc;
`;

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGitHub = () => {
    window.open('https://github.com/kdhdd', '_blank');
  };

  return (
    <Section id="home">
      <BgPattern aria-hidden="true" />
      <CenterBox>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          백엔드 개발자 <span>김도현</span>입니다.
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          디테일한 부분도 대충하지 않는 <span>마인드</span>, <br />
          포기하지 않고 <span>책임감</span>있게 임하는 개발자입니다.
        </Description>
        <ButtonRow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PrimaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openGitHub}
          >
            <Github size={20} />
            <span>GitHub</span>
          </PrimaryButton>
          {/* <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download CV</span>
          </SecondaryButton> */}
        </ButtonRow>
        <ScrollButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={scrollToAbout}
        >
          <span>Learn More</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </ScrollButton>
      </CenterBox>
      <FloatingCircle1
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <FloatingCircle2
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </Section>
  );
};

export default Hero; 