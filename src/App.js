import './App.css';
import Footer from './pages/mainPage2part/footer/footer';
import Partners from './pages/mainPage2part/partners/partners';
import Tariffs from './pages/mainPage2part/tariffs/tariffs';
import Blog from './pages/mainPage2part/blog/blog'

function App() {
  return (
    <div className="mainpage_2part">
      <Tariffs/>
      <Partners/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
