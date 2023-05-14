import React, { useState } from 'react';



const useFlip = (initialState = true) => {


  const [state, setState] = useState(initialState);
  const flipState = () => {
    setState(state => !state)
  }
  return [state, flipState]
}
export default useFlip;