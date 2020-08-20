import React from 'react';

const Head = (props) => {

  React.useEffect(() => {
    document.title = `Navers | ${props.title}`  
  },[props])

  return (
    <></>
  )
}

export default Head;