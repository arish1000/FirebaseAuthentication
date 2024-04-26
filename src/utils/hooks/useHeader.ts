import React from 'react'
import { setHeader } from '../../redux/reducers/headerReducer'
import { useDispatch } from 'react-redux'

const useHeader = () => {
    const dispatch = useDispatch();
    const setTitle = (val: string) => {
        dispatch(setHeader(val));
    }
  return {setTitle}
}

export default useHeader;