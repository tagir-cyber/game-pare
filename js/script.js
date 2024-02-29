function pare(){
    let countNumber = prompt("Введите четное количество карт до 12");

    const array = getArray(countNumber);
    // const shaffledArray = shaffle(array);


    function getArray (count){
        let array = [];
        for(let i=1; i<=count/2; i++){
            array.push(i);
            array.push(i);
        }
        return array
    }

    function shaffle(array){
        let m = array.length, t, i;

        while (m) {
          i = Math.floor(Math.random() * m--);

          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
    }

    function createCardList(shaffledCards){
        const cards = document.createElement("ul");
        cards.classList.add("list", "list-reset");
        for(let i=0; i<shaffledCards.length; i++){
            let item = document.createElement("li");
            item.classList.add("item");
            item.textContent = shaffledCards[i];
            cards.append(item);
        }
        const container = document.createElement("div");
        container.classList.add("container");
        container.append(cards);
        const section = document.createElement("section");
        section.append(container)
        document.body.append(section);
    }
    
    createCardList(shaffle(array));
}

pare()