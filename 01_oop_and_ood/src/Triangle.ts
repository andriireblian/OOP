import { Shape } from './Shape';
import {Point} from './Point';

export class Triangle extends Shape {
    protected v1: Point;
    protected v2: Point;
    protected v3: Point;

    protected constructor(x1: Point, x2: Point, x3: Point);
    protected constructor(x1: Point, x2: Point, x3: Point, color?: string, filled?: boolean);
    protected constructor(x1?: Point, x2?: Point, x3?: Point, color?: string, filled?: boolean) {

        super([x1, x2 , x3], color, filled);

        this.v1 = x1;
        this.v2 = x2;
        this.v3 = x3;

    }

    toString(): string {
        let {v1, v2, v3} = this;
        return `Triangle[v1=(${v1.x},${v1.y}),v2=(${v2.x},${v2.y}),v3=(${v3.x},${v3.y})]`
    }

    getType(): string {
        let {d1, d2, d3} = this,
            type: string;

        if (d1 === d2 && d2 === d3) {
            type = 'equilateral triangle';
        } else if (d1 === d2 || d1 === d3 || d2 === d3) {
            type = 'isosceles triangle';
        } else {
            type = 'scalene triangle';
        }

        return type;
    }

}
