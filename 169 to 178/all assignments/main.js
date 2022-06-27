let req = new XMLHttpRequest();
req.open("GET", "http://myjson.dit.upm.es/api/bins/hmhf");
req.send()
console.log(req);
let updatedData = {}
req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status === 200) {
        console.log(`JSON Object Content Here`);
        console.log("data loaded");
        let jsData = JSON.parse(req.responseText)
        for (let i = 0; i < jsData.length; i++) {
            jsData[i].category = "all";
            console.log(jsData[i])
            let jsonData = JSON.stringify(jsData);
            updatedData = jsonData;

        }
        let dataDiv = ""
        let divData = document.getElementById("data");
        console.log(updatedData);
        jsData.forEach((obj) => {
            dataDiv += `
                        <div>
                            <h2>Title ${obj.title}</h2>
                            <p>Article Number ${obj.id} Body</p>
                            <p>Author: ${obj.name}</p>
                            <p>Category: ${obj.category}</p>
                        </div>
        `
            divData.innerHTML = dataDiv;
        })

    }
}
// done //