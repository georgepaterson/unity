# jQuery promises demo

A demonstration of jQuery promises.

## Getting started

Requires Node and Node Express.

You will need to run in terminal, in the parent folder:

	npm install
	
and

	bower install
	
To get the required files.

Then run Grunt in terminal, in the parent folder:

	 grunt

## Features	

Test 1 is a successful test where the correct key is returned after 3 seconds allowing further actions to use the key.

Test 2 does not return the correct key after 1 second, this prevents further actions.

This demonstration creates a single Node server with two ports for Express and Interfake. Requests are made using a query string only for this demostration.