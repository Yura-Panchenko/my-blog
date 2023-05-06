import { Button } from "../Button";
import image from '../../assets/image-01.jpg';

import s from "./style.module.scss";

const CTA = () => {

    return (
        <div className={s.ctaSection}>
            <div className="container">
                <div className={s.cta}>
                    <img src={image} alt="" />
                    <div className={s.ctaHold}>
                        <div className={s.text}>
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