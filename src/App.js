import './App.css';
import almabetter from './assets/almabetter.png';

//import component
import { MainBody } from './components/mainbody/MainBody';

function App() {
  return (

    //This top level div contain navbar and mainbody div.....
    <div className=" bg-slate-200 ">

      {/* This is navbar with an almabetter logo */}
      <div className='bg-white min-w-full drop-shadow-md p-3 h-12'>
        <div className='mx-2'>
          <img className='h-6' src={almabetter} alt='almabetter' />
        </div>
      </div>

      {/* This is the main body of crypto-dashboard */}
      <div>
        <MainBody />
      </div>
    </div>
  );
}

export default App;
