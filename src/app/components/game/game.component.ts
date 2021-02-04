import { Component, OnInit } from '@angular/core';
import { triviaResult } from 'src/app/Models/triviaResult';
import { triviaResponse } from '../../Models/triviaResponse';
import { TriviaService } from '../../services/trivia/trivia.service';
import { ScoreService } from '../../services/score/score.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  isCorrectAnswer: boolean;
  answerMessage = '';
  isAnswered = false;
  correctScore: number = 0;
  incorrectScore: number = 0;
  correct: string;
  possible_answers = [];
  trivia: triviaResult = {} as triviaResult;

  constructor(
    private triviaService: TriviaService,
    public scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    this.isAnswered = false;
    this.getAnyQuestion();
  }

  getAnyQuestion() {
    this.isAnswered = false;
    this.triviaService.getQuestion().subscribe((data: any) => {
      const results = data.results;
      this.trivia = results[0];
      const allAnswers = [
        ...this.trivia.incorrect_answers,
        this.trivia.correct_answer,
      ];

      this.possible_answers = this.shuffleArray(allAnswers);
    });
  }

  shuffleArray(arr) {
    var currentIndex = arr.length,
      tempValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempValue;
    }
    return arr;
  }

  checkAnswer(answer: any) {
    const confirmCorrect = this.trivia.correct_answer;
    this.isAnswered = true;
    if (answer == confirmCorrect) {
      this.isCorrectAnswer = true;
      this.answerMessage = 'Correct!';
      this.scoreService.setCorrectScore();
    } else {
      this.isCorrectAnswer = false;
      this.answerMessage = 'Incorrect!';
      this.scoreService.setIncorrectScore();
    }
  }

  clearAnswers(){
    this.scoreService.clearCorrectScore();
  }
}
