import React from "react";

function Blockquote({ children }) {
  return (
    <blockquote className='max-w-820 text-black-strom border-l-4 border-l-gold-metallic my-10 pr-4 pl-5 text-2xl leading-8 max-lg:text-22xl max-md:text-xl max-sm:my-25 max-sm:pr-0 max-sm:text-lg max-sm:leading-6'>
      {children}
    </blockquote>
  );
}

export default Blockquote;
