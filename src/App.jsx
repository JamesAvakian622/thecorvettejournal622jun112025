// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import ScrollToTopAndHash from "./components/ScrollToTopAndHash";
//import Home from "./Home";
// 2026
// C8R
// Eray
// import Page2026Brand from "./z2026/Page2026Brand";
// import Page2026LT7 from "./z2026/Page2026LT7";
// import Page2026Options from "./z2026/Page2026Options";
// import Page2026Year from "./z2026/Page2026Year";
// import Page2026Ztk from "./z2026/Page2026Ztk";
// import PageErayExtSoc from './Eray/PageErayExtSoc'
// import PageErayInt from "./Eray/PageErayInt";
// import PageErayPhotoB from "./Eray/PageErayPhotoB";
// import PageStingExtSoc from './Stingray/PageStingExtSoc'
// import PageStingPhotoB from "./Stingray/PageStingPhotoB";
// import PageStingPhotoC from "./Stingray/PageStingPhotoC";
// import PageZ06ExtSoc from './Z06/PageZ06ExtSoc'
// import PageZ06PhotoB from "./Z06/PageZ06PhotoB";
// import PageZ06PhotoC from "./Z06/PageZ06PhotoC";
// import PageZR1ExtSoc from './ZR1/PageZR1ExtSoc'
// import PageZR1PhotoB from "./ZR1/PageZR1PhotoB";
// import PageZR1PhotoC from "./ZR1/PageZR1PhotoC";
// import TechTalkEray from "./Eray/TechTalkEray";
// import TechTalkSting from "./Stingray/TechTalkSting";
// import TechTalkZ06 from "./Z06/TechTalkZ06";
// Stingray
// Z06
// ZR1
//import AFullCarousel1 from "./Stingray/AFullCarousel1";
//import AFullCarousel2 from "./Z06/AFullCarousel2";
//import AFullCarousel8 from "./ZR1/AFullCarousel8";
//import PCarAndDriver from "./More/PCarAndDriver";
//import StingrayLegacy from "./Stingray/StingrayLegacy";
//import TechTalkZR1 from "./ZR1/TechTalkZR1";
import A2026 from './A2026';
import About from './About';

import AFullCarousel3 from './Eray/AFullCarousel3';
import AFullCarousel6 from './ZR1/AFullCarousel8';
import Bio from './Bio';
import C1 from './C1';
import C1C8 from './C1C8';
import C2 from './C2';
import C3 from './C3';
import C4 from './C4';
import C5 from './C5';
import C6 from './C6';
import C7 from './C7';
import C8 from './C8';

import C8Hist from './C8Hist';
import C8Histb from './C8Histb';
import C8Webs from './C8Webs';
import C9 from './C9';
import Calendar from './Calendar';
import Components from './Components';
import Concept from './Concept';
import Customize from './Customize';
import Drive from './Drive';
import Eray from './Eray';
import ErayLegacy from './Eray/ErayLegacy';
import Footer from './Footer';
import Future from './Future';
import Gm from './Gm';
import Gm1 from './Gm1';
import Intro from './Intro';
import Legacy from './Legacy';
import List from './List';
import LT from './LT';
import LT2 from './LT2';
import LT6 from './LT6';
import LT7 from './LT7';
import LZ from './LZ';
import LZ0 from './LZ0';
import LZ26 from './LZ26';
import LZZ from './LZZ';
import Mega1 from './mega1';
import MetaTags from './components/MetaTags';
import Modal from './Modal';
import More from './More';
import More1 from './More1';
import More2 from './More2';
import Nav from './Nav';
import Tadge from './Tadge';
import Welburn from './Welburn';
import AutoShows from './AutoShows';


import OnPage2026 from './z2026/OnPage2026';
import OnPageC8R from './C8R/OnPageC8R';
import OnPageEray from './Eray/OnPageEray';
import OnPageSting from './Stingray/OnPageSting';
import OnPageZ06 from './Z06/OnPageZ06';
import OnPageZR1 from './ZR1/OnPageZR1';
import P0 from './More/P0';
import P1 from './More/P1';
import P10 from './More/P10';
import P11 from './More/P11';
import P12 from './More/P12';
import P13 from './More/P13';
import P14 from './More/P14';
import P15 from './More/P15';
import P16 from './More/P16';
import P2 from './More/P2';
import P20 from './More/P20';
import P21 from './More/P21';
import P22 from './More/P22';
import P23 from './More/P23';
import P24 from './More/P24';
import P25 from './More/P25';
import P3 from './More/P3';
import P4 from './More/P4';
import P5 from './More/P5';
import P6 from './More/P6';
import P7 from './More/P7';
import P8 from './More/P8';
import P9 from './More/P9';
import Add from './More/Add';


