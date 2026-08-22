const API_KEY = '6284854d-f306-4c95-ad4a-be96c1789dc4'
 
 prod = document.getElementById('products') 
 
 fetchData(); 

async function fetchData(){ 
    try{

const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
     method: 'GET' 
    // headers: {
        
    //     'X-Api-Key': API_KEY,
    //     'Content-Type': 'application/json'
    // } 
})

   if(!response.ok){
                throw new Error("Could not locate resource") 
        }

        const data = await response.json();  
       const productImage= data.sprites.front_default;  
       const imgElement = document.getElementById('product-id'); 

       imgElement.src =  productImage; 
       imgElement.style.display = 'block' 

       console.log(data.sprites)
    }
    catch(error){
        console.error(error)
    }
}


    