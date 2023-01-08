# cyqur-app-pwa
Cyqur PWA

Secret Sharing with offline functionality  
https://cyqur.app/c_index.html  
Reengineered from the chrome extension (CRX)

13742.x  
Jan 2023 -> 
  
## App  
Chromium extension  
Safari extension  
USB / Flash standalone  

## This Repo
WWW / Web app (for smartphone devices mostly)  
Stored as a zip file with sha1 checksum, file size and date 
  
### Aim
Fast  
No dependency on libraries
Use browser DOM  
Use browser crytpography  
Standalone  
Operates offline (with key assets cached via service worker)
  
## Functionality
Multiple languages  
Logon locally  
Enter secret  
Enter pass phrases (crypto wallet types) up to 24  
Tag the secret  
Apply main or new password  
Fragment into 10 pieces  
Save to local vault  
Download fragments as text packets  
View encrypted secrets  
View the vault  
Delete vault items  
Clear all cache from browser  
Import packets  
Save to Ethereum as NFT / Proof of record  
Save packets to Cloudinary (see cloudinary.com)  
Audit trail of all events  
  
#### Not in this Repo:  
## Functionality (SAAS)
Logon and buy credits / tokens  
Choose Blockchain  
Choose clouds to save fragments to  
Choose encryption type  
Save Custodian of last resort email accounts / @accounts  
Notify to COLR accounts  

## PWA versus CRX
CRX (Chromium) extensions use the same c_index.html with the following exceptions:  

manifest.json resides in the root (using .webmanifest or folders causes many issues - some browsers assume manifest is in the root; some don't understand the mimetype; conclusion is to be in root although its messy and confusing; root should only have a click-me.html file)  
pwa style sheet is edited out  
pwa service worker is edited out  
html that prompts user to install as app is retained although maybe redundant  
env.min.js has the latest version number (same for both crx and pwa)  
  
pwa file is c_index.html  
crx file is c_crx.html  
  
The <head></head> has two sections which are toggled  
  
## minimized files
c_assets_raw are the unmified and commented raw files in various folders  
c_assets contains minified files in no folders  

## documentation
Docs are in md format (in a github repo) and use a third party framework to parse into html  
Ideally these should be part of the app and not rely on third parties  
Cannot find an open source md parser so will probably use html directly  

