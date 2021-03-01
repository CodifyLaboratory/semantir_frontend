import './App.css';
import MainPage from './pages/mainPage/mainPage';
import Header from './pages/header/header';
import { BrowserRouter as Router,  Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
          <div className="App"> 
      {/* <MainPage /> */}
      <Header/>
      <Switch>
          <Route path="/" exact>
            <MainPage />
            </Route>
            <Route path="/auth" exact>
              <h1>Hello </h1>
              <h1>Hello </h1>
              <h1>Hello </h1>
              <h1>Hello </h1>
              <h1>Hello </h1>
              <h1>Hello </h1>
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
