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

const IconWrapper = styled(motion.div)`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const FloatingIcon = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  background: #bae6fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0ea5e9;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
`;

const MainTitle = styled(motion.h2)`
  font-size: 3rem;
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
  font-size: 1.3rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MessageCard = styled(motion.div)`
  background: #fff;
  border-radius: 1.5rem;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`;

const MessageText = styled.p`
  font-size: 1.1rem;
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
  width: 4px;
  height: 4px;
  background: rgba(14, 165, 233, 0.6);
  border-radius: 50%;
`;

const Thanks = () => {
  const particles = Array.from({ length: 15 }, (_, i) => i);

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
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
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
          감사합니다
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
            여러분의 소중한 시간을 내어 제 포트폴리오를 살펴봐 주셔서 정말
            감사합니다.
            <br />
            끊임없이 배우고 성장하는 개발자가 되겠습니다.
            <br />더 나은 코드와 더 좋은 서비스로 보답하겠습니다.
          </MessageText>

          <Signature>
            <Heart size={16} fill="currentColor" />
            <span>마음을 담아</span>
            <Heart size={16} fill="currentColor" />
          </Signature>
        </MessageCard>
      </Container>
    </Section>
  );
};

export default Thanks;
