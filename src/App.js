import Header from './components/Header/header.component';
import PathFind from './components/Pathfind/Pathfind.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/' render={() => (< PathFind algo={"A*"}/> )}/>
      <Route exact path='/a-star' render={() => (< PathFind algo={"A*"}/> )}/>
      <Route exact path='/bfs' render={() => (< PathFind algo={"BFS"}/> )}/>
      <Route exact path='/dfs' render={() => (< PathFind algo={"DFS"}/> )}/>
    </Switch>
    </div>
  );
}

export default App;
