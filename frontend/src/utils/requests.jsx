export const handleSearchClick = (params) => async () => {
  console.log("seraching")

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

export const addToFavourites = (params) => async () => {
  console.log("added to favourites")
  let URL = "http://localhost:3001/favourites/add?"
  if(params.id) URL += `id=${params.id}`
  if(params.title) URL += `&title=${params.title}`
  if(params.imageURL) URL += `&imageURL=${params.imageURL}`
  if(params.price) URL += `&price=${params.price}`
  if(params.shipping) URL += `&shipping=${params.shipping}`

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  }

  const data = await fetch(URL,config)
  if(data.status!=200){
    return false
  }
  return true
}

export const getAllFavourites = async () =>{
  let URL = "http://localhost:3001/favourites/getAll"
  const response = await fetch(URL)
  const data = await response.json()
  return data
}

export const removeFromFavourites = (params) => async () => {
  console.log("removed from favourites")
  let URL = "http://localhost:3001/favourites/remove?"
  if(params.id) URL += `id=${params.id}`

  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  }

  const response = await fetch(URL,config)
  if(response.status!=200){
    return true
  }
  return false
}