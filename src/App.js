import logo from './logo.svg';
import './App.css';

import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
          <Page1/>
          <Page2/>
      </div>
    </DataProvider>
  );
}

export default App;
