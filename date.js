

exports.getDate = function(){




    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month:"long"
    };
  
    return today.toLocaleDateString("ja-JP", options); // use ("en-US") for English 

   


}

exports.getDay = function(){




    let today = new Date();

    let options = {
        weekday: "long",
        
    };
  
    return today.toLocaleDateString("ja-JP", options); // use ("en-US") for English 

    

}



