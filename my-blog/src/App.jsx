import { useState } from 'react';
import Routes from './routes/Routes';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import { PostList } from './components/PostList';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
    const [posts, setPosts] = useState(
        [{
            id:'1',
            image: './post-01.jpg',
            rating: '3.4',
            title: 'Kina Mountain',
            location: 'Cambodia'
        },{
            id:'2',
            image: './post-02.jpg',
            rating: '4.5',
            title: 'Kina Mountain',
            location: 'Cambodia'
        },{
            id:'3',
            image: './post-03.jpg',
            rating: '4.2',
            title: 'Kina Mountain',
            location: 'Cambodia'
        },{
            id:'4',
            image: './post-04.jpg',
            rating: '3.5',
            title: 'Kina Mountain',
            location: 'Cambodia'
        }
    ]);

    const heroTitle = "Discover Your Life, Travel Where You Want";
    const heroContent = "Would you explore natur paradise in the world, let’s find the best destination in world with us.";

    return (
        <Routes/>
    )
}

export default App
{/* <div className='wrapper'>
            <Header/>
            <main>
                <Hero 
                    title={heroTitle}
                    text={heroContent}
                    image={'./src/assets/images/hero-image.jpg'}
                />
                <PostList posts={posts}/>
                <CTA/>
            </main>
            <Footer/>
        </div> */}