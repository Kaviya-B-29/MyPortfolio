import { Code2, Palette, Rocket } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Development',
      description: 'Building end-to-end web applications using React, JavaScript, Node.js, Express, and MongoDB, with a strong focus on clean architecture and reusable components.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Designing intuitive, user-friendly interfaces with attention to responsiveness, accessibility, and consistent UI patterns.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Writing efficient, optimized code and building scalable applications that perform well across devices and screen sizes.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">About Me</h2>
        <p className="text-center text-purple-200 mb-16 max-w-3xl mx-auto">
Driven by curiosity and a strong interest in problem-solving, I transitioned into software development after completing my Master’s degree. I have hands-on experience building full-stack web applications using the MERN stack and enjoy creating clean, functional, and engaging digital experiences.
        </p>
<div className="grid md:grid-cols-3 gap-8 items-stretch">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="border-2   h-full flex flex-col border-purple-600/30 hover:border-purple-500 transition-colors bg-slate-900/80 backdrop-blur-sm">
                <CardContent className="h-full flex flex-col pt-6">
                  <Icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="mb-2 text-white">{skill.title}</h3>
                  <p className="text-purple-200">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}