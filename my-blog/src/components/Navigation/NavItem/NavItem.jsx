import style from '../style.module.scss';

const NavItem = ({children}) => {
    return(
        <li className={style.item}>
            {children}
        </li>
    )
};

export default NavItem;