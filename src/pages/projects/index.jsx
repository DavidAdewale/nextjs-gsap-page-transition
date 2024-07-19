import React, { useContext, useRef } from 'react';
import Picture from '../../../public/images/1.jpg';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import {
  TransitionContext,
  useTransitionContext,
} from '@/context/TransitionContext';
import gsap from 'gsap';

export default function Index() {
  const { timeline } = useTransitionContext();
  const container = useRef();
  const image = useRef();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(['p', image.current]);
      gsap.fromTo(
        targets,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, stagger: 0.1 }
      ); //entry animation
      timeline.add(gsap.to(container.current, { opacity: 0 })); //exit animation
    },
    { scope: container }
  );

  return (
    <div className="h-[200vh] flex" ref={container}>
      <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-5">
        <p className="text-[5vw]">Projects</p>
        <p className="max-w-[50%] text-center">
          Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur
          odio euismod. Aenean non consequat lectus. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet
          posuere ligula.
        </p>
        <p className="max-w-[50%] text-center">
          Fusce quis eleifend ipsum, sit amet posuere ligula.
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
