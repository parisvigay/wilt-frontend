import HeroImg from '../../components/HeroImg/HeroImg';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landingOuter">
      <div className="heroSectionLeft">
        <h1 className="heroTagLine">Helping plants, and people thrive.</h1>
        <h3 className="heroSubHeading">Track your plants and watch them grow, with smart, personalised care plans.</h3>
        <button className="heroCta">Join for free</button>
      </div>
      <HeroImg />
    </div>
  )
}