const variants = {
    initial_bottom: {
        position: "fixed",
        top: "100vh",
    },
    animate_vertically: {
        position: "relative",
        top:"0vh",
        transition: {
            duration: 0.5
        }
    },
    initial_top: {
        position: "fixed",
        top: "-100vh",
    },
    initial_left: {
        position: "fixed",
        left:"-100vw"
    },
    animate_horizontally: {
        position:"relative",
        left: "0vw",
        transition: {
            duration: 0.5
        }
    },
    initial_right: {
        position: "fixed",
        left:"100vw"
    }
}

export default variants;