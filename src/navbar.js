

import React from 'react';
const Navbar = (props) => {

 return (
        <div style={styles.nav}>
            <div style={styles.carticoncontainer}>
                <img style={styles.carticon} src="https://t4.ftcdn.net/jpg/01/08/25/01/240_F_108250155_sKVpCG1nUBx3Dc7P2LV5cBCYcvDn1psk.jpg" alt="nav-icon" />
                <span style={styles.cartcount}>{props.count}</span>
            </div>

        </div>

    );
}



const styles = {
    carticon: {
        height: 50,
        marginRight: 20,
        margintop: 10
    },
    nav: {
        height: 70,
        background: 'grey',
        display: 'flex',
        justifyContent: 'flex-end',
        alingItem: 'center'
    },
    carticoncontainer: {
        position: 'fixed'

    },
    cartcount: {
        background: 'yellow',
        borderRadius: "50%",
        padding: "4px 8px",
        top: -9,
        right: 0,
        position: 'absolute'
    }

}


export default Navbar;