(function( game, global ) {

	game.isRunning = false;
	game.run = function() {
		game.isRunning = true;
		
		var canvasElem = document.getElementById( "game-red" );
		var world = boxbox.createWorld( canvasElem, { collisionOutlines: false } );

		$( document ).on( "pig.destroyed", function() {
			setTimeout( function() {
				if ( !bird._ops.pigsLeft && $( Reveal.getCurrentSlide() ).find( "canvas" ).length ) {
					if ( confirm( "Yay, you beat the pigs! Continue?" ) ) {
						Reveal.right();
						$( canvasElem ).remove();
					}
				}
			}, 500 );
		});

		var bird = world.createEntity({
			name: "bird",
			shape: "circle",
			radius: 1,
			image: "../img/red-bird-game.png",
			imageStretchToFit: true,
			density: 4,
			x: 2,
			onKeyDown: function( e ) {
				var key = global.keyDecode( e ),
					force = 600;

				console.log( "key", key );
				switch ( key ) {
					case "left":  this.setForce( "movement", force, 270 ); break;
					case "up":    this.setForce( "movement", force,   0 ); break;
					case "right": this.setForce( "movement", force,  90 ); break;
					case "down":  this.setForce( "movement", force, 180 ); break;
					default:      this.applyImpulse( 200,  60 );
				}
				this.friction( 0.1 );
			},
			onKeyUp: function( e ) {
				this.clearForce( "movement" );
			},
			onRender: function( ctx ) {
				ctx.font = "20pt Arial";
				ctx.fillStyle = "white";
				ctx.fillText( "Score: " + this._ops.score, 20, 20 );
			},
			score: 0,
			pigsLeft: 2
		});

	    $( canvasElem ).on( "click", function() {
	        bird._ops.onKeyDown.apply( bird, [ { keyCode: 50 } ] )
	    });
	    
		world.createEntity({
			name: "ground",
			shape: "square",
			type: "static",
			color: "rgb(0,100,0)",
			width: 22,
			height: 0.5,
			y: 12
		});

		var block = {
			name: "block",
			shape: "square",
			color: "brown",
			width: 0.5,
			height: 4,
			y: 10,
			onImpact: function( entity, force ) {
				if ( entity.name() === "bird" ) {
					bird._ops.score++;
					this.color( "black" );
				}
				if ( force > 100 && entity.name() !== "ground" ) {
					this.destroy();
				}
			}
		};

		world.createEntity( block, { x: 13 } );

		world.createEntity( block, { x: 19 } );

		world.createEntity( block, {
			x: 16,
			y: 7,
			width: 7,
			height: 0.5
		});

		var pig = world.createEntity({
			name: "pig",
			shape: "circle",
			radius: 1,
			image: "../img/soldier-pig.png",
			imageStretchToFit: true,
			density: 4,
			x: 16.5,
			y: 11,
			onImpact: function( entity, force ) {
				if ( force > 75 && entity.name() !== "ground" ) {
					pig.destroy();
					bird._ops.pigsLeft--;
					$( document ).trigger( "pig.destroyed" );
				}
			}
		});

		world.createEntity( block, { x: 14, y: 6, height: 3 } );
		world.createEntity( block, { x: 18, y: 6, height: 3 } );
		world.createEntity( block, { x: 16, y: 4, width: 5, height: 0.5 } );

		var smallPig = world.createEntity({
			name: "pig",
			shape: "circle",
			radius: 1,
			image: "../img/happy-pig.png",
			imageStretchToFit: true,
			density: 4,
			x: 16.5,
			y: 6.3,
			onImpact: function( entity, force ) {
				if ( force > 75 && entity.name() !== "ground" ) {
					smallPig.destroy();
					bird._ops.pigsLeft--;
					$( document ).trigger( "pig.destroyed" );
				}
			}
		});

		world.createEntity({
			x: 20.75,
			y: 0,
			type: "static",
			height: 23.5,
			name: "block",
			shape: "square",
			color: "black",
			borderColor: "black",
			width: 0.1
		});

	};
    
}( window.game = window.game || {}, this ));