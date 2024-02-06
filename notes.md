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
- that last "startup" is where you want these files to be. So like deploying simon to my page with that command make simon show up at simon.landminegame.com