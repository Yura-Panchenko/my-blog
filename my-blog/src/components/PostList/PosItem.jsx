import s from './style.module.scss';

const PostItem = ({id,image,rating,title,location}) => {
    return (
        <li className={s.postElement}>
            <div className={s.postItem}>
                <div className={s.visual}>
                    <img src={image} alt="alt" />
                </div>
                <span className={s.rating}>{rating}</span>
                <div className={s.body}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.location}>{location}</span>
                </div>
            </div>
        </li>
    )
};

export default PostItem;