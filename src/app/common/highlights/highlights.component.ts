import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  @ViewChild('gameCanvas', { static: true }) canvasRef: ElementRef;
  context: CanvasRenderingContext2D;
  snake: { x: number; y: number }[] = [];
  foodCount = 10;
  isGameOver = false;
  isGameStarted = false;
  isGameCompleted = false;
  food = { x: 0, y: 0 };
  foodImage: HTMLImageElement;
  direction: string | null = null;

  ngOnInit() {
    this.initCanvas();
    this.loadFoodImage();
  }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d');
    canvas.width = 240;
    canvas.height = 400;
  }

  startGame() {
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d');
    canvas.width = 240;
    canvas.height = 400;

    this.snake = [{ x: 5, y: 5 }];
    this.food = this.generateFood();
    this.foodCount = 10;
    this.isGameOver = false;
    this.isGameStarted = true;
    this.isGameCompleted = false;

    this.loadFoodImage();

    const gameLoop = () => {
      if (this.isGameOver || this.isGameCompleted) {
        return;
      }

      this.clearCanvas();
      this.moveSnake();
      this.checkCollision();
      this.drawFood();
      this.drawSnake();
      setTimeout(() => {
        requestAnimationFrame(gameLoop); // Adjust the timing here to control the speed
      }, 150); // Adjust the time delay (100 milliseconds in this example)
    };

    requestAnimationFrame(gameLoop);
  }

  moveSnake() {
    if (this.isGameOver || this.isGameCompleted) {
      return;
    }

    const head = this.snake[0];
    let newHead = { x: head.x + 1, y: head.y };
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

    if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
      this.food = this.generateFood();
      this.foodCount += 1;
    } else {
      this.snake.pop();
    }
  }

  generateFood() {
    return {
      x: Math.floor(Math.random() * 12),
      y: Math.floor(Math.random() * 20)
    };
  }

  loadFoodImage() {
    this.foodImage = new Image();
    this.foodImage.src = './assets/img/food.svg'; // Replace with the path to your food image
  }

  moveUp() {
    this.direction = 'up';
  }

  moveDown() {
    this.direction = 'down';
  }

  moveLeft() {
    this.direction = 'left';
  }

  moveRight() {
    this.direction = 'right';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (this.isGameStarted && !this.isGameOver && !this.isGameCompleted) {
      switch (event.key) {
        case 'ArrowUp':
          this.direction = 'up';
          break;
        case 'ArrowDown':
          this.direction = 'down';
          break;
        case 'ArrowLeft':
          this.direction = 'left';
          break;
        case 'ArrowRight':
          this.direction = 'right';
          break;
      }
    }
  }


  checkCollision() {
    if (this.snake.length === 0) {
      return; // Return if the snake array is empty
    }

    const head = this.snake[0];

    if (head.x < 0 || head.x >= 12 || head.y < 0 || head.y >= 20) {
      this.isGameOver = true;
    }

    if (this.food && head.x === this.food.x && head.y === this.food.y) {
      this.food = this.generateFood();
      this.foodCount += 1;
    }

    for (let i = 1; i < this.snake.length; i++) {
      if (this.snake[i].x === head.x && this.snake[i].y === head.y) {
        this.isGameOver = true;
        break;
      }
    }
  }

  clearCanvas() {
    this.context.clearRect(0, 0, 240, 400);
  }

  drawFood() {
    this.context.drawImage(this.foodImage, this.food.x * 20, this.food.y * 20, 20, 20);
  }

  drawSnake() {
    this.context.fillStyle = '#43d9ad';
    this.snake.forEach(segment => {
      this.context.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });
  }
}

