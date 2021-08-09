import './App.css';
import Navigation from './components/Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Filters from './components/Filter';
import ListItems from './components/ListItem';
import Display from './components/BottomFilter';

function App() {
  return (
    <div className="wrapper">
      <Navigation/>
      <Filters/>
      <ListItems/>
      <Display/>
  </div>
   
  );
}

export default App;
