import React, { memo, useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const FlashMsg = memo(({ flashMsg }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('demo');
    const [type, setType] = useState('');

    useEffect(() => {
        if (flashMsg.success) {
            setType('success');
            setMessage(flashMsg.success);
            setOpen(true);
        } else if (flashMsg.error) {
            setType('error');
            setMessage(flashMsg.error);
            setOpen(true);
        }
    }, [flashMsg]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={type}>
                {message}
            </Alert>
        </Snackbar>
    );
});
