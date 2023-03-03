import { useEffect, useState } from "react";

const useCheckMobileScreen = (): boolean => {
  const [width, setWidth] = useState(0);

  useEffect(() => {

    setWidth(window.innerWidth)

    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (width <= 768);
}

export default useCheckMobileScreen