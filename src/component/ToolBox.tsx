import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { LayerType } from '../entity/overlayEntity';
import { getSelectedTool, select } from '../redux/slice/tools';

const ToolBox = () => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelectedTool);

  const Icon = ({ name, value, ...props }: { name: string, value: LayerType }) => {
    const cls = classNames('icon', 'tool-icon', name, {
      selected: selected.toString() === name,
    });

    const onClick = () => dispatch(select(value));

    return <div className={cls} onClick={onClick} {...props} />;
  };

  return (
    <div className="toolbox">
      {Object.entries(LayerType).map(([name, value]) => (
        <Icon key={name} name={name} value={value} />
      ))}
    </div>
  );
};

export default ToolBox;
