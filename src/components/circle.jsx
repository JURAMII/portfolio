import './compoStyle.css';
import { motion } from "framer-motion";


const Circle = () => {


    return(
      <div className='circle_wrap flex'>
      <motion.div
      className="circle"
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{opacity: 1, scale: 4.5 }}
      transition={{
      duration: 1,
      delay: 2.5,
      ease:"easeInOut"
      }}
    />
    </div>
        
    )
}

export default Circle