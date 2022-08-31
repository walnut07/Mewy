import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormFileExample() {
  const [currentLocation , setCurrentLocation] = useState<string[]|null>();

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const success = (pos: any) => {
    const crd = pos.coords;
    setCurrentLocation([crd.latitude, crd.longitude]);
    console.log(currentLocation)
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  return (
    <>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" onClick={getCurrentLocation}>
          Current Location
        </Button>
        {currentLocation && 
          <Form.Control
          aria-label="The current location's latitude and longtitude"
          disabled
          value={`${currentLocation[0]}, ${currentLocation[1]}`}
        />}
      </InputGroup>
    </>
  );
}

export default FormFileExample;