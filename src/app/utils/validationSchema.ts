import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  instructor: yup.string().required('Instructor is required'),
  image: yup.string().required('Image URL is required'),
  level: yup.string().required('Level is required'),
  duration: yup.number().required('Duration is required').positive('Duration must be positive'),
});
