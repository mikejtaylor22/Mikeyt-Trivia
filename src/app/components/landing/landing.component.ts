import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaService } from 'src/app/services/trivia/trivia.service';
import {CategoryService} from '../../services/category/category-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  

  constructor(private router: Router, private triviaService:TriviaService, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  getCategory(category:string){
    if(category == 'books'){
      this.categoryService.setCategory(10);
      this.router.navigate(['game'])
    }
    else if(category == 'videogames'){
      this.categoryService.setCategory(15);
      this.router.navigate(['game'])
    } 
    else if(category == 'television'){
      this.categoryService.setCategory(14);
      this.router.navigate(['game'])
    } 
    else if(category == 'sports'){
      this.categoryService.setCategory(21);
      this.router.navigate(['game'])
    } 
    else if(category == 'politics'){
      this.categoryService.setCategory(24);
      this.router.navigate(['game'])
    }
    else if(category == 'science'){
      this.categoryService.setCategory(17);
      this.router.navigate(['game'])
    }
    else if(category == 'music'){
      this.categoryService.setCategory(12);
      this.router.navigate(['game'])
    }
    else if(category == 'movies'){
      this.categoryService.setCategory(11);
      this.router.navigate(['game'])
    }
    else if(category == 'history'){
      this.categoryService.setCategory(23);
      this.router.navigate(['game'])
    }
    else if(category == 'art'){
      this.categoryService.setCategory(25);
      this.router.navigate(['game'])
    }
    else if(category == 'geography'){
      this.categoryService.setCategory(22);
      this.router.navigate(['game'])
    }
    else if(category == 'mythology'){
      this.categoryService.setCategory(20);
      this.router.navigate(['game'])
    }
    else if(category == 'celebrities'){
      this.categoryService.setCategory(26);
      this.router.navigate(['game'])
    }
    else if(category == 'animals'){
      this.categoryService.setCategory(27);
      this.router.navigate(['game'])
    }
  }

  anyCategory(){
    this.router.navigate(['any']);
  }

}
