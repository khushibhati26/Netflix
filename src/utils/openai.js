import OpenAI from 'openai';
import { OPEN_KEY } from './constant';

const openai1 = new OpenAI({
  apiKey: OPEN_KEY, 
  dangerouslyAllowBrowser:true,
});
export default openai1