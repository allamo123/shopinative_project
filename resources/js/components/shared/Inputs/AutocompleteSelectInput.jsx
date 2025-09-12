import { InputLabel, MenuItem, Select, TextField, makeStyles } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectedDirection } from "@/store/slices/langSlice";
import { useTranslation } from "react-i18next";
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';


const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selectEmptyRtl: {
      marginTop: theme.spacing(2),
        '& .MuiSelect-icon': {
            right: 'unset',
            left: 0
        }
    },
    label: {
        left: 'unset',
        right: 0,
    }
}));

const AutocompleteSelectInput = ({ label, currentValue, setter, target, options }) => {

    const classes = useStyles();

    const direction = useSelector(selectedDirection);

    const { t } = useTranslation();

    const [inputText, setInputText] = useState("");
    const [inputVal, setInputVal]   = useState({});

    const handleChange = (newVal) => {
        setInputVal(newVal);
        setter(target, newVal.value)
    };

    useEffect(() => {
        if (options.length) {
            const current = options.filter((item) => item.value === currentValue);
    
            if (current.length) {
                setInputVal(current[0])
            }
        }
    }, [currentValue, options])

    return (
        <Autocomplete
            dir={direction}
            value={inputVal}
            onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                    setInputText(newValue); // If input is a string, update input text
                } else if (newValue && newValue.title) {
                    handleChange(newValue); // Pass the entire object if it's valid
                    setInputText(newValue.title); // Show the title in the input
                } else {
                    setInputText(''); // Clear input if there's no valid selection
                }
            }}
            inputValue={inputText}
            onInputChange={(event, newInputValue) => {
                setInputText(newInputValue); // Update input field when the user types
            }}
            id="controllable-states-demo"
            options={options}
            getOptionLabel={(option) => {
                return typeof option === "string" ? option : option.title ?? ""; // Get title or fallback to string
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={t('labels.'+label)}
                    variant="outlined"
                    fullWidth
                    style={{paddingRight: 0}}
                    InputProps={{
                        ...params.InputProps,
                        className: direction === 'rtl' ? classes.rtlInput : classes.ltrInput,
                    }}
                />
            )}
            renderOption={(option, { inputValue }) => {
                const title = typeof option === 'string' ? option : option.title;
                const matches = match(title, inputValue);
                const parts = parse(title, matches);
                
                return (
                    <React.Fragment>
                        {parts.map((part, index) => (
                            <span key={index} style={{ fontWeight: part.highlight ? 'bold' : 'normal' }}>
                                {part.text}
                            </span>
                        ))}
                    </React.Fragment>
                );
            }}
        />
    );
}

export default AutocompleteSelectInput;