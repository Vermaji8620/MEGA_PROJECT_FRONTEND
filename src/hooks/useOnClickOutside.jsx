import { useEffect } from "react";

// this hook detects the clicks outside of the component and calls the provided handler function

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    // define the listerner function to be called on the click/touch events---
    const listener = (even) => {
      // if the click/touch event originated inside the ref element, do nothing
      if (!ref.current || ref.current.contains(even.target)) return;

      //   other wise call the provider handler function
      handler(even);
    };

    // add event listener for mousedown and touchstart events on the document

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // cleanup funciotn to remove the event listener when the comeponet unmounts or when the ref/handler dependencies change
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
