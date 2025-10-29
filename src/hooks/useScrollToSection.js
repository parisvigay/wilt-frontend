import { useCallback } from "react";

export default function useScrollToSection() {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    const navBar = document.getElementById("navBar");

    if (section && navBar) {
      const offset = section.offsetTop - navBar.offsetHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }, []);

  return scrollToSection;
}
