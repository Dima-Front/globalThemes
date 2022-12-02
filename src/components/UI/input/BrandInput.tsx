import React, {FC} from 'react';
import {TextField} from "@mui/material";


interface propsInput {
color: any
}

const BrandInput:FC<propsInput> = ({color}) => {
    return (
        <>
            <TextField color={color}  size="small" id="outlined-basic"  />
        </>
    );
};

export default BrandInput;