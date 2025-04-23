"use client";
import { useState } from "react";
import Image from "next/image";
import ScaleModelModal from "./ScaleModelModal";
import CircuitsEVModal from "./CircuitsEVModal";
import DigitalWorldModal from "./DigitalWorldModal";
import AgTechModal from "./AgTechModal";
import StartupClubModal from "./StartupClubModal";

const resources = [
  { 
    category: 'Curriculum', 
    title: 'Scale Model of School', 
    desc: 'Transform your school campus into a miniature masterpiece.', 
    thumb: '/images/model_school.png',
    modal: 'scale'
  },
  { category:'Curriculum', title:'Circuits and Electric Vehicles', desc:'Redesign and power up your own cardboard electric car.', thumb:'/images/circuits_ev.png', modal: 'ev' },
  { category:'Curriculum', title:'Agriculture Technology', desc:'Uncover the cycles of plant life by becoming a scientist and gardener.', thumb:'/images/ag_tech.png', modal: 'agtech' },
  { category:'Curriculum', title:'Building a Digital World', desc:'Create interactive worlds with 3D modeling, digital art, and coding.', thumb:'/images/digital_world.png', modal: 'digital' },
  { category:'Curriculum', title:'Startup Club', desc:'Creating both a physical product business and a software company.', thumb:'/images/startup_club.png', modal: 'startup' },
  { category:'Video', title:'What is Innovation?', desc:'Experimental learning content for the classroom.', thumb:'/images/what_innovation.png', youtube: 'https://youtu.be/kyKTknZQ3KU' },
];

export default function ResourceLibrary() {
  const [openModal, setOpenModal] = useState(null); // null, 'scale', 'ev', 'digital', 'agtech', or 'startup'
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {resources.map((r, idx) => (
          <article
            key={idx}
            className="relative rounded-xl overflow-hidden shadow flex flex-col h-auto cursor-pointer group"
            onClick={() => {
              if (r.modal) {
                setOpenModal(r.modal);
              } else if (r.youtube) {
                window.open(r.youtube, '_blank', 'noopener,noreferrer');
              }
            }}
            tabIndex={0}
            aria-label={r.title}
            role="button"
          >
            <div className="flex-1 flex flex-col">
              <Image src={r.thumb} alt={r.title} width={400} height={250} className="object-cover h-full w-full group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-10 text-white">
                <span className="text-xs font-bold uppercase tracking-wide">{r.category}</span>
                <h3 className="text-base md:text-lg font-semibold">{r.title}</h3>
                <p className="text-xs md:text-sm">{r.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <ScaleModelModal
        open={openModal === 'scale'}
        onClose={() => setOpenModal(null)}
        slides={[]}
        handouts={[]}
      />
      <CircuitsEVModal
        open={openModal === 'ev'}
        onClose={() => setOpenModal(null)}
        slides={['/images/circuits_ev1.png', '/images/circuits_ev2.png']}
        handouts={[]}
      />
      <DigitalWorldModal
        open={openModal === 'digital'}
        onClose={() => setOpenModal(null)}
        handouts={[]}
      />
      <AgTechModal
        open={openModal === 'agtech'}
        onClose={() => setOpenModal(null)}
        handouts={[]}
      />
      <StartupClubModal
        open={openModal === 'startup'}
        onClose={() => setOpenModal(null)}
        handouts={[]}
      />
    </>
  );
}
