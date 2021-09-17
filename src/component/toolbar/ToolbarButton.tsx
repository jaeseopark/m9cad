import styled from 'styled-components';
import cls from 'classnames';

const ToolbarButtonElement = styled.button`
padding: 3px 15px;
float: left;

&:hover {
    background-color: rgb(168, 168, 168);
}

&.clear {
    margin-left: 45px;
}

&.save {
    float: right;
}
`;

const ToolbarButton = (props) => {
    const { className, ...rest } = props;
    return <ToolbarButtonElement
        className={cls("slick", className)}
        type="button"
        {...rest}
    />;
}

export default ToolbarButton;
