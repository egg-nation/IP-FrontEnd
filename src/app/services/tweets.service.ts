import { Injectable } from '@angular/core';

@Injectable()
export class TweetsService {
  constructor(){}
  getTweets(){
    return [
      {"name":"Alex", "message":"hai ca vom reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi", "sentiment":"positive"},
      {"name":"Alex", "message":"hai ca vom reusi", "sentiment":"positive"},
      {"name":"Alex", "message":"hai ca vom reusi  reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi reusi", "sentiment":"positive"},
      {"name":"Alex", "message":"hai ca vom reusi", "sentiment":"positive"},
      {"name":"Alex", "message":"hai ca vom reusi", "sentiment":"positive"},
      {"name":"Alex", "message":"hai ca vom reusi", "sentiment":"positive"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},
      {"name":"Ramona", "message":"ce vrea e facultatea offf", "sentiment":"negative"},


      {"name":"Mihai", "message":"ce?", "sentiment":"neutral"}
    ];
  }
}