import Page2026 from './z2026/Page2026';
import Page2026Ext from './z2026/Page2026Ext';
import Page2026Features from './z2026/Page2026Features';
import Page2026Hard from './z2026/Page2026Hard';
import Page2026Int from './z2026/Page2026Int';
import Page2026Int2 from './z2026/Page2026Int2';
import Page2026PhotoA from './z2026/Page2026PhotoA';
import Page2026Rivals from './z2026/Page2026Rivals';
import Page2026Sound from './z2026/Page2026Sound';
import Page2026Specs from './z2026/Page2026Specs';
import Page2026Videos from './z2026/Page2026Videos';
import Page2026Manu from './z2026/Page2026Manu';


import PageC8R from './C8R/PageC8R';
import PageC8RBrand from './C8R/PageC8RBrand';
import PageC8RExt from './C8R/PageC8RExt';
import PageC8RLT7 from './C8R/PageC8RLT7';
import PageC8RSound from './C8R/PageC8RSound';
import PageC8RSpecs from './C8R/PageC8RSpecs';
import PageC8RYear from './C8R/PageC8RYear';

import PageEray from './Eray/PageEray';
import PageErayBrand from './Eray/PageErayBrand';
import PageErayDriving from './Eray/PageErayDriving';
import PageErayExt from './Eray/PageErayExt';
import PageErayFeatures from './Eray/PageErayFeatures';
import PageErayHard from './Eray/PageErayHard';
import PageErayInt from './Eray/PageErayInt';
import PageErayLT2 from './Eray/PageErayLT2';
import PageErayOptions from './Eray/PageErayOptions';
import PageErayPhotoA from './Eray/PageErayPhotoA';
import PageErayPhotoC from './Eray/PageErayPhotoC';
import PageErayRivals from './Eray/PageErayRivals';
import PageEraySound from './Eray/PageEraySound';
import PageEraySpecs from './Eray/PageEraySpecs';
import PageErayVideos from './Eray/PageErayVideos';
import PageErayYear from './Eray/PageErayYear';
import PageErayZer from './Eray/PageErayZer';
import PageErayManu from './Eray/PageErayManu';


import PageSting from './Stingray/PageSting';
import PageStingAccents from './Stingray/PageStingAccents';

import PageStingBrand from './Stingray/PageStingBrand';
import PageStingDriving from './Stingray/PageStingDriving';
import PageStingExt from './Stingray/PageStingExt';
import PageStingFeatures from './Stingray/PageStingFeatures';
import PageStingHard from './Stingray/PageStingHard';
import PageStingInt from './Stingray/PageStingInt';
import PageStingLogos from './Stingray/PageStingLogos';
import PageStingLT2 from './Stingray/PageStingLT2';
import PageStingOptions from './Stingray/PageStingOptions';
import PageStingPhotoA from './Stingray/PageStingPhotoA';
import PageStingRivals from './Stingray/PageStingRivals';
import PageStingSound from './Stingray/PageStingSound';
import PageStingSpecs from './Stingray/PageStingSpecs';
import PageStingVideos from './Stingray/PageStingVideos';
import PageStingYear from './Stingray/PageStingYear';
import PageStingZ51 from './Stingray/PageStingZ51';
import PageStingManu from './Stingray/PageStingManu';

import PageZ06 from './Z06/PageZ06';
import PageZ06Brand from './Z06/PageZ06Brand';
import PageZ06Driving from './Z06/PageZ06Driving';
import PageZ06Ext from './Z06/PageZ06Ext';
import PageZ06Features from './Z06/PageZ06Features';
import PageZ06Hard from './Z06/PageZ06Hard';
import PageZ06Int from './Z06/PageZ06Int';
import PageZ06LT6 from './Z06/PageZ06LT6';
import PageZ06Options from './Z06/PageZ06Options';
import PageZ06PhotoA from './Z06/PageZ06PhotoA';
import PageZ06Rivals from './Z06/PageZ06Rivals';
import PageZ06Sound from './Z06/PageZ06Sound';
import PageZ06Specs from './Z06/PageZ06Specs';
import PageZ06Videos from './Z06/PageZ06Videos';
import PageZ06Year from './Z06/PageZ06Year';
import PageZ06Z07 from './Z06/PageZ06Z07';
import PageZ06Manu from './Z06/PageZ06Manu';


