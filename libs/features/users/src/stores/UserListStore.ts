import { observable, action, makeObservable, flow } from 'mobx';

export class UserListStore {
  constructor() {
    makeObservable(this);
  }

  @observable loading: boolean = false;
  @observable items: any[] = [];
  @observable keyword: string = '';

  @action
  setItems = (items: any[]) => {
    this.items = items;
  };

  @flow.bound
  *handleKeywordChangeAsync(keyword: string) {
    this.keyword = keyword;
    yield this.handleLoadMoreItemsAsync();
  }

  @flow.bound
  *handleLoadMoreItemsAsync() {
    try {
      if (this.loading) {
        return;
      }

      this.loading = true;
      yield new Promise((resolve) => setTimeout(() => resolve('AA'), 1000));
      this.items = [...this.items, ...Array(20).fill({})];
    } catch (error) {
      console.debug(error);
    } finally {
      this.loading = false;
    }
  }
}

export const userListStore = new UserListStore();
