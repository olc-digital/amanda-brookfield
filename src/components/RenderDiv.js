import React from 'react'

const RenderDiv = props => <div>{props.render({...props})}</div>

export default RenderDiv
