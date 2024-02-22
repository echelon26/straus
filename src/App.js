import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/configStore";
import { Diagnosis } from "./Components/Diagnosis";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Diagnosis />
      </div>
    </Provider>
  );
}

export default App;
