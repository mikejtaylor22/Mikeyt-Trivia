import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {triviaResponse} from '../../Models/triviaResponse';
import { CategoryService } from '../category/category-service';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
private categoryId: number;

  constructor(private http:HttpClient, private categoryService: CategoryService) {

    this.categoryService.category$.subscribe(
      x => {
        this.categoryId = x;
      }
    )
   }

  anyCategory():Observable<triviaResponse>{
    return this.http.get<triviaResponse>(`https://opentdb.com/api.php?amount=1`).pipe(
      catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   )
}

getQuestion():Observable<triviaResponse>{
  return this.http.get<triviaResponse>(`https://opentdb.com/api.php?amount=1&category=${this.categoryId}`).pipe(
    catchError( error => {
      return throwError( 'Something went wrong!' );
    })
 )
}

}
