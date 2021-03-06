import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();



  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <SearchCollections setInputValue={setInputValue}/>
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
              marginLeft: "50px",
              width: "100%",
            }}
            defaultSelectedKeys={["nftMarket"]}
          >
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace">???? Explore Market</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">???? Your Collection</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions">???? Your Transactions</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
          </Switch>
          <Redirect to="/NFTMarketPlace" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="36.000000pt" height="40.000000pt" viewBox="0 0 144.000000 160.000000"
 >
<g transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1063 1575 c4 -8 12 -41 19 -75 6 -33 16 -60 20 -60 11 0 10 6 -17
128 -3 12 -10 22 -16 22 -6 0 -9 -7 -6 -15z"/>
<path d="M1246 1578 c-17 -55 -46 -157 -46 -163 0 -3 4 -3 10 0 5 3 19 36 30
73 11 37 23 75 26 85 3 9 0 17 -6 17 -6 0 -12 -6 -14 -12z"/>
<path d="M1351 1412 c-36 -19 -59 -38 -53 -40 15 -5 125 51 130 66 6 18 -7 14
-77 -26z"/>
<path d="M1400 1383 c0 -1 8 -7 18 -12 13 -7 19 -6 19 2 0 7 -9 13 -19 13 -10
0 -18 -1 -18 -3z"/>
<path d="M530 1314 c-168 -26 -201 -42 -302 -145 -66 -68 -81 -91 -108 -160
-76 -198 -104 -374 -98 -620 3 -139 4 -147 30 -186 33 -49 122 -97 213 -114
33 -7 70 -16 82 -21 11 -6 27 -7 34 -3 7 5 116 8 243 7 127 -1 269 2 316 7 48
4 93 4 102 -1 12 -6 26 -4 40 6 13 7 45 17 71 21 36 5 56 15 82 40 51 51 59
108 59 385 0 193 -4 260 -22 377 -12 79 -22 164 -21 191 3 70 -15 113 -65 155
-71 59 -121 67 -396 66 -129 -1 -246 -3 -260 -5z m575 -25 c39 -13 38 -14 -75
-20 -63 -4 -241 -7 -395 -7 -250 0 -275 1 -237 14 78 24 204 33 437 29 157 -2
243 -7 270 -16z m66 -45 c5 -3 9 -24 9 -48 0 -26 10 -62 25 -92 28 -54 29 -57
17 -50 -5 3 -3 -25 3 -62 6 -37 16 -66 22 -65 10 2 26 -124 39 -312 8 -112
-12 -365 -33 -416 -19 -47 -60 -74 -135 -88 -104 -19 -437 -34 -570 -27 l-127
8 -6 29 c-4 16 -4 32 -2 36 3 5 2 60 -2 123 -6 101 -11 123 -39 180 -29 60
-31 71 -27 150 2 51 12 109 25 145 22 63 28 174 15 282 -12 94 -41 133 -99
133 -34 0 -33 10 5 46 l30 29 352 6 c346 6 481 4 498 -7z m44 -34 c3 -5 2 -10
-4 -10 -6 0 -6 -11 1 -31 8 -23 13 -27 19 -17 6 8 9 0 9 -24 0 -44 -12 -49
-28 -13 -18 39 -26 105 -14 105 6 0 14 -4 17 -10z m-900 -60 c38 -14 54 -63
61 -187 6 -99 4 -116 -20 -203 -15 -52 -26 -107 -24 -122 3 -16 0 -24 -5 -21
-20 12 4 -103 35 -167 28 -60 31 -75 36 -207 4 -127 3 -143 -12 -149 -26 -10
-185 23 -236 49 -25 13 -55 37 -66 55 -12 17 -25 28 -29 24 -5 -4 -5 -2 -2 4
4 7 0 31 -9 55 -17 49 -18 226 -2 364 22 191 97 415 158 478 39 39 67 45 115
27z m922 -142 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m10 -55
c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z"/>
<path d="M1039 1223 c-14 -16 -16 -174 -3 -215 8 -25 52 -34 83 -17 25 14 26
19 26 105 0 69 -4 96 -18 117 -20 31 -66 37 -88 10z m71 -13 c11 -11 20 -26
20 -32 1 -7 3 -38 6 -68 8 -76 -7 -110 -46 -110 -24 0 -33 6 -40 26 -16 41
-12 156 6 182 19 27 28 28 54 2z"/>
<path d="M1078 1214 c-5 -4 -7 -39 -7 -78 l1 -71 10 55 c9 60 7 106 -4 94z"/>
<path d="M1097 1134 c-8 -57 1 -132 13 -98 3 10 4 48 1 84 l-6 65 -8 -51z"/>
<path d="M300 1200 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"/>
<path d="M441 1201 c-9 -6 -14 -33 -15 -87 l-1 -79 65 0 65 0 3 74 c2 41 -1
77 -5 81 -13 13 -97 21 -112 11z m103 -27 c12 -30 6 -111 -8 -123 -8 -7 -32
-11 -53 -9 l-38 3 -3 59 c-2 32 -1 65 2 72 8 21 92 19 100 -2z"/>
<path d="M457 1173 c-4 -3 -7 -30 -7 -59 0 -44 3 -54 20 -59 35 -11 57 3 63
41 9 53 -6 84 -41 84 -16 0 -32 -3 -35 -7z m61 -56 c3 -46 3 -47 -27 -47 -30
0 -31 2 -31 44 0 34 4 46 18 49 31 8 37 1 40 -46z"/>
<path d="M480 1121 c0 -12 6 -21 16 -21 9 0 14 7 12 17 -5 25 -28 28 -28 4z"/>
<path d="M921 1161 c-24 -45 -1 -106 37 -99 28 5 48 53 36 85 -12 36 -57 45
-73 14z m57 -35 c3 -39 -10 -59 -34 -49 -32 12 -20 97 14 91 12 -2 18 -15 20
-42z"/>
<path d="M940 1146 c0 -9 7 -16 16 -16 17 0 14 22 -4 28 -7 2 -12 -3 -12 -12z"/>
<path d="M946 1113 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"/>
<path d="M725 1036 c-5 -2 -35 -12 -65 -21 -122 -38 -227 -142 -269 -267 -37
-109 -23 -231 38 -343 16 -27 28 -65 29 -84 1 -24 10 -43 32 -65 28 -29 36
-31 103 -32 39 -1 102 -8 139 -15 122 -24 254 18 354 113 65 62 100 117 120
190 54 205 -60 422 -263 498 -50 19 -193 36 -218 26z m239 -54 c214 -100 301
-343 195 -543 -93 -173 -309 -261 -493 -199 -194 64 -310 251 -276 442 21 114
83 211 173 271 79 53 136 67 243 63 77 -3 102 -8 158 -34z m-454 -673 c3 -3
22 -18 43 -33 58 -44 41 -63 -28 -30 -32 15 -69 70 -58 87 4 7 26 -5 43 -24z"/>
<path d="M792 960 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path d="M717 949 c4 -13 8 -18 11 -10 2 7 -1 18 -6 23 -8 8 -9 4 -5 -13z"/>
<path d="M761 954 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path d="M830 955 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"/>
<path d="M866 961 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"/>
<path d="M680 948 c0 -9 5 -20 10 -23 13 -8 13 5 0 25 -8 13 -10 13 -10 -2z"/>
<path d="M900 940 c0 -11 2 -20 4 -20 2 0 6 9 9 20 3 11 1 20 -4 20 -5 0 -9
-9 -9 -20z"/>
<path d="M640 938 c0 -9 5 -20 10 -23 13 -8 13 5 0 25 -8 13 -10 13 -10 -2z"/>
<path d="M937 933 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3 -9
2 -12 -2z"/>
<path d="M600 925 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25 -5
8 -10 11 -10 5z"/>
<path d="M705 904 c-129 -41 -218 -159 -218 -292 -1 -251 321 -387 502 -212
66 64 95 131 95 220 0 60 -5 85 -24 123 -67 134 -221 203 -355 161z m214 -33
c93 -48 143 -127 149 -237 5 -93 -21 -157 -89 -218 -143 -129 -365 -90 -451
78 -13 24 -23 68 -26 109 -4 60 -2 73 27 131 35 72 99 128 174 152 57 19 164
11 216 -15z"/>
<path d="M724 736 c-67 -29 -98 -123 -60 -182 50 -75 195 -78 260 -6 27 31 31
100 8 138 -37 58 -135 81 -208 50z m130 -10 c77 -32 101 -118 48 -177 -24 -27
-38 -33 -83 -37 -72 -6 -120 15 -141 59 -49 104 63 202 176 155z"/>
<path d="M744 695 c-22 -33 -28 -104 -12 -134 15 -29 60 -44 93 -31 52 20 75
130 35 170 -30 30 -95 27 -116 -5z m103 -11 c7 -10 13 -37 13 -61 0 -73 -56
-107 -101 -62 -18 18 -21 30 -16 72 3 31 11 55 21 63 23 16 67 10 83 -12z"/>
<path d="M767 683 c-2 -5 -7 -25 -11 -45 -9 -47 7 -78 38 -78 20 0 23 4 18 23
-3 12 -11 26 -19 30 -16 10 -17 53 -2 63 8 5 10 -1 6 -18 -5 -18 -1 -30 13
-43 11 -10 20 -24 20 -32 0 -8 5 -11 10 -8 13 8 13 71 0 96 -11 19 -64 28 -73
12z m58 -32 c3 -5 2 -12 -3 -15 -5 -3 -9 1 -9 9 0 17 3 19 12 6z"/>
<path d="M620 729 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"/>
<path d="M943 525 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z"/>
<path d="M966 903 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"/>
<path d="M570 885 c7 -9 15 -13 17 -11 7 7 -7 26 -19 26 -6 0 -6 -6 2 -15z"/>
<path d="M1009 873 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17
-17z"/>
<path d="M526 862 c-2 -4 4 -9 15 -9 11 -1 17 2 14 8 -7 11 -22 12 -29 1z"/>
<path d="M1035 839 c-11 -17 1 -21 15 -4 8 9 8 15 2 15 -6 0 -14 -5 -17 -11z"/>
<path d="M515 830 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0
-7 -4 -4 -10z"/>
<path d="M1055 800 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
-13 -4 -16 -10z"/>
<path d="M490 796 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/>
<path d="M1080 770 c-13 -8 -13 -10 2 -10 9 0 20 5 23 10 8 13 -5 13 -25 0z"/>
<path d="M470 766 c0 -2 9 -6 20 -9 11 -3 18 -1 14 4 -5 9 -34 13 -34 5z"/>
<path d="M460 730 c20 -13 33 -13 25 0 -3 6 -14 10 -23 10 -15 0 -15 -2 -2
-10z"/>
<path d="M1098 713 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
<path d="M445 690 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
-12 -4 -9 -10z"/>
<path d="M1110 670 c-12 -8 -11 -10 8 -10 12 0 22 5 22 10 0 13 -11 13 -30 0z"/>
<path d="M435 640 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
-12 -4 -9 -10z"/>
<path d="M1110 619 c0 -5 9 -9 20 -9 11 0 20 2 20 4 0 2 -9 6 -20 9 -11 3 -20
1 -20 -4z"/>
<path d="M430 580 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M1110 580 c0 -5 10 -10 23 -10 18 0 19 2 7 10 -19 13 -30 13 -30 0z"/>
<path d="M1105 550 c3 -5 16 -10 28 -9 21 0 21 1 2 9 -28 12 -37 12 -30 0z"/>
<path d="M440 540 c-13 -9 -13 -10 0 -10 8 0 22 5 30 10 13 9 13 10 0 10 -8 0
-22 -5 -30 -10z"/>
<path d="M1090 510 c0 -4 9 -10 20 -13 11 -3 20 -2 20 3 0 4 -9 10 -20 13 -11
3 -20 2 -20 -3z"/>
<path d="M460 500 c-13 -8 -13 -10 2 -10 9 0 20 5 23 10 8 13 -5 13 -25 0z"/>
<path d="M1090 470 c8 -5 20 -10 25 -10 6 0 3 5 -5 10 -8 5 -19 10 -25 10 -5
0 -3 -5 5 -10z"/>
<path d="M480 460 c-8 -5 -12 -11 -9 -14 2 -3 11 -1 19 4 8 5 12 11 9 14 -2 3
-11 1 -19 -4z"/>
<path d="M1060 442 c0 -6 9 -12 20 -15 11 -3 20 -3 20 -1 0 2 -9 8 -20 14 -11
6 -20 7 -20 2z"/>
<path d="M500 409 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"/>
<path d="M1045 400 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0
-7 -4 -4 -10z"/>
<path d="M525 379 c-11 -17 1 -21 15 -4 8 9 8 15 2 15 -6 0 -14 -5 -17 -11z"/>
<path d="M557 373 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3 -9
2 -12 -2z"/>
<path d="M1010 376 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/>
<path d="M990 346 c0 -2 7 -9 15 -16 9 -7 15 -8 15 -2 0 5 -7 12 -15 16 -8 3
-15 4 -15 2z"/>
<path d="M960 332 c0 -12 19 -26 26 -19 2 2 -2 10 -11 17 -9 8 -15 8 -15 2z"/>
<path d="M926 305 c4 -8 10 -15 15 -15 4 0 6 7 3 15 -4 8 -10 15 -15 15 -4 0
-6 -7 -3 -15z"/>
<path d="M900 290 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20 -2
0 0 -9 6 -20z"/>
<path d="M857 270 c3 -11 7 -20 9 -20 2 0 4 9 4 20 0 11 -4 20 -9 20 -5 0 -7
-9 -4 -20z"/>
<path d="M826 267 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>
<path d="M1132 210 c-14 -23 -10 -25 19 -9 11 5 17 14 14 20 -9 14 -19 11 -33
-11z"/>
<path d="M445 120 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
-4 -4 -10z"/>
<path d="M745 110 l-210 -6 218 -2 c139 -1 217 2 217 8 0 6 -3 9 -7 8 -5 -1
-102 -5 -218 -8z"/>
<path d="M265 1029 c17 -8 16 -9 -7 -6 -17 3 -25 0 -21 -6 4 -6 0 -8 -9 -5
-16 6 -19 -2 -20 -54 -1 -67 14 -88 65 -88 37 0 77 41 76 77 -1 27 -1 27 -9
-5 -4 -19 -13 -39 -20 -45 -10 -10 -10 -7 -1 10 14 27 14 80 1 88 -6 4 -8 11
-5 16 4 5 -6 14 -20 19 -33 13 -57 12 -30 -1z m49 -61 c12 -33 -14 -68 -49
-68 -39 0 -62 46 -38 79 22 32 74 26 87 -11z m-47 -84 c-3 -3 -12 -4 -19 -1
-8 3 -5 6 6 6 11 1 17 -2 13 -5z"/>
<path d="M50 630 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M245 1269 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"/>
<path d="M1269 118 c-5 -18 -6 -38 -1 -34 7 8 12 36 6 36 -2 0 -4 -1 -5 -2z"/>
</g>
</svg>
  </div>
);

export default App;
