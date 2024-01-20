# Phansite woot woot

## NOTE:
This site has been abandoned - There are some things with next.js that I'm not used to and I think it'd be better suited for me to use my time to create a normal react app :D


### Running This In A Dev Envt
- If you're running this in a dev enviroment, in next.config.js, comment out the 'basepath' attribute.
- For all assets that fall in the public folder, you'll need to remove basepath from the filepath (phansite)
For example if your images are in the `/public/images/` folder, change the file path from `/phansite/images/image.jpg` to `/images/image.jpg`, removing the basepath.

### Preparing this for deployment on GH pages
- The script is already preconfigured for deployment on the site, you'll need to do the following:
    - Uncomment the `basepath` attribute from `next.config.js`.
    - Change all assets that point to `public`, appending `/phansite/` to the start of it (can usually use find and replace)
