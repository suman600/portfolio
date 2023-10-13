import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {empty} from "rxjs";

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef: ElementRef;
  private context: CanvasRenderingContext2D;
  numRows = 33;
  numColumns = 24;
  cellWidth = 20;
  cellHeight = 20;
  snake: { x: number; y: number }[] = [];
  direction: string | null = 'right';
  food: { x: number; y: number };
  foodCount = 0;
  maxFoodCount = 10;
  isGameOver = false;
  isGameStarted = false;
  isGameCompleted = false;
  foodImage: HTMLImageElement = new Image();

  constructor() {}

  ngOnInit() {
    // Initialize the game here or in startGame
  }

  resetGame() {
    this.snake = [];
    this.direction = 'right';
    this.foodCount = 0;
    this.isGameOver = false;
    this.isGameCompleted = false;
  }

  startGame() {
    this.resetGame();
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d');
    canvas.width = this.numColumns * this.cellWidth;
    canvas.height = this.numRows * this.cellHeight;
    this.snake = this.generateRandomSnake();
    this.food = this.generateFood();
    this.loadFoodImage();
    this.isGameStarted = true;
    const moveDelay = 200;
    const gameInterval = setInterval(() => {
      if (this.isGameOver || this.isGameCompleted) {
        clearInterval(gameInterval);
        return;
      }
      this.clearCanvas();
      this.moveSnake();
      this.checkCollision();
      this.drawFood();
      this.drawSnake();
    }, moveDelay);
    window.addEventListener('keydown', (event) => {
      if (this.isGameStarted && !this.isGameOver && !this.isGameCompleted) {
        switch (event.key) {
          case 'ArrowUp':
            this.moveUp();
            break;
          case 'ArrowDown':
            this.moveDown();
            break;
          case 'ArrowLeft':
            this.moveLeft();
            break;
          case 'ArrowRight':
            this.moveRight();
            break;
        }
      }
    });
  }

  generateRandomSnake() {
    const length = 5; // Initial snake length
    const snake = [];
    let startX, startY;
    startX = Math.floor(Math.random() * (this.numColumns - length));
    startY = Math.floor(Math.random() * (this.numRows - 1));
    for (let i = 0; i < length; i++) {
      snake.push({ x: startX + i, y: startY });
    }
    return snake;
  }
  moveSnake() {
    console.log(this.foodCount)
    if (this.isGameOver || this.isGameCompleted) {
      return;
    }
    const head = this.snake[0];
    let newHead = { ...head };

    if (this.direction === 'up') {
      newHead = { x: head.x, y: head.y - 1 };
    } else if (this.direction === 'down') {
      newHead = { x: head.x, y: head.y + 1 };
    } else if (this.direction === 'left') {
      newHead = { x: head.x - 1, y: head.y };
    } else if (this.direction === 'right') {
      newHead = { x: head.x + 1, y: head.y };
    }

    this.snake.unshift(newHead);

    // Check if the snake's head collides with the food
    if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
      this.food = this.generateFood();
      this.foodCount += 1;

      for (let i = 0; i < 2; i++) {
        this.snake.push({ ...this.snake[this.snake.length - 1] });
      }

      if (this.foodCount === this.maxFoodCount) {
        this.isGameCompleted = true;
        this.isGameStarted = true;
      }
    }
    else {
      this.snake.pop();
    }
  }

  drawFood() {
    const foodWidth = 42; // Set the food width to 22 pixels
    const foodHeight = 32; // Set the food height to 22 pixels
    const foodX = this.food.x * this.cellWidth + (this.cellWidth - foodWidth) / 2;
    const foodY = this.food.y * this.cellHeight + (this.cellHeight - foodHeight) / 2;

    this.context.drawImage(this.foodImage, foodX, foodY, foodWidth, foodHeight);
  }


  drawSnake() {
    this.context.fillStyle = '#42d9ae';
    this.snake.forEach((segment, index) => {
      let cellWidth = this.cellWidth;
      let cellHeight = this.cellHeight;
      if (this.direction === 'left' || this.direction === 'right') {
        if (index === 0 || index === this.snake.length - 1) {
          cellHeight = 1;
        }
      }
      if (this.direction === 'up' || this.direction === 'down') {
        if (index === 0 || index === this.snake.length - 1) {
          cellWidth = 1;
        }
      }
      this.context.fillRect(segment.x * cellWidth, segment.y * cellHeight, cellWidth, cellHeight);
    });
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.numColumns * this.cellWidth, this.numRows * this.cellHeight);
  }

  checkCollision() {
    const head = this.snake[0];

    // Check if the snake collides with the wall
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= this.numColumns ||
      head.y >= this.numRows
    ) {
      this.gameOver();
      return;
    }

   // Check if the snake collides with its own body starting from the 2nd segment
    if(this.snake.length > 5){
      for (let i = 1; i < this.snake.length; i++) {
        if (this.snake[i].x === head.x && this.snake[i].y === head.y) {
          this.gameOver();
          return;
        }
      }
    }
  }


  generateFood() {
    const x = Math.floor(Math.random() * this.numColumns);
    const y = Math.floor(Math.random() * this.numRows);
    return { x, y };
  }

  loadFoodImage() {
    this.foodImage = new Image();
    this.foodImage.src = './assets/img/food.svg';
  }

  gameOver() {
    if (this.isGameStarted) {
      this.isGameOver = true;
      this.isGameCompleted = false;
      this.isGameStarted = false;
    }
  }

  moveUp() {
    if (this.isGameStarted && !this.isGameOver && !this.isGameCompleted && this.direction !== 'down') {
      this.direction = 'up';
    }
  }

  moveDown() {
    if (this.isGameStarted && !this.isGameOver && !this.isGameCompleted && this.direction !== 'up') {
      this.direction = 'down';
    }
  }

  moveRight() {
    if (this.isGameStarted && !this.isGameOver && !this.isGameCompleted && this.direction !== 'left') {
      this.direction = 'right';
    }
  }
  moveLeft() {
    if (this.isGameStarted && !this.isGameOver && !this.isGameCompleted && this.direction !== 'right'){
      this.direction = 'left';
        }
    }
}
