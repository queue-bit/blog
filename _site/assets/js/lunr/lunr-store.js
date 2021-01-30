var store = [{
        "title": "About Andreas Wiebe",
        "excerpt":"Andreas Wiebe is a Technologist located in Winnipeg, Manitoba, Canada.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/about/about-me/",
        "teaser": null
      },{
        "title": "About This Site",
        "excerpt":"What is this place? This site is a collection of my notes and general thoughts. Notes are added when I discover something new, find that I have searched multiple times for the same solution, or if there’s something I want to be able to reference later. The technology The site...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/about/about-site/",
        "teaser": null
      },{
        "title": "About",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/about/",
        "teaser": null
      },{
        "title": "NodeMCU ESP8266 12-E",
        "excerpt":"While not strictly an arduino, these development boards operate and are used very similarly. Brief overview of the NodeMCU ESP8266 Let’s unpack that name before anything else: NodeMCU - an open-source firmware written in Lua for the ESP8266. ESP8266 - a low-cost wifi microchip produced by Espressif Systems, these can...","categories": [],
        "tags": ["arduino","nodemcu","esp8266","iot","12-e"],
        "url": "http://localhost:4000/arduino/2020-12-29-nodemcu-esp8266/",
        "teaser": null
      },{
        "title": "Arduino",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/arduino/",
        "teaser": null
      },{
        "title": "CentOS",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/centos/",
        "teaser": null
      },{
        "title": "Mint - Install Antigen for ZSH",
        "excerpt":"Seems the version of zsh-antigen that’s included in apt isn’t up to date and can cause errors when opening a new session in Mint. Remove Antigen installed via apt If you’ve installed Antigen via apt, remove it: % sudo apt remove zsh-antigen Download Antigen Create a directory: % sudo mkdir...","categories": [],
        "tags": ["mint","zsh","antigen"],
        "url": "http://localhost:4000/debian/2020-03-17-install-antigen-zsh/",
        "teaser": null
      },{
        "title": "Ubuntu - Install DisplayLink Software",
        "excerpt":"Driver   The guide on displaylink.com for Ubuntu works. Also tested on Mint 19.3 Tricia.   Download the latest driver from https://www.displaylink.com/downloads/ubuntu   Hiccups  The one snag I ran into was it got stuck on the Building EVDI kernel module with DKMS step. See how I resolved that here  ","categories": [],
        "tags": ["displaylink","driver","mint","ubuntu"],
        "url": "http://localhost:4000/debian/2020-03-24-ubuntu-install-displaylink/",
        "teaser": null
      },{
        "title": "Ubuntu - Add System-Wide Environment Variables",
        "excerpt":"I typically use profile.d for loading Environment Variables. There are other methods but I find this easier to maintain. Steps Use echo to output the export command, then redirect (&gt;&gt;) the output to a file in the profile.d directory: sudo sh -c 'echo \"export {YOUR_VARIABLE_NAME}={your-variable-value}\" &gt;&gt; /etc/profile.d/{your-variable-name}.sh' For the curious,...","categories": [],
        "tags": ["ubuntu","environment","variables","profile.d"],
        "url": "http://localhost:4000/debian/2020-05-29-ubuntu-add-environment-variable/",
        "teaser": null
      },{
        "title": "Ubuntu - Stuck on Building EVDI kernel module with DKMS",
        "excerpt":"An error I ran into when installing a driver was that the installer got stuck on the Building EVDI kernel module with DKMS step. I didn’t capture the output so this will be a bit sparse on details. Solution Since there’s no easy way to kill the installer at this...","categories": [],
        "tags": ["dkms","ubuntu","evdi"],
        "url": "http://localhost:4000/debian/2020-12-28-ubuntu-dkms-error/",
        "teaser": null
      },{
        "title": "Debian",
        "excerpt":"Includes downstream distro’s, in which case the distro name is included in the title.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/debian/",
        "teaser": null
      },{
        "title": "Docker Notes",
        "excerpt":"Notes Since docker requires elevated privileges, sudo is typically required when running these commands unless the current user has privileges. These commands are run on the Host system. Most commands support the --help flag and provide good documentation. Images Think of it as the template, a Image include the instructions...","categories": [],
        "tags": ["docker","cp","copy","image","container","context"],
        "url": "http://localhost:4000/docker/2021-01-24-docker-common-commands/",
        "teaser": null
      },{
        "title": "Docker",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docker/",
        "teaser": null
      },{
        "title": "Mint - Seahorse for GitHub SSH keys",
        "excerpt":"1. In Cinnamon Open Password and Keys (this app is known as Seahorse) Click + Select Secure Shell Key Enter a description of the key Click Advanced key options Set Encryption Type to RSA Set Key Strength to 4096 Click Just Create Key 2. In a CLI (terminal) Install xclip:...","categories": [],
        "tags": ["mint","seahorse","ssh","keys","github"],
        "url": "http://localhost:4000/gnome/2020-01-22-seahorse-github-ssh-key/",
        "teaser": null
      },{
        "title": "Gnome",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/gnome/",
        "teaser": null
      },{
        "title": "pk400001za0 Webcam To USB",
        "excerpt":"The pk400001za0 webcam module is commonly found in Acer and Lenovo laptops and is detected as “Suyin Corp. Acer/Lenovo Webcam [CN0316]” in Linux Mint. It’s fairly easy to wire this module to connect to a USB port on a computer, there’s a good tutorial here (https://www.youtube.com/watch?v=g8XbDJLKKys), below are my notes...","categories": [],
        "tags": ["pk400001za0","usb","webcam","camera"],
        "url": "http://localhost:4000/hardware/2020-04-06-pk400001za0-webcam-usb/",
        "teaser": null
      },{
        "title": "Hardware",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/hardware/",
        "teaser": null
      },{
        "title": "Linux - Change Default Shell",
        "excerpt":"Using chsh From the manual: The chsh command changes the user login shell. This determines the name of the user’s initial login command. A normal user may only change the login shell for her own account; the superuser may change the login shell for any account. $ chsh -s {/path/to/shell}...","categories": [],
        "tags": ["linux","shell","bash","zsh","sh","rbash","dash"],
        "url": "http://localhost:4000/linux/2020-03-16-linux-change-shell/",
        "teaser": null
      },{
        "title": "Linux - CLI: Jobs & Processes",
        "excerpt":"Jobs &amp; Processes To Command Suspend currently running process CTRL+Z (^Z) List jobs jobs or jobs -l Resume last suspended process fg Resume specific suspended process fg %{job-id} Send process to background bg %{job-id} Suspend a background process kill -STOP %{job-id} List Jobs ~ jobs [1] + running bundle exec...","categories": [],
        "tags": ["linux","shell","bash","zsh","sh","rbash","dash","jobs","suspend","bg","fg"],
        "url": "http://localhost:4000/linux/2021-01-30-cli-jobs/",
        "teaser": null
      },{
        "title": "Linux",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/linux/",
        "teaser": null
      },{
        "title": "Here we go",
        "excerpt":"Here we go…   Hi all, setting up and configuring GitHub pages to keep some of my notes. More things to come in the future.  ","categories": [],
        "tags": ["hello","world","first","post"],
        "url": "http://localhost:4000/2019/09/24/here-we-go.html",
        "teaser": null
      },{
        "title": "Finally some updates!",
        "excerpt":"It’s about time  I’ve finally had the time to sit down and learn how Jekyll remote themes work with Github pages. I’ve taken the opportunity to break content out into categories/collections.   Enjoy.  ","categories": [],
        "tags": ["updates","december","2020"],
        "url": "http://localhost:4000/2020/12/28/finally-some-updates.html",
        "teaser": null
      },{
        "title": "Analysis Tricks",
        "excerpt":"A list of some of my favorite tricks when doing Analysis in Process Engineering Interview Gamification Speedboat (teams) Easy and silly little “game” that can be used to discover what’s slowing down human processes vs. what’s speeding them up Draw a sailboat on water, with an anchor Invite the target...","categories": [],
        "tags": ["process","engineering","analysis","trick","tips","speedboat"],
        "url": "http://localhost:4000/process-engineering/2020-12-28-analysis/",
        "teaser": null
      },{
        "title": "Tools",
        "excerpt":"A list of some of my favorite tools when Process Engineering Diagramming Tools PlantUML Opensource UML drawing using a simple markup language, it’s real strength comes from integrations and support in other tools such as VSCode and Confluence. Note that it requires GraphViz to be installed for many of the...","categories": [],
        "tags": ["plantuml","visio","lucidchart","conceptdraw","diagrams.net","vscode","confluence","github","process","engineering"],
        "url": "http://localhost:4000/process-engineering/2020-12-28-tools/",
        "teaser": null
      },{
        "title": "Process Engineering",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/process-engineering/",
        "teaser": null
      },{
        "title": "Tools",
        "excerpt":"A list of some of my favorite tools when managing projects. Project Management Specific Tools Jira Smartsheet Commercial Software MS Project Commercial Software Best suited to projects using a waterfall approach in my opinion. Calculates budgets based on resource rates and work assigned. Illustrates critical path using a Gantt/schedules. Highly...","categories": [],
        "tags": ["plantuml","visio","lucidchart","conceptdraw","diagrams.net","vscode","confluence","github","process","engineering"],
        "url": "http://localhost:4000/project-management/2020-12-28-tools/",
        "teaser": null
      },{
        "title": "Project Management",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/project-management/",
        "teaser": null
      },{
        "title": "Raspberry Pi",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/rpi/",
        "teaser": null
      }]
