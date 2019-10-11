import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Member} from './entity/members';

@Injectable({
  providedIn: 'root'
})
export class MemberlistService {

  nevim: Member[];

  constructor(private httpClient: HttpClient) { }

  public getMembers() {
    return this.httpClient.get(
      'http://127.0.0.1:8090/list.php'
    );
  }
  public addMember(data) {
    return this.httpClient.post(
        `http://127.0.0.1:8090/create.php`,
        {data}
        );
  }

  public getMember(inputName: Member): Observable<Member[]> {
    return this.httpClient.post(`http://127.0.0.1:8090/search.php`, {data: inputName}).pipe(
        map((res) => {
          this.nevim.push(res['data']);
          return this.nevim;
        }
    )
    );
  }
}
