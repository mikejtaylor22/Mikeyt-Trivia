import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class CategoryService {
    public category$: Observable<number>
    private categorySubject$: Subject<number> = new Subject();

    constructor(){
        this.category$ = this.categorySubject$.asObservable();
    }
    public setCategory(id: number){
        this.categorySubject$.next(id);
    }

  }