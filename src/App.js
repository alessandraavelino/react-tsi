function App() {
  const foods = {
    'name': 'água',
    'price': '2.00'
  }

  const maiuscula = (valor) => valor.toUpperCase();
  return (
    <div className="App">
      <h1>Segundo app</h1>
      <p>{maiuscula(foods.name)}</p>
      <p>{maiuscula(foods.price)}</p>
      
    </div>
  );
}

export default App;
