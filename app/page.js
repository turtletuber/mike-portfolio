'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Youtube } from 'lucide-react';
import ResourceLibrary from './ResourceLibrary.js';

const metrics = [
  { value: '1,500+', label: 'Students Reached'},
  { value: '200+', label: 'Kits Distributed'},
  { value: '30+', label: 'Workshops Hosted'},
];

const impactBullets = [
  { bold:'Classroom Tech Integration', text:'Helping schools integrate tech in ways that actually work for teachers and students. Not complicating it and ensuring compliance and practicality.'},
  { bold:'Project & Problem-Based Learning', text:'From electric motor kits for distance learning to school-wide STEM events, I design experiences where students do first, while understanding.'},
  { bold:'Making as Method', text:'I don’t just plan or manage. I make. I prototype the kits, code the tools, and run the workshops so I keep learning alongside my students and understand what teachers really need.'},
];

const impactMetrics = [
  { value:'7+ yrs', label:'Teaching'},
  { value:'4+ yrs', label:'Managing'},
  { value:'$25k+', label:'Awards & Grants'},
];

const activities = [
  {
    title:'Perspectives on Generative AI in Learning',
    category:'Research',
    date:'Apr 8, 2025',
    desc:'New research paper exploring ethical boundaries and educational opportunities with AI tools in academic settings.',
    href:'#',
    thumb:'/images/research.png'
  },
  {
    title:'State Standards Aligned Lesson Plan Generator',
    category:'Digital',
    date:'Mar 22, 2025',
    desc:'Interactive tool that helps educators create curriculum-aligned lesson plans with just a few clicks.',
    href:'#',
    thumb:'/images/plangenerator.png'
  },
  {
    title:'Design and Coding a Game for an Arcade Machine',
    category:'Curriculum',
    date:'Mar 15, 2025',
    desc:'Complete project-based lesson plan for teaching programming concepts through game design.',
    href:'#',
    thumb:'/images/arcade.png'
  },
];

const experience = [
  {
    period:'Oct 2021 – Dec 2024',
    role:'STEM Program Manager',
    org:'Phoenix El. School District #1',
    bullets:[
      'Designed and led project-based STEM courses for 350 students (grades 4–8), collaborating with industry experts to develop scalable hands-on STEM projects.',
      'Managed classroom technology for STEM Makerspace, implementing advanced tools access. Oversaw safety protocols and ensured accessibility features were compliant with UDL principles and special education requirements.',
      'Organized quarterly STEM events reaching 400+ students and staff, boosting engagement and showcasing real-world STEM applications.',
    ],
  },
  {
    period:'Aug 2020 – Aug 2021',
    role:'Ed‑Tech Consultant',
    org:'ElevateU',
    bullets:[
      'Partnered with professors from various universities to transform traditional course materials into AI-powered digital textbooks, ensuring accessibility through UDL principles and FERPA/COPPA compliance.',
      'Led discovery calls with professors and managed software engineering team execution, delivering three uniquely tailored AI-enhanced courses for Spring 2021 launch.',
      'Conducted user feedback sessions and data analyses to improve product design and align with pedagogical best practices.',
    ],
  },
  {
    period:'Apr 2014 – May 2020',
    role:'Teaching Assistant',
    org:'Fulton Schools of Engineering, ASU',
    bullets:[
      'Administered lab technology systems for engineering courses, ensuring safety and learning outcomes for 100+ student workstations while maintaining compliance with university technology policies.',
      'Mentored 80–120 interdisciplinary students per semester in project-based assignments, integrating educational technology tools to enhance understanding of fundamental engineering concepts.',
      'Communicated effectively through one-on-one interactions, public speaking, pitching, and leading workshops with groups ranging from 5 to 200 participants, utilizing technology and digital collaboration tools.',
    ],
  },
];

const resources = [
  { category:'Curriculum', title:'Scale Model of School', desc:'Transform your school campus into a miniature masterpiece.', thumb:'/images/model_school.png'},
  { category:'Curriculum', title:'Circuits and Electric Vehicles', desc:'Redesign and power up your own cardboard electric car.', thumb:'/images/circuits_ev.png'},
  { category:'Curriculum', title:'Agriculture Technology', desc:'Uncover the cycles of plant life by becoming a scientist and gardener.', thumb:'/images/ag_tech.png'},
  { category:'Curriculum', title:'Building a Digital World', desc:'Create interactive worlds with 3D modeling, digital art, and coding.', thumb:'/images/digital_world.png'},
  { category:'Curriculum', title:'Startup Club', desc:'Creating both a physical product business and a software company.', thumb:'/images/startup_club.png'},
  { category:'Video', title:'What is Innovation?', desc:'Experimental learning content for the classroom.', thumb:'/images/what_innovation.png'},
];

