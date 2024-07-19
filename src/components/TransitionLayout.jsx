import { useState, useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  TransitionContext,
  useTransitionContext,
} from '@/context/TransitionContext';
gsap.registerPlugin(useGSAP);

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { timeline } = useTransitionContext();

  useGSAP(() => {
    if (children.key !== displayChildren.key) {
      timeline.play().then(() => {
        setDisplayChildren(children);
        window.scrollTo(0, 0);
        timeline.pause().clear();
      });
    }
  }, [children]);

  return <div className="bg-white">{displayChildren}</div>;
}
