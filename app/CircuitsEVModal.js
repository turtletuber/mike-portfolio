"use client";
import Image from "next/image";

export default function CircuitsEVModal({ open, onClose, handouts = [] }) {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Circuits and Electric Vehicles</h2>
        <p className="text-base text-gray-700 mb-1">Art, Math, Science, K-8 Career Literacy</p>
        <p className="text-gray-700 mb-4">
          Redesign and power up your own miniature electric vehicles. First, you'll craft custom car bodies, experimenting with different shapes and materials to transform basic RC cars. Then, you'll dive into electrical engineering by building a separate electric car from scratch – soldering wires to connect motors, batteries, and controls. Along the way, you'll explore how electric vehicles work and compare them to traditional combustion engines, gaining hands-on insight into the future of transportation technology.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
          <div className="flex-1">
            <Image src="/images/circuits_ev1.png" alt="Soldering electric vehicle" width={320} height={240} className="rounded-lg w-full h-auto" />
          </div>
          <div className="flex-1">
            <Image src="/images/circuits_ev2.png" alt="Student holding electric vehicle" width={320} height={240} className="rounded-lg w-full h-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Math Standards</h3>
            <p className="text-xs text-gray-700">6.NS.A.1, 6.NS.B.3, 6.NS.B.4, 6.MP.1<br/>7.G.A.1, 7.G.A.2, 7.G.A.3, 7.MP.1<br/>8.C.C.9, 8.MP.4, 8.MP.5</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Science Standards</h3>
            <p className="text-xs text-gray-700">6.P4U2.5<br/>7.P3U1.3, 7.P4U1.1<br/>8.P4U1.3, 8.P4U1.4, 8.P4U2.5, 8.P3U1.2</p>
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
