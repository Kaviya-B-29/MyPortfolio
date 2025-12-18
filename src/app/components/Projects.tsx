import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Health And Wellness App',
      description: 'A Full-stack health and wellness platform enabling users to track fitness activities, log nutrition and habits, and maintain structured mental health records with secure authentication and insightful progress visualization..',
      image: '/health.avif',
      tags: ['React.js','Node.js','Express.js', 'MongoDB','TailwindCSS','HTML'],
      github: 'https://github.com/Kaviya-B-29/HealthAndWellnessFrontEnd',
      demo: 'https://healthwellnessfront.netlify.app/',
    },
    {
      title: 'Expense Tracker',
      description: 'A MERN based secure expense tracking dashboard that allows users to record transactions, categorize spending, analyze monthly trends, and derive actionable financial insights through interactive charts.',
      image:'expense.jpg',
      tags: ['React.js','Node.js','Express.js', 'MongoDB','TailwindCSS','HTML'],
      github: 'https://github.com/Kaviya-B-29/ExpenseTrackerFrontend',
      demo: 'https://expensetrackerfrontend1.netlify.app/',
    },
    {
      title: 'Movie Browsing and Watchlisting App',
      description: 'A comprehensive movie catalog and watchlist application integrating the OMDb API for seamless search, paginated browsing, detailed views, and persistent management of personal favorites and watchlists.',
      image:'movie.webp',
      tags: ['React.js','Node.js','Express.js', 'MongoDB','TailwindCSS','HTML'],
      github: 'https://github.com/Kaviya-B-29/MovieCatalogFrontend',
      demo: 'https://moviecatalogfront.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all bg-slate-900/80 backdrop-blur-sm border-purple-600/30">
              <CardHeader className="p-0">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="flex-1 pt-6">
                <h3 className="mb-2 text-white">{project.title}</h3>
                <p className="text-purple-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-purple-600/30 text-purple-200">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button
      variant="outline"
      size="sm"
      className="w-full border-purple-600/50 text-purple-200 hover:bg-purple-600/20"
    >
      <Github className="w-4 h-4 mr-2" />
      Code
    </Button>
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button
      size="sm"
      className="w-full bg-purple-600 hover:bg-purple-700"
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      Demo
    </Button>
  </a>
</CardFooter>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}