import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  name: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, label, type = 'text' }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name)} />
    </div>
  );
};

export default Input;
