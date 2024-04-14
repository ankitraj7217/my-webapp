import { useEffect } from "react";
import { useThemeContext } from "../Context/ThemeContext/Theme.provider";

function useScrollEnd(callback) {
  const { theme } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the adjusted inner height
      const adjustedInnerHeight =
        window.innerHeight - parseInt(theme.navbarHt, 10) * 16; // Convert rem to pixels

      if (adjustedInnerHeight + window.scrollY >= document.body.offsetHeight) {
        callback();

        // Remove the event listener after the first invocation
        window.removeEventListener("wheel", handleScroll);
      }
    };

    // Listen for the wheel event
    window.addEventListener("wheel", handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
}

export default useScrollEnd;
