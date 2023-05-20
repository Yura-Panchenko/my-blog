import { NavList,NavItem } from "../Navigation";
import Copyright from "./Copyright";

import style from './style.module.scss';

const Footer = () => {
    const menu = [
        'Review',
        'Tips',
        'Alerts',
        'Blog'
    ]

    const headerMenu = menu.map((item, key) => {
        return <NavItem key={key}>{item}</NavItem>
    })
    
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footerHolder}>
                    <Copyright/>
                    <NavList>
                        {headerMenu}
                    </NavList>
                </div>
            </div>
        </footer>
    )
};

export default Footer;