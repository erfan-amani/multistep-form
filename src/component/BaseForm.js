import * as Yup from 'yup';

import FormStepper from './FormStepper';
import ProfileData from './Steps/ProfileData';
import SigninData from './Steps/SigninData';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const initialValues = [
  {
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
    image: undefined,
  },
];

const validationSchemas = [
  Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Required!'),
    password: Yup.string()
      .min(6, 'At least 6 characters')
      .required('Required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Must be match to password')
      .required('Required!'),
  }),
  Yup.object().shape({
    userName: Yup.string()
      .matches('^[A-Za-z].*$', 'Begin with alphabets')
      .matches('^[A-Za-z][A-Za-z0-9_]*$', 'Just alphabet, number and underline')
      .min(5, '5 or more characters')
      .max(20, 'Less than 20 characters')
      .required('Required!'),
    image: Yup.mixed()
      .required('Required!')
      .test(
        'fileSize',
        'File is too large. Max 2MB',
        (value) => value?.size <= 1024 * 2048
      )
      .test('fileFormat', 'Unsupported Format', (value) =>
        SUPPORTED_FORMATS.includes(value?.type)
      ),
  }),
];

const BaseForm = () => {
  return (
    <FormStepper initialValues={initialValues} validation={validationSchemas}>
      <SigninData />
      <ProfileData />
    </FormStepper>
  );
};

export default BaseForm;
