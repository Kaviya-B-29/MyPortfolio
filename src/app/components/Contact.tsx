import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
const API_URL = import.meta.env.VITE_API_URL;


export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true); // START loading

  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data: { message?: string } = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to send message');
    }

    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error(error);
    alert('Failed to send message. Please try again later.');
  } finally {
    setLoading(false); // STOP loading (always runs)
  }
};



  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Kaviya-B-29' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kaviya-b-292k' },
    { icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/u/0/?fs=1&to=kaviya29090@gmail.com&tf=cm' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12 text-white">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-purple-200 mb-6">
              I'm always open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                 
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-purple-200 hover:text-purple-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </a>
                  
                );
               

              })}
             <div className="flex gap-4 mt-2">
              <a
                href="/B.Kaviya-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg
                          bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                View Resume
              </a>

              <a
                href="/B.Kaviya-Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg
                          border border-purple-500 text-purple-300 hover:bg-purple-800/30 transition-colors"
              >
                    <Download className="w-5 h-5" />

                Download PDF
              </a>
            </div>

            </div>
          </div>
          <Card className="bg-slate-900/80 backdrop-blur-sm border-purple-600/30">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-slate-800/50 border-purple-600/30 text-white placeholder:text-purple-300/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-slate-800/50 border-purple-600/30 text-white placeholder:text-purple-300/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    className="bg-slate-800/50 border-purple-600/30 text-white placeholder:text-purple-300/50"
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}