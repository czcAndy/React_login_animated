import styled from 'styled-components';

const Gradient = styled.div`
    background: linear-gradient(${props => props.colors});
    height: 100%;
    width: 100%;
`;

export default Gradient;