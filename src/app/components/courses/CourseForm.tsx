import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../common/Input';
import Button from '../common/Button';
import { CourseFormInputs } from '../../types';
import { useCourseForm } from '../../hooks/useCourseForm';
import { validationSchema } from '../../utils/validationSchema';

const CourseForm: React.FC = () => {
  const methods = useForm<CourseFormInputs>({
    resolver: yupResolver(validationSchema),
  });
  const { onSubmit } = useCourseForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="title" label="Title" />
        <Input name="instructor" label="Instructor" />
        <Input name="image" label="Image URL" />
        <Input name="level" label="Level" />
        <Input name="duration" label="Duration" type="number" />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default CourseForm;
