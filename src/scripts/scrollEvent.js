import React, { useEffect, useState, useRef } from "react";
import data from "./data";

export function SubscribeOnScrollEvent(callback, componentRef) {
   data.scrollEvents.push({ callback: callback, item: componentRef });
}
export function AddClassIfOnVieport(className, margin = 0) {
   function callback(offset, item) {
      if (item.current === null) { return; }

      const rect = item.current.getBoundingClientRect();

      if (
         rect.bottom - margin >= offset &&
         rect.top + margin <= window.innerHeight + offset
      ) {
         item.current.classList.add(className);
      } else {
         item.current.classList.remove(className);
      }
   }
   return callback;
}
export function withSubscription(WrappedComponent, callback) {
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