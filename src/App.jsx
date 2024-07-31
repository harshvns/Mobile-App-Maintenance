import './App.css';
import FAQ from './components/FAQ/Faq';
import Page from './components/Page1/Page';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';
import Page5 from './components/Page5/Page5';


function App() {
  return (
    <div className="App">
      <Page/>
      <Page2/>
      <Page3/>
      <Page4/>
      {/* <FAQ/> */}
      <Page5/>
    </div>
  );
}

export default App;
