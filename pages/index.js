import React, { useEffect, useState } from 'react';
import Sheet from '../Components/Sheet';
import Password from '../Components/Password';
import { names } from '../data';

export default function Home() {
  const [passMatch, setPassMatch] = useState(true);
  const [value, setValue] = useState('');

  useEffect(() => {
    if(value === 'vagachaiz') {
      setPassMatch(true)
    }
  }, [value])

  return (
    <>
      { passMatch ? <Sheet names={names} /> : <Password value={value} setValue={setValue} /> }
    </>
  )
}

