import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Gradient from '../gradient/Gradient';

const StyledRectangle = styled.div`
    height: ${props => (props.height ? props.height : '100%')};
    width: ${props => (props.width ? props.width : '100%')};
`

const Rectangle = React.forwardRef((props, ref)  => {
    return (
    <StyledRectangle ref={ref} height={props.height} width={props.width}>
        <Gradient colors={props.colors}/>
    </StyledRectangle> 
    );
});

const MotionRectangle = motion(Rectangle);

export {MotionRectangle, Rectangle};