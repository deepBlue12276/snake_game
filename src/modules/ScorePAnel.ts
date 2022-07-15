//记分牌类
export default class ScorePAnel {
  //分数
  private score = 0
  //等级
  level = 1
  //最大等级
  maxLevel:number
  //多少分升级
  upScore:number
  private scoreEle:HTMLElement
  private levelEle:HTMLElement
  constructor(maxLevel:number = 10,upScore:number = 10){
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }
  //增加分数
  addScore(){
    this.scoreEle.innerHTML = 'SCORE:'+ ++this.score
    if(this.score % this.upScore === 0){
      this.levelUp()
    }
  }
  private levelUp(){
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = 'level:'+ ++this.level
    }
  }
}