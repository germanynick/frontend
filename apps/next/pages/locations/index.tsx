import { useLocationCreateStore } from '@frontend/features/locations/stores';
import { LocationCreateForm } from '@frontend/features/locations/views';
import { Button, VStack } from 'native-base';
import { NextPage } from 'next';

const LocationListPage1: NextPage = () => {
  const { form, show, startForm, cancelForm, submitForm } = useLocationCreateStore();

  if (!show) {
    return <Button onPress={() => startForm({})}>START</Button>;
  }

  return (
    <VStack space={2}>
      <LocationCreateForm form={form} clientOptions={[]} />
      <Button onPress={cancelForm}>CANCEL</Button>
      <Button onPress={submitForm}>SUBMIT</Button>
    </VStack>
  );
};

export const LocationListPage: NextPage = () => {
  const { form, show, startForm, cancelForm, submitForm } = useLocationCreateStore();

  if (!show) {
    return <Button onPress={() => startForm({})}>START</Button>;
  }

  return (
    <VStack space={2}>
      <LocationCreateForm form={form} clientOptions={[]} />
      <Button onPress={cancelForm}>CANCEL</Button>
      <Button onPress={submitForm}>SUBMIT</Button>
      <LocationListPage1 />
    </VStack>
  );
};

export default LocationListPage;
