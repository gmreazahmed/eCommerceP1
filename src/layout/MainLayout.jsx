import Header from '../component/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './../component/common/Footer';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <div className="min-h-[50vh]">
        <Outlet/>
      </div>
      <Footer/>
    </>
   
)}

export default MainLayout