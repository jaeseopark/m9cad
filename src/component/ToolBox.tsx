import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { LayerType } from '../entity/overlayEntity';
import { getSelectedTool, select } from '../redux/slice/tools';

type IconProps = { name: string, isSelected: boolean, onClick: () => void };

const Icon = ({ name, isSelected: selected, onClick }: IconProps) => {
  const cls = classNames('icon', 'tool-icon', name, { selected });
  return <div className={cls} onClick={onClick} />;
};

const ToolBox = () => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelectedTool);

  return (
    <div className="toolbox">
      {Object.entries(LayerType).map(([name, value]) => {
        const onClick = () => dispatch(select(value));
        return <Icon key={name} name={name} onClick={onClick} isSelected={selected.toString() === name} />;
      })}
    </div>
  );
};

export default ToolBox;
