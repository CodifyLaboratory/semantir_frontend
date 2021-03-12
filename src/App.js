import './App.css';
import MainPage from './pages/mainPage/mainPage';
import Header from './pages/header/header';
import Error404 from './error404/error';
import { BrowserRouter as Router,  Switch, Route} from 'react-router-dom';


function App() {
  return (
   <Router>
    <div className="App"> 
      <Switch>
        <Route exact path="/">
          <Header/>
          <MainPage />
        </Route>
        <Route exact path='/h'>
          <Header/>
        </Route>
        <Route path='*' exact component={Error404} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
