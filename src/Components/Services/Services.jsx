import './Services.css'
import Truck from '../../Assets/truck-removed.png'
import Trust from '../../Assets/trust2.png'
import Main from '../../Assets/main.jpg'
import Main2 from '../../Assets/satelite.jpg'
import Main3 from '../../Assets/main3.jpg'

export default function Services() {
    return (
        <div className="services-main-container">
            <h1 className="paragraph">Services</h1>
            <div className="services-boxes">
                <div className="services-box-left">
                    <h1>Shipping</h1>
                    <h2>Reefer and DryVan services for every need. We are here for you.</h2>
                </div>
                <img className="services-box-right" src={Main} />
            </div>
            <div className="services-boxes">
                <img className="services-box-right" src={Main2} />
                <div className="services-box-left">
                    <h1>Technology Service</h1>
                    <h2>Tools and services that make your every freight shipment easier than ever.</h2>
                </div>
            </div>
            <div className="services-boxes">
                <div className="services-box-left">
                    <h1>Support</h1>
                    <h2>Our extensive resources and carrier network can accommodate all your specialized cargo handling and shipping needs.</h2>
                </div>
                <img className="services-box-right" src={Main3} />
            </div>
        </div>
    )
}