
import {HomeContainer } from './container/homecontainer';
import { LoginContainer } from './container/logincontainer';
import { useState } from 'react';

export const Constants = {
  LOGIN_SCREEN: "LOGIN",
  HOME_SCREEN: "HOME"
}

function App() {
  const [ renderComponent, setRenderComponent] = useState(Constants.LOGIN_SCREEN);
  const [ notes, setNotes] = useState([]);
  const handleLogin = () => {
    setRenderComponent(Constants.HOME_SCREEN);
  }

  const handleNote = (note) => {
    if(note.isNew) {
      setNotes([...notes, {title: note.title, body: note.body}])
    } else {
      let results = [];
      notes.forEach((item, index)=> {
        if(index === note.index) {
          results.push({title: note.title, body: note.body})
        } else {
          results.push(item);
        }
      })
      setNotes(results);
    }
  }

  const handleFilter =(indexValue) => {
  const notesValue =  notes.filter((item, index) => index !== indexValue);
    console.log('filter', notesValue);
    setNotes(notesValue);
  }

  let renderPage = null;
  console.log("App", notes);
  switch(renderComponent) {
    case Constants.LOGIN_SCREEN:
      renderPage =  <LoginContainer handleLogin={handleLogin}/>;
      break;
    case Constants.HOME_SCREEN:
     renderPage = <HomeContainer notes={notes} handleNote={(note)=> handleNote(note)} handleFilter={(index) => handleFilter(index)} />;
     break;
    default:
      break;
  }
  return (
    <div>
      {renderPage}
    </div>
  );
}

export default App;
