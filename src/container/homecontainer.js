import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export const HomeContainer = ({handleFilter, handleNote, notes}) => {
    const [values, setValues] = useState({
        title: '', body: '',isNew: true, index: 0
    })
    const handleSave =() => {
        handleNote(values);
        setValues({title: '', body: '', isNew: true, index: 0})
    }

    const handleEdit = (item, index) => {
        setValues({
            title: item.title,
            body: item.body,
            isNew: false,
            index
        })
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleClose =(e, item, index) => {
        e.stopPropagation();
        handleFilter(index);
    }

    const renderNotes = () => {
        let results= [];
        notes.forEach((item, index)=> {
            results.push(<div key={`${item}-${index}`} style={{ borderBottom: '1px solid grey'}} onClick={() =>handleEdit(item, index)}>
             <div onClick={(e) => handleClose(e,item, index)} name={`${index}`} className="float-right" style={{ fontSize: 24, cursor: 'pointer'}}> &#x2715; </div>
             <h3>{item.title}</h3>
             <h5>{item.body}</h5>
             </div>) 
         });
         return results;
    }
    const handleAddNote = () => {
        setValues({
            title: '', body: '', isNew: true, index: 0
        })
    }
    return (
        <div style={{ height: window.innerHeight }}>
           <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: 80}}>
              <h3>G Notes</h3>  
            </nav>
            <div className="container-fluid">
            <div className="row" style={{ height: window.innerHeight - 100 }}>
                    <div className="col-4" style={{ borderRight: '1px solid grey'}}>
                     {renderNotes()}
                        </div>

                        <div className="col-8">
                            <br/>
                            <button type="button" class="btn btn-outline-dark float-right" onClick={handleAddNote}> + Add Note</button>
                            <br/>
                            <br/>
                            <strong>Title:</strong>
                            <br/>
                            <input type="text" className="form-control" name="title" value={values.title} onChange={handleChange} />
                            <br/>
                            <strong>Body:</strong>
                            <br/>
                            <textarea rows={10} className="form-control" name="body" value={values.body} onChange={handleChange}/>
                            <br/>
                            <button className="btn-primary float-right btn-lg" onClick={handleSave}>Save</button>
                        </div>
                        </div>
            </div>
        </div>
    )
}