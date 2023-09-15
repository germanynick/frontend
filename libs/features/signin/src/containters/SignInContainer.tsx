import React from 'react';
import { SignInForm } from '../components/SignInForm';
import { useSignInForm } from '../hooks/useSignInForm';
import { useFieldState } from '@mylong.frontend/core-form';
import { useSignInFormSubmit } from '../hooks/useSignInFormSubmit';

export const SignInContainer: React.FC = () => {
  const form = useSignInForm();
  const emailField = useFieldState('email', form);
  const passwordField = useFieldState('password', form);
  const onSubmit = useSignInFormSubmit();

  return <SignInForm emailField={emailField} passwordField={passwordField} onSubmit={onSubmit} />;
};
