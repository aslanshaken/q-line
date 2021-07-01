import './Main.css'
import Wall from '../../Assets/main10.png'
import Icon from '../../Assets/icon3.png'

export default function Main() {
    return (
        <div className="main-container">
            <div className="main-left" >
                <img className="main-img" src={Wall} />
            </div>
            <div className="main-right">
                <h2>Logistics Expert </h2>
                <div className="main-right-bullet"><img src={Icon} /><h3>Professional Drivers (5+ years)</h3></div>
                <div className="main-right-bullet"><img src={Icon} /><h3>Safety is our number one priority</h3></div>
                <div className="main-right-bullet"><img src={Icon} /><h3>We are always here for you, support 24/7</h3></div>
                <div className="main-right-bullet"><img src={Icon} /><h3>Great reputation all across the USA</h3></div>

            </div>
        </div>
    )
}