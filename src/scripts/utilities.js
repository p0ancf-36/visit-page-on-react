export function ElementArray(length, element) {
   return new Array(length)
      .fill(null)
      .map((_, index) => element(index));
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