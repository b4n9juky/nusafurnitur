import { useState } from 'react';
import { useInView } from '../hooks';

const testimonials = [
  {
    id: 1,
    name: 'Rina Hartono',
    role: 'Interior Designer, Jakarta',
    text: "Nusa Furnitur's pieces are the cornerstone of my residential projects. The quality of the teak and the attention to joinery details is unmatched. Clients always ask where we sourced the furniture.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Homeowner, Singapore',
    text: 'We furnished our entire living room with Nusa pieces three years ago. The furniture has aged beautifully — the teak has developed this gorgeous patina. It truly gets better with time.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Architect, Melbourne',
    text: "As an architect, I appreciate furniture that respects material honesty. Nusa's work does exactly that — you can feel the craftsmanship in every joint and surface.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: contentRef, isInView: contentInView } = useInView(0.15);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 ${
            headerInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <p className="text-sand text-sm font-medium tracking-[0.2em] uppercase mb-3">
            What People Say
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Trusted by Designers
          </h2>
          <p className="text-sand-light text-lg max-w-2xl mx-auto">
            Hear from the architects, designers, and homeowners who choose Nusa.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto ${
            contentInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="relative">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className={`transition-all duration-500 ${
                  index === active
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <blockquote className="text-center">
                  <svg
                    className="w-10 h-10 text-terracotta mx-auto mb-6 opacity-60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white text-xl md:text-2xl leading-relaxed font-display italic mb-8">
                    "{t.text}"
                  </p>
                  <footer className="flex items-center justify-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-sand/30"
                      loading="lazy"
                    />
                    <div className="text-left">
                      <cite className="text-white font-medium not-italic">
                        {t.name}
                      </cite>
                      <p className="text-sand-light text-sm">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setActive(index)}
                role="tab"
                aria-selected={index === active}
                aria-label={`Testimonial from ${t.name}`}
                className={`w-3 h-3 transition-all duration-300 ${
                  index === active
                    ? 'bg-terracotta w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
