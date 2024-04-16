export const exerciseOptions={
    method:'GET',
    headers:{
       'X-RapidAPI-Key': '088c27187bmsh05e1453b515ae15p18cdeajsndff2303065cc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

     }
    
//  export const youtubeOptions =  {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '6808a059fdmsh0b04190ad27d1dbp16cea8jsn751c01ad0075',
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//   }
}


export const fetchData = async(url,options)=>{
const response=await fetch(url,options)
const data = await response.json();

return data;
}
