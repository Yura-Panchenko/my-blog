import style from './style.module.scss';
const Button = ({children,url}) => {
    return(
        <a className={style.btn} href={url || "#"}>{children}</a>
    )
}
export default Button;