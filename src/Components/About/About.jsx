import './About.css'

import Logo from '../../Assets/logo-original.png'

export default function About() {
    return (
        <div className="about">
            <div className="about-main-container">
                <h1 className="paragraph">About Us</h1>
                <img className="about-img" src={Logo} />
                <div className="about-text">
                    <p>
                        For the past five year, we have established and developed great customer service and reputation all across the USA.
                        <br />
                        <br />
                        At Q Line Logistics, we provide best services throughout the entire shipping from beginning for Reefer and DryVan. Our drivers have 5+ years of driving experiance, which means they can deliver safely and on time. Our unique combination of experience, service and technology allows us to provide professional services that has a high degree of reliability and more affordable solutions.
                        <br />
                        <br />
                        Call us anytime to start a partnership with experience Q Line Logistics professionals. We look forward to supporting your logistics needs for many years!
                        <br />
                        <br />
                        Safety is our priority. We comply with DOT and FMCSA.
                    </p>
                </div>
            </div>
        </div>
    )
}