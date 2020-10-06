import { Shape } from './Shape';
import {Point} from './Point';

export class Triangle extends Shape {
    private v1: Point;
    private v2: Point;
    private v3: Point;

    private d1: number = 0;
    private d2: number = 0;
    private d3: number = 0;


    constructor(x1: Point, x2: Point, x3: Point) {
        super();

        this.v1 = x1;
        this.v2 = x2;
        this.v3 = x3;
    }

    toString(): string {
        let {v1, v2, v3} = this;
        return `Triangle[v1=(${v1.x},${v1.y}),v2=(${v2.x},${v2.y}),v3=(${v3.x},${v3.y})]`
    }

    getType(): void {
        let {d1, d2, d3} = this;
        const type = (d1 === d2 && d2 === d3) && 'equilateral triangle' || (d1 === d2 || d1 === d3 || d2 === d3) && 'isosceles triangle' || 'scalene triangle';
        console.log(type);
    }

}
