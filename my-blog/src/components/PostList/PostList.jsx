import PostItem from "../PostItem/PosItem";

import style from './style.module.scss';

const PostList = ({posts}) => {
    return (
        <div className={style.postsWrap}>
            <div className="container">
                <ul className={style.posts}>
                    {posts.map((post)=>{
                        return (
                            <PostItem 
                            key={post.id}
                            id={post.id}
                            image={post.image} 
                            rating={post.rating}
                            title={post.title}
                            location={post.location}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default PostList;