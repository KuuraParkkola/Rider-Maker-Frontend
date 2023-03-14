# Rider Maker
This is a utility for bands and technicians to quickly create technical riders for events and performances. A running instance of the site can be found at [this website](https://ridermaker.frostysound.fi).

## What does this do?
This web application together with its backend component dynamically build documents which can be easily rendered into pdf files with a click of a button. To test this out, go to the website linked above and click the `Load Demo` button and see for yourself!

The frontend builds a document definition which instructs the backend on how the document should be built. The backend performs the rendering of the document. You can find the backend in [this repository](https://github.com/KuuraParkkola/Rider-Maker-Backend).

## Notes
- This application was drawn together very quickly and thus, especially the front end is not very robust when it comes to importing documents. You should not modify the exported documents or the front end will likely not behave correctly. If it does break, a refresh should get you back up and running.
