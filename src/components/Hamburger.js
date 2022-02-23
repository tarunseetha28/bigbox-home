import React, { useState } from 'react'
import 'antd/lib/drawer/style/index.css';
import hamburgermenu from '../assets/hamburgermenu.svg';
import { Button, Drawer } from 'antd'
import './Hamburger.css';
import appstore from '../assets/astore.png';
import gplay from '../assets/gplay.png';

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
                className='hamBtn'
                type="primary"
                onClick={showDrawer}
                icon={<img src={hamburgermenu} style={{ width: "30px" }} />}
            >
            </Button>
            <Drawer title="menu" placement="right" onClose={onClose} visible={visible}>
                <p>shop</p>
                <p>what is bigbox?</p>
                <p>bigbox app</p>
                <p>for business</p>
                <p>help</p>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <a href="https://apps.apple.com/us/app/bigbox-videoshopping/id1542908804">
                        <img src={appstore} style={{ height: "40px" }} />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.bigbox.bigbox">
                        <img src={gplay} style={{ height: "40px" }} />
                    </a>
                </div>
            </Drawer>
        </>
    );
};

export default Hamburger