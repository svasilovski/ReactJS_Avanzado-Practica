import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';

const CounterComponent = () => {
  // Tomo que siempre va a empezar del valor minimo,
  // aunque podia empezar de un valor entre el minimo y el maximo.
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [step, setStep] = useState(1);

  const cont = useCounter(minValue, minValue, maxValue);

  const add = (event) => {
      event.preventDefault();
      cont.increment();
  };

  const sub = (event) => {
      event.preventDefault();
      cont.decrement();
  };

  const reset = (event) => {
      event.preventDefault();
      cont.reset();
  };

  const setingMaxMin = (event) => {
      event.preventDefault();
      const numMin = parseInt(minValue, 10);
      const numMax = parseInt(maxValue, 10);
      cont.setMinValue(numMin);
      cont.setMaxValue(numMax);
      cont.setValue(numMin);
  };

  const setingStep = (event) => {
      event.preventDefault();
      if (step > 0) {
          cont.setStep(step);
      } else {
          cont.setStep(1);
      }
  };

  return (
    <div>
      <form onSubmit={setingMaxMin}>
        <input
          type="number"
          name="settings"
          id="minValue"
          value={minValue}
          placeholder="Min number"
          onChange={(event) => {
            const num = parseInt(event.target.value, 10);
            setMinValue(num);
          }}
        />
        <input
          type="number"
          name="settings"
          id="maxValue"
          value={maxValue}
          placeholder="Max number"
          onChange={(event) => {
            const num = parseInt(event.target.value, 10);
            setMaxValue(num);
          }}
        />
        <button type="submit">Set Max and Min</button>
      </form>

      <form onSubmit={setingStep}>
        <input
          type="number"
          name="settings"
          id="step"
          value={step}
          placeholder="Step number"
          onChange={(event) => {
            const num = parseInt(event.target.value, 10);
            setStep(num);
          }}
        />
        <button type="submit">Set step</button>
      </form>

      <br />
      <button type="button" onClick={sub}>-</button>
      <input type="number" name="contador" id="contador" value={cont.value} disabled />
      <button type="button" onClick={add}>+</button>
      <br />
      <button type="button" onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
