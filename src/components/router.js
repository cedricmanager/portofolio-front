import {Route,BrowserRouter,Routes, Link,useLocation} from 'react-router-dom'

/**
 * importation des pages
 */
import Article from "./pages/article"
import Home from "./pages/home"
import Menu from './menu'




const RouterLink = () =>{
   
    

        return(
    
                
                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<Menu/>} >
                            <Route index path="/"  element={<Home />} />
                            <Route path="/article" element={<Article />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
       
            
        )
}
export default RouterLink;