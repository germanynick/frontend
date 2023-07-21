import {
  UserCreateContainer,
  UserDeleteContainer,
  UserDetailContainer,
  UserListContainer,
  UserUpdateContainer,
} from '@frontend/features/users';
import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

export const UserPage: FunctionComponent = () => {
  return (
    <Routes>
      <Route index={true} Component={UserListContainer} />
      <Route path="create" Component={UserCreateContainer} />
      <Route path=":id" Component={UserDetailContainer} />
      <Route path=":id/update" Component={UserUpdateContainer} />
      <Route path=":id/delete" Component={UserDeleteContainer} />
    </Routes>
  );
};