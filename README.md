Drought.js
============

This is a Chrome extension to get rid of the distracting bits of
Facebook (aka - all of it), while still allowing you to talk to the few friends you were already talking to. 

Optionally, you can include the list of friends online, by hiding the Facebook chat bar (clicking in the lower right corner.) 

##Installation

 * Download or fork the whole repo. 
 * Go to chrome://extensions in the browser, and click "Load unpacked extensions...". 
 * Load the folder in.
 * Enable or disable as desired, when desired. This makes it harder than a simple button would.
 * Go to Facebook. 
 * Press refresh.  
 * Enjoy.  

You can change the picture by adding any image you want to `images`, and referencing the URL at the top of `drought.js`.

##Development

`npm install fs brfs`

On editing the index.js file, run: 

`browserify -t brfs drought.js > build.js`


