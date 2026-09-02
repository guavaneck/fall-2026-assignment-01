export type Circle = {
  kind: 'circle';
  radius: number;
};

export type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
};

export type Square = {
  kind: 'square';
  sideLength: number;
};

export type Shape = Circle | Rectangle | Square;

export function calculateArea(s: Shape): number {
  switch (s.kind) {
    case 'circle':
      return s.radius * s.radius * Math.PI;
    case 'rectangle':
      return s.width * s.height;
    case 'square':
      return s.sideLength * s.sideLength;
  }
}
