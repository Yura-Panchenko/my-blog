import {NavList,NavItem} from '../Navigation';
import { Button } from '../Button';
import Logo from './Logo';
import style from './style.module.scss';

const Header = () => {
    const{header,headerHolder} = style;

    const menu = [{
            id: 1,
            title: 'Review'
        },{
            id: 2,
            title: 'Tips'
        },{
            id: 3,
            title: 'Alerts'
        },{
            id: 4,
            title: 'Blog'
        }
    ]

    const headerMenu = menu.map((item) => {
        return <NavItem key={item.id}>{item.title}</NavItem>
    })

    return (
        <header className={header}>
            <div className="container">
                <div className={headerHolder}>
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
