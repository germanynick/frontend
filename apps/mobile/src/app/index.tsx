import { t } from '@mylong.frontend/core-i18n';
import { Button, ButtonText } from '@mylong.frontend/core-ui';

export default function Page() {
  return (
    <Button>
      <ButtonText>{t('FIRST_NAME')}</ButtonText>
    </Button>
  );
}
