export type CanvasNode = number[];

export type OverlayProps = {
  color: string;
  shouldCloseLoop: boolean;
  strokeWidth: number;
  strokeDashLength: number;
  strokeDashGap: number;
  zigzagWavelength: number;
  zigzagAmplitude: number;
};

export enum LayerType {
  polyline = 'polyline',
  zigzag = 'zigzag',
};
