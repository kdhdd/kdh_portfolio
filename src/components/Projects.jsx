import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Github, X } from "lucide-react";
import { useState } from "react";
import sceneImage from "../assets/scene.png";
import convenienceImage from "../assets/convenience.png";
import cosessionImage from "../assets/cosession.png";

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
  margin-bottom: 3rem;
  text-align: center;
  span {
    background: linear-gradient(to right, #0ea5e9, #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  width: 100vw;
  max-width: 1600px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 #0001;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProjectImageBox = styled.div`
  position: relative;
  height: 16rem;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  ${ProjectCard}:hover & {
    opacity: 0;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0009, transparent);
  transition: opacity 0.3s ease;
  ${ProjectCard}:hover & {
    opacity: 0;
  }
`;

const ProjectLinks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #f8fafc;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 10;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayTitle = styled.h3`
  color: #0f172a;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 0 1rem;
`;

const ProjectLinkBtn = styled(motion.a)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 0.5rem;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #0f172a;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s;
  min-width: 150px;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  background: #fff;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 0;
  }
`;

const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 0.75rem;
`;

const ProjectDesc = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 1rem;
  white-space: pre-line;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectTag = styled.span`
  background: #bae6fd;
  color: #0ea5e9;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
`;

// 노션 모달 컴포넌트
const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.section)`
  width: 80%;
  height: 80%;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 90%;
    height: 85%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  background: white;
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: #f1f5f9;
    color: #0f172a;
  }
`;

const NotionFrame = styled.iframe`
  width: 100%;
  height: calc(100% - 4rem);
  border: none;
  background: white;
`;

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "편슐랭",
      description:
        "사용자들이 다양한 편의점 상품을 조합하여 자신만의 꿀 조합을\n만들고, 공유할 수 있는 웹 애플리케이션",
      image: convenienceImage,
      technologies: ["React", "Spring", "MySQL", "AWS", "Figma"],
      notionUrl:
        "https://innate-radar-494.notion.site/ebd/231eeccf942b80ee9614f84f170ee343",
      githubUrl: "https://github.com/4-18/BACKEND",
      featured: true,
    },
    {
      title: "사건, 오늘",
      description:
        "범죄 뉴스를 매개로 경찰과 시민이 시각과 감정을 투명하게\n교류하고 이해를 넓히는 서비스 구축",
      image: sceneImage,
      technologies: [
        "React",
        "Spring",
        "MySQL",
        "Redis",
        "AWS",
        "Docker",
        "RabbitMQ",
        "Kafka",
      ],
      notionUrl:
        "https://innate-radar-494.notion.site/ebd/231eeccf942b80cdb1d4ea25f6a2324e",
      githubUrl: "https://github.com/SW-Cloud-Fundamentals/MSA",
      featured: true,
    },
    {
      title: "LIKELION 연합세션 세미해커톤",
      description:
        "약 6시간 동안 진행된 세미해커톤 대회 프로젝트입니다.\n사용자들이 시간표에 수업을 추가하며 수업별로 글을 작성하고,\n좋아요, 댓글 등의 상호작용을 할 수 있습니다.",
      image: cosessionImage,
      technologies: ["React", "Spring", "MySQL", "AWS"],
      notionUrl:
        "https://innate-radar-494.notion.site/ebd/231eeccf942b80389593c1a1031e3fe1",
      githubUrl: "https://github.com/FExBE-CollabSession/FEFE",
      featured: true,
    },
  ];

  return (
    <Section id="projects">
      <CenterBox>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Projects</span>
        </Title>
        <FeaturedGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectLinks>
                <OverlayTitle>{project.title}</OverlayTitle>
                <ProjectLinkBtn
                  as="button"
                  onClick={() => openModal(project)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye size={16} />
                  자세히 보기
                </ProjectLinkBtn>
                <ProjectLinkBtn
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={16} />
                  GitHub 바로가기
                </ProjectLinkBtn>
              </ProjectLinks>
              <ProjectImageBox>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectOverlay />
              </ProjectImageBox>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.description}</ProjectDesc>
                <ProjectTags>
                  {project.technologies.map((tech, techIndex) => (
                    <ProjectTag key={techIndex}>{tech}</ProjectTag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </FeaturedGrid>
      </CenterBox>

      {/* 노션 모달 */}
      <AnimatePresence mode="wait">
        {isModalOpen && selectedProject && (
          <ModalBackdrop
            initial={{ backgroundColor: "#00000000" }}
            animate={{ backgroundColor: "#1111117b" }}
            exit={{ backgroundColor: "#00000000" }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ translateY: "100%", opacity: 0.5, scale: 0.1 }}
              animate={{ translateY: "0%", opacity: 1, scale: 1 }}
              exit={{ translateY: "100%", opacity: 0.5, scale: 0.1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>{selectedProject.title} - 상세 정보</ModalTitle>
                <CloseButton onClick={closeModal}>
                  <X size={20} />
                </CloseButton>
              </ModalHeader>
              <NotionFrame
                src={selectedProject.notionUrl}
                title={`${selectedProject.title} Notion Page`}
              />
            </ModalContent>
          </ModalBackdrop>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
