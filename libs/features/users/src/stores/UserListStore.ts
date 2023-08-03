import { observable, action, makeObservable, computed, runInAction } from 'mobx';
import { faker } from '@faker-js/faker';
export class UserListStore {
  constructor() {
    makeObservable(this);
  }

  @observable private _loading: boolean = false;
  @observable private _items: any[] = [];
  @observable private _keyword: string = '';

  @computed
  get loading() {
    return this._loading;
  }

  @computed
  get items() {
    return this._items;
  }

  @computed
  get keyword() {
    return this._keyword;
  }

  set items(value: any[]) {
    runInAction(() => {
      this._items = value;
    });
  }

  set loading(value: boolean) {
    runInAction(() => {
      this._loading = value;
    });
  }

  set keyword(value: string) {
    runInAction(() => {
      this._keyword = value;
    });
  }

  @action
  handleKeywordChangeAsync = async (keyword: string) => {
    this.keyword = keyword;
    await this.handleLoadMoreItemsAsync();
  };

  @action
  handleLoadMoreItemsAsync = async () => {
    try {
      if (this.loading) {
        return;
      }

      this.loading = true;
      await new Promise((resolve) => setTimeout(() => resolve('AA'), 1000));

      this.items = [
        ...this.items,
        ...Array(20)
          .fill({})
          .map(() => ({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: faker.image.avatar(),
            lastLoginAt: faker.date.anytime().toString(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            zipcode: faker.location.zipCode(),
          })),
      ];
    } catch (error) {
      console.debug(error);
    } finally {
      this.loading = false;
    }
  };
}

export const userListStore = new UserListStore();
