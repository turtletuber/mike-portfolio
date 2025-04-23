"use client";
import Image from "next/image";

export default function StartupClubModal({ open, onClose, handouts = [] }) {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Startup Club</h2>
        <p className="text-base text-gray-700 mb-1">Math, Educational Technology, K-8 Career Literacy</p>
        <p className="text-gray-700 mb-4">
          Launch your own startup - twice. Experience entrepreneurship from two distinct angles as you create both a physical product business and a software company from the ground up. You'll think like a founder: researching real market needs, designing solutions, and building working prototypes. Along the way, you'll be introduced to the tools of modern business - from financial planning and marketing to coding and public speaking.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
          <div className="flex-1">
            <Image src="/images/startup1.png" alt="Students working on startup business" width={320} height={240} className="rounded-lg w-full h-auto" />
          </div>
          <div className="flex-1">
            <Image src="/images/startup2.png" alt="Students building prototype" width={320} height={240} className="rounded-lg w-full h-auto" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-bold text-sm mb-1">Career Literacy</h3>
            <p className="text-xs text-gray-700">7.5 Create and examine the benefits of a budget<br/>7.4 Analyze the relationship between education, income, and job opportunities<br/>7.3 Explain financial wants vs. needs<br/>7.2 Demonstrate effective time management<br/>7.1 Identify the importance of personal appearance in a variety of settings</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">Arizona Educational Technology Standards</h3>
            <p className="text-xs text-gray-700">6-8.7.d.<br/>6-8.7.c.<br/>6-8.7.b.<br/>6-8.7.a.<br/>6-8.6.d.</p>
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
