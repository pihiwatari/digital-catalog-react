import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showItem, setShowItem] = useState(width >= 768);

  useEffect(() => {
    // Check for window initial size
    if (width >= 768) {
      setShowItem(true);
    } else {
      setShowItem(false);
    }
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, showItem]);

  return { width, showItem };
}

export default useWindowWidth;
