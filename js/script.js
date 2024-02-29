function pare() {
  let countNumber = +prompt("Введите четное количество карт до 12");

  createCardList(shaffle(getArray(countNumber)));
  // const array = getArray(countNumber);

  function getArray(count) {
    if (count % 2 === 0) {
      let array = [];
      for (let i = 1; i <= count / 2; i++) {
        array.push(i);
        array.push(i);
      }
      return array;
    } else {
      // Число не четное
    }
  }

  function shaffle(array) {
    let m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  function createCardList(shaffledCards) {
    const cards = document.createElement("ul");
    cards.classList.add("list", "list-reset");
    for (let i = 0; i < shaffledCards.length; i++) {
      let item = createCard(shaffledCards[i]);
      cards.append(item);
    }

    let timeBox = document.createElement("div");
    timeBox.classList.add("time");
    timeBox.textContent = "0:00";

    const container = document.createElement("div");
    container.classList.add("container");
    container.append(timeBox, cards);

    const section = document.createElement("section");
    section.append(container);

    document.body.append(section);

    let secNum = 60;
    timer();

    function timer() {
      let timerNum;
      clearInterval(timerNum);

      timerNum = setInterval(() => {
        if (isFinish()) {
          clearInterval(timerNum);
          console.log("Все карты открыты.");
        }else{
            if (secNum > 0) {
                secNum--;
                timeBox.textContent = secNum;
                console.log(secNum);
              } else if (secNum < 1) {
                clearInterval(timerNum);
                console.log("Время вышло");
              }
        }
      }, 1000);
    }
  }

  

  function createCard(num) {
    let item = document.createElement("li");
    item.classList.add("item");
    item.textContent = num;
    item.addEventListener("click", function () {
      if (
        !this.classList.contains("pare") &&
        !this.classList.contains("opened-card")
      ) {
        this.classList.add("pare");

        let pares = Array.from(document.getElementsByClassName("pare"));

        if (pares.length > 1) {
          if (pares[0].textContent === pares[1].textContent) {
            pares.forEach(function (element) {
              element.classList.add("opened-card");
              element.classList.remove("pare");
              isFinish();
            });
          } else {
            pares.forEach(function (element) {
              element.classList.remove("pare");
            });
          }
        }
      }
    });
    return item;
  }

  function isFinish() {
    let openedCards = Array.from(
      document.getElementsByClassName("opened-card")
    );
    console.log(openedCards.length, countNumber);
    if (openedCards.length === countNumber) {
      console.log("Вы победили!");
      return true;
    }
  }
}

pare();
