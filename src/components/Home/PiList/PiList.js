import React, { useState } from 'react';
import Select from '../../commons/select/Select';
import RadioButtons from '../../commons/radio/RadioButtons';


export default function PiList() {

  const [select, setSelect] = useState('session2');
  const [radio, setRadio] = useState('pi2');

  const inputFactoryMethod = {
    select: setSelect,
    radio: setRadio
  };

  const radios = [
    { label: 'Session 1', value: 'session1' },
    { label: 'Session 2', value: 'session2' },
    { label: 'Session 3', value: 'session3' }
  ];

  const piList = [
    { name: 'Pi 1', value: 'pi1' },
    { name: 'Pi 2', value: 'pi2' },
    { name: 'Pi 3', value: 'pi3' }
  ];

  const handleChange = ({ target }) => {
    inputFactoryMethod[target.name](target.value);
  };

  return (
    <>
      <Select name="pis" piList={ piList } onChange={ handleChange } />
      <RadioButtons radioButtons={ radios } name="sessions" onChange={ handleChange } />
    </>
  );
}
