import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplayer-local',
  templateUrl: './multiplayer-local.component.html',
  styleUrls: ['./multiplayer-local.component.css']
})
export class MultiplayerLocalComponent implements OnInit {

  elements = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  player1 = 'X';
  player2 = 'O';
  currentPlayer = true;
  winner = '';

  constructor() { }

  ngOnInit(): void {
  }

  placeElementAt(index) {
    var player = '';
    if (this.checkIfNoElementIsPresent(index)) {
      if (this.currentPlayer) {
        player = this.player1;
        this.elements[index] = this.player1;
      }
      else {
        player = this.player2;
        this.elements[index] = this.player2;
      }
      if (this.checkIfWinner(player)) {
        this.winner = player;
      }
      this.currentPlayer = !this.currentPlayer;
    }
    else {
      alert('Cannot Place Here');
    }
    if ((this.winner === '') && (this.elements.indexOf(' ') === -1)) {
      setTimeout(() => {
        alert('The Match Ended In A Draw');
        this.elements = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        this.winner = '';
      }, 200)
    }
    else if ((this.winner !== '')) {
      setTimeout(() => {
        alert(this.winner + ' wins');
        this.elements = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        this.winner = '';
      }, 200)
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
