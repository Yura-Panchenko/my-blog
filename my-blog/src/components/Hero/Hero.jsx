import { Button } from "../Button";

import s from './style.module.scss';
const Hero = ({title,text,image}) => {
    return(
        <div className={s.hero}>
            <img className={s.heroImg} src={image} alt="image" />
            <div className={s.heroHold}>
                <div className="container">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <Button>Button hero</Button>
                </div>
            </div>
        </div>
    )
}
export default Hero;