import './Footer.scss'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="fine-print">
                <p>
                    Images, logos, and other official Cities: Skylines content copyright © 2014 Paradox Interactive AB.
                    <a href="https://www.paradoxplaza.com">paradoxplaza.com</a>
                </p>
            </div>
            <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                <img className="creative-commons" src="https://skylines.country/cc-by-sa.png" alt=""/>
            </a>
        </footer>
    )
}

export default Footer