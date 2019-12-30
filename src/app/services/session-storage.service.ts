import {Injectable} from '@angular/core';

@Injectable()
export  class SessionStorageService {

  setItem(itemname: string, item: any) {
    sessionStorage.setItem(itemname, item);
  }

  getItem(itemname) {
    return sessionStorage.getItem(itemname);
  }


}
