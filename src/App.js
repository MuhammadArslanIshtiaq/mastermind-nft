import NavbarPrimary from './components/navbar/NavbarPrimary';
import Paths from './Paths';

function App() {
  return (
    <div className='bg-black text-white'>
      <NavbarPrimary />
      <div className='flex-1'>
        <Paths />
      </div>
    </div>
  );
}

export default App;
