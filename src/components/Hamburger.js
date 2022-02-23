import React, { useState } from 'react'
import 'antd/lib/drawer/style/index.css';
import hamburgermenu from '../assets/hamburgermenu.svg';
import { Button, Drawer } from 'antd'


const Hamburger = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                type="primary"
                onClick={showDrawer}
                icon={<img src={hamburgermenu} style={{ width: "30px" }} />}
                style={{ backgroundColor: "transparent", border: "none" }} >
            </Button>
            <Drawer title="menu" placement="right" onClose={onClose} visible={visible}>
                <p>shop</p>
                <p>what is bigbox?</p>
                <p>bigbox app</p>
                <p>for business</p>
                <p>help</p>
            </Drawer>
        </>
    );
};

export default Hamburger