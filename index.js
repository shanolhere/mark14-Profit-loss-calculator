const costPrice = document.querySelector(".costPrice");
const sellingPrice = document.querySelector(".sellingPrice");
const quantity = document.querySelector(".quantity");
const checkBtn = document.querySelector(".check");

const message = document.querySelector(".message");
const result = document.querySelector(".result");
const image = document.querySelector(".animated-gif");

checkBtn.addEventListener("click", () => {
  if (!sellingPrice.value || !costPrice.value || !quantity.value) {
    message.innerHTML = "Please enter the data. ";
    message.style.visibility = "visible";
  } else if (
    Number(sellingPrice.value) <= 0 ||
    Number(costPrice.value) <= 0 ||
    Number(quantity.value) <= 0
  ) {
    message.innerHTML = "Values must be greater than 0. ";
    message.style.visibility = "visible";
  } else {
    let profit =
      (Number(sellingPrice.value) - Number(costPrice.value)) *
      Number(quantity.value);
    //console.log(profit);
    let loss =
      (Number(costPrice.value) - Number(sellingPrice.value)) *
      Number(quantity.value);
    let profitPercent = (profit * 100) / Number(costPrice.value);
    let lossPercent = (loss * 100) / Number(costPrice.value);

    if (Number(sellingPrice.value) > Number(costPrice.value)) {
      //console.log(typeof sellingPrice.value,costPrice.value)
      message.innerHTML = `WOW!! You're profit % is ${profitPercent} % and <br/> Your total profit is ₹ ${profit}/-`;
      image.src = "src/assets/happy.gif";
      result.style.visibility = "visible";
    } else if (Number(sellingPrice.value) < Number(costPrice.value)) {
      message.innerHTML = `Oh Noo!! You're loss % is ${lossPercent} % and <br/> Your total loss is ₹ ${loss}/-`;
      image.src = "src/assets/sad.gif";
      result.style.visibility = "visible";
    } else {
      message.innerHTML = `No LOSS nor GAIN`;
      image.src = "";
      result.style.visibility = "visible";
    }
  }
});
