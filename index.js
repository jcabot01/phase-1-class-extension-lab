// Your code here
class Polygon{
    constructor(...sides) {
      this.sides = sides;
    }
    get countSides(){
      for(let side of this.sides) {
        return side.length
      }
    }

    get perimeter(){  
        return this.sides.reduce((sum, side) => sum + side, 0);
      }
  }

class Triangle extends Polygon {
    constructor(a, b, c){
    super(...sides);
    this.a = a;
    this.b = b;
    this.c = c;
    }
    get isValid(){
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

}