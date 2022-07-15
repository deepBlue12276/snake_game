export default class Snake {
  private head: HTMLElement
  private bodys: HTMLCollection
  private element: HTMLElement
  constructor(){
    this.head = document.querySelector('#snake > div')!
    this.bodys = document.getElementById('snake')?.getElementsByTagName('div')!
    this.element = document.getElementById('snake')!
  }
  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }
  set X(value:number){
    if(this.X === value){
      return
    }
    if(value < 0 || value > 290){
      throw new Error('snake died!')
    }
    if(this.bodys[1]&&(this.bodys[1] as HTMLElement).offsetLeft === value){
      if(value > this.X){
        value = this.X - 10
      }else{
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set Y(value:number){
    if(this.Y === value){
      return
    }
    if(value < 0 || value > 290){
      throw new Error('snake died!')
    }
    if(this.bodys[1]&&(this.bodys[1] as HTMLElement).offsetTop === value){
      if(value > this.Y){
        value = this.Y - 10
      }else{
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }
  //增加长度
  addBody(){
    this.element.insertAdjacentHTML('beforeend','<div></div>')
  }
  //移动身体
  private moveBody(){
    for(let i=this.bodys.length-1;i>0;i--){
      //把前面身体的位置给当前
      let X = (this.bodys[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodys[i-1] as HTMLElement).offsetTop;
      (this.bodys[i] as HTMLElement).style.left = X + 'px';
      (this.bodys[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  //身体碰撞检测
  private checkHeadBody(){
    for(let i=1;i<this.bodys.length;i++){
      let bd = this.bodys[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('撞到自己了')
      }
    }
  }
}