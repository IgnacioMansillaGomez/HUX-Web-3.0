require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/z0X3r_Tz_nQFa09QscOfnPa9ch19FKmU",
      accounts: [
        "62ab34b3eabb77fb7bdaa22b56f20b5c69ac9349bc29cabbd07c16973a3f267b",
      ],
    },
  },
};
