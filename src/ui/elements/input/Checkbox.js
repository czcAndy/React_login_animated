import styled from "styled-components";

/* Using li element to allign the label and the checkbox*/ 
const StyledItemList = styled.li`
    overflow: hidden;
    list-style: none;
`

const StyledCheckbox = styled.input`
    margin-top: 0.4rem;
    line-height: 0.85rem;
    height: 0.85rem;
    float: left;
`

const StyledLabel = styled.label`
    margin-left: 0.2rem;
    font-size: 0.9rem;
    margin-top: 0.4rem;
    line-height: 0.85rem;
    height: 0.85rem;
    float: left;
`

const Checkbox = props => {
    return (
        <StyledItemList>
              <StyledCheckbox type="checkbox"/>
              <StyledLabel>{props.label}</StyledLabel>
        </StyledItemList>
    )
}

export default Checkbox;