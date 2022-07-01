import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'BABEL',
    lpAddresses: {
      97: '0x84d471880C3D2a845F4C7f96aAf9c5a3838aD24B',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      4002: '0xf5a2BEfD9018C45DBc87859C72Fc116EF2052599',
      5777: '0x024f9c23b9999b34315648c858023809b2eaC57c',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  /**
   * All farms below here are from v1 and are to be set to 0x
   */
  {
    pid: 1,
    lpSymbol: 'BABEL-BNB LP',
    lpAddresses: {
      97: '0x1e7e31FB3f362Fa6fA8E0f54e511Faf3910932A9',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
      4002: '0x5F62C3a6caE8a107DFDC1A99e79cA49717fA44cA',
      5777: '0xC35354B751cC63A9c2Bc1500334BC2c97B2B6286',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xf02a9FBcbbb229724f2c934B007C1D255BC7FD57',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      4002: '0x24269C6C58ca72cD6342F321926793A6D3F5B2e6',
      5777: '0x5ebb754cDd5113149289B17136106c14472060be',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
