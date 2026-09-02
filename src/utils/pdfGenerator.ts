import jsPDF from 'jspdf';

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  skills: string[];
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    impact: string;
  }>;
}

export const generateResumePDF = (data: ResumeData) => {
  const doc = new jsPDF();
  let yPosition = 20;
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const lineHeight = 8;
  
  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    if (isBold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }
    
    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    lines.forEach((line: string) => {
      if (yPosition > doc.internal.pageSize.height - 20) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
  };
  
  const addSection = (title: string) => {
    yPosition += 5;
    doc.setFillColor(0, 0, 0);
    doc.rect(margin, yPosition - 6, pageWidth - 2 * margin, 1, 'F');
    yPosition += 2;
    addText(title, 14, true);
    yPosition += 3;
  };

  // Header
  addText(data.name, 20, true);
  yPosition += 3;
  addText(`${data.email} | ${data.phone}`, 11);
  addText(data.location, 11);
  yPosition += 5;
  
  // Profile Summary
  addSection('PROFILE');
  addText('Computer Science undergraduate specializing in AI and web development with strong problem-solving skills(DSA) and a passion for building impactful software solutions and Hackathon Winner.');
  
  // Education
  addSection('EDUCATION');
  addText('New Horizon College of Engineering, Bengaluru', 12, true);
  addText('B.E. in Computer Science - CGPA: 8.09', 11);
  addText('Aug 2022 - Present', 10);
  
  // My Work
  addSection('MY WORK (LIVE PRODUCTS)');
  addText('Spora (Jan 2026 - Present)', 11, true);
  addText('Built Spora, a next-generation social media platform featuring personalized content discovery, short videos, articles, and real-time user interactions.');
  addText('Invisly (AI Desktop Assistant)', 11, true);
  addText('Built Invisly, an AI-powered desktop interview assistant designed to provide real-time support during technical interviews, helping candidates analyze questions and generate relevant responses quickly.');
  
  // Research
  addSection('RESEARCH');
  addText('Researching SCBI (Self-Consistent Basis Invention): an inference-time representation-learning architecture that aims to let frozen foundation models discover, validate, and reuse latent problem-solving representations without permanent weight updates.');

  // Technical Skills
  addSection('TECHNICAL SKILLS');
  const skillCategories = [
    'Skills: Python, Java, JavaScript, SQL, Next.js, React, Node.js, Express.js, Tailwind CSS, MongoDB, MySQL, Vector Databases, AWS, Google Cloud Platform, Docker, Git/GitHub, LangChain, RAG, MCP, PyTorch, Scikit-learn, Production-ready LLM pipelines & DSA'
  ];
  
  skillCategories.forEach(category => {
    addText(category, 10);
  });
  
  // Projects
  addSection('PROJECTS');
  data.projects.forEach(project => {
    addText(project.title, 12, true);
    addText(project.description, 10);
    addText(`Technologies: ${project.tech.join(', ')}`, 9);
    addText(`Impact: ${project.impact}`, 9);
    yPosition += 3;
  });
  
  // Awards & Achievements
  addSection('AWARDS');
  const achievements = [
    'CIDECODE Hackathon (PES University) - Finalist for AI-Powered Problem Solving',
    'Codeforces REVA Hackathon - Third Prize for Full-Stack Application Development'
  ];
  
  achievements.forEach(achievement => {
    addText(`• ${achievement}`, 10);
  });
  
  // Leadership & Extracurricular
  addSection('LEADERSHIP & EXTRACURRICULAR');
  const activities = [
    'Led multiple student tech events, boosting participation rates by 30%',
    'Public speaking and mentorship experience for coding and AI workshops',
    'Hobbies: Cricket, Chess, Drawing, Research'
  ];
  
  activities.forEach(activity => {
    addText(`• ${activity}`, 10);
  });
  
  // Save the PDF
  doc.save('Meda_Anilkumar_Resume.pdf');
};