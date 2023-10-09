async function getLocation(ip){
    let data;
    const URL = `https://ipapi.co/${ip}/json/`
    fetch(URL)
    .then(res => res.json())
    .then(res => data = res)

    return data
}