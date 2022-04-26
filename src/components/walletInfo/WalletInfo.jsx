import React, {useEffect} from "react";
import "./walletInfo.css";
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Naira from '../../assets/img/icon/Naira.svg';
import Bitcoin from '../../assets/img/icon/Bitcoin.svg';
import Ethereum from '../../assets/img/icon/Ethereum.svg';
import Litecoin from '../../assets/img/icon/Litecoin.svg';
import RightArrow from '../../assets/img/icon/RightArrow.svg';
import Loader from '../../assets/img/loader/rolling-1s-201px.gif';
import AddNewWallet from '../WalletSidebar/AddNewWallet';

// export default function WalletInfo() {
const WalletInfo = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoading = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !isLoading ? (
    
    <div>
      {/* start header title */}
      <div style={{paddingLeft: 20, paddingTop: 50, marginBottom: 5, display: "flex", flexDirection: 'row', alignItems: 'center' }}>
        <div>
          <h1>Wallets</h1>
        </div>
        <div style={{right: 250, position: 'absolute'}}>
          {/* <span onMouseOver={changeBackground} toggle={toggle} isOpen={isOpen}>+ Add new wallet</span> */}
          <AddNewWallet/>
        </div>
        

      </div>
      {/* end header title */}
      
      {/* start line breaking */}
      <div style={{marginBottomx: '40px', opacity: 0.2, padding: '20px', marginBottom: 5}}><hr/></div>
      {/* end line breaking */}

      <div className="wallet">
        {/* Naira */}
        <div className="walletItem">
          <span className="walletTitle">
            <img src={Naira} style={{backgroundColor: '#05A357', padding: 15, borderRadius: 50, verticalAlign: 'middle', width: 15, height: 15}} alt='' /> <span style={{color: '#ffffff', opacity: 0.72, marginRight: '50px'}}> &nbsp; Naira</span>
          </span>
          <div className="walletMoneyContainer">
            <span className="walletMoney">₦ 105,160,076.51</span>
          </div>
          <span className="walletSub"><img src={RightArrow} style={{backgroundColor: '#303030', padding: 10, borderRadius: 50, verticalAlign: 'middle'}} alt='' /></span>
        </div>
        {/* Bitcoin */}
        <div className="walletItem">
          <span className="walletTitle">
            <img src={Bitcoin} style={{backgroundColor: '#FF9900', padding: 15, borderRadius: '50%', verticalAlign: 'middle', width: 15, height: 15}} alt='' /> <span style={{color: '#ffffff', opacity: 0.72, marginRight: '50px'}}> &nbsp; Bitcoin</span>
          </span>
          <div className="walletMoneyContainer">
            <span className="walletMoney">10.36490987 BTC</span>
          </div>
          <span className="walletSub"><img src={RightArrow} style={{backgroundColor: '#303030', padding: 10, borderRadius: 50, verticalAlign: 'middle'}} alt='' /></span>
        </div>
        {/* Ethereum */}
        <div className="walletItem">
          <span className="walletTitle">
            <img src={Ethereum} style={{backgroundColor: '#627EEA', padding: 15, borderRadius: 50, verticalAlign: 'middle', width: 15, height: 15}} alt='' /> <span style={{color: '#ffffff', opacity: 0.72, marginRight: '50px'}}> &nbsp; Bitcoin</span>
          </span>
          <div className="walletMoneyContainer">
            <span className="walletMoney">10.36490987 ETH</span>          
          </div>
          <span className="walletSub"><img src={RightArrow} style={{backgroundColor: '#303030', padding: 10, borderRadius: 50, verticalAlign: 'middle'}} alt='' /></span>
        </div>
        
        {/* Litecoin */}
        <div className="walletItem">
          <span className="walletTitle">
            <img src={Litecoin} style={{backgroundColor: '#00AEFF', padding: 15, borderRadius: 50, verticalAlign: 'middle', width: 15, height: 15}} alt='' /> <span style={{color: '#ffffff', opacity: 0.72, marginRight: '50px'}}> &nbsp; Litecoin</span>
          </span>
          <div className="walletMoneyContainer">
            <span className="walletMoney">10.36490987 LTC</span>
          </div>
          <span className="walletSub"><img src={RightArrow} style={{backgroundColor: '#303030', padding: 10, borderRadius: 50, verticalAlign: 'middle'}} alt='' /></span>
        </div>
      </div>
    </div>
    // <div style={{display: 'flex', justifyContent: 'center', padding: 150}}>
    //   <img src={Loader} width="60px" height="60px" alt="" />
    // </div>
  ):(
    <div style={{display: 'flex', justifyContent: 'center', padding: 150}}>
      <img src={Loader} width="60px" height="60px" alt="" />
    </div>
  )
}

export default WalletInfo;
