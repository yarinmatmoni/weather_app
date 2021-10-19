
export const fade = {
    hidden: {
        opacity:0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 1.2,
            when:"beforeChildren",
            staggerChildren: 0.5,
        }
    },
};

export const pop = {
    hidden: {
        opacity:0,
        scale: 0.7,
    },
    show: {
        opacity: 1,
        scale: 1,
        
        transition: {
            duration: 1,
        },
    },
};