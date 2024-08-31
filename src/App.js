import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app rounded-4">
            <SearchForm defaultCity={"Hyderabad"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
