import React from 'react';
import FileField from '../FormFields/FileField';
import TextField from '../FormFields/TextField';

const ProfileData = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl md:text-3xl text-gray-800 font-bold text-center mb-4">
        Create your profile
      </h1>
      <TextField label="User Name" name="userName" type="text" />
      <FileField label="Profile Image" name="image" type="file" />
    </div>
  );
};

export default ProfileData;
