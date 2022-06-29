import NoteList from "../components/NoteList"
import WeatherDetails from "../components/WeatherDetails";
import { Card, Container, Form } from "react-bootstrap";
import { useState, useRef } from "react";
import "../css/Tools.css"

const Tools = () => {
  const inputRef = useRef();
  const [city, setCity] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setCity(inputRef.current.value)
    }
  }
  return (
    <div className="tools">
      <Container>
        <h1 className="mt-3">Tools</h1>
        <span>
          This is the tools page. I have created notes and weather tool
        </span>
        <NoteList />

        <h4 className="mt-3">Temperature</h4>
        <span>
          Type a city in the input area and then press 'Enter' key to fetch the temperature details.
        </span>
        <Card className="mx-auto mt-3" style={{ width: '18rem' }}>
          <Card.Body>
            <Form.Control type="text" ref={inputRef} placeholder="Enter City" onKeyDown={handleKeyDown} />
            <WeatherDetails city={city} />
          </Card.Body>
        </Card>

      </Container>
    </div>
  )
};

export default Tools;