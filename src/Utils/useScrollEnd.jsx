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

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the adjusted inner height

      let navbarHt = theme.navbarHt;
      if(isMobileDevice()) navbarHt = "5rem";

      const adjustedInnerHeight =
        window.innerHeight - parseInt(navbarHt, 10) * 16; // Convert rem to pixels

        // console.log("inside scroll end: ", window.innerHeight, window.scrollY, document.body.offsetHeight, navbarHt);

      if (Math.ceil(adjustedInnerHeight + window.scrollY) >= document.body.offsetHeight) {
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
