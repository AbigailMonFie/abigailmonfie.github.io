let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #5d3d68;">Creo proyectos de programación y amo a los animales. :3</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
