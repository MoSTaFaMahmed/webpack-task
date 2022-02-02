import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
private loginFlag:BehaviorSubject<boolean>;
private userName:BehaviorSubject<string>;
  constructor() {
    //behavor subject:
    this.loginFlag=new BehaviorSubject <boolean> (this.IsUserLogged);
    this.userName=new BehaviorSubject <string> ("")
  }
logIn(userName:string,Pass:string)
{
  let userToken='01207284793';
  localStorage.setItem('Token',userToken);
  this.loginFlag.next(true);
  this.userName.next(userName);
}

logOut()
{
  localStorage.removeItem('Token');
  this.loginFlag.next(false);
  this.userName.next('');
}
  get IsUserLogged():boolean
  {
    return (localStorage.getItem('Token'))? true:false;
  }
//return observable
  getLogStatus():Observable<boolean>
  {
    return this.loginFlag.asObservable()

  }
  getUserName(): Observable<string>
  {
    return this.userName.asObservable();
  }
}
