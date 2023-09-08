import React from 'react';
import { t } from '@mylong.frontend/core-i18n';
import { Button, ButtonText, VStack } from '@mylong.frontend/core-ui';
import { InputField, PasswordField } from '@mylong.frontend/shared-fields';
import { FieldState } from '@mylong.frontend/core-form';
import { View, Text } from 'react-native';

export interface ISignInFormProps {
  emailField: FieldState<any>;
  passwordField: FieldState<any>;
  onSubmit: () => void;
  onSubmit2: () => void;
}

export const SignInForm: React.FC<ISignInFormProps> = ({ emailField, passwordField, onSubmit, onSubmit2 }) => {
  return (
    <VStack space="sm">
      <View className="border-2 p-1.5 border-red-600 h-[150rem]">
        <Text className="text-cyan-500 underline">Hello</Text>
      </View>
      <InputField label={t('EMAIL')} placeholder={t('$PLACEHOLDERS.EMAIL')} field={emailField} />
      <PasswordField label={t('PASSWORD')} placeholder={t('$PLACEHOLDERS.PASSWORD')} field={passwordField} />
      <Button onPress={onSubmit}>
        <ButtonText>{t('SUBMIT')}</ButtonText>
      </Button>
      <Button onPress={onSubmit2}>
        <ButtonText>{t('SUBMIT2')}</ButtonText>
      </Button>
    </VStack>
  );
};
