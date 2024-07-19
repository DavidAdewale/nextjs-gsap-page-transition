import gsap from 'gsap';

function useTimeline({ timeline, container, from, to }) {
  gsap.fromTo(container, from, to);
  timeline.add(gsap.to(container, { opacity: 0 }));
}
