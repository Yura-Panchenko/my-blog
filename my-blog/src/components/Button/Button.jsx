import s from './style.module.scss';
const Button = ({children}) => {
    return(
        <a className={s.btn} href="#">{children}</a>
    )
}
export default Button;