// config
var labels = ["01","02","03"]
var wallets = ["0x1","0x2","0x3"]
var addrPlaceholder = "You can also use a .crypto domain";
var labelPlaceholder = "e.g. my wallet";

// main
if (labels.length === wallets.length) {
  function waitForButton(callback) {
    var counter = 0;
    var interval = setInterval(() => {
      const button = document.querySelector('.add-address-form-btn');
      if (button && counter < labels.length - 1) {
        button.click();
        counter++;
        console.log('wallet added: ', counter);
      } else {
        clearInterval(interval);
        callback();
      }
    }, 1500);
  };
  
  waitForButton(() => {
    var addrInputs = Array.from(document.querySelectorAll(`input[placeholder="${addrPlaceholder}"]`));
    var labelInputs = Array.from(document.querySelectorAll(`input[placeholder="${labelPlaceholder}"]`));
  
    if (addrInputs.length === wallets.length) {
      for(i = 0; i < wallets.length; i++) {
          addrInputs[i].setAttribute('value', wallets[i]);
          addrInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
          console.log('wallet filled: ', wallets[i]);
          labelInputs[i].setAttribute('value', labels[i]);
          labelInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
          console.log('name filled: ', labels[i]);
      }

      document.getElementsByClassName('okui-checkbox-inner')[0].click()
      document.getElementsByClassName('okui-checkbox-input')[1].click()
      document.getElementsByClassName('btn-content')[1].click()
    } else {
        console.error('count of fields and wallets is not the same.');
    }
  });

} else {
  console.error('count of wallets and names is not the same.');
}
