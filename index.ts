import { getAddress } from 'viem'
import { english, generateMnemonic, mnemonicToAccount } from 'viem/accounts'

let address;
do {
  const mnemonic = generateMnemonic(english)
  const account = mnemonicToAccount(mnemonic)
  address = getAddress(account.address);

  console.log(mnemonic)
  console.log(account.address)
} while (!address.startsWith("0x901dB") || !address.endsWith("1ab5"))