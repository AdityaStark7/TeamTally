import { Link } from 'react-router-dom'

import banner from "../assets/banner.svg"
import features from "../assets/features.svg"

function Home(){
    return <div>
        <div className="section">
            <img src={banner} alt="banner" />
            <div className="content">
                <h1>Create, Share <span>Quizzes</span> easily</h1>
                <p>KIWIZ Lets you create your own dyanamic quiz and share it here.</p>
                <Link to="/create" className="btn">get started</Link>
            </div>
        </div>
        <div className="section">
            <div className="content">
                <h1>Why choose us</h1>
                <p>
                    <span className="li">Easy to use</span>
                    <span className="li">100% free</span>
                    <span className="li">Share with Students</span>
                    <span className="li">No login required for Students</span>
                    <span className="li">Supports media files</span>
                </p>
            </div>
            <img src={features} alt="features" />
        </div>
    </div>
}

export default Home