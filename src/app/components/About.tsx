import { Code2, Palette, Rocket } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Development',
      description: 'Expert in React, JavaScript, and modern web technologies.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful, intuitive user interfaces with attention to detail.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that scale.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">About Me</h2>
        <p className="text-center text-purple-200 mb-16 max-w-3xl mx-auto">
Curiosity and a passion for understanding how things work led me to the world of coding. With a Master’s degree in hand, I expanded my expertise through a MERN Stack course, learning to build full-stack web applications from scratch.
I enjoy creating projects that are both functional and engaging. 
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="border-2 border-purple-600/30 hover:border-purple-500 transition-colors bg-slate-900/80 backdrop-blur-sm">
                <CardContent className="pt-6">
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