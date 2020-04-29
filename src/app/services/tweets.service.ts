import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  private api = 'https://movie-collection-web-api.herokuapp.com/movies';

  constructor(private baseService: GenericService) {}

  public getAll(): Observable<any[]> {
    return this.baseService.get<any[]>(this.api, '');
  }
}
