import React from 'react'
import Button from './Button'

const list = [ 'All', 'Live']

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Live"/>
      <Button name="News"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Sports"/>
    </div>
  )
}

export default ButtonList
