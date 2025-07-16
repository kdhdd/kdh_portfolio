import styled from "styled-components";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

const Section = styled.section`
  width: 100vw;
  background: #f8fafc;
  color: #0f172a;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(15, 23, 42, 0.1) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(15, 23, 42, 0.1) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(15, 23, 42, 0.1) 1px,
      transparent 1px
    );
  background-size: 50px 50px, 80px 80px, 60px 60px;
  animation: float 20s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(2deg);
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const MainTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #0ea5e9, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubTitle = styled(motion.p)`
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MessageCard = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const MessageText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: #334155;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const Signature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-style: italic;
  color: #0ea5e9;
  font-size: 1rem;
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 3px;
  height: 3px;
  background: radial-gradient(
    circle,
    rgba(14, 165, 233, 1),
    rgba(56, 189, 248, 0.8)
  );
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(14, 165, 233, 0.6), 0 0 8px rgba(14, 165, 233, 0.2);
`;

const Thanks = () => {
  const particles = Array.from({ length: 25 }, (_, i) => i);

  return (
    <Section>
      <BackgroundPattern />
      <ParticleContainer>
        {particles.map((particle, index) => (
          <Particle
            key={index}
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.8, 1, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </ParticleContainer>

      <Container>
        <MainTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Thank you
        </MainTitle>

        <SubTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          포트폴리오를 끝까지 봐주셔서 진심으로 감사드립니다
        </SubTitle>

        <MessageCard
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <MessageText>
            더 좋은 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,{" "}
            <br />
            항상 사용자의 관점에서 생각하며 좋은 서비스를 만들고 싶습니다.
          </MessageText>
        </MessageCard>
      </Container>
    </Section>
  );
};

export default Thanks;
