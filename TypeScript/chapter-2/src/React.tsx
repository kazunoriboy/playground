import React from "react";

type Props = {
  isDisabled?: boolean
  size: 'Big' | 'Small'
  text: string
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

export function FancyButton(props: Props) {
  const [toggled, setToggled] = React.useState(false)
  return <button 
    className={'Size-' + props.size}
    disabled={props.isDisabled || false}
    onClick={event => {
      setToggled(!toggled)
      props.onClick(event)
    }}
  >{props.text}</button>
}

let button = <FancyButton
  size='Big'
  text='Sign Up Now'
  onClick={() => console.log('Clicked!')}
/>