import PageZR1 from './ZR1/PageZR1';
import PageZR1Driving from './ZR1/PageZR1Driving';
import PageZR1Ext from './ZR1/PageZR1Ext';
import PageZR1Features from './ZR1/PageZR1Features';
import PageZR1Hard from './ZR1/PageZR1Hard';
import PageZR1Int from './ZR1/PageZR1Int';
import PageZR1LT7 from './ZR1/PageZR1LT7';
import PageZR1Options from './ZR1/PageZR1Options';
import PageZR1PhotoA from './ZR1/PageZR1PhotoA';
import PageZR1rand from './ZR1/PageZR1';
import PageZR1Rivals from './ZR1/PageZR1Rivals';
import PageZR1Sound from './ZR1/PageZR1Sound';
import PageZR1Specs from './ZR1/PageZR1Specs';
import PageZR1Videos from './ZR1/PageZR1Videos';
import PageZR1Year from './ZR1/PageZR1Year';
import PageZR1Ztk from './ZR1/PageZR1Ztk';
import PageZR1Manu from './ZR1/PageZR1Manu';


import Photos5 from './C8R/Photos5';
import Quiz from './Quiz';
import RonFellows from './RonFellows';
import Security from './Security';
import Start from './Start';
import Stingray from './Stingray';
import TechTalkAll from './TechTalkAll';
import TechTalkEray from './TechTalkEray';
import TechTalkSting from './TechTalkSting';
import TechTalkZ06 from './TechTalkZ06';
import TechTalkZR1 from './TechTalkZR1';
import TopTenDealers from './Stingray/TopTenDealers';
import Tracks from './Tracks';
import Weather from './Weather';
import Z06 from './Z06';
import Z06Legacy from './Z06/Z06Legacy';
import Zcoming from './Zcoming';
import ZR1 from './ZR1';
import ZR1C3 from './ZR1C3';
import ZR1C4 from './ZR1C4';
import ZR1C6 from './ZR1C6';
import ZR1C7 from './ZR1C7';
import ZR1C8 from './ZR1C8';
import ZR1Legacy from './ZR1Legacy';

