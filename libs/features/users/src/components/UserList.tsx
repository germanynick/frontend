import { FunctionComponent } from 'react';
import i18n from '@frontend/core/i18n';
import { DataTable, IDataColumn, IDataTableProps } from '@frontend/ui/table';
import { Text } from 'native-base';
import { UserCellFullName } from './UserCellFullName';
import { UserCellActions } from './UserCellActions';

const COLUMNS: IDataColumn[] = [
  { flexGrow: 2, minWidth: 200, title: i18n.t('FULLNAME'), cell: UserCellFullName, fixed: 'left' },
  {
    flexGrow: 1,
    minWidth: 100,
    title: i18n.t('LAST_LOGIN'),
    cell: ({ _text, rowData }) => <Text {..._text}>{rowData?.lastLoginAt?.toString()}</Text>,
  },
  {
    flexGrow: 1,
    minWidth: 100,
    title: i18n.t('EMAIL'),
    align: 'flex-end',
    dataKey: 'email',
  },
  {
    flexGrow: 2,
    minWidth: 200,
    title: i18n.t('PHONE'),
    align: 'center',
    dataKey: 'phone',
  },
  {
    flexGrow: 2,
    minWidth: 200,
    title: i18n.t('ZIPCODE'),
    dataKey: 'zipcode',
  },
  {
    flexGrow: 3,
    minWidth: 300,
    header: ({ _text }) => <Text {..._text}>{i18n.t('CUSTOM_HEADER')}</Text>,
    cell: ({ _text }) => <Text {..._text}>Custom Cell</Text>,
  },
  {
    minWidth: 70,
    title: i18n.t('ACTIONS'),
    cell: UserCellActions,
    align: 'center',
    fixed: 'right',
  },
];

export interface IUserListProps extends Partial<IDataTableProps> {}

export const UserList: FunctionComponent<IUserListProps> = (props) => {
  return <DataTable {...props} columns={COLUMNS} />;
};
