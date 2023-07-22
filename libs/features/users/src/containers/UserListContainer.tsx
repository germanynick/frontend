import { FunctionComponent, useEffect } from 'react';
import i18n from '@frontend/core/i18n';
import { DataTable, IDataColumn } from '@frontend/ui/table';
import { Box } from 'native-base';
import { observer } from 'mobx-react-lite';
import { userListStore } from '../stores';

const COLUMNS: IDataColumn[] = [
  { flexGrow: 2, minWidth: 200, header: () => i18n.t('FULLNAME'), cell: ({ rowIndex }) => rowIndex },
  { flexGrow: 1, minWidth: 100, header: () => i18n.t('LAST_LOGIN'), cell: () => 'None' },
  { flexGrow: 1, minWidth: 100, header: () => i18n.t('EMAIL'), cell: () => 'None' },
  { flexGrow: 2, minWidth: 200, header: () => i18n.t('PHONE'), cell: () => 'None' },
  { flexGrow: 2, minWidth: 200, header: () => i18n.t('ZIPCODE'), cell: () => 'None' },
  { flexGrow: 3, minWidth: 300, header: () => i18n.t('STATUS'), cell: () => 'None' },
  { flexGrow: 1, minWidth: 100, header: () => i18n.t('ACTIONS'), cell: () => 'None' },
];

export const UserListContainer: FunctionComponent = observer(() => {
  const { items, refreshItems } = userListStore;

  useEffect(() => {
    refreshItems();
  }, []);

  return (
    <Box padding={3} height={500}>
      <DataTable columns={COLUMNS} data={items} onClickRow={console.log} />
    </Box>
  );
});
