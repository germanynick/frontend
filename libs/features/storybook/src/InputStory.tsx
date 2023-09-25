import { Input, InputField, VStack } from '@mylong.frontend/core-ui';
import { ComponentProps } from 'react';

const SIZES: ComponentProps<typeof Input>['size'][] = ['sm', 'md', 'lg', 'xl'];

const BaseInput = ({ variant }: any) => {
  return (
    <VStack space="md">
      <Input variant={variant} size="sm">
        <InputField placeholder={`${variant} Size=sm`} />
      </Input>
      <Input variant={variant} size="md" isDisabled={true}>
        <InputField placeholder={`${variant} Size=md isDisabled=true`} />
      </Input>
      <Input variant={variant} size="lg">
        <InputField placeholder={`${variant} Size==lg`} />
      </Input>
      <Input variant={variant} size="xl">
        <InputField placeholder={`${variant} Size=xl`} />
      </Input>
    </VStack>
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
