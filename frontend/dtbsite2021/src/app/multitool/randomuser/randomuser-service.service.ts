import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class RandomuserService {
  baseAPI: string = 'https://randomuser.me/api/';
  multiQuery: string = '?results=';
  filterMFQuery: string = 'gender=';
  seedQuery: string = 'seed=';
  dataToPass: any;

  constructor(private http: HttpClient) { }

  getUserData(num?: number, q2?: string, q3?: string) {
    let completeQueryString: string = '';
    let seedQueryUsed: boolean = false;
    let genderFilterUsed: boolean = false;
    if (num && num > 1) {
      completeQueryString += `${this.multiQuery}${num}`;
    }
    [q2, q3].forEach(arg => {
      if (arg && ( arg.toLowerCase() === 'male' || arg.toLowerCase() === 'female' ) && !genderFilterUsed ) {
        completeQueryString += `&${this.filterMFQuery}${arg}`;
        genderFilterUsed = true;
      } else if (arg && arg.toLowerCase() !== 'male' && arg.toLowerCase() !== 'female' && !seedQueryUsed ) {
        completeQueryString += `&${this.seedQuery}${arg}`;
      }
    })
    let url = `${this.baseAPI}${completeQueryString}`;
    return this.http.get(url);
  }

}
