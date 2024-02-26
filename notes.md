### notes from day 1

I learned how to resolve conflicts: when having committed two different things to each file in both locations, a merging error will occur and you need to delete the delimiters that populate automatically to highlight the problem and then merge the two with the following command:
    git commit -am "notes(danny) made changes"
    then you can git push
git add (file)
    stages a file to be ready to receive commits
git pull
    pulls changes from an edited repository to stay up to date
git push
    changes other cloned respository to have the same changes



### Notes from startup day
 see the README file under this folder to get a summary of the technologies we will be focusing on with the startup application. 
 


### Notes from AWS
Learned about a lot of different things pertaining to AWS. Launched my own instance from the AWS site/console 
Ran a couple given commands to launch a remote shell console for the site. 
Command to launch remote terminal: ssh -i ~/tha_key.ssh/tha_key.pem ubuntu@3.86.179.239
Elastic IP address: 44.221.223.106


### Notes from doing the html deliverable
in order to get your thing to deploy to your domain you have to run the deploy files file (will look like deployFiles.sh)
- The command to do it is: ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
- that last "startup" is where you want these files to be. So like deploying simon to my page with that command makes simon show up at simon.landminegame.com

### Midterm notes

## From the test review session (missed the first 15 mins)
260 TEST REVIEW NOTES
- [ ] valid JSON: the key is always a string, i.e. {“x”:3} (double quotes), this will turn into the javascript object {x:3}
- [ ] document.querySelector(‘p’).addEventListener(‘mouseover’, console.log). This is different from the queryselectall one, it inly adds mouseover listener to the FIRST p element, not all of them. Dont let the console.log confuse your shi
- [ ] <a href=“link”>
- [ ] To point to another DNS record, use the CNAME DNS record type
- [ ] CNAME, say lds.org is an alias for churchofjesuschrist.org, it would still take you there, but lds.org would remain
- [ ] A
- [ ] TEXT
- [ ] SOA
- [ ] div#header, the # means the id of it
- [ ] div.header, div with the class attribute of header
- [ ] CSS padding: 1em puts padding around content
- [ ] With JS => arrow functions, don’t need any return statement, it will just return what it evaluates to
- [ ] DOM textContent property — sets the child text first the an element
- [ ] not a valid JS function — function f(x) = {}
- [ ] Css box order - margin, border, padding, content
- [ ] Regex .match function (/A|f/i) — anything on the inside of the slashes if has an a OR f for this one^
- [ ] Promises (tough quesh, go back to it) — if all asynchronous, .catch() only if it fails, .finally() always goes
- [ ] Valid javascript OBJECT {x:3} uses a colon, not =
- [ ] DNS subdomain — c260.cs.byu.edu
- [ ] byu.edu — root domain
- [ ] edu — top domain
- [ ] flex column — children are rows within that column — flex direction column-reverse just flips everything upside down, so two divs with hello and world with those styles would have world hello on two separate lines