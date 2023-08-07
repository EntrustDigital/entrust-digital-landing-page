import { useEffect } from "react";

export const useClickOutsideComponent = (ref, visible, setVisible) => {
  useEffect(() => {
    const handler = (event) => {
      if (visible && ref.current && !ref.current.contains(event.target)) {
        setVisible(false)
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
  }, [ref, setVisible, visible]);
}