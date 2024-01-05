function messanger(){
            location.href='https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F102454482876255%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0';
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
