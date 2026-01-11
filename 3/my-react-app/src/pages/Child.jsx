import React from 'react'

const Child = ({name}) => {
    console.log("rendering from child")
  return (
    <h3>helllo, {name}</h3>
  )
}

export default React.memo(Child)