import { CanvasNode, LayerType, OverlayProps } from './overlayEntity';

export default class Layer {
  nodes: CanvasNode[] = [];

  previewNode: CanvasNode | null = null;

  layerType: LayerType;

  overlayProps: OverlayProps;

  isVisible = true;

  constructor(overlayProps: OverlayProps, layerType: LayerType) {
    this.overlayProps = overlayProps;
    this.layerType = layerType;
  }

  addNode = (node: CanvasNode) => this.nodes.push(node);

  removeLastNode = () => this.nodes.pop();

  clear = () => {
    this.nodes.length = 0;
  };
}
