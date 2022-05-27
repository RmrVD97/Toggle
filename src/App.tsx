
import { useState } from 'react';
import './App.css';
import Toggle from './components/Toggle';


function App() {

  const [value, setValue] = useState(false);

  return (
    <div className="App">
     <Toggle
        isOn={value}
        handleToggle={() => setValue(!value)
        }
        onColor='red'
      />
    </div>
  );
}

export default App;
