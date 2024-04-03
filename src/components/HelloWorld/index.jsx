import React from 'react'

const HelloWorld = () => {
  const [show, setShow] = React.useState(true)
  console.log("🚀 ~ HelloWorld ~ show:", show)
  return <div>hello world</div>
}

export default HelloWorld
