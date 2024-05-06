import { LonginInputContainer, IconContainer, LonginInputText } from "./styles"
import { Controller } from "react-hook-form"

const Input = ({leftIcon, name, control, ...rest}) => {
  return (
    <div>
      <LonginInputContainer>
        {leftIcon ? <IconContainer>leftIcon</IconContainer> : null}
        <Controller
        name={name}
        control={control}
        rules={{required: true}}
        render={({field}) => <LonginInputText {...field}{...rest}/>
 }/>
      </LonginInputContainer>

    </div>
  )
}

export {Input}
