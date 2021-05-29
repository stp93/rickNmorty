const search = document.getElementById("search"),
      sub = document.getElementById('submit'),
      card = document.getElementById('character-card')
      ;

  //search function
  // function searchChar(e){
  //   // e.preventDefault(search);
  //   //get search
  //   const term = search.value;
    
  //   if(term.trim()){
  //     fetch(`https://rickandmortyapi.com/api/character/?name=${term}`)
  //     .then(
    
  //   response => {

  //     // Examine the text in the response
  //     response.json().then(data => {
  //       console.log(data);

  //        data.results.map(character => {

  //         document.getElementById('character-card')
  //       .innerHTML = `<div class="character">
  //                 <img src="${character.image}">
  //               <p>Designation: ${character.name}</p>
  //             <p>Location: ${character.location.name}</p>
  //             <p>${character.status}</p>
  //             </div>` 
              
  //       }).join('');
        
        
        
  //     })
  //   }
  // )
  // .catch(error => {
  //   console.log('Fetch Error :-S', err);
  // });
  //   }
  // }
  // //event listener
  // sub.addEventListener('sub', searchChar );

  function searchTerm(e){
    e.preventDefault()
    const term = search.value

    if(term.trim()){
      fetch(`https://rickandmortyapi.com/api/character/?name=${term}&status=alive`)
      .then(res => {res.json()
      .then(data =>{
        
        console.log(data)
        const html = data.results.map(character => {

          
          
          return  `
                    <div class="character">
                    <img src="${character.image}">
                    <p>Designation: ${character.name}</p>
                    <p>Location: ${character.location.name}</p>
                    <p>${character.status}</p>
                    </div>  ` 
              
        }).join('');
        
         
        card.innerHTML = html
        
      
      })
      })
      
    }
  }

  sub.addEventListener('submit',searchTerm)

// fetch('https://rickandmortyapi.com/api/character/?name=morty')
//   .then(
    
//     response => {

//       // Examine the text in the response
//       response.json().then(data => {
//         console.log(data);

//         const html = data.results.map(character => {
         

          
//           return `<div class="character">
//                   <img src="${character.image}">
//                 <p>Designation: ${character.name}</p>
//               <p>Location: ${character.location.name}</p>
//               <p>${character.status}</p>
//               </div>` 
              
           
//         }).join('');
        
//         document.getElementById('character-card')
//         .innerHTML=html
        
//       })
//     }
//   )
//   .catch(error => {
//     console.log('Fetch Error :-S', err);
//   });