import React from 'react';
import { t } from '@mylong.frontend/core-i18n';
import { Button, ButtonText, LinkText, VStack } from '@mylong.frontend/core-ui';
import { InputField, PasswordField } from '@mylong.frontend/shared-fields';
import { FieldState } from '@mylong.frontend/core-form';
import { Link, useRouter } from '@mylong.frontend/core-router';

export interface ISignInFormProps {
  emailField: FieldState<any>;
  passwordField: FieldState<any>;
  onSubmit: () => void;
}

export const SignInForm: React.FC<ISignInFormProps> = ({ emailField, passwordField, onSubmit }) => {
  const router = useRouter();

  return (
    <VStack space="sm">
      <InputField label={t('EMAIL')} placeholder={t('$PLACEHOLDERS.EMAIL')} field={emailField} />
      <PasswordField label={t('PASSWORD')} placeholder={t('$PLACEHOLDERS.PASSWORD')} field={passwordField} />
      <Button onPress={onSubmit}>
        <ButtonText>{t('SUBMIT')}</ButtonText>
      </Button>
      <Button onPress={() => router.push('/users')}>
        <ButtonText>{t('SUBMIT2')}</ButtonText>
      </Button>

      <Link href={{ pathname: '/users/[id]', params: { id: '123', hello: '234' } }}>
        <LinkText>Users</LinkText>
      </Link>
    </VStack>
  );
};
