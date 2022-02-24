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
                <a href=""><p>shop</p></a>
                <a href=""><p>what is bigbox?</p></a>
                <a href=""><p>bigbox app</p></a>
                <a href=""><p>for business</p></a>
                <a href=""><p>help</p></a>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <a href="https://apps.apple.com/us/app/bigbox-videoshopping/id1542908804">
                        <img src={appstore} style={{ height: "40px" }} />
                    </a>
                    <a href="">
                        <img src={gplay} style={{ height: "40px" }} />
                    </a>
                </div>
            </Drawer>
        </>
    );
};

export default Hamburger