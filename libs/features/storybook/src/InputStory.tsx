import { Input, InputField, InputIcon, InputSlot, Slide, VStack } from '@mylong.frontend/core-ui';
import { Home } from '@mylong.frontend/core-icons';

const BaseInput = ({ variant }: any) => {
  return (
    <Slide isOpen="true">
      <VStack space="md">
        <Input variant={variant} size="sm">
          <InputField placeholder={`${variant} Size=sm`} />
        </Input>
        <Input variant={variant} size="md" isDisabled={true}>
          <InputField placeholder={`${variant} Size=md isDisabled=true`} />
        </Input>
        <Input variant={variant} size="lg" isReadOnly={true}>
          <InputField placeholder={`${variant} Size==lg`} value="Readonly" />
          <InputSlot>
            <InputIcon as={Home} />
          </InputSlot>
        </Input>
        <Input variant={variant} size="xl">
          <InputSlot>
            <InputIcon as={Home} />
          </InputSlot>
          <InputField placeholder={`${variant} Size=xl`} />
          <InputSlot>
            <InputIcon as={Home} />
          </InputSlot>
        </Input>
      </VStack>
    </Slide>
  );
};

export const InputStory = () => {
  return (
    <VStack space="md">
      <BaseInput variant="outline" />
      <BaseInput variant="rounded" />
      <BaseInput variant="underlined" />
    </VStack>
  );
};
