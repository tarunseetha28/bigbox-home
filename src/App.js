import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import appstore from './assets/astore.png'
import placeholderStore from './assets/placeholder-store.png'
import gplay from './assets/gplay.png'
import closeicon from './assets/closeicon.svg'
import videostore from './assets/videostore.svg'
import hovervideostore from './assets/hovervideostore.svg'
import bigboxlogo from './assets/bigboxlogo.svg'
import createstore from './assets/createstore.svg'
import hovercreatestore from './assets/hovercreatestore.svg'
import gettheapp from './assets/gettheapp.svg'
import hovergettheapp from './assets/hovergettheapp.svg'
import social1 from './assets/social1.svg'
import social2 from './assets/social2.svg'
import social3 from './assets/social3.svg'
import social4 from './assets/social4.svg'
import social5 from './assets/social5.svg'
import { Button, List } from 'antd';


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
  return (
    <div className="App">

      <div className="header">
        <div className="header-left">
          <img src={bigboxlogo} alt="" style={{ marginRight: "20px" }} />
          <p>shop</p>
          <p>what is bigbox?</p>
          <p>bigbox app</p>
          <p>for business</p>
          <p>help</p>
        </div>
        <div className="header-right">
          <img src={getTheApp} alt="" className="header-btn" onMouseOver={() => setgetTheApp(hovergettheapp)} onMouseOut={() => setgetTheApp(gettheapp)} />
          <img src={createStore} alt="" className="header-btn" onMouseOver={() => setcreateStore(hovercreatestore)} onMouseOut={() => setcreateStore(createstore)} />
        </div>
      </div>



      <div style={{ paddingLeft: "30px" }}>
        <h1 style={{ fontSize: "80px", marginBottom: "5px" }}>video call your favourite brands.</h1>
        <h5 style={{ fontSize: "28px", marginTop: "0", marginBottom: "15px", fontWeight: 400 }}>discover, follow and shop from your favourite stores. anytime. anywhere.</h5>
      </div>
      <div id="ad1" className="promo">
        <p>get the shopping experience you deserve with our new and improved bigbox app</p>
        <img src={appstore} alt="" className="promo-img" />
        <img src={gplay} alt="" className="promo-img" />
        <button className="button" onClick={removeDiv1}>
          <img src={closeicon} alt="" style={{ cursor: "pointer" }} />
        </button>
      </div>

      <div id="ad2" className="promo">
        <p>selling online? setup your video store with bigbox and sell easily through video calls</p>
        <img src={videostore} alt="" className="promo-img" />
        <button className="button" onClick={removeDiv2}>
          <img src={closeicon} alt="" style={{ cursor: "pointer" }} />
        </button>
      </div>


      <div className="body">
        <div className="sidebar">
          <p style={{ fontSize: "20px", fontWeight: 600, marginTop: "0" }}>categories</p>
          {
            category.map((item) => (
              // <option onClick={() => showCat(item.id)} style={{ cursor: "pointer" }}>
              //   {item.name}
              // </option>
              <List onClick={() => { showCat(item.id); showCatName(item.name); }} style={{ cursor: "pointer", padding: "5px" }}>
                {item.name}
              </List>
            ))
          }

        </div>


        <div className="centerbody">
          <div>
            <p className="numberStores">{selectedCatName || 'grocery'} <span>|</span> <span className="lengthStores">{store.length}</span>  {store.length > 1 ? <span className="lengthStores">stores</span> : <span className="lengthStores">store</span>}</p>
          </div>

          {store.length === 0 ? <div className="home-body">no store found</div> :
            <div className="home-body">

              {
                store.map((item) => {

                  return (
                    <div key={item.id} className="home-store" >

                      <a style={{ textDecoration: 'none' }} href={`https://in.bigbox.online/${item.slug}`} target="_blank" >
                        <img src={item.brand_logo_url} alt="" className="brand-logo" />
                        <img className="home-storeImg" src={item.cover_pic_mobile_url || placeholderStore} alt="" />
                        <h1>{item.brand.name}</h1>
                        <span>{item.name}, {item.city}</span>
                      </a>
                    </div>
                  )

                })

              }
            </div>
          }
        </div>
      </div>


      <div className="footer">
        <div className="footer-left">
          <p>blog</p>
          <p>about</p>
          <p>careers</p>
          <p>insights</p>
          <p>how it works</p>
          <p>bigbox api</p>
          <p>user privacy policy</p>
          <p>return & refund policy</p>
          <p>terms and conditions</p>
          <div className="footer-left-follow">
            <img src={social1} alt="" />
            <img src={social5} alt="" />
            <img src={social4} alt="" />
            <img src={social3} alt="" />
            <img src={social2} alt="" />
          </div>
          <span>copyrights © 2021 <br />
            bigbox retailtech solutions llp</span>
        </div>
        <div className="footer-right">
          <span className="footer-right-span1">bigbox is a videoshopping platform that enables shoppers to discover, follow <br /> and enjoy personalised shopping experience with stores through video calls
          </span>
          <span className="footer-right-span2">imagine a technology that enables users to shop virtually from<br /> any store in the world through a videocall, experiencing the <br />product live and without compromising the shopping <br /> experience!
            <br /><br />thats what bigbox is all about…<br /><br />we love hearing from our shoppers,<br />say hi to us at <span style={{ color: "#C9052C" }}> hello@bigbox.online</span></span>
        </div>
      </div>
    </div>
  );
}

export default App;