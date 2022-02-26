import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import WebFont from 'webfontloader';
import axios from "axios";
import appstore from './assets/astore.png';
import placeholderStore from './assets/placeholder-store.png';
import gplay from './assets/gplay.png';
import closeicon from './assets/closeicon.svg';
import videostore from './assets/videostore.svg'
import bigboxlogo from './assets/bigboxlogo.svg';
import createstore from './assets/createstore.svg';
import hovercreatestore from './assets/hovercreatestore.svg';
import gettheapp from './assets/gettheapp.svg';
import nostore from './assets/nostore.svg';
import hovergettheapp from './assets/hovergettheapp.svg';
import social1 from './assets/social1.svg';
import social2 from './assets/social2.svg';
import social3 from './assets/social3.svg';
import social4 from './assets/social4.svg';
import social5 from './assets/social5.svg';
import hamburgermenu from './assets/hamburgermenu.svg';
import dastore from './assets/dastore.svg';
import dgplay from './assets/dgplay.svg';
import fstore from './assets/fstore.svg';
import textlogo from './assets/textlogo.png';
import { Button, List, Drawer, Menu, SubMenu } from 'antd';
import Hamburger from "./components/Hamburger";

WebFont.load({
  google: {
    families: ['Product Sans', 'sans-serif']
  }
});

