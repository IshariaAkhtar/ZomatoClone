
import './App.css';
import Collection from './components/collections';
import HomePage from './components/homePage';
import Search from './components/search';
import SearchTry from './components/searchTry';
import SecondPage from './components/secondPage';
import Try from './components/try';

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <SecondPage/> */}
      {/* <Collection/> */}
      <Try/>
      {/* <Search/> */}
      {/* <SearchTry/> */}
    </div>
  );
}

export default App;
