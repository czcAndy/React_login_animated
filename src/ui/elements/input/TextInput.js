import styled from "styled-components";

const StyledInput = styled.input`
  box-shadow: -0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.233),
    0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.233);
  width: 100%;
  padding: 0.8em;
  border: none;
  border-radius: 20px;
  text-align: center;
  margin-top: 1rem;
  position: relative;

  &:focus {
    outline: none;
  }
`;

const TextInput = (props) => {
    return <StyledInput type="text" placeholder={props.placeholder}>

    </StyledInput>
}

export default TextInput;
