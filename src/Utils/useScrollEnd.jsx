import { useEffect } from "react";
import { useThemeContext } from "../Context/ThemeContext/Theme.provider";

function useScrollEnd(callback) {
  const { theme } = useThemeContext();

  // Please check why context value is getting re-updated.. // Huge pain.
  function isMobileDevice() {
    // Regular expression to match common mobile device keywords
    const mobileKeywords =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    // Check if the user agent string contains any of the mobile keywords
    return mobileKeywords.test(navigator.userAgent);
  }

  // console.log("inside scroll end 17: ", window.innerHeight, window.scrollY, document.body.offsetHeight);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the adjusted inner height

      let navbarHt = theme.navbarHt;
      if(isMobileDevice()) navbarHt = "5rem";

      const adjustedInnerHeight =
        window.innerHeight - parseInt(navbarHt, 10) * 16; // Convert rem to pixels

        // console.log("inside scroll end: ", window.innerHeight, window.scrollY, document.body.offsetHeight, navbarHt, Math.ceil(adjustedInnerHeight + window.scrollY));

      if (Math.ceil(adjustedInnerHeight + window.scrollY) >= document.body.offsetHeight) {
        callback();

        // Remove the event listeners after the first invocation
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("touchmove", handleScroll);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("keydown", handleScroll);
      }
    };

    // Listen for the wheel event
    window.addEventListener("wheel", handleScroll);
    
    // Listen for the touchmove event
    window.addEventListener("touchmove", handleScroll);
    window.addEventListener("scroll", handleScroll);

    // Listen for the keydown event
    window.addEventListener("keydown", handleScroll);

    return () => {
      // Remove the event listeners after the first invocation
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleScroll);
    };
  }, []);
}

export default useScrollEnd;
