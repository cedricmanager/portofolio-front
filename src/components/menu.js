import {Link,Outlet  } from "react-router-dom"


/*

  
*/

const Menu = () =>{
  
        return (
            <>
<nav className="navbar navbar-expand-sm bg-dark bg-gradient navbar-black">

      <div className="navbar-brand m-2 text-warning">Portofolio</div>  
                 <div className="container-fluid">
                  
                     <ul className="navbar-nav m-2">
                         <li className="nav-item">
                                                           
                         </li>
                         <li className="nav-item">
                       <a className="nav-link text-decoration-none "> <Link className="text-decoration-none text-light  animated bounce infinite"  to="/"> Acceuil</Link></a>     
                         </li>
                         <li className="nav-item">
                           <a className="nav-link  "> <Link className="text-decoration-none text-light"  to="/article">Article</Link></a> 
                         </li>
                     </ul>
                 </div>
             </nav>

               <Outlet/>


            </>
        );
}

export default Menu;