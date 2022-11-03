import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typinganimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "These are the default values...",
        "Provoking Deeper</br> Thoughts...",
      ],
      stringsElement: null,
      typeSpeed: 90,
      startDelay: 4000,
      backSpeed: 60,
      smartBackspace: true,
      shuffle: false,
      backDelay: 6000,
      fadeOut: false,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      attr: null,
      contentType: "html",
    });
    console.log(typed);
  }, []);

  return (
    <div>
      <h3 className="typing_animation">
        <span ref={el}></span>
      </h3>
    </div>
  );
};

export default Typinganimation;