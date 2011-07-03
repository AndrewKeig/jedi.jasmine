function Jedi(firstname, lastname) {
  this.Name = function() { return ''.concat(firstname, ' ' , lastname); }
  this.Firstname = function() { return firstname; }
  this.Lastname = function() { return lastname; }
}

Jedi.prototype.ForceLightning = function() {
  this.isUsingForceLightning = true;
  return 'Force Lightning';
};

Jedi.prototype.LightSaber = function() {
  this.isUsingLightSaber = true;
  return 'Light Saber';
};

Jedi.prototype.MindTrick = function() {
  this.isUsingMindTrick = true;
  return 'Mind Trick';
};

Jedi.prototype.Levitate = function() {
  this.isInTheAir = true;
  return 'Levitate';
};

