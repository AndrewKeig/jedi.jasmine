function Jedi(firstname, lastname) {
this.Firstname = firstname
this.Surname = lastname;
}

Jedi.prototype.Lightsaber = function() {
  this.isUsingLightsaber = true;
};

Jedi.prototype.Force = function() {
  this.isUsingForce = true;
};

Jedi.prototype.StopForce = function() {
  this.isUsingForce =false;
};

Jedi.prototype.Fly = function() {
  this.isFlying = true;
};

Jedi.prototype.Won = function() {
  this.isDead = false;
};

Jedi.prototype.Defeated = function() {
  this.isDead = true;
};

Jedi.prototype.Speak = function() {
  return 'My name is ' + this.Firstname + ' ' + this.Surname;
};