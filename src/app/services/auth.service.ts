import {Injectable} from '@angular/core';
import {UserInfo} from '../types/userInfo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {
  private redirectUrl = '';
  private loginUrl = '/login';
  private isloggedIn = false;
  private loggedInUser: UserInfo;
  constructor(private http: HttpClient) {}
  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.http.get<UserInfo[]>('assets/data/userDetails.json').pipe(
      map(users => {
        debugger;
        const user = 	'test';
        if (user) {
          this.isloggedIn = true;
          this.loggedInUser = {
              username: 'krishna',
              password: 'krishna'
            };
        } else {
          this.isloggedIn = false;
        }
        return this.isloggedIn;
      })
  );
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
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
    this.isloggedIn = false;
  }
}
