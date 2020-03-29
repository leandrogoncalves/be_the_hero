import React, {useState} from 'react';

import Header from './Header';

//JSX
function App() {
  //Array[Valor, funcaoAtualizacap]
  let [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1);
    console.log(counter);
  }

  return (
    <div>
      <Header title="Semana OmniStack" >
        Contado: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>

  );
}

export default App;
