import vendorXConfig from "./vendor-x";
import vendorYConfig from "./vendor-y";
import { VENDORS } from "../constants";

export const firebaseConfig = {
  [VENDORS.default]: vendorXConfig,
  [VENDORS.vendorX]: vendorXConfig,
  [VENDORS.vendorY]: vendorYConfig,
};
