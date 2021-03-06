import Layer from './layer';

type Annotation = {
  layers: Layer[];
  selectedLayerIndex: number;
  // constructor() {
  //   this.layers = [];
  // }

  // getActiveLayer = () => this.layers[this.activeLayer];

  // addLayer = () => {
  //   const al = this.getActiveLayer();
  //   // this.layers.push(new Layer({ ...al.overlayProps }, al.layerType));
  //   this.activeLayer = this.layers.length - 1;
  //   enablePreviewNode();
  // };

  // deleteActiveLayer = () => {
  //   if (this.layers.length === 1) {
  //     throw new Error("Can't delete the last layer");
  //   }

  //   this.layers.splice(this.activeLayer, 1);
  //   this.activeLayer -= this.activeLayer === 0 ? 0 : 1;
  // };

  // addNode = (node: CanvasNode, layerType: LayerType) => {
  //   const needsNewLayer = () => {
  //     const al = this.getActiveLayer();
  //     return al.layerType !== layerType && al.nodes.length > 0;
  //   };

  //   if (needsNewLayer()) {
  //     this.addLayer();
  //   }

  //   this.getActiveLayer().layerType = layerType;
  //   // this.getActiveLayer().addNode(node);
  // };

  // setPreviewNode = (node: CanvasNode) => {
  //   this.getActiveLayer().previewNode = node;
  // };

  // updateOverlayProps = (partialProps: OverlayProps) => {
  //   Object.assign(this.getActiveLayer().overlayProps, partialProps);
  // };
};

export default Annotation;
