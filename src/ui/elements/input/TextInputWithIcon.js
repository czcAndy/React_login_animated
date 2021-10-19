import TextInput from "./TextInput";
import FlexWrapper from "../../layout/FlexWrapper";
import styled from "styled-components";

const StyledI = styled.i.attrs(props => ({
    className: props.preDefinedIconClasses
}))`
position: absolute;
top: 1.75rem;
left: 15px;
z-index: 2;
color: var(--primary-blue);
`

const TextInputWithIcon = (props) => {

  return (
    <FlexWrapper width={"100%"}>
      <StyledI className={props.preDefinedIconClasses} />
      <TextInput placeholder={props.placeholder} />
    </FlexWrapper>
  );
};

export default TextInputWithIcon;
