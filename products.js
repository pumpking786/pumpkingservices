function messanger(){
            location.href='https://www.facebook.com/permalink.php?story_fbid=pfbid02WvyuyEUSXVXbk8K8wqd737mDfwV9A5TWnxSAyFrBZCKLMN9j8qnVqvA34igWHVoHl&id=61555977617470';
}
    const search = () =>{
                const searchbox= document.getElementById("search-item").value.toUpperCase();
                const storeitems = document.getElementById("product-cards")
                const product = document.querySelectorAll(".card")
                const pname=storeitems.getElementsByTagName("h5")

                for(var i=0; i<pname.length; i++){
                    let match = product[i].getElementsByTagName('h5')[0];

                    if(match){
                       let textvalue= match.textContent || match.innerHTML

                       if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                        product[i].style.display="";
                       }else{
                        product[i].style.display="none";
                       }
                    }

                }
        }
        const searching = () =>{
            const searchbox= document.getElementById("search-author").value.toUpperCase();
            const storeitems = document.getElementById("product-cards")
            const product = document.querySelectorAll(".card")
            const pname=storeitems.querySelectorAll(".author")

            for(var i=0; i<pname.length; i++){
                let match = product[i].querySelectorAll('.author')[0];

                if(match){
                   let textvalue= match.textContent || match.innerHTML

                   if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                    product[i].style.display="";
                   }else{
                    product[i].style.display="none";
                   }
                }

            }
    }
    const sidebar = document.getElementById("productsidebar")

    function showSidebar(){
        sidebar.classList.add("show")
    }
    function hideSidebar(){
        sidebar.classList.remove("show")
    }