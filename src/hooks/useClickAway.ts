import { useEffect, useRef } from "react";

type TClickAwayHandler = (e?: MouseEvent | TouchEvent) => void;

const useClickAway = <T extends HTMLElement>(
  clickAwayHandler: TClickAwayHandler
) => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const clickAwayEvent = (e: MouseEvent) => {
      if (targetRef.current && !targetRef.current.contains(e.target as Node)) {
        clickAwayHandler();
      }
    };

    document.addEventListener("mousedown", clickAwayEvent);

    return () => {
      document.removeEventListener("mousedown", clickAwayEvent);
    };
  }, [clickAwayHandler, targetRef]);

  return targetRef;
};

export default useClickAway;
