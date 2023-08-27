const MAX_WALLETS = 20;

let counter = 0;

const clickButton = () => {
  const button = document.querySelector('.okui-btn.btn-xs.btn-fill-highlight');
  if (button && counter < MAX_WALLETS) {
    button.click();
    counter++;
    console.log('Wallet added:', counter);
  } else {
    clearInterval(interval);
    fetchAddresses();
  }
};

const fetchAddresses = () => {
  const elements = document.getElementsByClassName("DepositAddressTable_breakAll__jKfN3");
  const addresses = Array.from(elements).map(el => el.innerHTML);

  const output = addresses.join('\n');
  console.log(output);
};

const interval = setInterval(clickButton, 1500);
