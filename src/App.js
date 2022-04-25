import './App.css';
import useLocalStorage from "./useLocalStorage";

function App() {
    const [value, setValue] = useLocalStorage('name', '');

    return (
        <input
            type="text"
            name={ value }
            onChange={ (e) => setValue(e.target.value) }
        />
    );
}

export default App;
