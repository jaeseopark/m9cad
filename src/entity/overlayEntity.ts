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
}

export const defaultOverlayProps: OverlayProps = {
  color: 'red',
  shouldCloseLoop: false,
  strokeWidth: 2,
  strokeDashLength: 15,
  strokeDashGap: 10,
  zigzagWavelength: 10,
  zigzagAmplitude: 10,
};

export const defaultLayerType = LayerType.polyline;
