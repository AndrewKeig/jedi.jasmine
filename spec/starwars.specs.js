describe("Star Wars", function() {
  var jediknights;
  var sithlords;
  var jedi;
  var sith;
  
  beforeEach(function() {
	jediknights = [];
	sithlords = [];
	
	jedi = [
	  {id: 1, firstname: 'Obi-Wan', lastname: 'Kenobi'}
	];
	
	sith = [
	  {id: 1, firstname: 'Darth', lastname: 'Vadar'}
	];
  });
  
  describe("when i add jedi", function() {
    beforeEach(function() {
      starwars.addJedi(jedi);
    });

    it("should have jedi!", function() {
      expect(starwars.jediknights.length).toEqual(1);
    });
  });
  
  describe("when i add sith", function() {
    beforeEach(function() {
      starwars.addSith(sith);
    });

    it("should have sith!", function() {
      expect(starwars.sithlords.length).toEqual(1);
    });
  });
  
  describe("when i select jedi", function() {
    beforeEach(function() {
      starwars.addJedi(jedi);
    });

    it("should select a jedi!", function() {
      expect(starwars.selectJedi(1).Name()).toEqual('Obi-Wan Kenobi');
    });
  });
  
  describe("when i select sith", function() {
    beforeEach(function() {
      starwars.addJedi(jedi);
    });

    it("should select a sith!", function() {
      expect(starwars.selectSith(1).Name()).toEqual('Darth Vadar');
    });
  });
  
  describe("when i setup a battle", function() {
    it("should setup battle", function() {
      expect(starwars.battle(1,1)).toEqual('Obi-Wan Kenobi vs Darth Vadar');
    });
  });
});