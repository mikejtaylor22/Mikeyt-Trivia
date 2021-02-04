import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private correctScore = 0;
  private incorrectScore = 0;
  public correctScore$: Observable<number>
  private correctScoreSubject$: Subject<number> = new Subject();
  public incorrectScore$: Observable<number>
  private incorrectScoreSubject$: Subject<number> = new Subject();

  constructor() { 
    this.correctScore$ = this.correctScoreSubject$.asObservable();
    this.incorrectScore$ = this.incorrectScoreSubject$.asObservable();
  }

  public setCorrectScore(){
    this.correctScore++;
    this.correctScoreSubject$.next(this.correctScore)
    
  }

  public setIncorrectScore(){
    this.incorrectScore++;
    this.incorrectScoreSubject$.next(this.incorrectScore)
    
  }

  public clearCorrectScore(){
    this.incorrectScore = 0;
    this.correctScore = 0;
  }
}
