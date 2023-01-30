import "./App.css";

import React from 'react';
//import { motion } from 'framer-motion';
import {motion} from "framer-motion/dist/framer-motion"

function App() {
  return (
    <div className="App">
    <motion.form
      initial={{ x: '-100%' }}
      animate={{ x: '50%' }}
      style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
    >
      {/* Your form fields go here */
      <form>
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </form>
      }
    </motion.form>
    </div>
  );
};

export default App;





/*import Form from "./Form";

function App() {
  return (
    <div className="App">
      <form>
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </form>
      <Form/>
    </div>
  );
}

export default App;

/*

*/