import GlobalState from './globalState/GlobalState'
import Router from './routes/Router';

function App() {
  return (
    <GlobalState>
     <Router></Router>
    </GlobalState>
  );
}

export default App;
