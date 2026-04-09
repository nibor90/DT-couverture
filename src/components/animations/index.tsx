"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

/** Config d'affichage du viewport : déclenche l'animation une seule fois,
 *  dès que 15 % de l'élément est visible. */
const VIEWPORT = { once: true, amount: 0.15 } as const;

/** Durée et easing par défaut (animations volontairement plus lentes pour un rendu plus posé) */
const DEFAULT_TRANSITION = {
  duration: 1.05,
  ease: [0.22, 1, 0.36, 1], // ease out expo — naturel et moderne
} as const;

// ─── Variants ──────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0 },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0 },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

// ─── Props communes ─────────────────────────────────────────────────────────

interface AnimProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  /** Passer `as` pour changer l'élément rendu (ex. "section", "article") */
  as?: keyof typeof motion;
}

// ─── Composants ─────────────────────────────────────────────────────────────

/** Fade in de bas en haut — utilisation générique */
export function FadeInUp({ children, delay = 0, duration, className, style }: AnimProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...DEFAULT_TRANSITION, duration: duration ?? DEFAULT_TRANSITION.duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Fade in simple (opacité uniquement) */
export function FadeIn({ children, delay = 0, duration, className, style }: AnimProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...DEFAULT_TRANSITION, duration: duration ?? DEFAULT_TRANSITION.duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Glissement depuis la gauche */
export function FadeInLeft({ children, delay = 0, duration, className, style }: AnimProps) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...DEFAULT_TRANSITION, duration: duration ?? DEFAULT_TRANSITION.duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Glissement depuis la droite */
export function FadeInRight({ children, delay = 0, duration, className, style }: AnimProps) {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...DEFAULT_TRANSITION, duration: duration ?? DEFAULT_TRANSITION.duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Zoom in depuis légèrement plus petit */
export function ZoomIn({ children, delay = 0, duration, className, style }: AnimProps) {
  return (
    <motion.div
      variants={zoomIn}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...DEFAULT_TRANSITION, duration: duration ?? DEFAULT_TRANSITION.duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger container ───────────────────────────────────────────────────────

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  /** Délai avant le premier enfant */
  initialDelay?: number;
}

/**
 * Wrapper qui anime ses enfants en cascade.
 * Les enfants directs doivent utiliser `<StaggerItem>`.
 */
export function StaggerContainer({ children, className, staggerDelay = 0.15, initialDelay = 0 }: StaggerProps) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Item d'un StaggerContainer — applique fadeUp par défaut */
export function StaggerItem({
  children,
  className,
  style,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: "up" | "left" | "right" | "zoom" | "fade";
}) {
  const variantMap = {
    up: fadeUp,
    left: fadeLeft,
    right: fadeRight,
    zoom: zoomIn,
    fade: fadeIn,
  };
  return (
    <motion.div
      variants={variantMap[variant]}
      transition={DEFAULT_TRANSITION}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
