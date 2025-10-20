// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// const About = () => {
//   return (
//     <section id="about" className="py-20">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="text-lg text-muted-foreground mb-4">
//                 {/* &lt; I build stuff 🚀/&gt; */}
//               </div>
              
//               <h3 className="text-2xl font-bold">Shaikh Alfishan</h3>
//               <p className="text-primary font-semibold text-lg">Full Stack Developer</p>
              
//               <div className="prose prose-neutral dark:prose-invert max-w-none">
//                 <p className="text-muted-foreground leading-relaxed">
//                   Ahoy there! 🎉 I'm a passionate Full-Stack developer based in India, 
//                   proudly pursuing my Bachelor's in Computer Applications! 🎓 I've delved 
//                   into web development since my early college days. 💻
//                 </p>
                
//                 <p className="text-muted-foreground leading-relaxed">
//                   My focus lies in crafting websites and applications that seamlessly blend 
//                   functionality with great user experience. Oh, and did I mention my love for 
//                   building full-stack applications and side projects? 💡 It's kind of my thing! 🚀
//                 </p>
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <Button variant="default" size="lg" asChild>
//                   <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
//                     Resume
//                   </a>
//                 </Button>
//                 <Button variant="outline" size="lg" asChild>
//                   <a href="mailto:contact@shaikhalfishan.dev">
//                     Get In Touch
//                   </a>
//                 </Button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] mx-auto relative group">
//                 <img 
//                   src="/image.jpg" 
//                   alt="Shaikh Alfishan" 
//                   className="w-full h-full rounded-full object-cover border-8 border-primary/10 transition-all duration-500 group-hover:border-primary/30 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/20"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground mb-4">
                {/* &lt; I build stuff 🚀/&gt; */}
              </div>
              
              {/* <h3 className="text-2xl font-bold">Shaikh Alfishan</h3> */}

              <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                    Shaikh Alfishan
                  </h3>

              {/* <p className="text-primary font-semibold text-lg">Full Stack Developer</p> */}

                  <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <p className="text-primary font-semibold text-lg">Full Stack Developer</p>
                  </div>


              
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {/* Ahoy there! 🎉 I'm a passionate Full-Stack developer based in India, 
                  proudly pursuing my Bachelor's in Computer Applications! 🎓 I've delved 
                  into web development since my early college days. 💻 */}
                  I'm Shaikh Alfishan — a Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) 🧑‍💻, currently in my final year of a Bachelor’s in Computer Applications 🎓. I build scalable, responsive, and high-performance web applications using modern tools like JavaScript, React.js, and Next.js ⚛️.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {/* My focus lies in crafting websites and applications that seamlessly blend 
                  functionality with great user experience. Oh, and did I mention my love for 
                  building full-stack applications and side projects? 💡 It's kind of my thing! 🚀 */}
                  I enjoy crafting full-stack solutions — from intuitive frontends 🎨 to robust backends ⚙️. I'm always learning, building, and striving to deliver clean architecture, smooth user experiences, and meaningful digital products 🚀.
                </p>
              </div>

              <div className="flex gap-4 pt-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:shaikhalfishan2401@gmail.com">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;