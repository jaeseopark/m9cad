/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import classNames from 'classnames';

import { LayerType } from '../entity/overlayEntity';

type ToolBoxProps = {
  selected: LayerType;
  onChange: Function;
};

const ToolBox = ({ selected, onChange }: ToolBoxProps) => {
  const Icon = ({ title, ...props }: { title: string }) => {
    const cls = classNames('icon', 'tool-icon', title, {
      selected: selected.toString() === title,
    });

    const onClick = () => onChange(title);

    return <div className={cls} title={title} onClick={onClick} {...props} />;
  };

  return (
    <div className="toolbox">
      {Object.values(LayerType).map((value) => (
        <Icon key={value} title={value} />
      ))}
    </div>
  );
};

export default ToolBox;
