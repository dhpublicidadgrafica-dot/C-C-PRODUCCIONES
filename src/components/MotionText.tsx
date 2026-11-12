import React from 'react';

export interface MotionTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  animation?: 'fade-up' | 'fade-down' | 'fade-in' | 'reveal';
  delay?: 0 | 75 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 500;
  interactive?: boolean;
  children: React.ReactNode;
}

const DELAY_CLASSES: Record<number, string> = {
  0: '',
  75: 'motion-delay-75',
  100: 'motion-delay-100',
  150: 'motion-delay-150',
  200: 'motion-delay-200',
  250: 'motion-delay-250',
  300: 'motion-delay-300',
  350: 'motion-delay-350',
  400: 'motion-delay-400',
  500: 'motion-delay-500'
};

const ANIMATION_CLASSES: Record<string, string> = {
  'fade-up': 'motion-fade-up',
  'fade-down': 'motion-fade-down',
  'fade-in': 'motion-fade-in',
  'reveal': 'motion-reveal'
};

/**
 * High-performance typographic motion component.
 * Uses hardware-accelerated CSS animations with SaaS standard cubic-bezier(0.22, 1, 0.36, 1).
 * Respects existing fonts, colors, and layout without altering DOM semantics.
 */
export const MotionText: React.FC<MotionTextProps> = ({
  as: Component = 'div',
  animation = 'fade-up',
  delay = 0,
  interactive = false,
  className = '',
  children,
  ...rest
}) => {
  const animClass = ANIMATION_CLASSES[animation] || 'motion-fade-up';
  const delayClass = DELAY_CLASSES[delay] || '';
  const interactiveClass = interactive ? 'motion-interactive-heading' : '';

  const combinedClass = `${animClass} ${delayClass} ${interactiveClass} ${className}`.trim();

  return React.createElement(
    Component,
    {
      className: combinedClass,
      ...rest
    },
    children
  );
};
