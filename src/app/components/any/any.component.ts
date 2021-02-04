import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score/score.service';
import {triviaResponse} from '../../Models/triviaResponse';
import {TriviaService} from '../../services/trivia/trivia.service';


@Component({
  selector: 'app-any',
  templateUrl: './any.component.html',
  styleUrls: ['./any.component.css']
})
export class AnyComponent implements OnInit {

  trivia: triviaResponse[];
  isCorrectAnswer:boolean;
  answerMessage = '';
  isAnswered = false;
  correctScore: number = 0;
  incorrectScore: number = 0;
  correct: string;
  possible_questions = [];
  triviaArray = [];

  constructor(private triviaService: TriviaService,private scoreService:ScoreService) { }

  ngOnInit(): void {

    this.triviaArray = [];
    this.possible_questions = [];
    this.isAnswered = false;
    this.triviaService.anyCategory().subscribe((data:any) => {
      console.log(data.results);
      this.trivia = data.results
        this.triviaArray.push(this.trivia[0])
        this.triviaArray[0].incorrect_answers.push(this.triviaArray[0].correct_answer)
       this.shuffleArray(this.triviaArray[0].incorrect_answers)
        
      });
  }

  getAnyQuestion(){
    this.triviaArray = [];
    this.possible_questions = [];
    this.isAnswered = false;
    this.triviaService.anyCategory().subscribe((data:any) => {
      console.log(data.results);
      this.trivia = data.results
        this.triviaArray.push(this.trivia[0])
        this.triviaArray[0].incorrect_answers.push(this.triviaArray[0].correct_answer)
       this.shuffleArray(this.triviaArray[0].incorrect_answers)
        
      });
  }
  

  shuffleArray(arr){
    var currentIndex = arr.length, tempValue, randomIndex;
    while(0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

  tempValue = arr[currentIndex];
  arr[currentIndex] = arr[randomIndex];
  arr[randomIndex] = tempValue;
    }
    return arr;
}

checkAnswer(answer:any){
  const confirmCorrect = this.triviaArray[0].correct_answer;
  if(answer == confirmCorrect){
    this.isCorrectAnswer = true;
  this.isAnswered = true;
  this.answerMessage = "Correct!";
  this.correctScore++;
  } else {
    this.isCorrectAnswer = false;
    this.isAnswered = true;
    this.answerMessage = "Incorrect!";
    this.incorrectScore++;
  }
}

clearAnswers(){
  this.scoreService.clearCorrectScore();
}


}
