import { Injectable } from '@angular/core';

@Injectable()
export class TweetsService {
  constructor(){}
  getTweets(){
    return [
      {"name":"Albert Ramona","TrustedSource":"true","date":"12/12/2020", "retweets":"140", "pic":"http://tevi.xyz/img/ramo.webp", "link":" https://instagram.com/p/B_nBEAXo1dV/?igshid=ok0kqk1xtzwq", "tag":"albert.ramona99", "message":"Hmm lecker lecker... No doubt big heavy Maschines at work Thread with caution!Rolling on the floor laughingRolling on the floor laughingLollipopLollipop.To see Sugar official video check out Youtube/singing gold tv", "sentiment":"positive"},
      {"name":"Cojocariu Alex","TrustedSource":"false","date":"12/12/2020", "retweets":"1.400", "pic":"http://tevi.xyz/img/alex.webp", "link":"abcn.ws/3bVxhWM", "tag":"cojocariualexandru1","message":"The Navajo Nation has more coronavirus cases per capita than all but two states. Tribes were supposed to get $8 billion from the CARES Act — more than a month later, they haven't seen a single cent of relief.      Let that sink in.", "sentiment":"positive"},
      {"name":"Oloieri Alexandru","TrustedSource":"true","date":"12/12/2020", "retweets":"14", "pic":"http://tevi.xyz/img/olo.webp", "link":"abcn.ws/3bVxhWM","tag":"oloieri.alexandru","message":"Goldenness once they released the official video links for Golden Child's performances, lets watch it a lot ok Sparkling heart", "sentiment":"positive"},
      {"name":"Giurgea Elisa","TrustedSource":"true","date":"12/11/2020", "retweets":"1.300", "pic":"https://media-exp1.licdn.com/dms/image/C4D03AQHI_tC_NJNlXw/profile-displayphoto-shrink_800_800/0?e=1594252800&v=beta&t=NduMmT4OhK7yuL-fPnE0UG5AarSrnm7DbnXAScZfF_M", "tag":"elisa.giurgea","message":"Q: Have you seen anything that gives you a \"high degree of confidence\" that the novel coronavirus originated at the Wuhan Institute of Virology?i", "sentiment":"positive"},
      {"name":"Albert Ramona","TrustedSource":"false","date":"12/13/2013", "retweets":"140", "pic":"http://tevi.xyz/img/ramo.webp", "link":" https://instagram.com/p/B_nBEAXo1dV/?igshid=ok0kqk1xtzwq", "tag":"albert.ramona99", "message":"Hmm lecker lecker... No doubt big heavy Maschines at work Thread with caution!Rolling on the floor laughingRolling on the floor laughingLollipopLollipop.To see Sugar official video check out Youtube/singing gold tv", "sentiment":"positive"},
      {"name":"Cojocariu Alex","TrustedSource":"true","date":"12/12/2020", "retweets":"4.000", "pic":"http://tevi.xyz/img/alex.webp", "link":"abcn.ws/3bVxhWM", "tag":"cojocariualexandru1","message":"The Navajo Nation has more coronavirus cases per capita than all but two states. Tribes were supposed to get $8 billion from the CARES Act — more than a month later, they haven't seen a single cent of relief.      Let that sink in.", "sentiment":"positive"},
      {"name":"Oloieri Alexandru","TrustedSource":"false","date":"12/12/2020", "retweets":"600", "pic":"http://tevi.xyz/img/olo.webp", "link":"abcn.ws/3bVxhWM","tag":"oloieri.alexandru","message":"Goldenness once they released the official video links for Golden Child's performances, lets watch it a lot ok Sparkling heart", "sentiment":"positive"},
      {"name":"Giurgea Elisa","TrustedSource":"true","date":"12/12/2020", "retweets":"2.000", "pic":"https://media-exp1.licdn.com/dms/image/C4D03AQHI_tC_NJNlXw/profile-displayphoto-shrink_800_800/0?e=1594252800&v=beta&t=NduMmT4OhK7yuL-fPnE0UG5AarSrnm7DbnXAScZfF_M", "tag":"elisa.giurgea","message":"Q: Have you seen anything that gives you a \"high degree of confidence\" that the novel coronavirus originated at the Wuhan Institute of Virology?i", "sentiment":"positive"}
      

    ];
  }
}
