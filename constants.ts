export const VENDORS = {
  default: "multi-domain-test-client",
  vendorX: "vendor-x-multi-domain-test-client",
  vendorY: "vendor-y-multi-domain-test-client",
};

export const VENDORS_CONFIG = {
  [VENDORS.default]: {
    id: VENDORS.vendorX,
    name: "Vendor X",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
    accentColor: "#4285F4",
  },
  [VENDORS.vendorX]: {
    id: VENDORS.vendorX,
    name: "Vendor X",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
    accentColor: "#4285F4",
  },
  [VENDORS.vendorY]: {
    id: VENDORS.vendorY,
    name: "Vendor Y",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    accentColor: "#FF0000",
  },
};
