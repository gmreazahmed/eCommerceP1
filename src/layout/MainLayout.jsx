import Header from '../component/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './../component/common/Footer';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
   
)}

export default MainLayout