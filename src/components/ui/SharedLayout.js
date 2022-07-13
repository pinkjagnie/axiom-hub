import { Outlet } from 'react-router-dom';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import ScrollToTop from './ScrollToTop';

const SharedLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;