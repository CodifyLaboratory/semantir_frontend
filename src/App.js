import './App.css';
import MainPage from './pages/mainPage/mainPage';
import Header from './pages/header/header';
import Error404 from './error404/error';
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
         </Switch>
         <Switch>
            {/* <Route path='' exact>
               <Error404 />
             </Route> */}
             <Route path='' exact component={Error404} />
         </Switch>
     </div>
    </Router>
   );
}

export default App;
