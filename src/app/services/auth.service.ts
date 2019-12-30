import {Injectable} from '@angular/core';
import {UserInfo} from '../types/userInfo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SessionStorageService} from './session-storage.service';

@Injectable()
export class AuthService {
  private redirectUrl = '/home';
  private loginUrl = '';
  private isloggedIn = false;
  private loggedInUser: UserInfo;
  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) {}
  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.http.get<UserInfo[]>('assets/data/userDetails.json').pipe(
      map(users => {
        const user =  users.find(usr => {
          return usr.username === username && usr.password === password;
        });
        if (user) {
          this.isloggedIn = true;
          this.sessionStorageService.setItem('userInfo', JSON.stringify(user));
          this.loggedInUser = user;
        } else {
          this.isloggedIn = false;
        }
        return this.isloggedIn;
      })
  );
  }
  isUserLoggedIn(): boolean {
    if (this.sessionStorageService.getItem('userInfo')) {
      return true;
    } else {
      return this.isloggedIn;
    }
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): UserInfo {
    return this.loggedInUser;
  }
  logoutUser(): void {
    sessionStorage.removeItem('userInfo');
    this.isloggedIn = false;
  }
}
