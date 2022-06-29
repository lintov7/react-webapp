import { createContext, useContext, useReducer, useRef } from "react";
import { Card, CloseButton, Form, ListGroup } from "react-bootstrap";

const NoteContext = createContext();

const reducer = (state, action) => {
    console.log("reducer called");
    switch (action.type) {
        case "CREATE":
            var notes = state.concat([{
                id: (new Date()).getTime(),
                note: action.note,
            }])
            return notes;
        case "DELETE":
            return state.filter((note) => note.id !== action.id);
        default:
            return state;
    }
};

function NoteList() {
    const [noteList, dispatch] = useReducer(reducer, []);
    const inputRef = useRef();
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(inputRef.current.value)
            dispatch({ type: "CREATE", note: inputRef.current.value });
            inputRef.current.value = "";
        }
    }
    return (
        <>
            <h4 className="mt-3">Notes</h4>
            <span>
                Write note and press enter key to add the note
            </span>
            <Card className="mx-auto mt-3" style={{ width: '18rem' }}>
                <Card.Body>
                    <NoteContext.Provider value={dispatch}>
                        <div>
                            <Form.Control type="text" ref={inputRef} placeholder="Enter Note" onKeyDown={handleKeyDown} />
                            <ListGroup className="mt-3">
                                {noteList.map(note => {
                                    return (
                                        <Note key={note.id} note={note} />
                                    )
                                })}
                            </ListGroup>
                        </div>
                    </NoteContext.Provider>
                </Card.Body>
            </Card>
        </>

    )
}


const Note = ({ note }) => {
    const dispatch = useContext(NoteContext);
    const handleDelete = () => {
        dispatch({ type: "DELETE", id: note.id });
    };
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <span>{note.note}</span>  <CloseButton onClick={handleDelete} />
        </ListGroup.Item>
    )
}

export default NoteList;