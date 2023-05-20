import { Button } from "../Button";

import style from './style.module.scss';
const Hero = ({title,text,image}) => {
    return(
        <div className={style.hero}>
            <img className={style.heroImg} src={image} alt="image" />
            <div className={style.heroHold}>
                <div className="container">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <Button url="www://google.com">Button hero</Button>
                </div>
            </div>
        </div>
    )
}
export default Hero;