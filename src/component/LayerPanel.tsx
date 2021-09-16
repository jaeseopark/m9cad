import PanelHeader from './PanelHeader';

/*
{
  annotation,
  rerenderEditor,
  onClearActiveLayer,
}: {
  annotation: Annotation;
  rerenderEditor: Function;
  onClearActiveLayer: () => void;
}
*/

const LayerPanel = () => {
  // const addLayer = () => {
  //   annotation.addLayer();
  //   rerender();
  // };

  // const deleteActiveLayer = () => {
  //   try {
  //     annotation.deleteActiveLayer();
  //     rerenderEditor();
  //   } catch (error) {
  //     alert(JSON.stringify(error));
  //   }
  // };

  // const changeActiveLayer = (i: number) => {
  //   annotation.activeLayer = i;
  //   rerenderEditor();
  // };

  // const changeVisibility = (i: number) => {
  //   const layer = annotation.layers[i];
  //   layer.isVisible = !layer.isVisible;
  //   rerenderEditor();
  // };

  return (
    <div className="layer-panel">
      <PanelHeader text="Layers" />
      <div className="layers">
        {/* {annotation.layers.map((layer, i) => (
          // eslint-disable-next-line react/jsx-key
          <LayerSummary
            key={layer.created}
            layer={layer}
            index={i}
            isActive={annotation.activeLayer === i}
            onVisibilityChange={changeVisibility}
            onClick={() => changeActiveLayer(i)}
          />
        ))} */}
      </div>
      <div className="layer-toolbar">
        <div className="icon layer-icon delete" onClick={() => { }} />
        <div className="icon layer-icon clear" onClick={() => { }} />
        <div className="icon layer-icon add" onClick={() => { }} />
      </div>
    </div>
  );
};

export default LayerPanel;
