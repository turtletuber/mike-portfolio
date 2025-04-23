"use client";
import Image from "next/image";

export default function AgTechModal({ open, onClose, handouts = [] }) {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Agriculture Technology</h2>
        <p className="text-base text-gray-700 mb-1">Life Science, Computer literacy, K-8 Career Literacy</p>
        <p className="text-gray-700 mb-4">
          From seed to harvest, uncover the intricate cycles of plant life by becoming both scientist and gardener. You'll nurture plants from their first sprouts in both outdoor gardens and indoor growing spaces, tracking their journey through careful measurement and observation. As you monitor water needs, soil chemistry, and growing conditions, you'll learn to speak the language of plants through data - measuring pH levels, testing natural pest controls, and documenting the results of your experiments. The journey comes full circle as you harvest your own seeds, preparing to start the cycle anew.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
          <div className="flex-1">
            <Image src="/images/agtech1.png" alt="Student measuring pH" width={320} height={240} className="rounded-lg w-full h-auto" />
          </div>
          <div className="flex-1">
            <Image src="/images/agtech2.png" alt="Indoor plant growing setup" width={320} height={240} className="rounded-lg w-full h-auto" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Math Standards</h3>
            <p className="text-xs text-gray-700">6.RPA.3, 6.NS.B.3, 6.MP.1, 6.MP.4<br/>7.RPA.7, 7.EE.A.2, 7.EE.B.3, 7.SPA.1, 7.SPA.2, 7.MP.1<br/>8.SPA.1, 8.MP.1, 8.MP.2, 8.MP.6</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Science Standards</h3>
            <p className="text-xs text-gray-700">6.L2U1.13, 6.L2U1.14, 6.E2U1.10<br/>7.L1U1.8, 7.L1U1.9, 7.L2U1.12<br/>8.L3U1.9, 8.L4U1.11</p>
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
