import { NavList,NavItem } from "../Navigation";
import Copyright from "./Copyright";

import s from './style.module.scss';

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
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footerHolder}>
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