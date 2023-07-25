import { FunctionComponent } from 'react';
import i18n from '@frontend/core/i18n';
import { DataTable, IDataColumn } from '@frontend/ui/table';
import { Text } from 'native-base';
import { UserCellFullName } from './UserCellFullName';
import { UserCellActions } from './UserCellActions';

const COLUMNS: IDataColumn[] = [
  { flexGrow: 2, minWidth: 200, title: i18n.t('FULLNAME'), cell: UserCellFullName, fixed: 'left' },
  { flexGrow: 1, minWidth: 100, title: i18n.t('LAST_LOGIN'), cell: ({ _text, rowIndex }) => <Text {..._text}> {rowIndex} Long Long Long Text</Text> },
  { flexGrow: 1, minWidth: 100, title: i18n.t('EMAIL'), cell: ({ _text }) => <Text {..._text}>Long Long Long Text</Text> },
  { flexGrow: 2, minWidth: 200, title: i18n.t('PHONE'), cell: ({ _text }) => <Text {..._text}>Long Long Long Text</Text> },
  { flexGrow: 2, minWidth: 200, title: i18n.t('ZIPCODE'), cell: ({ _text }) => <Text {..._text}>Long Long Long Text</Text> },
  {
    flexGrow: 3,
    minWidth: 300,
    header: ({ _text }) => <Text {..._text}>{i18n.t('STATUS')}</Text>,
    cell: ({ _text }) => <Text {..._text}>Long Long Long Text</Text>,
  },
  {
    minWidth: 70,
    title: i18n.t('ACTIONS'),
    cell: UserCellActions,
    align: 'center',
    fixed: 'right',
  },
];

export interface IUserListProps {
  items: any[];
}

export const UserList: FunctionComponent<IUserListProps> = ({ items }) => {
  return <DataTable columns={COLUMNS} data={items} />;
};
