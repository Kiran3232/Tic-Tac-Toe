import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.css']
})
export class SinglePlayerComponent implements OnInit {

  elements = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  placeElementAt(index) {
    var winner = '';
    if (this.checkIfNoElementIsPresent(index)) {
      this.elements[index] = 'X';
      var ind = index;
      if (this.checkIfWinner('X')) {
        winner = 'X';
      }
      if ((this.elements.indexOf(' ') !== -1) && (winner == '')) {
        while (!this.checkIfNoElementIsPresent(ind)) {
          console.log(ind)
          ind = Math.floor(Math.random() * 9)
        }
        this.elements[ind] = 'O';
        if (this.checkIfWinner('O')) {
          winner = 'O';
        }
      }
      else if (winner == '') {
        setTimeout(() => {
          alert('The Match Ended In A Draw');
          this.elements = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        }, 200)
      }
    }
    else {
      alert('Cannot Place Here');
    }
    if (winner !== '') {
      setTimeout(() => {
        alert(winner + ' wins');
        this.elements = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      }, 200);
    }
  }

  checkIfNoElementIsPresent(index) {
    return (this.elements[index] == ' ');
  }

  checkIfWinner(mark) {
    return (
      (this.elements[0] == mark && this.elements[1] == mark && this.elements[2] == mark) ||
      (this.elements[3] == mark && this.elements[4] == mark && this.elements[5] == mark) ||
      (this.elements[6] == mark && this.elements[7] == mark && this.elements[8] == mark) ||
      (this.elements[0] == mark && this.elements[3] == mark && this.elements[6] == mark) ||
      (this.elements[1] == mark && this.elements[4] == mark && this.elements[7] == mark) ||
      (this.elements[2] == mark && this.elements[5] == mark && this.elements[8] == mark) ||
      (this.elements[0] == mark && this.elements[4] == mark && this.elements[8] == mark) ||
      (this.elements[2] == mark && this.elements[4] == mark && this.elements[6] == mark)
    );
  }
}
