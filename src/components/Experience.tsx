import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Open to Work',
      company: 'Looking for Full-Time Opportunities',
      period: 'Available Now',
      type: 'Full-Time',
      description: 'Actively seeking opportunities as a Full-Stack Developer to contribute to innovative projects and grow my skills in a collaborative environment.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
      current: true
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2023 - Present',
      type: 'Freelance',
      description: 'Developing custom web applications for local businesses and startups. Focused on creating responsive, user-friendly interfaces and robust backend systems.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      current: false
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Solutions Co.',
      period: 'Summer 2023',
      type: 'Internship',
      description: 'Worked on front-end development projects, implemented responsive designs, and collaborated with senior developers on MERN stack applications.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my development skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className={`card-elegant mb-8 animate-slide-up ${experience.current ? 'ring-2 ring-primary/20' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {experience.title}
                      {experience.current && (
                        <Badge variant="default" className="ml-2">Current</Badge>
                      )}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">{experience.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                    <Badge variant="outline">{experience.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm actively seeking full-time opportunities where I can contribute my skills 
            and continue growing as a developer. Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <ExternalLink className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;