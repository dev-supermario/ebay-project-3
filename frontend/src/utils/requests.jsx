
export const useRequest = () => {

  // possibly handle setting data here

  const handleSearch = (params) => async () => {
  
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

      const config = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    
      const response = await fetch(URL,config)
      return response.json()
  }

  const getItemDetails = async (params) => {


      let URL = `http://localhost:3001/shopping/getSingleItem?itemID=${params.id}&needDescription=true`

      const config = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }

      const response = await fetch(URL,config)
      return response.json()

  }
  
  const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data
      } catch (error) {
        console.error(error);
      }
    };
  
  const addToFavourites = async (params) => {
    console.log("added to favourites")
    let URL = "http://localhost:3001/favourites/add?"
    const config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }
  
    const data = await fetch(URL,config)
    if(data.status!=200){
      return false
    }
    return true
  }
  
  const getAllFavourites = async () =>{
    let URL = "http://localhost:3001/favourites/getAll"
    const response = await fetch(URL)
    const data = await response.json()
    return data
  }
  
  const removeFromFavourites = async (params) => {
    console.log(params)
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

  const getPhotos = async (params) => {

    console.log("get photos")
    let URL = "http://localhost:3001/utils/getPhotos"
    if(params.keyword) URL += `?keyword=${params.keyword}`

    // console.log(URL)

    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }

    const response = await fetch(URL,config)
    return response.json()


  }

  const getSimilarProducts = async (params) => {
    let URL = "http://localhost:3001/shopping/getSimilarProducts?"

    URL += `itemID=${params.id}`

    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }

    const response = await fetch(URL,config)
    return response.json()

  }

  const getZipcodes = async (keyword) => {

    console.log(keyword)
    let URL = "http://localhost:3001/utils/getZipcodes?"

    URL += `keyword=${keyword}`

    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }

    const response = await fetch(URL,config)
    return response


  }

  return { handleSearch,getItemDetails ,fetchIp, addToFavourites, removeFromFavourites, getAllFavourites, getPhotos, getSimilarProducts, getZipcodes }

}



