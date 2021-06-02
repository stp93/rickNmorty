const search = document.getElementById("search"),
      sub = document.getElementById('submit'),
      card = document.getElementById('character-card'),
      next = document.getElementById('next')
      
      ;
  //let page = 0
  
  // function searchTerm(e){
  //   e.preventDefault()
  //   const term = search.value
  //   page = ++page
    
    
  //   if(term.trim()){
  //     fetch(`https://rickandmortyapi.com/api/character/?name=${term}&page=${page}`)
  //     .then(res => {res.json()
  //     .then(data =>{
      
  //       if(page == data.pages){
  //         --page
  //       }
  //       console.log(data)
  //       const html = data.results.map(character => {

          
          
  //         return  `
  //                   <div class="character">
  //                   <img src="${character.image}">
  //                   <p>Designation: ${character.name}</p>
  //                   <p>Location: ${character.location.name}</p>
  //                   <p>${character.status}</p>
  //                   </div>  ` 
              
  //       }).join('');
        
        
  //       card.innerHTML = html
        
  //     })
  //   })
      
      
      
  //   }
    
  // }

  const searchCharacters = async searchChar => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/`)
      const character= await res.json();

      console.log(character)
      
      let matches = character.results.filter(char=>{
        const regex = new RegExp(`^${searchChar}`, 'gi');
        return char.name.match(regex)|| char.location.name.match(regex);
      })
      if (searchChar.length === 0){
        matches = []
        card.innerHTML = '';
      }
      outputHtml(matches);
      

    }
  
    const outputHtml = matches =>{
      if(matches.length > 0){
        const html = matches.map(match =>`
                      <div class="character">
                     <img src="${match.image}">
                     <p>Designation: ${match.name}</p>
                     <p>Location: ${match.location.name}</p>
                     <p>${match.status}</p>
                    </div>
        `).join('');
        card.innerHTML = html;
      }
    }
  
      //const html = data.results.map(character => {

          
          
  //         return  `
  //                   <div class="character">
  //                   <img src="${character.image}">
  //                   <p>Designation: ${character.name}</p>
  //                   <p>Location: ${character.location.name}</p>
  //                   <p>${character.status}</p>
  //                   </div>  ` 
              
  //       }).join('');
        
        
         
  



  search.addEventListener('input', ()=> searchCharacters(search.value))
  // sub.addEventListener('submit',searchTerm,page = 0)
  // next.addEventListener('submit', searchTerm)
  