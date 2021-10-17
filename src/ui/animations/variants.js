const DURATION = 0.5;

const variants = {
    initial_bottom: {
        position: "fixed",
        top: "100vh",
    },
    initial_top: {
        position: "fixed",
        top: "-100vh",
    },
    animate_vertically: {
        position: "relative",
        top:"0vh",
        transition: {
            duration: DURATION
        }
    },
    animate_vertically_after_sibling: {
        position: "absolute",
        top:"5vh",
        transition: {
            delay: DURATION,
            duration: DURATION
        }
    },
    initial_left: {
        position: "fixed",
        left:"-100vw"
    },
    initial_right: {
        position: "fixed",
        left:"100vw"
    },
    animate_horizontally: {
        position:"relative",
        left: "0vw",
        transition: {
            duration: DURATION
        }
    },
}

export default variants;