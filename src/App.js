import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Products from './component/Products/Products';
import Question from './component/Question/Question';


function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Question />
    </div>
  );
}

export default App;
