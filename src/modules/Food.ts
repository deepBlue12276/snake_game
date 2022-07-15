//食物类
class Food {
  private element: HTMLElement;
  constructor(){
    this.element = document.getElementById('food')!;
  }
  //获取坐标
  get X(){
    return this.element.offsetLeft
  }
  get Y(){
    return this.element.offsetTop
  }
  set X(value:number){
    this.element.style.left = value + 'px'
  }
  set Y(value:number){
    this.element.style.top = value + 'px'
  }
  //随机重置位置0-290 间10的整数
  change(){
    let top = Math.round(Math.random()*29)*10 + 'px'
    let left = Math.round(Math.random()*29)*10 + 'px'
    this.element.style.top = top;
    this.element.style.left = left;
  }
}
  export default Food