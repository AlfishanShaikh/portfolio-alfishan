import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNextdotjs,
  SiExpensify,
  SiMaterialdesign,
  SiShadcnui,
  SiSabanci,
  SiMaterialdesignicons,
  SiBootstrap
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const techStack = [
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiReact, name: 'React.js', color: '#61DAFB' },
    // { icon: SiNextdotjs, name: 'Next.js', color: '#61DAFB' },
    // { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiTailwindcss, name: 'Taildwind', color: '#61DAFB' },
    { icon: SiBootstrap, name: 'Boostrap', color: '#61DAFB' },
    //  { icon: SiShadcnui, name: 'Shadcn', color: '#339933' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express.js', color: '#181717' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    // { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    // { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiGithub, name: 'GitHub', color: '#181717' },
    { icon: VscCode, name: 'VS Code', color: '#007ACC' },
    // { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build amazing web applications
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-lg bg-background shadow-md group-hover:shadow-lg transition-shadow">
                <tech.icon 
                  size={32} 
                  style={{ color: tech.color }}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;