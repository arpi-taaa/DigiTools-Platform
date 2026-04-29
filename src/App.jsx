import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import ProductHeader from './Components/ProductHeader'
import ProductCards from './Components/ProductCards'
import CartView from './Components/CartView'
import { ToastContainer } from 'react-toastify';
import Steps from './Components/Steps'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleRemove = (productId) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <ToastContainer />
      <NavBar cartCount={cart.length} />
      <Hero />
      <Stats />
      <ProductHeader
        cartCount={cart.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="min-h-125">
        {activeTab === "products" ? (
          <ProductCards handleAddToCart={handleAddToCart} />
        ) : (
          <CartView
            cart={cart}
            handleRemove={handleRemove}
            totalPrice={totalPrice}
            handleClearCart={handleClearCart}
          />
        )}
      </main>
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App