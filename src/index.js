import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './components/todolist.jsx';
import ProfileCard from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard 
    bio="Hello! I'm Anupa Gaire, a Computer Engineering graduate from Bhaktapur, Nepal.
    I am a beginner in web development and graphic design, combining technical skills with creativity to deliver engaging digital experiences.Passionate web designer and React learner"
    skills={['HTML', 'CSS', 'JavaScript', 'React','Wordpress', 'Figma','Photoshop',]} />
   <ToDoList/>
  </React.StrictMode>
);