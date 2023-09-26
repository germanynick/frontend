import React from 'react';
import { t } from '@mylong.frontend/core-i18n';
import { Button, ButtonText, LinkText, VStack } from '@mylong.frontend/core-ui';
import { InputField, PasswordField } from '@mylong.frontend/shared-fields';
import { IFieldController } from '@mylong.frontend/core-form';
import { Link, useRouter } from '@mylong.frontend/core-router';

export interface ISignInFormProps {
  emailController: IFieldController<any>;
  passwordController: IFieldController<any>;
  onSubmit: () => void;
}

export const SignInForm: React.FC<ISignInFormProps> = ({ emailController, passwordController, onSubmit }) => {
  const router = useRouter();

  return (
    <VStack space="sm">
      <InputField label={t('EMAIL')} placeholder={t('$PLACEHOLDERS.EMAIL')} controller={emailController} />
      <PasswordField label={t('PASSWORD')} placeholder={t('$PLACEHOLDERS.PASSWORD')} controller={passwordController} />
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
