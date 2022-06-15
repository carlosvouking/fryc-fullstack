import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';


const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'
const commonStylesOurValues = 'min-h-[40px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 font-semibold font-light text-white'


const Welcome = () => {
    const connectWallet = () => {

    }  

    return(
        <div className="flex w-full justify-center items-center">
           <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
              <div className="flex flex-1 justify-start flex-col md:mr-10">
                <h1 className="text-3xl sm:text-5xl text-yellow-100 text-gradient py-1">
                    Envoyer du fryc <br /> à travers le monde
                </h1>
                <p className="text-left mt-5 text-yellow-100 font-light md:w-9/12 w-11/12 text-base">
                    Découvrir la cryptomonnaie simplifiée. Transférez aisément et en un clic du fryc en cryptomonnaie.
                </p> 
                <button type="button" className="flex flex-row justify-center items-center my-5 bg-[#d69e2e] p-3 rounded-full 
                                                 cursor-pointer hover:bg-[#b7791f] hover:text-yellow-200" onClick={connectWallet}>
                    <p className="text-yellow-200 text-base font-semibold">J'envoie du fryc</p> 
                </button>
                <div className="grid sm:grid-cols-1 grid-cols-1 w-full mt-10">
                    <div className={`rounded-xl ${commonStylesOurValues}`}>
                        Fiabilité -- Sécurité -- Coûts presque nuls
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-5 ">
                    <div className={`rounded-tl-2xl ${commonStyles}`}>Fryc / ($)USD: ? </div>
                    <div className={commonStyles}>Fryc / (€)Euro: ?</div>
                    <div className={`rounded-tr-2xl ${commonStyles}`}>Eth / ($)USD: ? </div>
                    <div className={`rounded-bl-2xl ${commonStyles}`}>(€)Euro / Fcfa: ? </div>
                    <div className={commonStyles}>($)USD / Fcfa: ?</div>
                    <div className={`rounded-br-2xl ${commonStyles}`}>Eth / (€)Euro: ? </div>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-start w-full md:mt-0 mt-10 ">
                 <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                    <div className="flex justify-between flex-col w-full h-full">
                       <div className="flex justify-between items-start">
                          <div className="w-10 h-10 rounded-xl border-2 border-white flex justify-center items-center">
                              <SiEthereum fontSize={22} color="" className={`text-yellow-100`} />
                          </div>
                          <div fontSize={18} color="" className={`text-yellow-100`}>
                            <BsInfoCircle />
                          </div>
                       </div>
                       <div className="">
                          <p className="text-white font-light text-sm ">Address:  </p>
                          <p className="text-white font-semibold text-lg mt-1">FRYC</p>
                       </div>
                    </div>
                 </div>          
              </div>                              
           </div>
        </div>
    );
}

export default Welcome;