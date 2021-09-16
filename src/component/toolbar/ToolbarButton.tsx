import styled from 'styled-components';

const ToolbarButtonElement = styled.button`
button[type='button'] {
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
}
`;

const ToolbarButton = (props) => <ToolbarButtonElement className="slick" type="button" {...props} />;

export default ToolbarButton;
