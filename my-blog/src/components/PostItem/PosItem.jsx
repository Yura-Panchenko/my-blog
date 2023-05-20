import style from './style.module.scss';

const PostItem = ({image,rating,title,location}) => {
    return (
        <li className={style.postElement}>
            <div className={style.postItem}>
                <div className={style.visual}>
                    <img src={image} alt="alt" />
                </div>
                <span className={style.rating}>{rating}</span>
                <div className={style.body}>
                    <h3 className={style.title}>{title}</h3>
                    <span className={style.location}>{location}</span>
                </div>
            </div>
        </li>
    )
};

export default PostItem;