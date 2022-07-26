import './App.css';
import mobile_image from './assets/images/image-product-mobile.jpg';
import {ReactComponent as CartIcon} from './assets/images/icon-cart.svg';

function App() {
  return (
    <div className="App">
        <div className='Card'>
          <img src={mobile_image} alt="Perfume"/>
          <div className='Card-body-container'>
            <div className='Card-info'>
              <h3>Perfume</h3>
            </div>
            <div className='Card-body'>
              <h1>Gabrielle Essence Eau De Parfum</h1>
              <p>
                A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.
              </p>
            </div>
            <div className='Card-price'>
              <h3 className='price'>$149.99 <span className='old-price'>$169.99</span></h3>
            </div>
            <button className='add-to-cart'>
              <CartIcon className="Cart-Icon"/>  Add to cart
            </button>
          </div>
          </div>
          
    </div>
  );
}

export default App;
