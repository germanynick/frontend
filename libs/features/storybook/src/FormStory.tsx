import { Button, ButtonText, Slide, VStack } from '@mylong.frontend/core-ui';
import { InputField, PasswordField } from '@mylong.frontend/shared-fields';
import { createGlobalForm, useFieldController } from '@mylong.frontend/core-form';
import { yup } from '@mylong.frontend/core-validators';

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().password(),
});

const useForm = createGlobalForm(schema);

export const FormStory = () => {
  const form = useForm();

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });
  const emailController = useFieldController('email', form);
  const passwordController = useFieldController('password', form);

  return (
    <Slide isOpen="true">
      <VStack space="md">
        <InputField label="Input Field" placeholder="Placeholder" controller={emailController} />
        <PasswordField label="Password Field" placeholder="Placeholder" controller={passwordController} />
        <Button onPress={onSubmit}>
          <ButtonText>Submit </ButtonText>
        </Button>
      </VStack>
    </Slide>
  );
};
