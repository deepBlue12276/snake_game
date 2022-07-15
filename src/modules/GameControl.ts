import Snake from "./Snake"
import Food from "./Food"
import ScorePAnel from "./ScorePAnel"
export default class GameControl {
  private snake: Snake
  private food: Food
  private scorePAnel: ScorePAnel
  //运动方向
  private direction = ''
  //游戏状态
  private isOver = true
  private menuEle:HTMLElement
  private btnEle:HTMLElement
  constructor(){
    this.snake = new Snake()
    this.food = new Food()
    this.scorePAnel = new ScorePAnel()
    this.btnEle = document.getElementById('button')!
    this.menuEle = document.getElementById('menu')!
    this.init()
  }
  //初始化
  private init(){
    document.addEventListener('keydown',this.keydownHandler.bind(this))
    this.btnEle.addEventListener('click',this.start.bind(this))
  }
  //键盘响应
  private keydownHandler(event:KeyboardEvent){
    this.direction = event.key
  }
  //移动
  private run(){
    let X = this.snake.X
    let Y = this.snake.Y
    switch(this.direction){
      case "ArrowUp":
      case "Up":
        Y -= 10
        break
      case "ArrowDown":
      case "Down":
        Y += 10
        break
      case "ArrowLeft":
      case "Left":
        X -= 10
        break
      case "ArrowRight":
      case "Right":
        X += 10
        break
    }
    this.checkEat()
    try {
      this.snake.X = X
      this.snake.Y = Y
    }catch(e:any){
      alert('游戏结束')
      this.snake.X = 150
      this.snake.Y = 180
      this.food.X = 150
      this.food.Y = 50
      console.log(e)
      this.isOver = true
      this.menuEle.style.display = 'block'
    }
    if(!this.isOver){
      setTimeout(this.run.bind(this),500-this.scorePAnel.level*40)
    }
  }
  //吃食检测
  private checkEat(){
    if(this.food.X === this.snake.X && this.food.Y === this.snake.Y){
      this.food.change()
      this.snake.addBody()
      this.scorePAnel.addScore()
    }
  }
  //开始游戏
  private start(){
    this.menuEle.style.display = 'none'
    this.isOver = false
    this.run()
  }
}