import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100vw;
  max-width: 600px;
`;
const InfoCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 #0001;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  text-decoration: none;
  color: inherit;
`;
const InfoIcon = styled.div`
  width: 3rem;
  height: 3rem;
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
  font-weight: 500;
`;
const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;
const SocialBtn = styled(motion.a)`
  width: 3rem;
  height: 3rem;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 4px 0 #0001;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 1.25rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #bae6fd;
    color: #0ea5e9;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #334155;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #0f172a;
  background: #fff;
  margin-top: 0.25rem;
  &:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 0 2px #bae6fd;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #0f172a;
  background: #fff;
  margin-top: 0.25rem;
  resize: none;
  &:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 0 2px #bae6fd;
  }
`;
const SubmitBtn = styled(motion.button)`
  width: 100%;
  background: #0284c7;
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0369a1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const Spinner = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Thank you for your message! I will get back to you soon.");
    }, 2000);
  };
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/kdhdd",
      label: "GitHub",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/xoehyun",
      label: "Instagram",
    },
  ];
  return (
    <Section id="contact">
      <CenterBox>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Contact</span>
        </Title>
        <SubTitle>
          저와 함께 작업하고 싶거나, 더 많은 정보를 원하신다면 <br />
          언제든지 연락주세요. 새로운 기회를 기다리고 있습니다!
        </SubTitle>
        <Container>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Form onSubmit={handleSubmit}>
              <Row>
                <div style={{ flex: 1 }}>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </Row>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <SubmitBtn
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Spinner />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </SubmitBtn>
            </Form>
          </motion.div>
          {/* Follow Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#0f172a",
                margin: "0 0 1.5rem 0",
              }}
            >
              Follow Me
            </h4>
            <SocialRow style={{ justifyContent: "center" }}>
              {socialLinks.map((social, index) => (
                <SocialBtn
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
          </motion.div>
        </Container>
      </CenterBox>
    </Section>
  );
};

export default Contact;
