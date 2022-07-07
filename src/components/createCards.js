export const createCards = (data, card) => {
  // Destructuring the card object
  const { cars } = data;
  const datos = Object.entries(cars);
  // Crear las tarjetas
  datos.forEach(([key, value]) => {
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
          <p><span>${value.Company1.Features2.largeSuitcase}</span> Large Suitcase</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public//images/bag.svg" alt="bag">
          <p><span>${value.Company1.Features2.smallSuitcase}</span> Small Suitcase</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/door.svg" alt="door">
          <p><span>${value.Company1.Features2.doors}</span> Doors</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/transmision.svg" alt="transmision">
          <p><span>${value.Company1.Features2.transmition}</span> Transmition</p>
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
            <input value="rates-AR" type="radio" name="rates-AR" id="rates-AR" checked>
            <label for="rates-AR">AR - ${value.Company1.Rates.AR.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p >Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company1.Rates.AR.RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-4M" type="radio" name="rates-4M" id="rates-4M">
            <label for="rates-4M">4M - ${value.Company1.Rates["4M"].RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company1.Rates["4M"].RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-F2" type="radio" name="rates-F2" id="rates-F2">
            <label for="rates-F2">F2 - ${value.Company1.Rates.F2.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company1.Rates.F2.RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-SC" type="radio" name="rates-SC" id="rates-SC">
            <label for="rates-SC">SC - ${value.Company1.Rates.SC.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company1.Rates.SC.RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-H8" type="radio" name="rates-H8" id="rates-H8">
            <label for="rates-H8">H8 - ${value.Company1.Rates.H8.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company1.Rates.H8.RateTotalAmount).toFixed(2)}</span></p>
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
          <p><span>${value.Company2.Features2.largeSuitcase}</span> Large Suitcase</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public//images/bag.svg" alt="bag">
          <p><span>${value.Company2.Features2.smallSuitcase}</span> Small Suitcase</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/door.svg" alt="door">
          <p><span>${value.Company2.Features2.doors}</span> Doors</p>
        </div>
        <div class="card__characteristics__item">
          <img src="./public/images/transmision.svg" alt="transmision">
          <p><span>${value.Company2.Features2.transmition}</span> Transmition</p>
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
            <input value="rates-HX" type="radio" name="rates-HX" id="rates-HX">
            <label for="rates-HX">HX - ${value.Company2.Rates.HX.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company2.Rates.HX.RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-BZ" type="radio" name="rates-ar" id="rates-BZ">
            <label for="rates-BZ">BZ - ${value.Company2.Rates.BZ.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company2.Rates.BZ.RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-LQ" type="radio" name="rates-LQ" id="rates-LQ">
            <label for="rates-LQ">LQ - ${value.Company2.Rates.LQ.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company2.Rates.LQ.RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value="rates-LV" type="radio" name="rates-ar" id="rates-LV">
            <label for="rates-LV">LV - ${value.Company2.Rates.LV.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company2.Rates.LV.RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
        <div class="card__aviable__options">
          <div class="card__aviable__input">
            <input value"rates-H8" type="radio" name="rates-ar" id="rates-H8">
            <label for="rates-H8">H8 - ${value.Company2.Rates.B9.RateData.name}</label>
          </div>
          <div class="card__aviable__title">
            <p>Rates Inclusions</p>
          </div>
          <div class="card__aviable__price">
            <p>USD <span>${parseInt(value.Company2.Rates.B9.RateTotalAmount).toFixed(2)}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
    
  })
}