// Your code here
class Polygon{
  constructor(sides) {
    this.sides = sides;
  }
  get countSides(){
    return this.sides.length
  }

  get perimeter(){  
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}  

class Triangle extends Polygon {
  get isValid(){
    this.a = this.sides[0];
    this.b = this.sides[1];
    this.c = this.sides[2];
      if(!this.a || !this.b || !this.c){
          return false;
      };
    const con1 = this.a + this.b > this.c;
    const con2 = this.b + this.c > this.a;
    const con3 = this.c + this.a > this.b;
      return con1 && con2 && con3;  
  };
} 
    

class Square extends Polygon {
  get isValid(){
    this.a = this.sides[0];
    this.b = this.sides[1];
    this.c = this.sides[2];
    this.d = this.sides[3];
      if(this.a === this.b && this.a === this.c && this.a === this.d){
        return true; 
      } else {
        return false;
      }
  }

  get area(){
    this.a = this.sides[0];
    this.b = this.sides[1];
      if(this.a !== this.b){
        return false;
      } else {
        return this.a * this.b;
      }
  }

}