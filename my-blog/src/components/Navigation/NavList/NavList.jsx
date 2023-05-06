import s from '../style.module.scss';

const NavList = ({children}) => {
    return(
        <ul className={s.menu}>
            {children}
        </ul>
    )
};

export default NavList;