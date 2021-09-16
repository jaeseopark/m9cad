import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import M9File from '../../entity/m9File';
import { updateOverlayProps } from '../../redux/middleware/edits';
import { getOverlayPropsOrDefault } from '../../redux/slice/edits';
import { getSelectedFile } from '../../redux/slice/files';

const CloseLoopDiv = styled.div`
margin-top: 1px;
margin-left: 5px;
float: left;

input[type='checkbox'] {
    float: left;
}

.close-loop {
    color: #f0f0f0;
    font-size: x-small;
    float: left;
    padding-top: 3px;
}
`;

const CloseLoopCheckbox = () => {
    const dispatch = useDispatch();
    const file: M9File = useSelector(getSelectedFile);
    const overlayProps = useSelector(getOverlayPropsOrDefault(file));

    const onChange = (e) => {
        //@ts-ignore
        dispatch(updateOverlayProps(file, { shouldCloseLoop: e.target.value }));
    };

    return <CloseLoopDiv>
        <input
            type="checkbox"
            checked={overlayProps.shouldCloseLoop}
            onChange={onChange}
        />
        <label className="close-loop">Close Loop</label>
    </CloseLoopDiv>;
};

export default CloseLoopCheckbox;
