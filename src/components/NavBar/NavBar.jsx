import './NavBar.css';
import useScrollToSection from '../../hooks/useScrollToSection';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    const scrollToSection = useScrollToSection();

  return (
    <header className="header" id="navBar">
        <nav className="navBar">
            <div className="navLeft">
                <Link
                    to="/"
                    className="logoLink"
                    onClick={(e) => {
                        if (location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    >
                    Wilt
                </Link>
            </div>
            <div className="navCenter">
                <Link
                    to="/features"
                    onClick={(e) => {
                        if (location.pathname=== "/" || location.pathname=== "/features") {
                            e.preventDefault();
                            scrollToSection("features");
                        }
                    }}
                    className="link">
                    Features
                </Link>
                <Link
                    to="/how-it-works"
                    onClick={(e) => {
                        if (location.pathname=== "/" || location.pathname=== "/how-it-works") {
                            e.preventDefault();
                            scrollToSection("howItWorks");
                        }
                    }}
                    className="link">
                    How it works
                </Link>
                <Link
                    to="/about"
                    className="link">
                    About
                </Link>
            </div>
            <div className="navRight">
                <p className="link">Log In</p>
                <p className="link">Get Started</p>
            </div>
        </nav>
    </header>
  )
}