import React from 'react';
//import { motion } from 'framer-motion';
import {motion} from "framer-motion/dist/framer-motion"

const Form = () => {
  return (
    <motion.form
      initial={{ x: '-100%' }}
      animate={{ x: '50%' }}
      style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
    >
      {/* Your form fields go here */}
    </motion.form>
  );
};

export default Form;


