import './App.css';
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function App() {
    const [value, setValue] = useLocalStorage('name', '');
    useUpdateLogger(value);

    return (
        <input
            type="text"
            name={ value }
            onChange={ (e) => setValue(e.target.value) }
        />
    );
}

export default App;
