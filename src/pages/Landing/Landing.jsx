import './Landing.css';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import HeroImg from '../../components/HeroImg/HeroImg';
import PlantIcon from '@mui/icons-material/SpaOutlined';
import WaterDropIcon from '@mui/icons-material/WaterDropOutlined';
import AlarmIcon from '@mui/icons-material/AlarmOutlined';
import useScrollToSection from '../../hooks/useScrollToSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HowItWorksStep from '../../components/HowItWorksStep/HowItWorksStep';
import addPlantImg from '../../assets/add-plant.png';
import weatherImg from '../../assets/weather.png';
import reminderImg from '../../assets/reminder.png';
import thriveImg from '../../assets/thrive.png'

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
            p="Losing track of what’s thriving and what’s struggling? Log each plant, monitor progress, and spot patterns — helping you become a more confident plant parent."
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
        <HowItWorksStep
          titleSpan="1. "
          title="Add your plants"
          text="Start by adding each of your plants — name them, choose their type, and set their location. Wilt builds a tailored care profile for each one, so you can stop guessing and start growing."
          img={addPlantImg}
        />
        <HowItWorksStep
          titleSpan="2. "
          title="We monitor the weather"
          text="Wilt automatically tracks your local weather and conditions. It adjusts care schedules behind the scenes, so each plant gets exactly what it needs, when it needs it."
          img={weatherImg}      
        />
        <HowItWorksStep
          titleSpan="3. "
          title="Get reminders"
          text="Struggle to remember watering cycles? Wilt sends thoughtful, well-timed nudges so every plant gets care exactly when it needs it."
          img={reminderImg}
        />
        <HowItWorksStep
          titleSpan="4. "
          title="Watch your plants grow"
          text="With consistent care and balance, your plants stay healthy and strong. Wilt takes the guesswork out, so you can simply enjoy watching them thrive."
          img={thriveImg}
        />
      </div>
    </>
  )
}