/*
* Javascript Set Class
*/


// Construct of set()
function set(array){
  this.sets = array;
}


// Methods of set
/*
* add() => Add a value to set
* remove() => Remove a value to set 
* value() => return value of set
*/
set.prototype = {
  
  // Add a value or an array of value to set
  add: function(data){
    if($.isArray(data)){
      for(item in data){
        if($.inArray(data[item], this.sets) < 0){
          this.sets.push(data[item]);
        }
      }
    } else {
      if($.inArray(data, this.sets) < 0){
          this.sets.push(data);
        }
    }
    
    return this.sets;
  },
  
  // Remove a value or an array of value to set
  remove: function(obj){
    if(!$.isArray(obj)){  
      var pos = this.sets.indexOf(obj);
      if(pos > -1){
        this.sets.splice(pos, 1);
      }
    } else {
      for(o in obj){
        var pos = this.sets.indexOf(obj[o]);
        if(pos > -1){
          this.sets.splice(pos, 1);
        }
      }
    }
    return this.sets;
  },
  
  // Return set
  value: function(){
    return this.sets;
  },
  
}
