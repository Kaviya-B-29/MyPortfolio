import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
//import heroBackground from '/hero5.png';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center px-4 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/Hero5.png)" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-white">
            Hi, I&apos;m <span className="text-purple-400">Kaviya</span>
          </h1>

          <p className="text-purple-100 mb-8">
            A passionate developer and designer creating beautiful, functional web experiences.
            I specialize in building modern applications that make a difference.
          </p>

          <div className="flex gap-4">
            <Button
              onClick={scrollToProjects}
              className="bg-purple-600 hover:bg-purple-700"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="
                border-purple-400
                bg-transparent
                text-purple-200
                hover:bg-purple-600/20
                hover:text-white
              "
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-bounce text-center">
          <ArrowDown className="mx-auto text-purple-300" size={24} />
        </div>
      </div>
    </section>
  );
}
