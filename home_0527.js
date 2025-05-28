const fruitArr = [];

// 과일 종류와 개수를 입력해서 저장하는 기능
function addFruit(){
    const type = document.querySelector("input[name=type]").value;
    const count = document.querySelector("input[name=count]").value;
    const obj = {
        type : type,
        count : count
    };

    fruitArr.push(obj);

    console.log(fruitArr);
}

// 입력된 과일 목록을 브라우저(localStorage)에 저장하는 기능
function enrollFruit(){
    const jsonStr = JSON.stringify(fruitArr);
    localStorage.setItem("fruit", jsonStr);
}

//브라우저에 저장된 과일 데이터를 꺼내서 화면에 보여주는 기능
function selectFruit(){
    const result = localStorage.getItem("fruit");
    const arr = JSON.parse(result);
    console.log(arr);
    for(let obj of arr){
        console.log(obj);

        const h3Tag = document.createElement("h3");
        h3Tag.innerHTML = obj.type + " / " + obj.count;

        const divTag = document.querySelector("#fruit-list");
        divTag.appendChild(h3Tag);
    }
    
}
