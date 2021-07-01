import './Main.css'
import Wall from '../../Assets/main10.png'
export default function Main() {
    return (
        <div className="main-container">
            <div className="main-left" >
                <img className="main-img" src={Wall} />
            </div>
            <div className="main-right">
                <h1>We Keep America Moving</h1>
                 
            </div>
        </div>
    )
}