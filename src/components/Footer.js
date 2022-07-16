function Footer(){
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">KIWIZ</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div>
                <p className="title">Specisl Thanks to</p>
                <p className="li">React</p>
                <p className="li">Firebase</p>
                <p className="li">Github</p>
                <p className="li">Netlify</p>
            </div>
        </div>
    )
}

export default Footer