import './HowItWorksStep.css';

export default function HowItWorksStep({ titleSpan, title, text, img }) {
  return (
    <div className="HIWStep">
        <div className="HIWStepTextContainer">
            <h1 className="HIWStepTitle"><span className="HIWStepSpan">{titleSpan}</span>{title}</h1>
            <h3 className="HIWStepText">{text}</h3>
        </div>
        <img src={img} alt="No img." className="HIWImg"/>
    </div>
  )
}