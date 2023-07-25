import { observable, action, makeObservable } from 'mobx';

export class UserCreateStore {
  constructor() {
    makeObservable(this);
  }

  @observable createValue: any = null;

  @action
  handleClickCreate = async (value: any) => {
    this.createValue = {};
  };

  @action
  handleCancelCreate = async () => {
    this.createValue = null;
  };

  @action
  handleSubmitCreate = async (formData: any) => {
    console.log(formData);
  };
}

export const userCreateStore = new UserCreateStore();
