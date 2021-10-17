import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import variants from "../../ui/animations/variants";
import { MotionRectangle } from "../../ui/designElements/rectangle/Rectangle";

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow:hidden;
`;

const Background = (props) => {
  return (
    <StyledBackground>
        <MotionRectangle height={"70vh"} colors={"white"}></MotionRectangle>
        <MotionRectangle
          height={"30vh"}
          colors={"#3f37c9ff, #4361eeff"}
          variants={variants}
          initial="initial_right"
          animate="animate_horizontally"
        ></MotionRectangle>
    </StyledBackground>
  );
};

export default Background;