const App = () => {
  const [category, setCategory] = useState([]);
  const [store, setStore] = useState([]);
  let attribute;
  let catid = 10;
  var catname = 'grocery';
  const [selectedCatID, setSelectedCatID] = useState();
  function showCat(catid) { setSelectedCatID(catid); }

  const [selectedCatName, setSelectedCatName] = useState();
  function showCatName(catname) { setSelectedCatName(catname); }

  const fetchData = () => {

    const categoryApi = "https://api.bigbox.online/api/v1/users/brand_categories?page=1&limit=10";
    const storeApi = `https://api.bigbox.online/api/v1/users/brand_category_stores?brand_category_id=${selectedCatID || catid}&page=1&limit=10`;

    const getCategory = axios.get(categoryApi);
    const getStore = axios.get(storeApi);
    axios.all([getCategory, getStore]).then(
      axios.spread((...allData) => {
        const allCategory = allData[0].data.brand_categories;
        const allStore = allData[1].data.stores;
        // console.log(allCategory);
        // console.log(allStore);
        setCategory(allCategory);
        setStore(allStore);
      })
    )
  }


  useEffect(() => {
    fetchData()
  }, [selectedCatID])

  function removeDiv1() {
    document.getElementById("ad1")
      .outerHTML = "";
  }

  function removeDiv2() {
    document.getElementById("ad2")
      .outerHTML = "";

  }
  const [createStore, setcreateStore] = useState(createstore)
  const [getTheApp, setgetTheApp] = useState(gettheapp)



  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };








  return (
    <div className="App">


      <div className="header">
        <div className="header-left">
          <div>
            <a href="https://bigbox.online/"><img src={bigboxlogo} alt="" /></a>
          </div>
          <div className="header-left-menu">
            <ul>shop</ul>
            <ul>what is bigbox?</ul>
            <ul>bigbox app</ul>
            <ul>for business</ul>
            <ul>help</ul>
          </div>
        </div>
        <div className="header-right">
          <a href="http://onelink.to/pbfgv8"><img src={getTheApp} alt="" className="header-btn" onMouseOver={() => setgetTheApp(hovergettheapp)} onMouseOut={() => setgetTheApp(gettheapp)} /></a>
          <a href="https://ctl0pmnn3o6.typeform.com/to/DLdFmW5K"><img src={createStore} alt="" className="header-btn" onMouseOver={() => setcreateStore(hovercreatestore)} onMouseOut={() => setcreateStore(createstore)} /></a>
        </div>
        <div className="hamburger-menu" >
          <a href="http://onelink.to/pbfgv8">
            <img
              style={{ height: "35px" }}
              src={getTheApp}
              className="header-btn"
              onMouseOver={() => setgetTheApp(hovergettheapp)}
              onMouseOut={() => setgetTheApp(gettheapp)} />
          </a>
          <Hamburger />
        </div>
      </div>


      <div className="body-margins">
        <div >
          <h1 className="head1" >video call your favourite brands.</h1>
          <h5 className="head2"  >discover, follow and shop from your favourite stores. anytime. anywhere.</h5>
        </div>

        <div id="ad1" className="promo">
          <div className="promo-app">
            <p >get the shopping experience you deserve with our new and improved bigbox app</p>
            <div className="promo-app-btn">
              <a href="https://apps.apple.com/us/app/bigbox-videoshopping/id1542908804"><img src={appstore} alt="" className="promo-img" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.bigbox.bigbox"><img src={gplay} alt="" className="promo-img" /></a>
            </div>
          </div>
          <button className="button" onClick={removeDiv1}>
            <img src={closeicon} alt="" style={{ cursor: "pointer" }} />
          </button>

        </div>

        <div id="ad2" className="promo">
          <div className="promo-createstore">
            <p >selling online? setup your video store with bigbox and sell easily through video calls</p>
            <a href="https://ctl0pmnn3o6.typeform.com/to/DLdFmW5K?typeform-source=localhost"><img src={videostore} alt="" className="promo-img" /></a>
          </div>
          <button className="button" onClick={removeDiv2}>
            <img src={closeicon} alt="" style={{ cursor: "pointer" }} />
          </button>
        </div>
      </div>
      <div className="mobile-cat">
        <div className="mobile-cat-item">
          <p style={{ fontWeight: 600, marginTop: "30px", marginBottom: "0px", fontSize: "20px", color: "rgb(14, 14, 15)", marginLeft: "3%" }}>categories</p>
          <Button
            onClick={showDrawer}
            className="seeall-btn"
            style={{ marginRight: "3%" }}
          >
            see all
          </Button>
          <Drawer className="seeall-cat-mob" title="all categories" placement="right" onClose={onClose} visible={visible}>
            {
              category.map((item) => (
                <div className="" onClick={onClose}>
                  <menu
                    onClick={() => { showCat(item.id); showCatName(item.name); }}
                    className="mobile-cat-menu-all"
                  >

                    {item.name}

                  </menu>
                </div>
              ))}
          </Drawer>
        </div>
        <div className="scrollmenu" style={{ display: "flex" }}>
          {
            category.map((item) => (
              <div className="menu__wrapper">
                <menu

                  onClick={() => { showCat(item.id); showCatName(item.name); }}
                  className="mobile-cat-menu"
                // style={{ float: "right", cursor: "pointer", paddingLeft: "0px", margin: "0px" }}
                >

                  {item.name}

                </menu>
              </div>
            ))}
        </div>
      </div>

      <div className="body-margins">
        <div className="body">
          <div className="sidebar">
            <p style={{ fontSize: "20px", fontWeight: 600, marginTop: "0" }}>categories</p>
            {
              category.map((item) => (
                // <option onClick={() => showCat(item.id)} style={{ cursor: "pointer" }}>
                //   {item.name}
                // </option>
                <List onClick={() => { showCat(item.id); showCatName(item.name); }}
                  className="cat-list"
                >

                  <div className={item.id == selectedCatID ? "highlight" : "not__highlight"}>
                    {item.name}
                  </div>
                </List>
              ))
            }
          </div>


          <div className="centerbody">
            <div style={{ width: "100%" }}>
              <p className="numberStores"><span style={{ fontSize: "20px" }}>{selectedCatName || 'grocery'}</span> <span>|</span> <span className="lengthStores">{store.length}</span>  {store.length > 1 ? <span className="lengthStores">stores</span> : <span className="lengthStores">store</span>}</p>
            </div>

            {store.length === 0 ?
              <div className="home-body1">
                <div className="home-body-nostore-body">
                  {/* <div style={{ flex: "0.2" }}>left</div> */}
                  <div className="home-body-nostore">
                    <img src={nostore} alt="" />
                    <p>uh oh! unfortunately, no stores found in this category. <br />good news! we're in talks with a lot of brands <br /> keep checking this frequently for more stores. </p>
                  </div>
                  {/* <div style={{ flex: "0.2" }}>right</div> */}
                </div>
              </div> :
              <div className="home-body">

                {
                  store.map((item) => {

                    return (
                      <div key={item.id} className="home-store" >

                        <a style={{ textDecoration: 'none' }} href={`https://in.bigbox.online/${item.slug}`} target="_blank" >
                          <img src={item.brand_logo_url} alt="" className="brand-logo" />
                          <img className="home-storeImg" src={item.cover_pic_mobile_url || placeholderStore} alt="" />
                          <div className="home-store-body">
                            <h1>{item.brand.name}</h1>
                            <span>{item.name}, {item.city}</span>
                          </div>
                        </a>
                      </div>



                    )

                  })

                }
              </div>
            }
          </div>
        </div>

      </div>

      <div className="footer">
        <div className="footer-left">
          <div className="footer-right-btn-mobile">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={fstore} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "row", columnGap: "10px" }}>
              <img src={dastore} alt="" />
              <img src={dgplay} alt="" />

            </div>
          </div>
          <div className="footer-left-follow">
            <img src={social1} alt="" />
            <img src={social5} alt="" />
            <img src={social4} alt="" />
            <img src={social3} alt="" />
            <img src={social2} alt="" />
          </div>
          <p>blog</p>
          <p>about</p>
          <p>careers</p>
          <p>insights</p>
          <p>how it works</p>
          <p>bigbox api</p>
          <p>user privacy policy</p>
          <p>return & refund policy</p>
          <p>terms and conditions</p>

          {/* <h1 style={{ marginTop: "50px", marginBottom: "0px", fontSize: "45px", fontWeight: 500 }}>bigbox</h1>
          <span>copyrights © 2021</span> */}

        </div>
        <div className="footer-right">
          <span className="footer-right-span1">bigbox is a videoshopping platform that enables shoppers to discover, follow <br /> and enjoy personalised shopping experience with stores through video calls
          </span>
          <span className="footer-right-span2">imagine a technology that enables users to shop virtually from<br /> any store in the world through a videocall, experiencing the <br />product live and without compromising the shopping <br /> experience!
            <br /><br />thats what bigbox is all about…<br /><br />we love hearing from our shoppers,<br />say hi to us at <a href="mailto:hello@bigbox.online"><span style={{ color: "#C9052C" }}> hello@bigbox.online</span></a></span>
        </div>
        <div className="footer-right-mobile">
          <span className="footer-right-span1-mobile">bigbox is a videoshopping platform that enables shoppers to discover, follow and enjoy personalised shopping experience with stores through video calls
            imagine a technology that enables users to shop virtually from any store in the world through a videocall, experiencing the product live and without compromising the shopping experience!
            <br /><br />thats what bigbox is all about… <br /><br />we love hearing from our shoppers, say hi to us at <a href="mailto:hello@bigbox.online"><span style={{ color: "#C9052C" }}> hello@bigbox.online</span></a></span>
        </div>
        <div className="footer-right-btn">
          <img src={dastore} alt="" />
          <img src={dgplay} alt="" />
          <img src={fstore} alt="" />
        </div>
      </div>
      <div className="footer-cpr">
        <img src={textlogo} style={{ width: "85px" }} />
        {/* <h1 style={{ marginTop: "0px", marginBottom: "0px", fontSize: "45px", fontWeight: 500, color: "white" }}>bigbox</h1> */}
        <span style={{ fontSize: "14px", color: "#7E7E7E" }}>copyrights © 2021</span>
      </div>
    </div >

  );
}

export default App;