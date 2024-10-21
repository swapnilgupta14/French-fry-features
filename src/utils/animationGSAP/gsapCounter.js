// gsapCounter.js
import { gsap } from "gsap";

// Register a custom GSAP effect for counter animations
gsap.registerEffect({
  name: "counter",
  extendTimeline: true,
  defaults: {
    end: 0,
    duration: 0.5,
    ease: "power1",
    increment: 1,
  },
  effect: (targets, config) => {
    let tl = gsap.timeline();
    let num = parseInt(targets[0].innerText.replace(/\,/g, ''));
    targets[0].innerText = num;

    tl.to(targets, {
      duration: config.duration,
      innerText: config.end,
      modifiers: {
        innerText: (innerText) => {
          return gsap.utils.snap(config.increment, Number(innerText))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      },
      ease: config.ease,
    }, 0);

    return tl;
  },
});

// Function to initialize the counter animation on elements
export const initializeCounters = (counterElements) => {
  let tl = gsap.timeline();

  counterElements.forEach((element, index) => {
    const endValue = parseInt(element.getAttribute('data-end'));

    tl.from(element, { opacity: 0 }, index > 0 ? "+=0.5" : 0)
      .counter(element, { end: endValue, increment: 1 }, "-=0.5");
  });

  return tl;
};

// React component using the counter animation
import React, { useEffect } from 'react';

const CounterComponent = () => {
  useEffect(() => {
    const counterElements = document.querySelectorAll("#numberAnimation");
    initializeCounters(counterElements);
  }, []);

  return (
    <div>
      <span id="numberAnimation" data-end="1000">0</span>
      {/* Add more counter elements as needed */}
    </div>
  );
};

export default CounterComponent;