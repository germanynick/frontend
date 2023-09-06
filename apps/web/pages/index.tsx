import { createGlobalForm, useFieldState } from '@mylong.frontend/core-form';
import { Box, Button, ButtonText, Text } from '@mylong.frontend/core-ui';
import { InputField, PasswordField } from '@mylong.frontend/shared-fields';
import * as yup from '@mylong.frontend/core-validators';
import { t } from '@mylong.frontend/core-i18n';
import { useState } from 'react';

const schema = yup.object({
  name: yup.string().trim().required(),
  email: yup.string().trim().required().email(),
  password: yup.string().password(),
});

const useForm = createGlobalForm(schema, { initialValues: { name: 'duc', email: 'test' } });

const Step2 = () => {
  const form = useForm();
  const nameField = useFieldState('name', form);

  return <Text>{nameField?.value}</Text>;
};

const Step1 = ({ onClick }) => {
  const form = useForm();
  const nameField = useFieldState('name', form);
  const emailField = useFieldState('email', form);
  const passwordField = useFieldState('password', form);

  return (
    <Box justifyContent="center" display="flex" alignItems="center">
      <Text>
        A: {nameField?.value} {nameField?.error}
        B: {emailField?.value} {emailField?.error}
      </Text>

      <InputField label={t('NAME')} placeholder="Hello world" field={nameField} />
      <InputField label={t('EMAIL')} field={emailField} />
      <PasswordField label={t('PASSWORD')} field={passwordField} />

      <Button>
        <ButtonText onPress={form.submit}>Submit</ButtonText>
      </Button>
      <Button>
        <ButtonText onPress={onClick}>Next</ButtonText>
      </Button>
    </Box>
  );
};
export function Index() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Step1 onClick={() => setStep(2)} />}
      {step === 2 && <Step2 />}
    </>
  );
}

export default Index;
