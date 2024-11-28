

   const cardContainer = document.querySelector(`.row`)

fetch (`https://jsonplaceholder.typicode.com/users`)
   .then((resp) => resp.json())
   .then((data) => loadCards(data))
   .catch(error => {
    if (!resp.ok) {
      cardContainer.innerHTML += error("Error al cargar los usuarios. Inténtalo de nuevo más tarde. ");
      
    }
    
  })

   function loadCards(data) {
    cardContainer.innerHTML = ""
    data.forEach(element => {
        const card_template = `  <div class="card col-md-4 col-sm-10 mb-3">
        <h6 id="head">Nombre: ${element.name}</h6>
        <p>Usuario: ${element.username}</p>
        <p>Email: ${element.email}</p>
        <p>Empresa: ${element.company.name}</p>
      </div>`
      cardContainer.innerHTML += card_template

      console.log(data) 
        
    }); 

        
   
  
    }   
   
