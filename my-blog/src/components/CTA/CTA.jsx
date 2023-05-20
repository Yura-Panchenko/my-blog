import { Button } from "../Button";
import image from '../../assets/images/image-01.jpg';

import style from "./style.module.scss";

const CTA = () => {

    return (
        <div className={style.ctaSection}>
            <div className="container">
                <div className={style.cta}>
                    <img src={image} alt="image" />
                    <div className={style.ctaHold}>
                        <div className={style.text}>
                            <h2>Don’t Miss The 50% Discount if You register Today</h2>
                        </div>
                        <Button>Register Today</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CTA;