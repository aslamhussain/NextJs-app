import { CourseFormInputs } from '../types';

export const useCourseForm = () => {
  const onSubmit = (data: CourseFormInputs) => {
    console.log(data);
  };

  return { onSubmit };
};
