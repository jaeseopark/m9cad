export const getLength = (p1: number[], p2: number[]) =>
  Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);

export const getAngle = (p1: number[], p2: number[]) =>
  Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);

export const radiansToDegress = (radians: number): number =>
  radians * (180 / Math.PI);
