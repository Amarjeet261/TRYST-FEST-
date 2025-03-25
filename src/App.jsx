import {Outlet} from 'react-router-dom'
import Footer from "./component/Footer"
import Navbar from './component/Navbar'

export default function App(){
    return(
    <>
    <Outlet/>
    <Navbar/>
    <Footer/>
    </>
       
    )
}