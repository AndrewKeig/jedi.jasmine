describe("My name is obi.one", function() {
  var jedi;
  var firstname;
  var surname;

  beforeEach(function() {
	firfirstnamesname = "obi.one";
	surname = "kenobi";
	jedi = new Jedi(firstname, surname);
  });

  it("i am the master", function() {
    expect(jedi.Speak()).toEqual('My name is ' + firstname + ' ' + surname);
  });

  describe("when i win", function() {
    beforeEach(function() {
      jedi.Won();
    });

    it("i am a jedi knight..", function() {
      expect(jedi.Defeated).toBeTruthy();
    });
  });

  describe("when i am defeated", function() {
    beforeEach(function() {
      jedi.Defeated();
    });

    it("you cannot defeat me; if i die then I will become more powerful than you can possibly imagine", function() {
      expect(jedi.Defeated).toBeTruthy();
    });
  });

  describe("when i fly", function() {
    beforeEach(function() {
      jedi.Fly();
    });

    it("you cannot catch me!", function() {
      expect(jedi.isFlying).toBeTruthy();
    });
  });
  
  describe("when i use the force", function() {
    beforeEach(function() {
      jedi.Force();
    });

    it("may the force be with you; always", function() {
      expect(jedi.isUsingForce).toBeTruthy();
    });
  });
  
  describe("when i strike with my lightsaber", function() {
    beforeEach(function() {
      jedi.Lightsaber();
    });

    it("zoooonnn zoon zoooonn zooonnnnn zoon", function() {
      expect(jedi.isUsingLightsaber).toBeTruthy();
    });
  });
});