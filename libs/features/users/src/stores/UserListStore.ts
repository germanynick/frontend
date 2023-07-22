import { observable, action, computed, makeObservable } from 'mobx';

export class UserListStore {
  constructor() {
    makeObservable(this);
  }

  @observable items: any[] = [];

  @action
  refreshItems = () => {
    this.items = Array(100).fill({});
  };
}

export const userListStore = new UserListStore();
