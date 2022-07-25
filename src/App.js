import './App.css';
import mobile_image from './assets/images/image-product-mobile.jpg';

function App() {
  return (
    <div className="App">
      <div>
        <img src={mobile_image} alt="Perfume"/>
      </div>
      <div>
        <h2>Perfume</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
          <p>$149.99</p>
          <p>~~$169.99~~</p>
        </div>
        <button>
          [cart icon]Add to cart
        </button>
        
      </div>
    </div>
  );
}

export default App;
