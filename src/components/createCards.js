export const createCards = (data, card) => {
  // card.innerHTML = "";
	// Destructuring the card object
	// const {cars} = data;
	// const datos = Object.entries(cars);
	// Crear las tarjetas
  data.forEach(([key, value]) => {
    // console.log(value.Company1.Rates.AR.RateData.inclusions)

    const inclusionsAR = value.Company1.Rates.AR.RateData.inclusions;
    const inclusions4M = value.Company1.Rates["4M"].RateData.inclusions;
    const inclusionsF2 = value.Company1.Rates.F2.RateData.inclusions;
    const inclusionsSC = value.Company1.Rates.SC.RateData.inclusions;
    const inclusionsH8 = value.Company1.Rates.H8.RateData.inclusions;
  
    const inclusionsHX = value.Company2.Rates.HX.RateData.inclusions;
    const inclusionsBZ = value.Company2.Rates.BZ.RateData.inclusions;
    const inclusionsLQ = value.Company2.Rates.LQ.RateData.inclusions;
    const inclusionsLV = value.Company2.Rates.LV.RateData.inclusions;
    const inclusionsB9 = value.Company2.Rates.B9.RateData.inclusions;


		card.innerHTML += `
    <!-- Card 1 -->
    <div class="card__container">
    <header class="card__header">
      <div class="card__image">
        <img src="${value.Company1.PictureURL}"
          alt="${value.Company1.Name}" />
      </div>
      <div class="card__title">
        <h2>${value.Company1.Features2.category}</h2>
        <p>GROUP <span>${key}</span> <span>(${value.Company1.Code})</span></p>
        <p>${value.Company1.Name}</p>
      </div>
      <div class="card__button">
        <button> <img src="./public/images/check.svg" alt="checked"> Book now!</button>
      </div>
    </header>
    <div class="card__content">
      <div class="card__characteristics">
        <h3>Characteristics</h3>
        <div class="card__characteristics__item">
          <img src="./public/images/seats.svg" alt="seats">
          <p><span>${value.Company1.Features2.seats}</span> Seats</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/luggage.svg" alt="luggage">
          <p><span>${
						value.Company1.Features2.largeSuitcase
					}</span> Large Suitcase</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public//images/bag.svg" alt="bag">
          <p><span>${
						value.Company1.Features2.smallSuitcase
					}</span> Small Suitcase</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/door.svg" alt="door">
          <p><span>${value.Company1.Features2.doors}</span> Doors</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/transmision.svg" alt="transmision">
          <p><span>${
						value.Company1.Features2.transmition
					}</span> Transmition</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/air-conditioning.svg" alt="">
          <p>${value.Company1.Features2.air}</p>
        </div>
      </div>
      <div class="card__available">
        <h3>Available Rates</h3>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-AR" type="radio" name="rates" id="rates-AR">
            <label for="rates-AR">AR - ${
							value.Company1.Rates.AR.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>AR - ${
                    value.Company1.Rates.AR.RateData.name
                  }</p>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[0]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[1]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[2]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[3]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[4]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[5]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[6]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[7]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsAR[8]}</p>
                  </div>
                </div>
              </div>
            </div>
            <p >Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company1.Rates.AR.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-4M" type="radio" name="rates" id="rates-4M">
            <label for="rates-4M">4M - ${
							value.Company1.Rates["4M"].RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>4M - ${
                    value.Company1.Rates["4M"].RateData.name
                  }</p>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusions4M[0]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusions4M[1]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusions4M[2]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusions4M[3]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusions4M[4]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusions4M[5]}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company1.Rates["4M"].RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-F2" type="radio" name="rates" id="rates-F2">
            <label for="rates-F2">F2 - ${
							value.Company1.Rates.F2.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>F2 - ${
                    value.Company1.Rates.F2.RateData.name
                  }</p>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsF2[0]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsF2[1]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsF2[2]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsF2[3]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsF2[4]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsF2[5]}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company1.Rates.F2.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-SC" type="radio" name="rates" id="rates-SC">
            <label for="rates-SC">SC - ${
							value.Company1.Rates.SC.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>SC - ${
                    value.Company1.Rates.SC.RateData.name
                  }</p>
                </div>
              </div>
            </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company1.Rates.SC.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-H8" type="radio" name="rates" id="rates-H8">
            <label for="rates-H8">H8 - ${
							value.Company1.Rates.H8.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>H8 - ${
                    value.Company1.Rates.H8.RateData.name
                  }</p>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsH8[0]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsH8[1]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsH8[2]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsH8[3]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsH8[4]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsH8[5]}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company1.Rates.H8.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="card__container">
    <header class="card__header">
      <div class="card__image">
        <img src="${value.Company2.PictureURL}"
          alt="${value.Company1.Name}" />
      </div>
      <div class="card__title">
        <h2>${value.Company2.Features2.category}</h2>
        <p>GROUP <span>${key}</span> <span>(${value.Company2.Code})</span></p>
        <p>${value.Company2.Name}</p>
      </div>
      <div class="card__button">
        <button> <img src="./public/images/check.svg" alt="checked"> Book now!</button>
      </div>
    </header>
    <div class="card__content">
      <div class="card__characteristics">
        <h3>Characteristics</h3>
        <div class="card__characteristics__item">
          <img src="./public/images/seats.svg" alt="seats">
          <p><span>${value.Company2.Features2.seats}</span> Seats</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/luggage.svg" alt="luggage">
          <p><span>${
						value.Company2.Features2.largeSuitcase
					}</span> Large Suitcase</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public//images/bag.svg" alt="bag">
          <p><span>${
						value.Company2.Features2.smallSuitcase
					}</span> Small Suitcase</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/door.svg" alt="door">
          <p><span>${value.Company2.Features2.doors}</span> Doors</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/transmision.svg" alt="transmision">
          <p><span>${
						value.Company2.Features2.transmition
					}</span> Transmition</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/air-conditioning.svg" alt="">
          <p>${value.Company2.Features2.air}</p>
        </div>
      </div>
      <div class="card__available">
        <h3>Available Rates</h3>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-HX" type="radio" name="rates" id="rates-HX">
            <label for="rates-HX">HX - ${
							value.Company2.Rates.HX.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
              <div class="modal">
                  <div class="modal__content">
                    <div class="modal__content__close">
                      <img src="./public/images/close.svg" alt="close">
                    </div>
                    <div class="modal__content__text">
                      <h3>Rates Information</h3>
                      <p>HX - ${
                        value.Company2.Rates.HX.RateData.name
                      }</p>
                      <div class="modal__content__detail">
                        <img src="./public/images/right.svg" alt="right">
                        <p>${inclusionsHX[0]}</p>
                      </div>
                      <div class="modal__content__detail">
                        <img src="./public/images/right.svg" alt="right">
                        <p>${inclusionsHX[1]}</p>
                      </div>
                      <div class="modal__content__detail">
                        <img src="./public/images/right.svg" alt="right">
                        <p>${inclusionsHX[2]}</p>
                      </div>
                      <div class="modal__content__detail">
                        <img src="./public/images/right.svg" alt="right">
                        <p>A${inclusionsHX[3]}</p>
                      </div>
                      <div class="modal__content__detail">
                        <img src="./public/images/right.svg" alt="right">
                        <p>${inclusionsHX[4]}</p>
                      </div>
                      <div class="modal__content__detail">
                        <img src="./public/images/right.svg" alt="right">
                        <p>${inclusionsHX[5]}</p>
                      </div>
                      <div class="modal__content__detail">
                        <img src="./public/images/right.svg" alt="right">
                        <p>${inclusionsHX[6]}</p>
                      </div>
                      <div class="modal__content__detail">
                        <img src="./public/images/right.svg" alt="right">
                        <p>${inclusionsHX[7]}</p>
                      </div>
                    </div>
                  </div>
                </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company2.Rates.HX.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-BZ" type="radio" name="rates" id="rates-BZ">
            <label for="rates-BZ">BZ - ${
							value.Company2.Rates.BZ.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>BZ - ${
                    value.Company2.Rates.BZ.RateData.name
                  }</p>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsBZ[0]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsBZ[1]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsBZ[2]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsBZ[3]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsBZ[4]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsBZ[5]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsBZ[6]}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company2.Rates.BZ.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-LQ" type="radio" name="rates" id="rates-LQ">
            <label for="rates-LQ">LQ - ${
							value.Company2.Rates.LQ.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>LQ - ${
                    value.Company2.Rates.LQ.RateData.name
                  }</p>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLQ[0]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLQ[1]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLQ[2]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLQ[3]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLQ[4]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLQ[5]}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company2.Rates.LQ.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-LV" type="radio" name="rates" id="rates-LV">
            <label for="rates-LV">LV - ${
							value.Company2.Rates.LV.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>LV - ${
                    value.Company2.Rates.LV.RateData.name
                  }</p>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLV[0]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLV[1]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLV[2]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLV[3]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLV[3]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLV[4]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLV[5]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsLV[6]}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company2.Rates.LV.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value"rates-H8" type="radio" name="rates" id="rates-H8">
            <label for="rates-H8">B9 - ${
							value.Company2.Rates.B9.RateData.name
						}</label>
          </div>
          <div class="card__aviable__title">
            <div class="modal">
              <div class="modal__content">
                <div class="modal__content__close">
                  <img src="./public/images/close.svg" alt="close">
                </div>
                <div class="modal__content__text">
                  <h3>Rates Information</h3>
                  <p>B9 - ${
                    value.Company2.Rates.B9.RateData.name
                  }/p>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsB9[0]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsB9[1]}</p>
                  </div>
                  <div class="modal__content__detail">
                    <img src="./public/images/right.svg" alt="right">
                    <p>${inclusionsB9[2]}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(
							value.Company2.Rates.B9.RateTotalAmount
						).toFixed(2)}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
	});
};
