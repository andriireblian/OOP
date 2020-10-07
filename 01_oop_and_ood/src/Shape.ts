import {Point} from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    protected constructor();
    protected constructor(color: string, filled: boolean, points: Point[]);

    protected constructor(color?: string, filled?: boolean, points?: Point[]) {
        this.color = 'green';
        this.filled = true;
        this.points = [];
    }

    toString(): string {
        return "A Shape with color of xxx and filled/Not filled. Points: (x1, y1), (x2, y2)...";
    }

    getPerimeter(): void {

    }
}
