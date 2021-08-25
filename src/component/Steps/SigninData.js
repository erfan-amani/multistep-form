import React from 'react';
import TextField from '../FormFields/TextField';

const SigninData = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl md:text-3xl text-gray-800 font-bold text-center mb-4">
        Sign in
      </h1>
      <TextField label="Email" type="text" name="email" />
      <TextField label="Password" type="password" name="password" />
      <TextField
        label="Confirm password"
        type="password"
        name="confirmPassword"
      />
    </div>
  );
};

export default SigninData;
