import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar"
import './detail.css';

export default function Detail(){

    const location = useLocation();
    const property = location.state;


    return (<>
    <Navbar></Navbar>
  <div className="detailWrapper">
      <div className="detail">
          <div className="detailImg">
              <img src={property.img}></img>
          </div>
          <div className="detailText">
              <h3>{property.name}</h3>
              <p>{property.des}</p>
              <h5>Description:</h5>
              <p>{property.desText}</p>
          </div>
      </div>
  </div>
  <Footer></Footer>
    </>);
}