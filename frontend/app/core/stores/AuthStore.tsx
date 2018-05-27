import { action, observable } from 'mobx';

export class AuthStore {
  @observable isLogin: boolean = false;
  @observable loading: boolean = false;

  @action.bound
  login(name: string) {
    console.log('name', name);
    this.loading = true;

    setTimeout(() => {
      this.isLogin = true;
      this.loading = false;
    }, 2000);
  }
}
