import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { productData, productDataTwo } from './components/Products/Data';
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer/Footer';
import Feature from './components/Feature/Feature';

function App() {
  return (
    <div className="App">
     <>
     <Router>
       <GlobalStyle/>
       <Hero></Hero>
       <Products heading='Choose your favorite pizza' data={productData}></Products>
       <Feature></Feature>
       <Products heading='Choose your favorite sweet' data={productDataTwo}></Products>
       <Footer></Footer>
     </Router>


     </>
    </div>
  );
}

export default App;
