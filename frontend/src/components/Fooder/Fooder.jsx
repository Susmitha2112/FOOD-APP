
import './Fooder.css'
import {assets} from '../../assets/assets'
const Fooder = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi perspiciatis quaerat quidem cumque iste, id ipsa delectus repellat tempore.</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
            </div>
            <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-456-7890</li>
    <li>contact@foods.com</li>
</ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © Foods.com - All Right Reserved.</p>
    </div>
  )
}

export default Fooder