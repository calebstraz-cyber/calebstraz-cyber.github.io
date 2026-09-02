$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 610, 20, 290);
createPlatform(600, 480, 50, 50, "red");
createPlatform(885, 375, 50, 50, "red");
createPlatform(1150, 300, 5, 30);
createPlatform(650, 180, 290, 20);
createPlatform(400, 400, 100, 5);
createPlatform(500, 300, 5, 100);
createPlatform(590, 1, 5, 300);
createPlatform(300, 500, 50, 5);
    // TODO 3 - Create Collectables
createCollectable("max", 1000, 250, 0, 0);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("diamond", 600, 210, 0, 0);
createCollectable("diamond", 450, 350, 0, 0);
    
    // TODO 4 - Create Cannons
  createCannon("top", 200, 700);
createCannon("right", 300, 2500);
createCannon("right", 800, 00);    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
