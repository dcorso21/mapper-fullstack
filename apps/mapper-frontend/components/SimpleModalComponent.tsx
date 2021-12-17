import React from "react";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";

import { Backdrop, Fade, Modal } from '@mui/material';


interface Props {
    children?: JSX.Element| JSX.Element[] | null;
    open: boolean;
    setOpen: Function;
}


const SimpleModalComponent: React.FC<Props> = ({ open, setOpen, children }) => {

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
              <div style={{width:"100%", height: "100%"}}>
            {children}
              </div>
            </Fade>
        </Modal>
    );
};

export default SimpleModalComponent;
