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