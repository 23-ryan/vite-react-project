import './App.css'
import NavbarComp from './components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavbarComp'
import TopReviews from './components/topReviews';


function App() {
   console.log("Hello")
  return (
        <div className="App">
            <NavbarComp />
            <TopReviews/>
        </div>
  );
}

export default App
