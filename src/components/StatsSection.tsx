"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center">
        <span className="font-heading text-4xl md:text-5xl font-extrabold text-secondary leading-none">
          {count}
        </span>
        <span className="font-heading text-xl md:text-2xl font-bold text-secondary-light ml-0.5">
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-dark py-14">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="text-white">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <span className="block mt-2 text-sm text-light-gray font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
