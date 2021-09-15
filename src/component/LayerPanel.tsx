/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Annotation from '../entity/annotation';
import { getTimestamp } from '../util/dateUtil';
import LayerSummary from './LayerSummary';

import PanelHeader from './PanelHeader';

const LayerPanel = ({
  annotation,
  rerenderEditor,
  onClearActiveLayer,
}: {
  annotation: Annotation;
  rerenderEditor: Function;
  onClearActiveLayer: () => void;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setRerenderTimestamp] = useState<number>(0);
  const rerender = () => setRerenderTimestamp(getTimestamp());

  const addLayer = () => {
    annotation.addLayer();
    rerender();
  };

  const deleteActiveLayer = () => {
    try {
      annotation.deleteActiveLayer();
      rerenderEditor();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const changeActiveLayer = (i: number) => {
    annotation.activeLayer = i;
    rerenderEditor();
  };

  const changeVisibility = (i: number) => {
    const layer = annotation.layers[i];
    layer.isVisible = !layer.isVisible;
    rerenderEditor();
  };

  return (
    <div className="layer-panel">
      <PanelHeader text="Layers" />
      <div className="layers">
        {annotation.layers.map((layer, i) => (
          // eslint-disable-next-line react/jsx-key
          <LayerSummary
            layer={layer}
            index={i}
            isActive={annotation.activeLayer === i}
            onVisibilityChange={changeVisibility}
            onClick={() => changeActiveLayer(i)}
          />
        ))}
      </div>
      <div className="layer-toolbar">
        <div className="icon layer-icon delete" onClick={deleteActiveLayer} />
        <div className="icon layer-icon clear" onClick={onClearActiveLayer} />
        <div className="icon layer-icon add" onClick={addLayer} />
      </div>
    </div>
  );
};

export default LayerPanel;
