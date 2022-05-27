import React, { FC } from 'react';
import './Switch.css';

interface Props {
    isOn:boolean,
    handleToggle:() => void,
    onColor?:string
}

const Toggle:FC<Props> = ({ isOn, handleToggle,onColor='#06D6A0' }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        data-testid='input'
        type="checkbox"
      />
      <label
      data-testid='label'
       style={{ background: isOn ? onColor : '' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Toggle;