import './style.css';
import { motion } from "framer-motion";


const Test = () => {


    return(
      <div className='boxWrap flex'>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{opacity: 1, scale: 3.5 }}
      transition={{
      duration: 1,
      delay: 2.5,
      ease:"easeInOut"
      }}
    />
    </div>
        
    )
}

export default Test