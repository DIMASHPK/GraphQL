import React from 'react';
import {useStyles} from "./styles";

export const Preloader = () => {
    const classes = useStyles();
    return (
        <div className={classes.rootWrap}>
            <div className={classes.root}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}