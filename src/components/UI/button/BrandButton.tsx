import React, {FC} from 'react';
import {Button, makeStyles} from "@mui/material";





interface propsButton {
    children: React.ReactNode,
    color?: any,
}

const BrandButton:FC<propsButton> = ({color, children}) => {
    return (
        <Button  variant="contained" color={color}>
          <b>{children}</b>
        </Button>
    );
};

export default BrandButton;