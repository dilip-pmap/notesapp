export const createNote = (data) => dispatch => {
    dispatch({
     type: 'CREATE',
     data: data
    })
   }

export const updateNotes = (data) => dispatch => {
    dispatch({
        type: 'UPDATE',
        data: data.length ? data : []
    })
}