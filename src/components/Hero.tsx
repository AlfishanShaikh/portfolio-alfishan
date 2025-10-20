import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Twitter,
} from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false); // aad for smooth

  const texts = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  // useEffect(() => {
  //   const currentText = texts[currentIndex];
  //   if (displayText.length < currentText.length) {
  //     const timeout = setTimeout(() => {
  //       setDisplayText(currentText.slice(0, displayText.length + 1));
  //     }, 100);
  //     return () => clearTimeout(timeout);
  //   } else {
  //     const timeout = setTimeout(() => {
  //       setDisplayText('');
  //       setCurrentIndex((prev) => (prev + 1) % texts.length);
  //     }, 2000);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [displayText, currentIndex, texts]);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            // Finished typing, start deleting after pause
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 lg:px-8"
    >
      {/* Fixed Social Links */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a
            href="https://github.com/AlfishanShaikh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a
            href="https://www.linkedin.com/in/shaikh-alfishan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a
            href="https://x.com/ShaikhAlfishan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </Button>
        {/* <Button variant="ghost" size="sm" className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
           <a href="mailto:shaikhalfishan2401@gmail.com"> 
            <Mail className="h-5 w-5" />
          </a>
        </Button> */}
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a href="/resume.pdf" download>
            <Download className="h-5 w-5" />
          </a>
        </Button>
      </div>

      <div className="container mx-auto text-center lg:text-left max-w-4xl ">
        <div className="animate-fade-in">
          <div className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            👋 Hey
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            I'm <span className="text-gradient">Shaikh Alfishan</span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl mb-8">
            <span className="text-muted-foreground">I am into </span>
            <span className="text-primary font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I focus on developing user-friendly web applications that meet the
            client's requirements, with attention to detail, scalability, and
            performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
            <Button onClick={scrollToProjects} size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
          </div>

          {/* Mobile Social Links */}
          <div className="flex justify-center lg:hidden space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="mailto:contact@shaikhalfishan.dev">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
