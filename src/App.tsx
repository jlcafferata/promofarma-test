import "./App.css";
import products from "./test/mock-data.json";
import ShoppingCart from "./components/shoppingCart";

function App() {
  return (
    <div className="App" data-testid="appPage">
      <ShoppingCart items={products} />
    </div>
  );
}

export default App;
