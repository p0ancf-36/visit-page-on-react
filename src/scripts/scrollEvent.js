import React, { useEffect, useRef } from "react";

export function subscribeToVeiwportChange(WrappedComponent, callback) {
   return (props) => {
      const ref = useRef();

      useEffect(() => {
         document.addEventListener('scroll', scrollHandler)
         document.addEventListener('resize', scrollHandler)
         return () => {
            document.removeEventListener('scroll', scrollHandler)
            document.removeEventListener('resize', scrollHandler)
         }
      }, [])

      function scrollHandler() {
         callback(ref);
      }

      return <WrappedComponent ref={ref} {...props} />
   }
}

const pow = Math.pow;
function easeOutQuart(x) {
   return 1 - pow(1 - x, 4);
}

export function animateScroll({ targetPosition, initialPosition, duration }) {
   let start;
   let position;
   let animationFrame;

   const requestAnimationFrame = window.requestAnimationFrame;
   const cancelAnimationFrame = window.cancelAnimationFrame;

   const maxAvailableScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

   const amountOfPixelsToScroll = initialPosition - targetPosition;

   function step(timestamp) {
      if (start === undefined) {
         start = timestamp;
      }

      const elapsed = timestamp - start;
      const relativeProgress = elapsed / duration;
      const easedProgress = easeOutQuart(relativeProgress);

      position = initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

      window.scrollTo(0, position);

      if (
         initialPosition !== maxAvailableScroll &&
         window.scrollY === maxAvailableScroll
      ) {
         cancelAnimationFrame(animationFrame);
         return;
      }

      if (elapsed < duration) {
         animationFrame = requestAnimationFrame(step);
      }
   }

   animationFrame = requestAnimationFrame(step);
}

const logError = () =>
   console.error(
      `Invalid element, are you sure you've provided element id or react ref?`
   );

const getElementPosition = (element) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 3000 }, margin = 0) => {
   const initialPosition = window.scrollY;

   const element = ref ?
      ref.current
         ? ref.current
         : ref
      : id
         ? document.getElementById(id)
         : null;

   if (!element) {
      logError();
      return;
   }

   animateScroll({
      targetPosition: getElementPosition(element) - margin,
      initialPosition,
      duration
   });
};