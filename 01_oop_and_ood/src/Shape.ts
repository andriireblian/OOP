import {Point} from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    private c1: Point;
    private c2: Point;
    private c3: Point;

    protected d1: number = 0;
    protected d2: number = 0;
    protected d3: number = 0;

    protected constructor(points: Point[]);
    protected constructor(points: Point[], color?: string, filled?: boolean);
    protected constructor(points: Point[], color?: string, filled?: boolean) {
        this.color = 'green';
        this.filled = true;
        this.points = [];

        if ([].length < 3) {
            throw new Error('At least 3 points expected!');
        }
    }

    toString(): string {
        return "A Shape with color of xxx and filled/Not filled. Points: (x1, y1), (x2, y2)...";
    }

    getPerimeter(): number {
        let {c1, c2, c3} = this;
        const point = new Point();

        this.d1 = point.distance(c1);
        this.d2 = point.distance(c2);
        this.d3 = point.distance(c3);

        return this.d1 + this.d2 + this.d3;
    }
}
