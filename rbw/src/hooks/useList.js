import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };

    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // List is Empty ? true / false
    const isEmpty = () => value.length === 0;

    // TODO:Develop more functions for lists

    const clear = () => {
        // puede ser cualquiera de estas opciones:
        // setValue([...value].length = 0);
        // setValue(initialValue);
        setValue([]);
    };

    const sorth = () => {
        setValue([...value].sort());
    };

    const reverse = () => {
        setValue([...value].reverse());
    };

    return {
            value, setValue, push, remove, isEmpty, clear, sorth, reverse,
        };
};

export default useList;
