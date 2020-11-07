import { useState } from 'react';
import './App.css'
import Header from './Header';
import Nav from './Nav';
import request from './request';
import Results from './Results';

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);


  return (
    <div className="App">   

    {/* Header */}
      <Header />


    {/* Nav */}
    <Nav setSelectedOption={setSelectedOption}/>

    {/* Results */}
    <Results selectedOption={selectedOption}/>


    </div>
  );
}

export default App;
