import React from 'react';
import { SignInForm } from '../components/SignInForm';
import { useSignInForm } from '../hooks/useSignInForm';
import { useFieldController } from '@mylong.frontend/core-form';
import { useSignInFormSubmit } from '../hooks/useSignInFormSubmit';

export const SignInContainer: React.FC = () => {
  const form = useSignInForm();
  const emailController = useFieldController('email', form);
  const passwordController = useFieldController('password', form);
  const onSubmit = useSignInFormSubmit();

  return <SignInForm emailController={emailController} passwordController={passwordController} onSubmit={onSubmit} />;
};
