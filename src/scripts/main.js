document.addEventListener("DOMContentLoaded", function (event) {

  const country_arr = new Array("Австралия", "Австрия", "Азербайджан", "Аландские острова", "Албания", "Алжир", "Американское Самоа", "Ангилья", "Ангола", "Андорра", "Антарктида", "Антигуа и Барбуда", "Аргентина", "Армения", "Аруба", "Афганистан", "Багамы", "Бангладеш", "Барбадос", "Бахрейн", "Беларусь", "Белиз", "Бельгия", "Бенин", "Берег Слоновой Кости", "Бермудские острова", "Болгария", "Боливия (Многонациональное Государство)", "Бонэйр, Синт-Эстатиус и Саба", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Британская территория в Индийском океане", "Бруней-Даруссалам", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Венгрия", "Венесуэла (Боливарианская Республика)", "Виргинские острова (Британские)", "Виргинские острова (США)", "Внешние малые острова Соединенных Штатов", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гваделупа", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Гернси", "Гибралтар", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Джерси", "Джибути", "Доминика", "Доминиканская Республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Идти", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран (Исламская Республика)", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо Верде", "Казахстан", "Каймановы острова", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Кирибати", "Китай", "Кокосовые (Килинг) острова", "Колумбия", "Коморские острова", "Конго", "Конго (Демократическая Республика)", "Корея (Народно-Демократическая Республика)", "Корея (Республика)", "Коста-Рика", "Куба", "Кувейт", "Кыргызстан", "Кюрасао", "Лаосская Народно-Демократическая Республика", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Майотта", "Макао", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Маршалловы Острова", "Мексика", "Микронезия (Федеративные Штаты)", "Мозамбик", "Молдова (Республика)", "Монако", "Монголия", "Монтсеррат", "Мьянма", "Намибия", "Науру", "Непал", "Нигер", "Нигерия", "Нидерланды", "Никарагуа", "Ниуэ", "Новая Зеландия", "Новая Каледония", "Норвегия", "Объединенные Арабские Эмираты", "Оман", "Остров Буве", "Остров Мэн", "Остров Норфолк", "Остров Рождества", "Остров Херд и острова Макдональд", "Острова Кука", "Острова Теркс и Кайкос", "Пакистан", "Палау", "Палестина, государство", "Панама", "Папуа - Новая Гвинея", "Парагвай", "Перу", "Питкэрн", "Польша", "Португалия", "Пуэрто-Рико", "Республика Северная Македония", "Реюньон", "Российская Федерация", "Руанда", "Румыния", "Самоа", "Сан-Марино", "Сан-Томе и Принсипи", "Санкт-Люсия", "Саудовская Аравия", "Святой Винсент и Гренадины", "Святой Елены, Вознесения и Тристан-да-Кунья", "Святой Престол ()", "Северные Марианские острова", "Сейшелы", "Сен-Бартелеми", "Сен-Мартен (французская часть)", "Сен-Пьер и Микелон", "Сенегал", "Сент-Китс и Невис", "Сербия", "Сингапур", "Синт-Мартен (голландская часть)", "Сирийская Арабская Республика", "Словакия", "Словения", "Соединенное Королевство Великобритании и Северной Ирландии", "Соединенные Штаты Америки", "Соломоновы острова", "Сомали", "Судан", "Суринам", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания, Объединенная Республика", "Тимор-Лешти", "Токелау", "Тонга", "Тринидад и Тобаго", "Тувалу", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уоллис и Футуна", "Уругвай", "Фарерские острова", "Фиджи", "Филиппины", "Финляндия", "Фолклендские острова (Мальвинские острова)", "Франция", "Французская Гвиана", "Французская Полинезия", "Французские Южные территории", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шпицберген и Ян Майен", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эль Сальвадор", "Эритрея", "Эсватини", "Эстония", "Эфиопия", "Южная Африка", "Южная Георгия и Южные Сандвичевы острова", "Южный Судан", "Ямайка", "Япония");
  const countrySelect = document.querySelector('#country');

  countrySelect.addEventListener('change', (event) => {
    if (event.target.value !== '-1') {
      countrySelect.classList.add('country-selected');
    } else {
      if (countrySelect.classList.contains('country-selected')) {
        countrySelect.classList.remove('country-selected');
      }
    }
  });

  function populateCountries(countryElementId, stateElementId) {
    const countryElement = document.getElementById(countryElementId);
    const LENGTH_LIMIT = 30;

    countryElement.length = 0;
    countryElement.options[0] = new Option('Страна', '-1');
    countryElement.selectedIndex = 0;

    for (let i = 0; i < country_arr.length; i++) {
      if (country_arr[i].length >= LENGTH_LIMIT) {
        country_arr[i] = country_arr[i].substring(0, LENGTH_LIMIT) + "...";
      }

      countryElement.options[countryElement.length] = new Option(country_arr[i], country_arr[i]);
    }
  }

  populateCountries("country");

  let input = document.querySelector("#telephone");
  window.intlTelInput(input,({
    utilsScript: './../build/js/utils.js',
    preferredCountries: ["ru","by","kz","ua" ],
    autoPlaceholder: 'aggressive',
    separateDialCode: true,
  }));

  const popups = document.querySelectorAll('.popup');
  const popupsWrappers = document.querySelectorAll('.popup-wrapper');
  const loginTransButton = document.querySelector('#login-transition');
  const sendButton = document.querySelector('#send-code');
  const closeButtons = document.querySelectorAll('.popup-close-wrapper');
  const popupInputs = document.querySelectorAll('.popup-input');

  popups.forEach(popup => {
    popup.addEventListener('click', (event) => {
      event.stopPropagation();
      if (event.target.classList.contains('popup')) {
        document.querySelector(`#${popup.id}`).checked = false;

        popupInputs.forEach(input => {
          input.value = null;
          if (input.classList.contains('country')) {
            input.value = -1;
            countrySelect.classList.remove('country-selected');
          }
        });

        popupsWrappers.forEach(wrapper => {
          if (!wrapper.classList.contains('signup-wrapper')) {
            wrapper.classList.add('hide');
          } else {
            wrapper.classList.remove('hide');
          }
        });
      }
    });
  });

  loginTransButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupsWrappers.forEach(wrapper => {
      if (!wrapper.classList.contains('login-wrapper')) {
        if (!wrapper.classList.contains('hide')) {
          wrapper.classList.add('hide');
        }
      } else {
        if (wrapper.classList.contains('hide')) {
          wrapper.classList.remove('hide');
        }
      }
    });
  });

  sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupsWrappers.forEach(wrapper => {
      if (!wrapper.classList.contains('confirm-wrapper')) {
        if (!wrapper.classList.contains('hide')) {
          wrapper.classList.add('hide');
        }
      } else {
        if (wrapper.classList.contains('hide')) {
          wrapper.classList.remove('hide');
        }
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      popupsWrappers.forEach(wrapper => {
        if (!wrapper.classList.contains('signup-wrapper')) {
          wrapper.classList.add('hide');

          popupInputs.forEach(input => {
            input.value = null;
            if (input.classList.contains('country')) {
              input.value = -1;
              countrySelect.classList.remove('country-selected');
            }
          });
        } else {
          wrapper.classList.remove('hide');
        }
      });
    });
  });

});