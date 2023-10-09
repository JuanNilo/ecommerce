'use client'
import { Styles, Colors } from "@/app/styles/style";
import React, { useState, useEffect } from "react";

const { styleLabel, styleRectangle } = Styles;
function homePage() {
    return (
        <div style={styles.container}>
            <div style={styles.rectangle}></div>
        </div>
    );
}
export default homePage;
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        //alignItems: 'center',
        height: '100vh',
    },
    rectangle: {
        width: '200px',
        height: '100px',
        borderRadius: '10px',
        backgroundColor: 'red',
    },
};