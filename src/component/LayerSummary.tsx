/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import Layer from '../entity/layer';

const LayerSummary = ({
  layer,
  isActive,
  index,
  onVisibilityChange,
  onClick,
}: {
  layer: Layer;
  index: number;
  isActive: boolean;
  onVisibilityChange: Function;
  onClick: () => void;
}) => {
  const onVisibleIconClick = () => onVisibilityChange(index);

  const { color } = layer.overlayProps;

  const summaryClassnames = classNames('layer-summary', {
    'is-active': isActive,
  });
  const visibilityClassnames = classNames('visibility', 'icon', {
    'is-visible': layer.isVisible,
  });

  const layerName = `Layer ${index + 1} (${layer.layerType})`;
  const layerColorStyle = { backgroundColor: color };

  return (
    <div className={summaryClassnames}>
      <div className={visibilityClassnames} onClick={onVisibleIconClick} />
      <div className="layer-summary-body" onClick={onClick}>
        <span className="layer-color" style={layerColorStyle} />
        <div className="layer-name">{layerName}</div>
      </div>
    </div>
  );
};

export default LayerSummary;
