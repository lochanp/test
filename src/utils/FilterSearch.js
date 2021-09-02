export function filterSearch(searchResults,values,query){
    let filterData = {
        "price": [],
        "size": [],
        "orientation": [],
        "medium": [],
        "style": [],
        "searchTerm": query.get("q")
      }
  
      for(let i in values){
        switch (i) {
          case "price":
            let temp1 = values[i].split(" ");
            let arr1 = [];
            for(let i of temp1){
              if(i!==""){
                arr1.push(searchResults.filters.priceFilter[i].filter)
              }
            }
            filterData[i] = arr1;
            break;
          case "size":
            let temp2 = values[i].split(" ");
            let arr2 = [];
            for(let i of temp2){
              if(i!==""){
                arr2.push(searchResults.filters.sizeFilter[i].filter)
              }
            }
            filterData[i] = arr2;
            break;
          case "orientation":
            let temp3 = values[i].split(" ");
            let arr3 = [];
            for(let i of temp3){
              if(i!==""){
                arr3.push(searchResults.filters.orientationFilter[i].filter)
              }
            }
            filterData[i] = arr3;
            break;
          case "medium":
            let temp4 = values[i].split(" ");
            let arr4 = [];
            for(let i of temp4){
              if(i!==""){
                arr4.push(searchResults.filters.mediumList[i]["_id"])
              }
            }
            filterData[i] = arr4;
            break;
          case "style":
            let temp5 = values[i].split(" ");
            let arr5 = [];
            for(let i of temp5){
              if(i!==""){
                arr5.push(searchResults.filters.styleList[i]["_id"])
              }
            }
            filterData[i] = arr5;
            break;
          case "q":
            console.log(query.get("q"))
            break;
          default:
            break;
        }
      }
  
    return filterData
}