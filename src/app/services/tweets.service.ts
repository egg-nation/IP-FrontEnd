import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GenericService } from './generic.service';

import { environment } from 'src/environments/environment';

@Injectable()
export class TweetsService {
  private URL = 'http://localhost:5000';

  constructor(private baseService: GenericService) {}

  public getNumberOfTweets(): Observable<any> {
    return this.baseService.get(this.URL + '/tweets/count', '');
  }
}
