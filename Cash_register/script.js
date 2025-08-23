let price = 19.5;  // harga barang
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const priceDisplay = document.getElementById("price-display");

priceDisplay.textContent = price.toFixed(2);

const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

purchaseBtn.addEventListener("click", () => {
    let cash = Number(cashInput.value);
    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }
    if (cash === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }

    let change = cash - price;
    let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2);

    let changeArr = [];
    let cidCopy = JSON.parse(JSON.stringify(cid)).reverse();

    for (let [unit, amount] of cidCopy) {
        let unitValue = currencyUnit[unit];
        let toReturn = 0;

        while (change >= unitValue && amount > 0) {
            change -= unitValue;
            change = Math.round(change * 100) / 100;
            amount -= unitValue;
            toReturn += unitValue;
        }

        if (toReturn > 0) {
            changeArr.push([unit, toReturn]);
        }
    }

    if (change > 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    if (Number(totalCid) === (cash - price)) {
        let output = "Status: CLOSED " + changeArr.reverse().map(
            item => `${item[0]}: $${item[1]}`
        ).join(" ");
        changeDue.textContent = output;
        return;
    }

    let output = "Status: OPEN " + changeArr.map(
        item => `${item[0]}: $${item[1]}`
    ).join(" ");
    changeDue.textContent = output;
});
