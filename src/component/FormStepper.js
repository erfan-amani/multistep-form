import { Children, useState } from 'react';
import { Formik, Form } from 'formik';

const FormStepper = ({ initialValues, children, validation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsArray = Children.toArray(children);

  const isLastStep = currentStep === stepsArray.length - 1;

  const submitOrNextHandler = (values, helpers) => {
    if (isLastStep) {
      console.log('submit successfuly', values);
      helpers.setSubmitting(false);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const backwardHandler = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <Formik
      onSubmit={submitOrNextHandler}
      initialValues={initialValues[currentStep]}
      validationSchema={validation[currentStep]}
    >
      <Form className=" w-60 md:w-72 max-w-72">
        {stepsArray[currentStep]}
        <div className="mt-4">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={backwardHandler}
              className="mr-1 bg-indigo-600 px-4 py-2 text-white rounded-full"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="bg-indigo-600 px-4 py-2 text-white rounded-full"
          >
            {isLastStep ? 'Sign up' : 'Next'}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormStepper;
