import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";

export default function PageScrollBtn() {
  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      visibility: "hidden",
      transform: "translate(50%, 50%)",
    },
  }));

  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current || currentScrollY < 100) {
      // Scrolling down or near top of page
      api.start({
        opacity: 0,
        onRest: () => api.start({ visibility: "hidden" }), // Hide after fade-out
        config: { duration: 300 },
      });
    } else {
      // Scrolling up
      api.start({
        opacity: 1,
        visibility: "visible", // Show immediately for fade-in
        config: { duration: 300 },
      });
    }

    prevScrollY.current = currentScrollY;
  };

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <animated.div
      className="page-scroll"
      onClick={handleScrollToTop}
      style={{ ...springs }}
    >
      <div className="page-scroll__icon">
        <FaArrowUp />
      </div>
    </animated.div>
  );
}
