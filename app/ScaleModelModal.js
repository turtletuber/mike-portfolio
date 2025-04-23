"use client";
import Image from "next/image";

export default function ScaleModelModal({ open, onClose, slides = [], handouts = [] }) {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Scale Model of School</h2>
        <p className="text-base text-gray-700 mb-1">Math, Educational Technology, K-8 Career Literacy</p>
        <p className="text-gray-700 mb-4">
          Transform your school campus into a miniature masterpiece. Equipped with tape measures and technological tools, you'll step into the shoes of architects and designers to create an accurate scale model of your own school grounds. From measuring real spaces to crafting detailed 3D prints, this hands-on project turns mathematical concepts into tangible reality at 1:20 scale. Get ready to see your familiar campus environment from a whole new perspective – one where every inch counts and precision meets creativity.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <Image src="/images/scalemodel1.png" alt="Scale Model Example" width={400} height={300} className="rounded-lg w-full h-auto" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <Image src="/images/scalemodel2.png" alt="Student working on scale model" width={400} height={300} className="rounded-lg w-full h-auto" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Math Standards</h3>
            <p className="text-xs text-gray-700">6.RPA.1, 6.RPA.3, 6.NS.A.1, 6.G.A.1, 6.MP.4<br/>7.RPA.2, 7.EE.A.2, 7.G.A.1, 7.G.B, 7.G.B.6, 7.MP.4<br/>8.G.A.2, 8.MP.1, 8.MP.4</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Educational Technology Standards</h3>
            <p className="text-xs text-gray-700">Knowledge Constructor, Innovative Designer, Computational Thinker<br/>6-8.3.a, 6-8.3.b, 6-8.3.c, 6-8.4.a, 6-8.4.b, 6-8.4.c, 6-8.5.a, 6-8.5.b</p>
          </div>
        </div>
        {slides.length > 0 && (
          <div className="mb-4">
            <h3 className="font-bold text-base mb-2">Google Slides Preview</h3>
            <div className="flex flex-wrap gap-3">
              {slides.map((src, i) => (
                <Image key={i} src={src} alt={`Slide ${i+1}`} width={200} height={120} className="rounded border w-auto h-28 object-cover" />
              ))}
            </div>
          </div>
        )}
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
