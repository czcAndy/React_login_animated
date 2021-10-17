import styles from "./Background.module.css";
import variants from "../../ui/animations/variants";
import { MotionRectangle, Rectangle } from "../../ui/designElements/rectangle/Rectangle";
import { motion } from "framer-motion";

const GRADIENT_COLORS = "#3f37c9ff, #4361eeff";

const Background = (props) => {
  return (
    <div className={styles.background}>
      <MotionRectangle
        height={"30vh"}
        colors={GRADIENT_COLORS}
        variants={variants}
        initial="initial_right"
        animate="animate_horizontally"
      ></MotionRectangle>
       <MotionRectangle height={"40vh"} colors={"white, white"}></MotionRectangle>
      <MotionRectangle
        height={"30vh"}
        colors={GRADIENT_COLORS}
        variants={variants}
        initial="initial_left"
        animate="animate_horizontally"
      ></MotionRectangle>
      <motion.div
        className={styles["center-content"]}
        variants={variants}
        initial="initial_top"
        animate="animate_vertically_after_sibling"
      >
        <MotionRectangle colors={"white, white"} height={"50%"} />
        <MotionRectangle colors={GRADIENT_COLORS} height={"50%"} />
      </motion.div>
    </div>
  );
};

export default Background;
