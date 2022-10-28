import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Functional} from './functional'
import Toggle  from './Class';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <h1>Styling using Functional and Class component</h1>
   <div id='flex'>
   <Functional></Functional>
   <Toggle></Toggle>
   </div>
  </>
);


