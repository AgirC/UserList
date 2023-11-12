import React, { ReactNode } from 'react';
import { RecoilRoot, atom } from 'recoil';
import User from '../models/user-model';

export const usersState = atom<User[] | undefined>({
  key: 'usersState',
  default: undefined,
});

export const filteredUsersState = atom<User[] | undefined>({
  key: 'filteredUsersState',
  default: undefined,
});

export const filterValueState = atom<string>({
  key: 'filterValueState',
  default: '',
});

interface RecoilProviderProps {
  children: ReactNode;
}

export const RecoilProvider: React.FC<RecoilProviderProps> = ({ children }) => (
  <RecoilRoot>
    {children}
  </RecoilRoot>
);
