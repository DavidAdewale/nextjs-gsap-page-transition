import React, { useRef, useContext, useTransition } from 'react';
import Picture from '../../../public/images/3.jpg';
import Image from 'next/image';
import {
  TransitionContext,
  useTransitionContext,
} from '@/context/TransitionContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Index() {
  const { timeline } = useTransitionContext();
  const container = useRef();
  const image = useRef();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(['p', image.current]);
      gsap.fromTo(
        targets,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.1 }
      ); //entry animation
      timeline.add(gsap.to(container.current, { opacity: 0 })); //exit animation
    },
    { scope: container }
  );

  return (
    <div className="h-[200vh] flex" ref={container}>
      <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-5">
        <p className="text-[5vw]">About</p>
        <p className="max-w-[50%] text-center">
          Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur
          odio euismod. Aenean non consequat lectus. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet
          posuere ligula.
        </p>
        <div className="relative w-[50%] h-[40vh]">
          <Image
            ref={image}
            src={Picture}
            placeholder="blur"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
