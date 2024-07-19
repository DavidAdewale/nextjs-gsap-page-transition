import React, { useState, createContext, useContext } from 'react';
import gsap from 'gsap';

const TransitionContext = createContext({});

function TransitionProvider({ children }) {
  const [timeline, setTimeline] = useState(() => {
    return gsap.timeline({ paused: true });
  });

  return (
    <TransitionContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TransitionContext.Provider>
  );
}

function useTransitionContext() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }

  return context;
}

export { useTransitionContext, TransitionProvider };
