import './Landing.css';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import HeroImg from '../../components/HeroImg/HeroImg';
import PlantIcon from '@mui/icons-material/SpaOutlined';
import WaterDropIcon from '@mui/icons-material/WaterDropOutlined';
import AlarmIcon from '@mui/icons-material/AlarmOutlined';
import useScrollToSection from '../../hooks/useScrollToSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Landing() {
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    if (location.pathname === "/features") {
      scrollToSection("features");
    }
    else if (location.pathname === "/how-it-works") {
      scrollToSection("howItWorks");
    }
    else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [location.pathname]);

  return (
    <>
      <div className="landingContainer1">
        <div className="heroSectionLeft">
          <h1 className="heroTagLine">Helping plants, and people thrive.</h1>
          <h3 className="heroSubHeading">Track your plants and watch them grow, with smart, personalised care plans.</h3>
          <button className="heroCta">Join for free</button>
        </div>
      <HeroImg />
      </div>
      <div className="landingContainer2" id="features">
        <div className="featureCardContainer">
          <FeatureCard 
            icon={<PlantIcon className="featureCardIcon" />} 
            title="Track your plants" 
            p="Losing track of what’s thriving and what’s struggling? Wilt lets you log each plant, monitor progress, and spot patterns — helping you become a more confident plant parent."
          />
          <FeatureCard 
            icon={<WaterDropIcon className="featureCardIcon" />} 
            title="Weather-based watering" 
            p="No more over- or under-watering. Wilt checks your local weather and adjusts reminders automatically, helping you water only when your plants actually need it."/>
          <FeatureCard 
            icon={<AlarmIcon className="featureCardIcon" />} 
            title="Smart reminders" 
            p="Busy days make it easy to forget your plants. Wilt keeps track for you, sending gentle, timely reminders so every plant gets cared for on schedule."
          />
        </div>
      </div>
      <div className="landingContainer3" id="howItWorks">

      </div>
    </>
  )
}