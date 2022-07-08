
export function checkboxFirstBlock(checkboxsTransmition) {
  checkboxsTransmition.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.checked) {
        checkboxsTransmition.forEach((item) => {
          item.checked = false;
        });
        e.target.checked = true;
      }
    });
  })
}

export function checkboxSecondBlock(checkboxsSeats) {
  checkboxsSeats.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.checked) {
        checkboxsSeats.forEach((item) => {
          item.checked = false;
        });
        e.target.checked = true;
      }
    });
  })
}

export function checkboxThirdBlock(checkboxsConvertibles) {
  checkboxsConvertibles.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.checked) {
        checkboxsConvertibles.forEach((item) => {
          item.checked = false;
        });
        e.target.checked = true;
      }
    });
  })
}