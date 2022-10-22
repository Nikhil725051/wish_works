import './footer.css';

export default function Footer(){
    return (<>
    <div className='footer'>
         <div className='footerItem'>
          <a className='footerLink'>About us</a>
          <a className='footerLink'>Agent support</a>
          <a className='footerLink'>Advertise with us</a>
          <a className='footerLink'>Privacy</a>
          <a className='footerLink'>Terms</a>
        </div>
        <div className='footerItem'>
          <a className='footerLink'>Partner with us</a>
          <a className='footerLink'>Virtual tours</a>
          <a className='footerLink'>Apartment for rent</a>
          <a className='footerLink'>FAQ</a>
          <a className='footerLink'>Contact us</a>
        </div>
        <div className='footerItem'>
          <a className='footerLink'>Partner with us</a>
          <a className='footerLink'>Virtual tours</a>
          <a className='footerLink'>Apartment for rent</a>
          <a className='footerLink'>FAQ</a>
          <a className='footerLink'>Contact us</a>
        </div>
    </div>
    <span className='copyright'>&copy; 2022 WishWorks pvt. ltd.</span>
    </>);
}