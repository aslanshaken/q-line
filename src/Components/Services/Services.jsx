import './Services.css'
import Main5 from '../../Assets/warehouse.jpg'
import Main4 from '../../Assets/customer-service.jpg'
import Main from '../../Assets/main5.jpg'
import Main2 from '../../Assets/satelite.jpg'
import Main3 from '../../Assets/main3.jpg'
import Main6 from '../../Assets/hook2.jpg'

export default function Services() {
    return (
        <div className="services">
            <div className="services-main-container">
                <h1 className="paragraph">Our Services</h1>
                <div className="services-boxes">
                    <div className="services-box">
                        <img className="services-box-img" src={Main} />
                        <h2>Shipping</h2>
                        <p className="services-box-text">Reefer and DryVan services for every need. We are here for you.</p>
                    </div>
                    <div className="services-box">
                        <img className="services-box-img" src={Main2} />
                        <h2>Technology Service</h2>
                        <p className="services-box-text">Tools and services that make your every freight shipment easier than ever.</p>
                    </div>
                    <div className="services-box">
                        <img className="services-box-img" src={Main3} />
                        <h2>Teamwork</h2>
                        <p className="services-box-text">Our extensive resources and carrier network can accommodate all your specialized cargo handling and shipping needs.</p>
                    </div>
                    <div className="services-box">
                        <img className="services-box-img" src={Main4} />
                        <h2>Communication</h2>
                        <p className="services-box-text">We monitor shipment deliveries and process carrier invoices to guarantee that you are paying the correct fees for services. We are here for you 24 hours and 7 days a week.</p>
                    </div>
                    <div className="services-box">
                        <img className="services-box-img" src={Main5} />
                        <h2>Warehouse</h2>
                        <p className="services-box-text">Here at Q-Line Logistics, you can find all types of refrigerators, dry and frozen storages. We make it easier for you.</p>
                    </div>
                    <div className="services-box">
                        <img className="services-box-img" src={Main6} />
                        <h2>Drop and Hook</h2>
                        <p className="services-box-text">Depending where you go, we can find you the best solution with our drop and hook services. </p>
                    </div>
                </div>
            </div>
        </div>

    )
}