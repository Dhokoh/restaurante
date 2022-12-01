import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Body from '../shared/Body'
import {Outlet} from 'react-router-dom';

const GlobalContainer = () => {
    return (<>
        <Header/>
            <Outlet/>
        <Footer/>
    </>)
};
export default GlobalContainer;