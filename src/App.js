import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
function App() {
  
  const foods = {
    'name': 'água',
    'price': '2.00'
  }

  const maiuscula = (valor) => valor.toUpperCase();
  return (
    <div className="App">
    <Header />
      <h1>Segundo app</h1>
      <p>{maiuscula(foods.name)}</p>
      <p>{maiuscula(foods.price)}</p>
      

      
      <Footer />
      <Main />
    </div>
    
  );
}

export default App;
