import { t } from '@frontend/core/i18n';
import { Button, ButtonText } from '@gluestack-ui/themed';

export function Index() {
  return (
    <Button>
      <ButtonText>{t('FIRST_NAME')}</ButtonText>
    </Button>
  );
}

export default Index;
