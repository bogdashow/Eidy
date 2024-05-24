import Menu from './Menu';
import Footer from './Footer'
import Home from '../pages/Home';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';


const Router = () => {
   const Layout = () => {
      return (
         <div className='min-h-screen flex flex-col'>
            <Menu />
            <Outlet />
            <Footer />
         </div>
      );
   }

   const BrowserRoutes = () => {
      return (
         <>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route path="/" element={<Home />} />
                  </Route>
               </Routes>
            </BrowserRouter>
         </>
      );
   }

   return (
      <BrowserRoutes />
   )
}

export default Router