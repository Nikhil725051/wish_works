import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar'
import Properties from '../../components/properties/Properties';

export default function Home(){
    return (<>
        <Navbar></Navbar>
        <Header></Header>
        <Properties></Properties>
        <Footer></Footer>
    </>);
}