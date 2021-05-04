
import {HomeContainer } from './container/homecontainer';
import { LoginContainer } from './container/logincontainer';
import { useState } from 'react';
import { useDispatch, useSelector }  from 'react-redux';
import { createNote, updateNotes } from './actions/noteAction';
export const Constants = {
  LOGIN_SCREEN: "LOGIN",
  HOME_SCREEN: "HOME"
}

function App() {
  const dispatch = useDispatch();
  const noteReducer = useSelector((state) => state.noteReducer);
  const [ renderComponent, setRenderComponent] = useState(Constants.LOGIN_SCREEN);
  const handleLogin = () => {
    setRenderComponent(Constants.HOME_SCREEN);
  }
  const handleNote = (note) => {
    if(note.isNew) {
     dispatch(createNote({title: note.title, body: note.body}));
    } else {
      let results = [];
      noteReducer.forEach((item, index)=> {
        if(index === note.index) {
          results.push({title: note.title, body: note.body})
        } else {
          results.push(item);
        }
      })
      dispatch(updateNotes(results));
    }
  }

  const handleFilter =(indexValue) => {
  const notesValue =  noteReducer.filter((item, index) => index !== indexValue);
    dispatch(updateNotes(notesValue));

  }
  let renderPage = null;
  switch(renderComponent) {
    case Constants.LOGIN_SCREEN:
      renderPage =  <LoginContainer handleLogin={handleLogin}/>;
      break;
    case Constants.HOME_SCREEN:
     renderPage = <HomeContainer notes={noteReducer} handleNote={(note)=> handleNote(note)} handleFilter={(index) => handleFilter(index)} />;
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
