
import "../css/home.css"


 const Footer = () =>{

    return(
        <div className="container-fluid bg-dark bg-gradient">

                <div className="container text-light mx-auto p-4">
                    <div className="row">
                        <div className="col-sm">
                            <h4 className="text-center">Contact</h4>
                            <ul >
                                <li className="text-decoration-none">Belgique</li>
                                <li>Cédric</li>
                                <li>cedricphasi@gmail.com</li>
                                <li>+32 485 98 09 16</li>
                            </ul>
                        </div>
                        <div className="col-sm">
                                <h4 className="text-center">copiryght</h4>
                            <ul>
                                <li>React-js</li>
                                <li>Bootstrap</li>
                                <li>JSX</li>
                                <li>+32 485 98 09 16</li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h4 className="text-center">Sociaux</h4>
                            <ul>
                                <li>Belgique</li>
                                <li>Cédric</li>
                                <li>cedricphasi@gmail.com</li>
                                <li>+32 485 98 09 16</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Footer;