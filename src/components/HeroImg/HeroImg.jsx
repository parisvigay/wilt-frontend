import './HeroImg.css';
import heroGraphic from '../../assets/hero-graphic.png';

export default function HeroImg() {
    const style = {
        backgroundImage: `url(${heroGraphic})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

  return (
    <div style={style} className="heroImg"></div>
  )
}