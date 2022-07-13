var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ac8f250d-c838-45cc-ac6b-9a3b6e6d09dc","1b08e259-8666-4753-96ee-8062c3f2686f"],"propsByKey":{"ac8f250d-c838-45cc-ac6b-9a3b6e6d09dc":{"name":"ladraoSkin","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"8js8pahz5kuDChe0FRjnoscQswJlWLxU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ac8f250d-c838-45cc-ac6b-9a3b6e6d09dc.png"},"1b08e259-8666-4753-96ee-8062c3f2686f":{"name":"diamante ","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var laser0 = createSprite (80,245,300,5); 
laser0.shapeColor = "red"; 
var laser2 = createSprite(394,37,350,5);
laser2.shapeColor="red";

var ladrao = createSprite(34,362,20,20);
ladrao.shapeColor = "gray";

var diamond= createSprite(390,10,30,30);
diamond.shapeColor="blue";

ladrao.velocityX=0;
ladrao.velocityY=0;
laser0.velocityY=2;
laser2.velocityY=2;











function draw() {
  background("white");
  drawSprites();
  if(keyDown("right")){
ladrao.velocityX=4;
ladrao.velocityY=0;

}
if(keyDown("left")){
ladrao.velocityX=-4;
ladrao.velocityY=0;

}
if(keyDown("up")){
ladrao.velocityX=0;
ladrao.velocityY=-4;

}
if(keyDown("down")) {
ladrao.velocityX=0;
ladrao.velocityY=4;
}

if (keyWentUp("up")){
  ladrao.velocityX=0;
  ladrao.velocityY=0;
}
if (keyWentUp("down")){
  ladrao.velocityX=0;
  ladrao.velocityY=0;
}
if (keyWentUp("right")){
  ladrao.velocityX=0;
  ladrao.velocityY=0;
}
if (keyWentUp("left")){
  ladrao.velocityX=0;
  ladrao.velocityY=0;
}

  
  if (laser0.isTouching(ladrao) || laser2.isTouching(ladrao)){
 stroke(0);
 fill(0);
textSize(24);
text("Ladrao foi pego",120,200);
laser0.setVelocity(0,0);
laser2.setVelocity(0,0);
ladrao.setVelocity(0,0);

  }
  
  
  
  
  
  createEdgeSprites();
  laser0.bounceOff(bottomEdge);
  laser2.bounceOff(bottomEdge);
  laser0.bounceOff(topEdge);
  laser2.bounceOff(topEdge);
  ladrao.bounceOff(topEdge);
  ladrao.bounceOff(bottomEdge);
  ladrao.bounceOff(leftEdge);
  ladrao.bounceOff(rightEdge);
 
  if(diamond.isTouching(ladrao)){
    stroke(0) ;
    fill(0);
    textSize(24);
    text("ladrao pegou o diamante",120,200);
    laser0.setVelocity(0,0);
    laser2.setVelocity(0,0);
    ladrao.setVelocity(0,0);
    
    
    
}

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
