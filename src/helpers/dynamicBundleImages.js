import Alpha from "../assets/icons8-alpha-32.png"
import Beta from "../assets/icons8-beta-32.png"
import Mu from "../assets/icons8-mu-32.png"
import Omega from "../assets/icons8-omega-32.png"
import Pi from "../assets/icons8-pi-32.png"
import Sigma from "../assets/icons8-sigma-32.png"


const imageObject = {
  Alpha: Alpha,
  Beta: Beta,
  Mu: Mu,
  Omega: Omega,
  Pi: Pi,
  Sigma: Sigma,
}

const dynamicBundleImages = (bundle) => {
  return imageObject[bundle]
};

export default dynamicBundleImages;
