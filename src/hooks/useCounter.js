import { useState } from 'react';

const useCounter = (initialValue, minVal, maxVal) => {
    const [value, setValue] = useState(initialValue);
    const [step, setStep] = useState(1);

    const [maxValue, setMaxValue] = useState(maxVal);
    const [minValue, setMinValue] = useState(minVal);

    const increment = () => {
        if (value < maxValue) {
            setValue(value + step);
        }
    };

    const decrement = () => {
        if (minValue < value) {
            setValue(value - step);
        }
    };

    const reset = () => {
        setValue(initialValue);
    };

    return {
        value,
        setValue,
        step,
        setStep,
        maxValue,
        setMaxValue,
        minValue,
        setMinValue,
        increment,
        decrement,
        reset,
    };
};

export default useCounter;