export default function App() {
  return (
    <>
      <Router>
        {/* <ScrollToTopAndHash /> */}
        <MetaTags />

        <Nav />     <Modal />
        {/* <Mega1 /> */}

        {/*      <Start />   
        <Intro /> */}
        <Routes>
          <Route path="/*" element={<Intro />} />
          <Route path="/mega1" element={<Mega1 />} />
          <Route path="/start" element={<Start />} />

          <Route path="/eray" element={<Eray />} />
          <Route path="/stingray" element={<Stingray />} />
          <Route path="/z06" element={<Z06 />} />
          <Route path="/zr1" element={<ZR1 />} />
          <Route path="/a2026" element={<A2026 />} />

          <Route path="/more" element={<More />} />
          <Route path="/more1" element={<More1 />} />
          <Route path="/more2" element={<More2 />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/list" element={<pst />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/future" element={<Future />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/components" element={<Components />} />
          <Route path="/tadge" element={<Tadge />} />;


          <Route path="/techtalksting" element={<TechTalkSting />} />
          <Route path="/techtalkz06" element={<TechTalkZ06 />} />
          <Route path="/techtalkzr1" element={<TechTalkZR1 />} />
          <Route path="/techtalkeray" element={<TechTalkEray />} />
          <Route path="/techtalkall" element={<TechTalkAll />} />

          <Route path="/c1" element={<C1 />} />
          <Route path="/c2" element={<C2 />} />
          <Route path="/c3" element={<C3 />} />
          <Route path="/c4" element={<C4 />} />
          <Route path="/c5" element={<C5 />} />
          <Route path="/c6" element={<C6 />} />
          <Route path="/c7" element={<C7 />} />
          <Route path="/c8" element={<C8 />} />
          <Route path="/c9" element={<C9 />} />

          <Route path="/zr1c3" element={<ZR1C3 />} />
          <Route path="/zr1c4" element={<ZR1C4 />} />
          <Route path="/zr1c6" element={<ZR1C6 />} />
          <Route path="/zr1c7" element={<ZR1C7 />} />
          <Route path="/zr1c8" element={<ZR1C8 />} />
          <Route path="/zr1legacy" element={<ZR1Legacy />} />

          <Route path="/legacy" element={<Legacy />} />
          <Route path="/concept" element={<Concept />} />

          <Route path="/gm" element={<Gm />} />
          <Route path="/gm1" element={<Gm1 />} />


          <Route path="/components" element={<Components />} />

          <Route path="/modal" element={<Modal />} />
          <Route path="/autoshows" element={<AutoShows />} />
          <Route path="/welburn" element={<Components />} />

          <Route path="/lt2" element={<LT2 />} />
          <Route path="/lt6" element={<LT6 />} />
          <Route path="/lt7" element={<LT7 />} />

          <Route path="/lt" element={<LT />} />
          <Route path="/lz" element={<LZ />} />

          <Route path="/lz0" element={<LZ0 />} />
          <Route path="/lz26" element={<LZ26 />} />
          <Route path="/lzz" element={<LZZ />} />


          <Route path="/about" element={<About />} />
          <Route path="/c8webs" element={<C8Webs />} />
          <Route path="/c8hist" element={<C8Hist />} />
          <Route path="/c8histb" element={<C8Histb />} />
          <Route path="/ronfellows" element={<RonFellows />} />
          <Route path="/zcoming" element={<Zcoming />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/c1c8" element={<C1C8 />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/security" element={<Security />} />



          <Route path="/more/p0" element={<P0 />} />
          <Route path="/more/p1" element={<P1 />} />
          <Route path="/more/p2" element={<P2 />} />
          <Route path="/more/p3" element={<P3 />} />
          <Route path="/more/p4" element={<P4 />} />
          <Route path="/more/p5" element={<P5 />} />
          <Route path="/more/p6" element={<P6 />} />
          <Route path="/more/p7" element={<P7 />} />
          <Route path="/more/p8" element={<P8 />} />
          <Route path="/more/p9" element={<P9 />} />
          <Route path="/more/p10" element={<P10 />} />
          <Route path="/more/p11" element={<P11 />} />
          <Route path="/more/p12" element={<P12 />} />
          <Route path="/more/p13" element={<P13 />} />
          <Route path="/more/p14" element={<P14 />} />
          <Route path="/more/p15" element={<P15 />} />
          <Route path="/more/p16" element={<P16 />} />
          <Route path="/more/p20" element={<P20 />} />
          <Route path="/more/p21" element={<P21 />} />
          <Route path="/more/p22" element={<P22 />} />
          <Route path="/more/p23" element={<P23 />} />
          <Route path="/more/p24" element={<P24 />} />
          <Route path="/more/p25" element={<P25 />} />
<Route path="/more/Add" element={<Add />} />


          {/* <Route path="/more/pcaranddriver" element={<PCarAndDriver />} /> */}
<Route path="/stingray/toptendealers" element={<TopTenDealers />} />;
<Route path="/stingray/pagestingaccents" element={<PageStingAccents />} />;

          <Route path="/stingray/pagesting" element={<PageSting />} />
          <Route path="/stingray/pagesingdriving" element={<PageStingDriving />} />
          <Route path="/stingray/pagestingfeatures" element={<PageStingFeatures />} />
          <Route path="/stingray/pagestingmanu" element={<PageStingManu />} />
          <Route path="/stingray/pagestingext" element={<PageStingExt />} />
          {/* ;<Route path='/stingray/pagestingextsoc' element={<PageStingExtSoc />} /> */}

          <Route path="/stingray/pagestingint" element={<PageStingInt />} />
          <Route path="/stingray/pagestinglt2" element={<PageStingLT2 />} />
          {/* <Route path="/stingray/stingraylegacy" element={<StingrayLegacy />} /> */}
          <Route
            path="/stingray/pagestingphotoa"
            element={<PageStingPhotoA />}
          />
             <Route path="/stingray/pagestingspecs" element={<PageStingSpecs />} />
          <Route path="/stingray/pagestingsound" element={<PageStingSound />} />
          <Route path="/stingray/pagestingz51" element={<PageStingZ51 />} />
          {/* <Route path="/stingray/TechTalkSting" element={<TechTalkSting />} /> */}

          <Route
            path="/stingray/pagestingrivals"
            element={<PageStingRivals />}
          />
          <Route path="/stingray/pagestinghard" element={<PageStingHard />} />
          <Route
            path="/stingray/pagestingoptions"
            element={<PageStingOptions />}
          />
          <Route path="/stingray/pagestingbrand" element={<PageStingBrand />} />
          <Route path="/stingray/pagestinglogos" element={<PageStingLogos />} />
          <Route
            path="/stingray/pagestingvideos"
            element={<PageStingVideos />}
          />
          <Route path="/stingray/pagestingyear" element={<PageStingYear />} />
          <Route
            path="/stingray/pagestingrivals"
            element={<PageStingRivals />}
          />
          <Route path="/stingray/onpagesting" element={<OnPageSting />} />
          {/* <Route path="/stingray/afullcarousel1" element={<AFullCarousel1 />} /> */}


    {/* Z06 */}

          <Route path="/z06/pagez06" element={<PageZ06 />} />
          <Route path="/z06/pagez06driving" element={<PageZ06Driving />} />
          <Route path="/z06/pagez06features" element={<PageZ06Features />} />
          <Route path="/z06/pagez06manu" element={<PageZ06Manu />} />

          <Route path="/z06/pagez06ext" element={<PageZ06Ext />} />
          {/* <Route path='/z06/pagez06extsoc' element={<PageZ06ExtSoc />} /> */}

          <Route path="/z06/pagez06int" element={<PageZ06Int />} />
          <Route path="/z06/pagez06lt6" element={<PageZ06LT6 />} />
          <Route path="/z06/pagez06specs" element={<PageZ06Specs />} />
          <Route path="/z06/pagez06brand" element={<PageZ06Brand />} />
          <Route path="/z06/pagez06photoa" element={<PageZ06PhotoA />} />
          {/* <Route path="/z06/pagez06photob" element={<PageZ06PhotoB />} />
          <Route path="/z06/pagez06photoc" element={<PageZ06PhotoC />} /> */}

          <Route path="/z06/pagez06sound" element={<PageZ06Sound />} />
          <Route path="/z06/pagez06z07" element={<PageZ06Z07 />} />
          <Route path="/z06/pagez06options" element={<PageZ06Options />} />
          <Route path="/z06/pagez06hard" element={<PageZ06Hard />} />
          <Route path="/z06/pagez06videos" element={<PageZ06Videos />} />
          <Route path="/z06/pagez06year" element={<PageZ06Year />} />
          <Route path="/z06/pagez06rivals" element={<PageZ06Rivals />} />
          <Route path="/z06/zo6legacy" element={<Z06Legacy />} />
          {/* <Route path="/z06/Techtalkz06" element={<TechTalkZ06 />} /> */}
          <Route path="/z06/onpagez06" element={<OnPageZ06 />} />

          {/* <Route path="/z06/afullcarousel2" element={<AFullCarousel2 />} /> */}

          <Route path="/eray/pageeray" element={<PageEray />} />
          <Route path="/eray/pageeraydriving" element={<PageErayDriving />} />
          <Route path="/eray/pageerayfeatures" element={<PageErayFeatures />} />
          <Route path="/eray/pageeraymanu" element={<PageErayManu />} />


          <Route path="/eray/pageerayext" element={<PageErayExt />} />
          {/* ;<Route path='/eray/pageerayextsoc' element={<PageErayExtSoc />} /> */}

          <Route path="/eray/pageerayint" element={<PageErayInt />} />
          <Route path="/eray/pageeraylt2" element={<PageErayLT2 />} />
          <Route path="/eray/pageerayspecs" element={<PageEraySpecs />} />
          <Route path="/eray/pageeraybrand" element={<PageErayBrand />} />
          <Route path="/eray/pageerayphotoa" element={<PageErayPhotoA />} />
          {/* <Route path="/eray/pageerayphotob" element={<PageErayPhotoB />} /> */}
          <Route path="/eray/pageerayphotoc" element={<PageErayPhotoC />} />
          <Route path="/eray/eraylegacy" element={<ErayLegacy />} />
          <Route path="/eray/pageeraysound" element={<PageEraySound />} />
          <Route path="/eray/pageerayzer" element={<PageErayZer />} />
          <Route path="/eray/pageerayoptions" element={<PageErayOptions />} />
          <Route path="/eray/pageerayhard" element={<PageErayHard />} />
          <Route path="/eray/pageerayvideos" element={<PageErayVideos />} />
          <Route path="/eray/pageerayyear" element={<PageErayYear />} />
          <Route path="/eray/pageerayrivals" element={<PageErayRivals />} />
          {/* <Route path="/eray/Techtalkeray" element={<TechTalkEray />} /> */}
          <Route path="/eray/onpageeray" element={<OnPageEray />} />
          <Route path="/eray/pageeraymanu" element={<PageErayManu />} />

          {/* <Route path="/eray/afullcarousel3" element={<AFullCarousel3 />} /> */}

          <Route path="/zr1/pagezr1" element={<PageZR1 />} />
          <Route path="/zr1/pagezr1driving" element={<PageZR1Driving />} />
          <Route path="/zr1/pagezr1features" element={<PageZR1Features />} />

          <Route path="/zr1/PageZR1" element={<PageZR1rand />} />
          <Route path="/zr1/pagezr1ext" element={<PageZR1Ext />} />
          {/* <Route path='/zr1/pagezr1extsoc' element={<PageZR1ExtSoc />} /> */}

          <Route path="/zr1/pagezr1int" element={<PageZR1Int />} />
          <Route path="/zr1/pagezr1lt7" element={<PageZR1LT7 />} />
          <Route path="/zr1/pagezr1photoa" element={<PageZR1PhotoA />} />
          {/* <Route path="/zr1/pagezr1photob" element={<PageZR1PhotoB />} />
          <Route path="/zr1/pagezr1photoc" element={<PageZR1PhotoC />} /> */}
          <Route path="/zr1/pagezr1specs" element={<PageZR1Specs />} />
          <Route path="/zr1/pagezr1sound" element={<PageZR1Sound />} />
          <Route path="/zr1/pagezr1ztk" element={<PageZR1Ztk />} />
          <Route path="/zr1/pagezr1options" element={<PageZR1Options />} />
          <Route path="/zr1/pagezr1hard" element={<PageZR1Hard />} />
          <Route path="/zr1/pagezr1videos" element={<PageZR1Videos />} />
          <Route path="/zr1/pagezr1rivals" element={<PageZR1Rivals />} />
          {/* <Route path="/zr1/Techtalkzr1" element={<TechTalkZR1 />} /> */}
          <Route path="/zr1/pagezr1year" element={<PageZR1Year />} />
          {/* <Route path="/zr1/pagezr1rivals" element={<PageZR1Rivals />} /> */}
          <Route path="/zr1/onpagezr1" element={<OnPageZR1 />} />
          {/* <Route path="/zr1/afullcarousel8" element={<AFullCarousel8 />} /> */}
          <Route path="/zr1/pagezr1manu" element={<PageZR1Manu />} />

          {/* 2026 */}

          <Route path="/z2026/Page2026" element={<Page2026 />} />
          {/* <Route path="/z2026/Page2026brand" element={<Page2026Brand />} /> */}
          <Route path="/z2026/Page2026ext" element={<Page2026Ext />} />
          <Route path="/z2026/page2026features" element={<Page2026Features />} />
          <Route path="/z2026/Page2026int2" element={<Page2026Int2 />} />
          <Route path="/z2026/Page2026int" element={<Page2026Int />} />
          {/* <Route path="/z2026/Page2026lt7" element={<Page2026LT7 />} /> */}
          <Route path="/z2026/Page2026photoa" element={<Page2026PhotoA />} />

          <Route path="/z2026/Page2026specs" element={<Page2026Specs />} />
          <Route path="/z2026/Page2026sound" element={<Page2026Sound />} />
          {/* <Route path="/z2026/Page2026ztk" element={<Page2026Ztk />} />
          <Route path="/z2026/Page2026options" element={<Page2026Options />} /> */}
          <Route path="/z2026/Page2026hard" element={<Page2026Hard />} />
          <Route path="/z2026/Page2026videos" element={<Page2026Videos />} />
          <Route path="/z2026/Page2026rivals" element={<Page2026Rivals />} />
          {/* <Route path="/z2026/Page2026year" element={<Page2026Year />} /> */}
          <Route path="/z2026/onPage2026" element={<OnPage2026 />} />
          <Route path="/z2026/Page2026manu" element={<Page2026Manu />} />


          <Route path="/c8r/pagec8R" element={<PageC8R />} />
          <Route path="/c8r/pagec8Rbrand" element={<PageC8RBrand />} />
          <Route path="/c8r/pagecext" element={<PageC8RExt />} />
          <Route path="/c8r/pagec8rlt7" element={<PageC8RLT7 />} />
          <Route path="/c8r/pagec8rspecs" element={<PageC8RSpecs />} />
          <Route path="/c8r/pagec8ryear" element={<PageC8RYear />} />
          <Route path="/c8r/photos5" element={<Photos5 />} />
          <Route path="/c8r/pagec8rsound" element={<PageC8RSound />} />
          <Route path="/c8r/onpagec8" element={<OnPageC8R />} />
          <Route path="/c8r/afullcarousel6" element={<AFullCarousel6 />} />
        </Routes>
      </Router>
    </>
  );
}
