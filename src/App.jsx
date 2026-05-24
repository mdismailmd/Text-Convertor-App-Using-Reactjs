import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App({props}) {
  
  return (
    <>
    <Navbar title="Text Editor" abouttext="About"/>
    <hr />
    <div className="container"><TextForm heading="Enter Text to Converting 👇"></TextForm></div>
    {/* <About/> */}
    </>
  );
}

export default App;
