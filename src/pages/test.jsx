import './style.css';
import { motion } from "framer-motion";


const Test = () => {


    return(
      <div className='boxWrap flex'>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{opacity: 1, scale: 3.5 }}
      // animate={{ opacity: 1, scale: 1.5 }}
      transition={{
      duration: 2,
      delay: 1.5,
      ease:"easeInOut"
      }}
    />
    </div>
        
    )
}

export default Test