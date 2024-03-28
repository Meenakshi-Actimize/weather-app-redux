import './App.css';
import Footercomp from './components/Footercomp';
import Home from './components/Home';
import Navcomp from './components/Navcomponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselcomp from './components/Carousel';
import Bannercomp from './components/Banner';
import TodoCrud from './components/CRUD';
import Whychoosecomp from './Whychoose';


function App() {
  return (
    <div className="App">
      <Navcomp />
      <Carouselcomp />
      <Home />
      <Bannercomp />
      <TodoCrud />
      <Whychoosecomp />
      <Footercomp />
    
    </div>
  );
}

export default App;
