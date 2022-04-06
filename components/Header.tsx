import { motion, AnimatePresence } from "framer-motion"


const Header: React.FC = () => {

    const line1 = "Welcome on this amazing e-commerce website"

    const sentence = {
        hidden: { opacity: 0},
        show: { opacity: 1, transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }}
    }
    const letter = {
        hidden: { opacity: 0, y:50},
        show: {opacity:1, y:0}
    }

    const container = {
        hidden: { scale: 1},
        show: {
            scale: 0.9,
            transition: {
                duration: 1,
                delay: 0.2,
                ease: 'easeInOut',
                
            },  
        }
    }

    const blackOverlay = {
        hidden: { 
            backgroundColor: "#000", zIndex: 9999, opacity: 1, scale: 1.3},
        show: {
            opacity: 0,
                transition: {
                    duration: 2,
                    delay: 0.2,
                    ease: 'easeInOut',
                    
                },  
        },
    }

    const img = {
        hidden: {
            scale: 1.3},
        show: {
            scale: 1,
                 transition: {
                   duration: 1.4,
                   delay: 0.4,
                   ease: 'easeInOut',
                   
        }
    }
}

    return (
        <>


        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="header__container">
        <motion.div className="header__wrapper-transition"
                        variants={blackOverlay}
                        initial="hidden"
                        animate="show">
                </motion.div>
                <motion.div
                    variants={img}
                    initial="hidden"
                    animate="show"
                    className="header__img" >
                </motion.div>
                <motion.h1
            className="header__text centered"
                variants={sentence}
                initial="hidden"
                animate="show">
                    {line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                        )
                    })}
            </motion.h1>
            </motion.div>
        </>
    )
}

export default Header