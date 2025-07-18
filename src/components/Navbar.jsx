import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavBar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(255,255,255,0.8)" : "transparent"};
  box-shadow: ${({ scrolled }) => (scrolled ? "0 2px 16px 0 #0002" : "none")};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(8px)" : "none")};
`;
const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  position: relative;
  @media (max-width: 767px) {
    justify-content: flex-end;
  }
`;
const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const NavBtn = styled.button`
  background: none;
  border: none;
  color: #334155;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #0ea5e9;
  }
`;

const MobileMenuBtn = styled(motion.button)`
  background: #f1f5f9;
  color: #0f172a;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  @media (min-width: 768px) {
    display: none;
  }
`;
const MobileMenu = styled(motion.div)`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: #fff;
  border-top: 1px solid #e2e8f0;
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 40;
  @media (min-width: 768px) {
    display: none;
  }
`;
const MobileMenuList = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const MobileNavBtn = styled.button`
  background: none;
  border: none;
  color: #334155;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #0ea5e9;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Career", href: "#career" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <NavBar initial={{ y: -100 }} animate={{ y: 0 }} scrolled={scrolled}>
      <Container>
        <NavRow>
          <NavLinks>
            {navItems.map((item) => (
              <NavBtn
                key={item.name}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </NavBtn>
            ))}
          </NavLinks>
          <MobileMenuBtn
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuBtn>
        </NavRow>
        <MobileMenu
          isOpen={isOpen}
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <MobileMenuList>
            {navItems.map((item) => (
              <MobileNavBtn
                key={item.name}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </MobileNavBtn>
            ))}
          </MobileMenuList>
        </MobileMenu>
      </Container>
    </NavBar>
  );
};

export default Navbar;
