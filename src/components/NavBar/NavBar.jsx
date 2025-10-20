import './NavBar.css';

export default function NavBar() {
  return (
    <header className="header">
        <nav className="navBar">
            <div className="navLeft">
                <p className="logoLink">Wilt</p>
            </div>
            <div className="navCenter">
                <p className="link">Features</p>
                <p className="link">How it Works</p>
                <p className="link">About</p>
            </div>
            <div className="navRight">
                <p className="link">Log In</p>
                <p className="link">Get Started</p>
            </div>
        </nav>
    </header>
  )
}