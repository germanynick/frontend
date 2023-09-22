import { Input, InputField, VStack } from '@mylong.frontend/core-ui';

export const InputStory = () => {
  return (
    <VStack space="md">
      <Input>
        <InputField placeholder="Base" />
      </Input>
      <Input variant="rounded">
        <InputField placeholder="Rounded" />
      </Input>
      <Input variant="underlined">
        <InputField placeholder="Underlined" />
      </Input>
    </VStack>
  );
};