export default function Home() {
  return (
      <main className="overflow-x-hidden">
      {/* Hero */}
      <section id="hero" className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center py-10 md:py-16 gap-6 md:gap-8 px-4">
        <div className="flex-1 w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">Mike Amato</h1>
          <h2 className="text-base md:text-lg font-medium text-gray-600 mb-4">STEM Educator | Engineer | Ed‑Tech Consultant</h2>
          <p className="text-gray-700 mb-6 md:mb-8 max-w-prose text-sm md:text-base">Taking intimidating concepts and making them tactile, playful, and deeply human. Passionate about making engineering education fun, memorable, and inclusive for all learners.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white shadow rounded-lg p-4 text-center">
                <p className="text-xl md:text-2xl font-extrabold text-primary">{m.value}</p>
                <p className="text-xs md:text-sm text-gray-600">{m.label}</p>
              </div>
            ))}
          </div>
          <Link href="#contact" className="block w-full sm:w-fit bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition text-center">Get in Touch</Link>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <Image src="/images/hero.png" alt="Mike working with students" width={600} height={450} className="rounded-xl object-cover w-full max-w-[400px] md:max-w-[600px] h-auto" />
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="max-w-6xl mx-auto py-10 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">How I Make an Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column: Bullets & Metrics */}
          <div className="flex flex-col items-start">
            <ul className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {impactBullets.map((b) => (
                <li key={b.bold} className="flex">
                  <span className="h-2 w-2 bg-primary rounded-full mt-2 mr-3" />
                  <p className="text-sm md:text-base"><strong>{b.bold}:</strong> {b.text}</p>
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-md w-full justify-items-center">
                {impactMetrics.map(m => (
                  <div key={m.label} className="bg-gray-50 border rounded-lg p-2 md:p-4 text-center">
                    <p className="text-base md:text-xl font-bold text-primary">{m.value}</p>
                    <p className="text-xs md:text-sm text-gray-600">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column: Image Only */}
          <div className="flex flex-col items-center mt-6 md:mt-0">
            <Image src="/images/headshot_mike.png" alt="Mike in safety goggles" width={400} height={300} className="rounded-xl object-cover w-full max-w-[300px] md:max-w-[400px] h-auto" />
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section id="activity" className="max-w-6xl mx-auto py-10 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {activities.map(a => (
            <article key={a.title} className="bg-white rounded-xl shadow hover:-translate-y-1 hover:shadow-lg transition flex flex-col">
              <Image src={a.thumb} alt={a.title} width={400} height={250} className="rounded-t-xl object-cover w-full h-auto max-h-[200px] md:max-h-[250px]" />
              <div className="p-4 md:p-5 space-y-1 md:space-y-2 flex-1 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wide text-primary">{a.category}</span>
                <h3 className="font-semibold text-sm md:text-base">{a.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{a.desc}</p>
                <Link href={a.href} className="inline-flex items-center gap-1 text-primary font-semibold text-xs md:text-sm mt-auto">View Details&nbsp;→</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto py-10 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Experience</h2>
        <div className="space-y-8 md:space-y-10">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 md:p-8 border-l-4 border-primary flex flex-col max-w-full md:max-w-3xl mx-auto">
              <p className="text-xs md:text-sm text-gray-500">{exp.period}</p>
              <h3 className="text-lg md:text-xl font-bold mt-1">{exp.role}</h3>
              <p className="text-primary mb-2 md:mb-4 text-sm md:text-base">{exp.org}</p>
              <hr className="my-3 md:my-4 border-gray-200" />
              <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Resource Library */}
      <section id="resources" className="max-w-6xl mx-auto py-10 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Resource Library</h2>
        <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">Access articles, video tutorials, downloadable materials, and other educational resources for STEAM learning.</p>
        <ResourceLibrary />
        <div className="text-center mt-12">
          <Link href="#contact" className="inline-block border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition w-full md:w-fit">Request Custom Curriculum</Link>
        </div>
      </section>

      {/* Nonprofit */}
      <section id="nonprofit" className="max-w-6xl mx-auto py-16">
  <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Kids Should Make Things</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our 501(c)(3) nonprofit provides project plans, materials, and support to kids to create in their homes, libraries, and community spaces. Everything they make, they keep.
          </p>
          <a
            href="https://www.kids-should-make-things.org/"
            className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Support a STEM Project
          </a>
  </div>
  <div className="grid md:grid-cols-3 gap-8 mt-12">
  {[
    { icon: '🧰', title: 'Kits, content, and tech', text: 'let us be there when we can\'t be in person.' },
    { icon: '🔥', title: 'Learning content', text: 'should be as engaging as your favorite social feed.' },
    { icon: '💫', title: 'Create for all kids', text: 'knowing some learn without schools, systems, or guardians.' },
  ].map((card, idx) => (
    <div key={idx} className="bg-white rounded-xl shadow p-6 space-y-4 flex flex-col items-center text-center">
      <span className="text-4xl">{card.icon}</span>
      <h3 className="text-xl font-bold">{card.title}</h3>
      <p className="text-gray-700">{card.text}</p>
    </div>
  ))}
</div>
</section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center text-center">
            <Image src="/images/ball-in-your-court.gif" alt="" width={400} height={300} className="rounded-xl object-cover mx-auto" />
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-2">Email</h3>
              <p>mike.inbox.apply@gmail.com</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
              <h3 className="font-bold">Social Media</h3>
              <div className="flex gap-3">
                <Link href="https://www.youtube.com" target="_blank" aria-label="YouTube" className="hover:opacity-80"><Youtube size={20} /></Link>
              </div>
            </div>
            <a href="https://calendar.app.google/ErnjGQG1wVFbZbTAA" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">Book a Meeting</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-8 text-xs">
        Media, Projects Plans, and Website by Mike 🤓
      </footer>
    </main>
  );
}
