import s from '../style.module.scss';

const NavItem = ({children}) => {
    return(
        <li className={s.item}>
            {children}
        </li>
    )
};

export default NavItem;