import { createContext } from 'react';
import axios from 'axios';

const HttpContext = createContext(axios.create());

export default HttpContext;
