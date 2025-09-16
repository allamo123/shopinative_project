import React, { useState } from "react";
import i18next from "i18next";
import { Box, Button, makeStyles } from "@material-ui/core";


const Style = makeStyles((theme) => ({
    langname: {
        display: 'flex',
        columnGap: 5,
        alignItems:'center',
        [theme.breakpoints.down('md')]: {
           display: 'none',
        },
    },
}));
const LanguageSwitch = () => {

    const classes = Style();

    const [selectedLanguage, setSelectedLanguage] = useState({code: 'ar', name: 'عربي'});

    const handleChangeClick = () => {
        setSelectedLanguage(
            selectedLanguage.code === 'ar' ?
                {code: 'en', name: 'english'}
                :
                {code: 'ar', name: 'عربي'}
        );

        i18next.changeLanguage(selectedLanguage.code);
        localStorage.setItem('lang', selectedLanguage.code);
        window.dispatchEvent(new Event('language'));
    }

    return (
        <Button
         dir="ltr"
         size="small"
         variant="text"
         onClick={() => handleChangeClick()}
        >
            <Box className={classes.langname}>
                <img
                    src={i18next.language === 'ar' ?
                        "/images/icons/countries/british.png"
                        : "/images/icons/countries/egypt.png"}
                    width={25}
                />
                {i18next.language === 'ar' ? 'English' : 'Arabic'}
            </Box>
        </Button>
    );
}

export default LanguageSwitch;
