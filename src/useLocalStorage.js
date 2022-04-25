import { useEffect, useState } from 'react';

/**
 * Get the saved state from localStorage if it exists, otherwise return the
 * initialValue.
 *
 * @param key
 * @param initialValue
 * @returns {any}
 */
const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));

    if (savedValue) {
        return savedValue;
    }

    return initialValue instanceof Function ? initialValue() : initialValue;
}

/**
 * Custom hook to save state to localStorage.
 *
 * @param key
 * @param initialValue
 * @returns {[*,((value: *) => void)]}
 */
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default useLocalStorage;
