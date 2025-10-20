// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       toast({
//         title: "Message Sent!",
//         description: "Thank you for your message. I'll get back to you soon!",
//       });
//       setFormData({ name: '', email: '', message: '' });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'shaikhalfishan2401@gmail.com',
//       href: 'mailto:shaikhalfishan2401@gmail.com'
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+91 9823978934',
//       href: 'tel:+919876543210'
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'Aurangabad, Maharashtra, India',
//       href: '#'
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: Github,
//       label: 'GitHub',
//       href: 'https://github.com/AlfishanShaikh',
//       color: 'hover:text-gray-600'
//     },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       href: 'https://www.linkedin.com/in/shaikh-alfishan/',
//       color: 'hover:text-blue-600'
//     },
//     {
//       icon: Twitter,
//       label: 'Twitter',
//       href: 'https://x.com/ShaikhAlfishan',
//       color: 'hover:text-blue-400'
//     },
//     {
//       icon: Mail,
//       label: 'Email',
//       href: 'mailto:shaikhalfishan2401@gmail.com',
//       color: 'hover:text-red-600'
//     }
//   ];

//   return (
//     <section id="contact" className="py-20">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Have a project in mind or want to discuss opportunities? I'd love to hear from you!
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Form */}
//           <Card className="card-elegant">
//             <CardHeader>
//               <CardTitle>Send me a message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <Label htmlFor="name">Name</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your full name"
//                     className="mt-1"
//                   />
//                 </div>
                
//                 <div>
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="your.email@example.com"
//                     className="mt-1"
//                   />
//                 </div>
                
//                 <div>
//                   <Label htmlFor="message">Message</Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     placeholder="Tell me about your project or just say hello!"
//                     rows={5}
//                     className="mt-1"
//                   />
//                 </div>
                
//                 <Button 
//                   type="submit" 
//                   disabled={isSubmitting}
//                   className="w-full"
//                   size="lg"
//                 >
//                   {isSubmitting ? 'Sending...' : (
//                     <>
//                       <Send className="h-4 w-4 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
//               <p className="text-muted-foreground mb-8">
//                 I'm always open to discussing new opportunities, interesting projects, 
//                 or just having a chat about technology and development.
//               </p>
              
//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-center space-x-4">
//                     <div className="bg-primary/10 p-3 rounded-lg">
//                       <info.icon className="h-5 w-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium">{info.label}</p>
//                       {info.href !== '#' ? (
//                         <a 
//                           href={info.href}
//                           className="text-muted-foreground hover:text-primary transition-colors"
//                         >
//                           {info.value}
//                         </a>
//                       ) : (
//                         <p className="text-muted-foreground">{info.value}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <Button
//                     key={index}
//                     variant="outline"
//                     size="icon"
//                     asChild
//                     className={`${social.color} transition-colors`}
//                   >
//                     <a href={social.href} target="_blank" rel="noopener noreferrer">
//                       <social.icon className="h-5 w-5" />
//                     </a>
//                   </Button>
//                 ))}
//               </div>
//             </div>

//             {/* Availability Status */}
//             <Card className="bg-primary/5 border-primary/20">
//               <CardContent className="p-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                   <div>
//                     <p className="font-medium">Available for work</p>
//                     <p className="text-sm text-muted-foreground">
//                       Open to new opportunities and freelance projects
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




//! new code


import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_n4s12e8',      // 👉 Replace with your EmailJS service ID
        'template_zfxty0b',     // 👉 Replace with your EmailJS template ID
        form.current,
        'ZM4iK4eK4-RImkClU'       // 👉 Replace with your EmailJS public key
      )
      .then(() => {
        toast({
          title: 'Message Sent!',
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again later.',
          variant: 'destructive',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shaikhalfishan2401@gmail.com',
      href: 'mailto:shaikhalfishan2401@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9823978934',
      href: 'tel:+919823978934',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Aurangabad, Maharashtra, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/AlfishanShaikh',
      color: 'hover:text-gray-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shaikh-alfishan/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/ShaikhAlfishan',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:shaikhalfishan2401@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and development.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href !== '#' ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className={`${social.color} transition-colors`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium">Available for work</p>
                    <p className="text-sm text-muted-foreground">
                      Open to new opportunities and freelance projects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
