import { Button, HStack, ButtonText, VStack, ButtonIcon, AddIcon, ButtonSpinner } from '@mylong.frontend/core-ui';

const BaseButton = ({ ...props }: any) => {
  return (
    <VStack space="md">
      <Button size="md" variant="link" {...props}>
        <ButtonText>action={props.action}</ButtonText>
      </Button>
      <Button size="xl" variant="solid" {...props}>
        <ButtonIcon as={AddIcon} />
        <ButtonText>variant=solid</ButtonText>
        <ButtonSpinner />
      </Button>
      <Button size="lg" variant="outline" {...props}>
        <ButtonIcon as={AddIcon} />
        <ButtonText>variant=outline</ButtonText>
        <ButtonSpinner />
      </Button>
      <Button size="md" isDisabled={true} {...props}>
        <ButtonIcon as={AddIcon} />
        <ButtonText>isDisabled=true</ButtonText>
        <ButtonSpinner />
      </Button>
      <Button size="sm" borderRadius="$full" {...props}>
        <ButtonIcon as={AddIcon} />
        <ButtonText>borderRadius=$full</ButtonText>
        <ButtonSpinner />
      </Button>
      <Button size="xs" variant="link" {...props}>
        <ButtonIcon as={AddIcon} />
        <ButtonText>variant=link</ButtonText>
        <ButtonSpinner />
      </Button>
    </VStack>
  );
};

const ButtonSize = () => {
  return (
    <VStack space="md">
      <Button size="md" variant="link">
        <ButtonText>BUTTON</ButtonText>
      </Button>

      <Button size="xl" variant="link">
        <ButtonText>size=xl</ButtonText>
      </Button>
      <Button size="lg" variant="link">
        <ButtonText>size=lg</ButtonText>
      </Button>
      <Button size="md" variant="link">
        <ButtonText>size=md</ButtonText>
      </Button>
      <Button size="sm" variant="link">
        <ButtonText>size=sm</ButtonText>
      </Button>
      <Button size="xs" variant="link">
        <ButtonText>size=xs</ButtonText>
      </Button>
    </VStack>
  );
};

const ACTIONS = ['primary', 'secondary', 'positive', 'negative'];

export const ButtonStory = () => {
  return (
    <HStack space="md" sx={{ '@base': { flexDirection: 'column' }, '@md': { flexDirection: 'row' } }}>
      <ButtonSize />
      {ACTIONS.map((action) => (
        <BaseButton key={action} action={action} />
      ))}
    </HStack>
  );
};
