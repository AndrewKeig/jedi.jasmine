var starwars = {
  jediknights : [],
  sithlords : [],
  
  addJedi: function (jedi) {
    for (item in jedi){
      this.jediknights.push(new Jedi(jedi[item].firstname, jedi[item].lastname));
    }
  },

  addSith: function (sith) {
    for (item in sith){
      this.sithlords.push(new Jedi(sith[item].firstname, sith[item].lastname));
    }
  },

  selectSith: function (sithId) {
    if(sithId > this.sithlords.length)
      return null;
    
    return this.sithlords[sithId-1];
  },
  
  selectJedi: function (jediId) {
    if(jediId > this.jediknights.length)
      return null;
    
    return this.jediknights[jediId-1];
  },
  
  battle: function (jediId, sithId) {
    return this.selectJedi(jediId).Name().concat(' vs ', this.selectSith(sithId).Name());
  }
};