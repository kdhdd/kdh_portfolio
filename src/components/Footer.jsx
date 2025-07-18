import styled from "styled-components";
import { motion } from "framer-motion";

const FooterSection = styled.footer`
  background: #f8fafc;
  color: #0f172a;
  position: relative;
  width: 100vw;
`;

const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Divider = styled.div`
  border-top: 1px solid #e2e8f0;
  margin-top: 2rem;
  padding-top: 2rem;
  width: 100%;
`;
const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Copyright = styled(motion.p)`
  color: #64748b;
  font-size: 0.95rem;
`;
const MadeWith = styled(motion.p)`
  color: #64748b;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        {/* Divider */}
        <Divider>
          <BottomRow>
            <Copyright
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()}. kdh All rights reserved.
            </Copyright>

            <MadeWith
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <span>using React & Styled-Components</span>
            </MadeWith>
          </BottomRow>
        </Divider>
      </Container>
    </FooterSection>
  );
};

export default Footer;
