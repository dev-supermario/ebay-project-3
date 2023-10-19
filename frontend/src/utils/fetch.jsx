export const handleSearchClick = (params) => async () => {

    let URL = "http://localhost:3001/shopping/getItems?itemsPerPage=50"

    if(params.keyword) URL += `&keyword=${params.keyword}`
    if(params.zipcodeText) URL += `&buyerZipcode=${params.zipcodeText}`
    if(params.distance) URL += `&distance=${params.distance}`
    if(params.conditionNew) URL += `&itemNew=${params.conditionNew}`
    if(params.conditionUsed) URL += `&itemUsed=${params.conditionUsed}`
    if(params.conditionUnspecified) URL += `&itemUnspecified=${params.conditionUnspecified}`
    if(params.freeShipping) URL += `&freeShipping=${params.freeShipping}`
    if(params.localPickup) URL += `&localPickup=${params.localPickup}`
    if(params.categoryOptions!="AllCategories") URL += `&category=${params.categoryOptions}`

    console.log(URL)

    const response = await fetch(URL)
    return response.json()
}

export const fetchIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  };