import './FeatureCard.css';
import Card from '@mui/material/Card';

export default function FeatureCard({ icon, title, p }) {
  return (
    <Card className="featureCard">
      <div className="featureIconCircle">
        {icon}
      </div>
      <h3 className="featureCardTitle">{title}</h3>
      <p className="featureCardP">{p}</p>
    </Card>
  )
}