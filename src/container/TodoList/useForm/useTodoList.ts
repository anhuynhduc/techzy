import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export type FormValues = {
  name: string;
};

const useCreate = () => {
  const defaultValues: FormValues = {
    name: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập tên'),
  });

  const form = useForm<FormValues, unknown, FormValues>({
    mode: 'all',
    shouldFocusError: true,
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onCreate = (value: FormValues) => {
    console.log('value', value);
  };

  const onReset = () => {
    form.reset(defaultValues);
    form.clearErrors();
  };

  return { form, onCreate, onReset };
};

export default useCreate;
