export const exerciseOptions={
    method:'GET',
    headers:{
        
              'X-RapidAPI-Key': '6808a059fdmsh0b04190ad27d1dbp16cea8jsn751c01ad0075',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
    



export const fetchData = async(url,options)=>{
const response=await fetch(url,options)
const data = await response.json();

return data;
}