import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GenericService } from './generic.service';

import { environment } from 'src/environments/environment';

@Injectable()
export class TweetsService {
  private URL = 'https://ip2020.herokuapp.com';

  constructor(private baseService: GenericService) {}

  public getNumberOfTweets(): Observable<any> {
    return this.baseService.get(this.URL + '/tweets/count', '');
  }
}
