import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import M9File from '../../entity/m9File';
import { updateOverlayProps } from '../../redux/middleware/edits';
import { getOverlayPropsOrDefault } from '../../redux/slice/edits';
import { getSelectedFile } from '../../redux/slice/files';

const ToolbarNumInputDiv = styled.div`
label {
    float: left;
    background-color: transparent;
    border: none;
    margin-left: -115px;
    margin-top: 3px;
    color: #919191;
}

input[type='number'] {
    margin-left: 5px;
    float: left;
    width: 110px;
    height: 15px;
    text-align: right;
    padding-right: 10px;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`;

type ToolbarNumInputProps = {
    name: string;
    min?: string
};

const ToolbarNumInput = ({ name, min }: ToolbarNumInputProps) => {
    const dispatch = useDispatch();
    const file: M9File = useSelector(getSelectedFile);
    const overlayProps = useSelector(getOverlayPropsOrDefault(file));

    const onChange = (e) => {
        //@ts-ignore
        dispatch(updateOverlayProps(file, { [name]: e.target.value }));
    };

    return <ToolbarNumInputDiv>
        <input
            key={name}
            className="slick"
            type="number"
            min={min === undefined ? "1" : min}
            title={name}
            value={overlayProps[name]}
            onChange={onChange}
        />
        <label className="slick">{name}</label>
    </ToolbarNumInputDiv>;
}

export default ToolbarNumInput;
