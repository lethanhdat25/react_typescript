import {Autocomplete, TextField} from "@mui/material";
import {useEffect, useState} from "react";

const ComboBox = (props:any) => {
    const top100Films = ["ShuLee", "bai 02", "bai 03"];

    const [value,setValue]=useState<string|null>(top100Films[0]);
    useEffect(()=>{
        props.changeName(value);
    },[value])
    const [inputValue,setInputValue]=useState<string|undefined>("");
    return (
        <Autocomplete value={value}
                      onChange={(event, value)=>{ setValue(value)}}
                      inputValue={inputValue}
                      onInputChange={(event1, value1) => { setInputValue(value1)}}
                      id={"combo_box"}
                      sx={{width:300,py:3}}
                      renderInput={(params) => <TextField {...params} label={"Movie"}/>}
                      options={top100Films}/>
    )
};
export default ComboBox;