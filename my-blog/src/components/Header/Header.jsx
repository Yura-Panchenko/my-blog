import {NavList,NavItem} from '../Navigation';
import { Button } from '../Button';
import Logo from './Logo';
import s from './style.module.scss';

const Header = () => {
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
        <header className={s.header}>
            <div className="container">
                <div className={s.headerHolder}>
                    <Logo/>

                    <NavList>
                        {headerMenu}
                    </NavList>
                    <Button>Blog</Button>
                </div>
            </div>
        </header>
    )
}
export default Header;
