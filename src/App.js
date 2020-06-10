import React from "react";
import Main from "./Comps/Main";
import {shuffle} from 'lodash'

import Data from './Data.json'
let contents = shuffle(Data)
const App = () => (
  <>
  <p className="title">50/50</p>
  <p className="subtitle">Dare to click!</p>
  <p className="subtitle">Guess the image and click on it</p>
  <div>
    <Main contents={contents} />
  </div>
  <p className="subtitle2">inspired by &nbsp;<a href="https://www.reddit.com/r/FiftyFifty/" rel="noopener noreferrer"  target="_blank">r/FiftyFifty</a></p>
  <p className="subtitle2">Made with <span role="img" aria-label="heart">❤️</span> by <a href="https://github.com/shashankbhat2" rel="noopener noreferrer"  target="_blank">Shashank Bhat </a></p>
  </>
);

export default App;
