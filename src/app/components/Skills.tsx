import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['JavaScript','React.js','Redux', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Backend & Database',
      skills: ['Node.js', 'Express.js',  'REST APIs', 'MySQL', 'MongoDB'],
    },
    
    {
      category: 'Tools & Others',
      skills: ['Git', 'Github','Render', 'Netlify','Postman','MongoDB Compass, Atlas','Vscode'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="mb-4 text-white">{category.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-sm border-purple-600/50 text-purple-200 hover:bg-purple-600/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}