import { TiBeer } from 'react-icons/ti';
import Menudo from './components/Menudo';
import Tacos from './components/Tacos';
import Bebidas from './components/Bebidas';
import { MdAttachMoney } from 'react-icons/md';

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className=" text-5xl">
        {' '}
        <TiBeer className="inline-block text-yellow-500" /> Shopping Cart
      </h1>
      <Menudo />
      <Tacos />
      <Bebidas />
      <h2>
        <MdAttachMoney className="inline-block" /> Total:{' '}
      </h2>
    </div>
  );
}

export default App;
