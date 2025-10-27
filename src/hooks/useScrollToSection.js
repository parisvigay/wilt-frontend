export default function useScrollToSection() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        const navBar = document.getElementById("navBar")

        if (section && navBar) {
            const offset = section.offsetTop - navBar.offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
    };

    return scrollToSection;
}