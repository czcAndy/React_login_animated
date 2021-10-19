import styled from "styled-components";

const StyledDiv = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
`

const FlexWrapper = props => {
    return <StyledDiv width={props.width} height={props.height}>{props.children}</StyledDiv>
}

export default FlexWrapper;