import './App.css';
import MainPage from './pages/mainPage/mainPage';
import Header from './pages/header/header';
import Error404 from './../src/pages/error404/error.jsx';
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
        <Route exact path='/auth'>
          <Header />
          <h1>Ты не войдёшь</h1>
          <h1>Ты не войдёшь</h1>
          <h1>Ты не войдёшь</h1>
          <h1>Ты не войдёшь</h1>
        </Route>
        <Route path='*' exact component={Error404} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
