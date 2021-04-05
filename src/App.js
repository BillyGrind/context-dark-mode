import './App.css';
import Contenu from './Composant/Contenu/Contenu'
import ThemeContextProvider from './Context/ThemeContext'
import BtnToggle from './Composant/BtnToggle/BtnToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BtnToggle />
        <Contenu />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
