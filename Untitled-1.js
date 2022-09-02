var url="http://api.opentripmap.com/0.1/ru/places/bbox?lon_min=38.364285&lat_min=59.855685&lon_max=38.372809&lat_max=59.859052&kinds=churches&format=geojson&apikey=5ae2e3f221c38a28845f05b6cc54b9fa3edfbc9d526c02bd604edf23" 
fetch(url).then(r=>r.json()).then(t=>t.features).then(c=>traitement(c)) 


function traitement(x) {
console.log(x)


     for(i=0;i<x.length;i++) { 

        var Name= x[i].properties.name
         var Type= x[i].properties.kinds 
         var Rate= x[i].properties.rate
         
          //les infos

          '<div class="mounument"><img src="image/img1.jpg" alt=""><p> '+Name+'</p> <p>'+Type+'</p><p>'+Rate+'</p></div>'
          
          
         
          
          

           //affichage s



            document.getElementById("monuments").innerHTML+=div } }