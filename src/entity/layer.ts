import { CanvasNode, LayerType, OverlayProps } from './overlayEntity';

type Layer = {
  id: string;
  nodes: CanvasNode[];
  previewNode: CanvasNode | null | undefined;
  layerType: LayerType;
  overlayProps: OverlayProps;
  isVisible: boolean;
};

export default Layer;
