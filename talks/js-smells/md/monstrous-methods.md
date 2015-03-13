# Maximum Methods

------

(a.k.a. ComposedMethod, TallerThanMe, LongMethodSmell)

------

```
(function( undefined ) {
    "use strict";

    function test1( arg1, arg2, arg3, arg4 ) {
        console.log( "too many parameters!" );
        if ( arg1 === 1 ) {
            console.log( arg1 );
            if ( arg2 === 2 ) {
                console.log( arg2 );
                if( arg3 === 3 ) {
                    console.log( "too much nesting!" );
                    console.log( arg3 );
                    console.log( arg4 );
                }
            }
        }
        console.log( "too many statements!" );
    }

    test1( 1, 2, 3, 4 );
}());
```

------

```
/* jshint maxparams:3, maxdepth:2, maxstatements:5 */
```
