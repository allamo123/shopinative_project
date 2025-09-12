import React, { memo, useEffect, useState } from 'react';
import { Chip, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';

const AutocompleteFreeMultipleSelect = memo(({ label, options, setter, target, currentValue }) => {

  const { t } = useTranslation();
  
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event, newValue) => {
    const values = [];

    newValue.forEach((item) => {
      if (typeof item === 'object' && item !== null && 'id' in item) {
        values.push(Number(item.id));
      } else if (typeof item === 'string') {
        // Allow custom input if not already in options
        const alreadyExists = options.some(opt => opt.name === item || opt.title === item);
        if (!alreadyExists) {
          values.push(item);
        }
      }
    });

    setSelectedValues(values);
  };

  useEffect(() => {
    setter(target, selectedValues);
  }, [selectedValues]);

  // Prepare the correct value for Autocomplete (handle both numbers and strings)
  const selectedOptions = currentValue.map((val) => {
    if (typeof val === 'number') {
      return options.find(opt => opt.id === val) || val;
    }
    return val;
  }).filter(Boolean); // Remove undefined if any

  return (
    <Autocomplete
      multiple
      freeSolo
      options={options}
      value={selectedOptions}
      getOptionLabel={(option) => {
        if (typeof option === 'string') return option;
        return option?.name ?? '';
      }}
      onChange={handleChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            dir="ltr"
            key={index}
            color="primary"
            label={typeof option === 'string' ? option : option?.name ?? ''}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={t("labels.select_or_type_new_one_and_press_enter")}
        />
      )}
    />
  );
});

export default AutocompleteFreeMultipleSelect;
