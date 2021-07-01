import './Clients.css'
import Main5 from '../../Assets/555.jpg'
import Main4 from '../../Assets/999.png'
import Main from '../../Assets/17.jpeg'
import Main2 from '../../Assets/18.jpg'
import Main3 from '../../Assets/amazon.jpg'
import Main6 from '../../Assets/xpo-logistics-logo.jpg'
import Main7 from '../../Assets/uber_freight.jpeg'

export default function Clients() {
    return (
        <div className="clients" >
            <div className="clients-main-container">
                <h1 className="paragraph">Our Clients</h1>
                <div className="clients-boxes">
                    <img className="clients-box-img" src={Main} />
                    <img className="clients-box-img" src={Main2} />
                    <img className="clients-box-img" src={Main3} />
                    <img className="clients-box-img" src={Main4} />
                    <img className="clients-box-img" src={Main5} />
                    <img className="clients-box-img" src={Main6} />
                    <img className="clients-box-img" src={Main7} />
                </div>
            </div>
        </div>
    )
}