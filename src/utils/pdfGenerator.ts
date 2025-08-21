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
  addText('Innovative Computer Science undergraduate specializing in Data Science, with hands-on experience designing AI-powered applications and scalable web platforms. Proven ability to reduce processing times, enhance user experiences, and lead cross-functional projects. Passionate about solving complex problems at scale and contributing to high-impact products in top-tier tech companies.');
  
  // Education
  addSection('EDUCATION');
  addText('New Horizon College of Engineering, Bengaluru', 12, true);
  addText('B.E. in Computer Science (Data Science) - CGPA: 8.09', 11);
  addText('Aug 2022 - Present', 10);
  yPosition += 3;
  addText('BKG PU College, Sandour', 12, true);
  addText('Pre-University Course (PCMB Stream) - 71.3%', 11);
  addText('Jun 2020 - May 2022', 10);
  
  // Technical Skills
  addSection('TECHNICAL SKILLS');
  const skillCategories = [
    'Programming: Python, Java, JavaScript, TypeScript, HTML, CSS, SQL',
    'Frameworks/Technologies: Node.js, React, Next.js, Prisma, MongoDB, Tailwind CSS, Docker, Expo, TRPC',
    'Cloud Platforms: Google Cloud Platform, AWS, Vercel',
    'AI/ML: LangChain, RAG, PyTorch, TensorFlow, Scikit-learn',
    'Databases: Neon DB, Prisma, MySQL, PostgreSQL, Chroma DB'
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
  addSection('AWARDS & ACHIEVEMENTS');
  const achievements = [
    'IBM SkillsBuild – Certified in Advanced Cloud and AI Applications',
    'NPTEL DBMS – Elite Certification for Database Management Systems',
    'CIDECODE Hackathon (PES University) – Finalist for AI-Powered Problem Solving',
    'Codeforces REVA Hackathon – Third Prize for Full-Stack Application Development',
    'Kaspersky Manipal Hackathon – Qualified among the Top 5 Teams'
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