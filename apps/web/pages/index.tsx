import { t } from '@mylong.frontend/core-i18n';
import { Box, Button, ButtonText } from '@gluestack-ui/themed';

export function Index() {
  return (
    <Box justifyContent="center" display="flex" alignItems="center">
      <Button>
        <ButtonText>{t('FIRST_NAME')}</ButtonText>
      </Button>
    </Box>
  );
}

export default Index;
