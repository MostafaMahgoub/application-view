
import { FloatButton } from 'antd'
import { ReactNode } from 'react';

interface SquareButtonProps {
    icon: ReactNode;
  }
  
function SquareButton({icon}: SquareButtonProps) {
    return(
<FloatButton
        shape="square"
        className="static"
        icon={icon}
      />)
}


export default SquareButton;