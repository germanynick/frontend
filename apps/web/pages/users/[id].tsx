import { Button, ButtonText, Text } from '@mylong.frontend/core-ui';
import { useRouter, useSearchParams } from '@mylong.frontend/core-router';

const UserPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  console.log(searchParams);

  return (
    <>
      <Text>USER PAGE</Text>
      <Button onPress={() => router.back()}>
        <ButtonText>Go Back</ButtonText>
      </Button>
    </>
  );
};

export default UserPage;
