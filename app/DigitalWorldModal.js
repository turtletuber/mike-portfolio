"use client";
import Image from "next/image";

export default function DigitalWorldModal({ open, onClose, handouts = [] }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full mx-4 p-8 relative overflow-y-auto max-h-[95vh] space-y-6" onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-primary text-2xl font-bold"
          onClick={onClose}
          aria-label="Close preview"
        >
          &times;
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Building a Digital World</h2>
        <p className="text-base text-gray-700 mb-1">Digital Art, STEM, Educational Technology, K-8 Career Literacy</p>
        <p className="text-gray-700 mb-4">
          Design and build your own digital escape room where your classmates become the adventurers. Working in teams, you'll craft an interactive world filled with puzzles and challenges of your own creation. Using 3D modeling, digital art, and basic coding, you'll bring your ideas to life while learning core game design principles. Through playtesting and peer feedback, you'll refine your creative vision to ensure every player's journey through your digital world is both challenging and rewarding.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
          <div className="flex-1">
            <Image src="/images/digitalworld1.png" alt="Student playing digital world" width={320} height={240} className="rounded-lg w-full h-auto" />
          </div>
          <div className="flex-1">
            <Image src="/images/digitalworld2.png" alt="Screenshot of digital world" width={320} height={240} className="rounded-lg w-full h-auto" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Math Standards</h3>
            <p className="text-xs text-gray-700">6.NS.A.1, 6.G.A.1, 6.MP.4<br/>7.RPA.2, 7.EE.A.2, 7.G.A.1, 7.G.B.6, 7.MP.4<br/>8.G.A.2, 8.MP.1, 8.MP.4</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Educational Technology Standards</h3>
            <p className="text-xs text-gray-700">Empowered Learner, Knowledge Constructor, Innovative Designer, Creative Communicator, Global Collaborator<br/>6-8.1.a, 6-8.1.b, 6-8.3.a, 6-8.3.d, 6-8.4.a, 6-8.4.b, 6-8.4.c, 6-8.4.d, 6-8.6.a, 6-8.6.b, 6-8.6.c, 6-8.7.c</p>
          </div>
        </div>
        {handouts.length > 0 && (
          <div className="mb-2">
            <h3 className="font-bold text-base mb-2">Handouts Preview</h3>
            <div className="flex flex-wrap gap-3">
              {handouts.map((src, i) => (
                <Image key={i} src={src} alt={`Handout ${i+1}`} width={200} height={120} className="rounded border w-auto h-28 object-cover" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
