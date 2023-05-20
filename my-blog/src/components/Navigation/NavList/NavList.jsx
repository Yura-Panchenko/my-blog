import style from '../style.module.scss';

const NavList = ({children}) => {
    return(
        <ul className={style.menu}>
            {children}
        </ul>
    )
};

export default NavList;