import React, { useEffect, useState } from 'react';
import { scrollTo } from '../../scripts/scrollEvent';

const AnchorLink = ({ className = "", anchorQuery, margin = 0, onClick = () => { }, children, ...other }) => {
   const [anchor, setAnchor] = useState();

   useEffect(() => {
      setAnchor(() => document.querySelector(anchorQuery));
   }, [anchor, anchorQuery])

   function clickHandler() {
      onClick();
      scrollTo({ ref: anchor }, margin);
   }

   return (
      <span className={"anchor-link " + className} onClick={clickHandler} {...other}>
         {children}
      </span>
   )
}

export default AnchorLink;