import { useEffect, useRef, useState } from "react";

const useSticky = (element) => {
  const [isSticky, setSticky] = useState(false);
  // const element = useRef(null);;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    let argument = [func, wait, immediate];
    return () => {
      let context = this,
        args = argument;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isSticky, element };
};

export default useSticky;
