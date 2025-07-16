import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Heart,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const FooterSection = styled.footer`
  background: #0f172a;
  color: #fff;
  position: relative;
  width: 100vw;
`;
const BackToTopBtn = styled(motion.button)`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: 3rem;
  background: #0ea5e9;
  color: #fff;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px 0 #0004;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0369a1;
  }
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
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
`;
const LogoBox = styled(motion.div)`
  text-align: center;
`;
const Logo = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(to right, #0ea5e9, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;
const Desc = styled.p`
  color: #cbd5e1;
  font-size: 1rem;
  max-width: 22rem;
  margin: 0 auto;
`;
const QuickLinksBox = styled(motion.div)`
  text-align: center;
`;
const QuickLinksTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;
const QuickLinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;
const QuickLinkBtn = styled(motion.button)`
  background: #1e293b;
  color: #cbd5e1;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #0ea5e9;
    color: #fff;
  }
`;
const SocialBox = styled(motion.div)`
  text-align: center;
`;
const SocialTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;
const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
const SocialBtn = styled(motion.a)`
  width: 2.5rem;
  height: 2.5rem;
  background: #1e293b;
  color: #cbd5e1;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #0ea5e9;
    color: #fff;
  }
`;
const Divider = styled.div`
  border-top: 1px solid #334155;
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
const HeartPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;
const HeartIcon = styled(Heart)`
  color: #ef4444;
  animation: ${HeartPulse} 1.2s infinite;
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <FooterSection>
      {/* Back to Top Button */}
      <BackToTopBtn
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </BackToTopBtn>

      <Container>
        <Grid>
          {/* Logo and Description */}
          <LogoBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Logo>Your Name</Logo>
            <Desc>
              Full Stack Developer passionate about creating innovative web
              solutions and beautiful user experiences.
            </Desc>
          </LogoBox>

          {/* Quick Links */}
          <QuickLinksBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <QuickLinksTitle>Quick Links</QuickLinksTitle>
            <QuickLinksList>
              {["Home", "Career", "Skills", "Projects"].map((link, index) => (
                <QuickLinkBtn
                  key={index}
                  onClick={() => {
                    const element = document.querySelector(
                      `#${link.toLowerCase()}`
                    );
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link}
                </QuickLinkBtn>
              ))}
            </QuickLinksList>
          </QuickLinksBox>

          {/* Social Links */}
          <SocialBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SocialTitle>Connect</SocialTitle>
            <SocialRow>
              {socialLinks.map((social, index) => (
                <SocialBtn
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </SocialBtn>
              ))}
            </SocialRow>
          </SocialBox>
        </Grid>

        {/* Divider */}
        <Divider>
          <BottomRow>
            <Copyright
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </Copyright>

            <MadeWith
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <HeartIcon size={14} />
              <span>using React & Tailwind CSS</span>
            </MadeWith>
          </BottomRow>
        </Divider>
      </Container>
    </FooterSection>
  );
};

export default Footer;
