import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Maulana Azad College',
      period: '2021 - 2024',
      status: 'Final Year Student',
      description: 'Comprehensive program covering computer science fundamentals, programming languages, database management, and software engineering principles.',
      subjects: ['Data Structures', 'Algorithms', 'Database Management', 'Software Engineering', 'Web Development', 'Operating Systems'],
      current: true
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Maulana Azad College',
      period: '2019 - 2021',
      status: 'Completed',
      description: 'Focused on Science stream with Mathematics and Computer Science as main subjects.',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
      current: false
    }
  ];

  const certifications = [
    'CTF Hackathon - Nixsecurra',
    'AINCAT - Naukri Campus',
    'AWS Summit India 2025 (Online) - AWS',
    'Introduction to Generative AI - Simplilearn',
    'AI Tools Workshop - Be10x'
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning journey in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Formal Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className={`card-elegant mb-6 animate-slide-up ${edu.current ? 'ring-2 ring-primary/20' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">
                        {edu.degree}
                        {edu.current && (
                          <Badge variant="default" className="ml-2">Current</Badge>
                        )}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <Badge variant="outline">{edu.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subjectIndex) => (
                        <Badge key={subjectIndex} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Online Learning */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications & Online Learning
            </h3>
            
            <Card className="card-elegant animate-slide-up">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Continuous Learning:</strong> I believe in lifelong learning and regularly take online courses 
                    to stay updated with the latest technologies and industry best practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Achievements */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Academic Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8.7+</div>
                <p className="text-sm text-muted-foreground">GPA</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Online Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;