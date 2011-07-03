describe("My name is Obi-Wan Kenobi", function() {
  var jedi;
  var firstname;
  var surname;

  beforeEach(function() {
	firstname = "Obi-Wan";
	surname = "Kenobi";
	jedi = new Jedi(firstname, surname);
  });
  
  describe("when i use force lightning", function() {
    beforeEach(function() {
      jedi.ForceLightning();
    });

    it("electric!", function() {
      expect(jedi.isUsingForceLightning).toBeTruthy();
    });
  });
  
  describe("when i use force lightning", function() {
    beforeEach(function() {
      jedi.ForceLightning();
    });

    it("electric!", function() {
      expect(jedi.isUsingForceLightning).toBeTruthy();
    });
  });

  describe("when i levitate", function() {
    beforeEach(function() {
      jedi.Levitate();
    });

    it("you cannot catch me!", function() {
      expect(jedi.isInTheAir).toBeTruthy();
    });
  });
  
  describe("when i use a mind trick", function() {
    beforeEach(function() {
      jedi.MindTrick();
    });

    it("these are the not the scripts you are looking for", function() {
      expect(jedi.isUsingMindTrick).toBeTruthy();
    });
  });
  
  describe("when i strike with my lightsaber", function() {
    beforeEach(function() {
      jedi.LightSaber();
    });

    it("zoooonnn zoon zoooonn zooonnnnn zoon", function() {
      expect(jedi.isUsingLightSaber).toBeTruthy();
    });
  });
});