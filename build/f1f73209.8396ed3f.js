(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(211)),c=n(213),i={id:"create-a-docker-container-for-gns3",title:"Create a docker container for GNS3",sidebar_label:"Create a docker container for GNS3"},s={id:"emulators/create-a-docker-container-for-gns3",isDocsHomePage:!1,title:"Create a docker container for GNS3",description:"This tutorial is for users who never used Docker, and would like to create a Docker container for GNS3.",source:"@site/docs/emulators/create-a-docker-container-for-gns3.md",permalink:"https://docs.gns3.com/docs/emulators/create-a-docker-container-for-gns3",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/emulators/create-a-docker-container-for-gns3.md",sidebar_label:"Create a docker container for GNS3",sidebar:"someSidebar",previous:{title:"Docker support in GNS3",permalink:"https://docs.gns3.com/docs/emulators/docker-support-in-gns3"},next:{title:"VPCS",permalink:"https://docs.gns3.com/docs/emulators/vpcs"}},l=[],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial is for users who never used Docker, and would like to create a Docker container for GNS3."),Object(o.b)("p",null,"First, you need to connect to the GNS3 VM and open a shell. Press the Enter key while ",Object(o.b)("strong",{parentName:"p"},"< OK >")," is highlighted:"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/1.jpg")}),Object(o.b)("p",null,"On the next screen, press the Down arrow key until Shell is highlighted, and press the Enter key again. This will take you into Bash, which is the default shell used in Ubuntu:"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/2.jpg")}),Object(o.b)("p",null,"The Docker containers are created using a file called Dockerfile."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/"}),"https://docs.docker.com/engine/reference/builder/")),Object(o.b)("p",null,"Type this command to create the Dockerfile, using the nano text editor:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"nano Dockerfile\n")),Object(o.b)("p",null,"While in nano, add the following two lines:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"FROM ubuntu:16.04\nRUN apt-get update && apt-get install -y nmap\n")),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/3.jpg")}),Object(o.b)("p",null,"To save the file, press Ctrl+O, and then Ctrl+X to exit nano.\nAfter, that run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker build -t joe/nmap .\n")),Object(o.b)("p",null,"This will build a container named joe/nmap (where \u201cjoe\u201d is your username) based on ubuntu 16.04, and with nmap installed. You can find all the base containers here: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/gns3/"}),"https://hub.docker.com/r/gns3/")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Docker will cache each step of the build process."))),Object(o.b)("p",null,"If the build was successful, you should see a message indicating that at the end of the output."),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/4.jpg")}),Object(o.b)("p",null,"(the build time will vary, based on what you\u2019re adding to the container, plus your PC)"),Object(o.b)("p",null,"Now we can use our container in GNS3. Click ",Object(o.b)("strong",{parentName:"p"},"Edit->Preferences->Docker Containers->New"),",  like before,  but instead of specifying a ",Object(o.b)("strong",{parentName:"p"},"\u201cNew Image\u201d"),",  you\u2019ll select ",Object(o.b)("strong",{parentName:"p"},"\u201cExisting image\u201d"),", and then pick the one you just created from the dropdown list, and click ",Object(o.b)("strong",{parentName:"p"},"Next>")," to continue:"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/5.jpg")}),Object(o.b)("p",null,"Give the container a name, and click ",Object(o.b)("strong",{parentName:"p"},"Next>"),":"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/6.jpg")}),Object(o.b)("p",null,"Specify the number of adapters you want this container to use. As this example is just acting like a simple linux host, we can stick with default of 1 interface, so click ",Object(o.b)("strong",{parentName:"p"},"Next>")," to continue:"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/7.jpg")}),Object(o.b)("p",null,"We aren\u2019t going to specify a start command this time, so click Next> to continue:"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/8.jpg")}),Object(o.b)("p",null,"We\u2019ll leave the console type set to telnet (we don\u2019t need to use VNC/HTTP/HTTPS for this example), so click ",Object(o.b)("strong",{parentName:"p"},"Next>")," to continue:"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/9.jpg")}),Object(o.b)("p",null,"We won\u2019t be specifying any environmental variables this time, as the defaults are fine for this example, so click ",Object(o.b)("strong",{parentName:"p"},"Finish")," to complete this configuration process. Back at the main Preferences screen, click ",Object(o.b)("strong",{parentName:"p"},"OK")," to exit it."),Object(o.b)("p",null," This \u201cnmap\u201d container will be listed in the ",Object(o.b)("strong",{parentName:"p"},"End Devices")," toolbar. Since it already exists in the GNS3 VM, there\u2019s no need for the \u201cdocker pull\u201d step that would occur, if we were going to use a container from Docker Hub."),Object(o.b)("p",null,"Prior to the following screenshot, the nmap container was assigned a static IP address, and connected to a router that had been preconfigured to allow SSH access to it."),Object(o.b)("p",null,"A quick test was run using the ",Object(o.b)("inlineCode",{parentName:"p"},"nmap --script ssh2-enum-algos  target_ip"),"  command. NMAP checks the target device, to see which SSH key exchange algorithms it supports. There are plenty of other uses for NMAP, but this was just a simple test, to prove that it was functional:"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/10.jpg")}),Object(o.b)("p",null,"You can replace the shell with a command of your choice using the CMD directive, which causes the container to start with that command/utility running immediately on boot.  "),Object(o.b)("p",null,"Back in the GNS3 VM CLI, open Dockerfile again to edit it (it\u2019s \u201cnano Dockerfile\u201d, just like before):"),Object(o.b)("p",null,"Change the Dockerfile to this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"FROM ubuntu:16.04\nRUN apt-get update && apt-get install -y nmap\nRUN apt-get install -y htop\nCMD htop\n")),Object(o.b)("p",null,"(the two additional lines have been set to bold). Next, rebuild the container again:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker build -t joe/nmap .\n")),Object(o.b)("p",null,"You will need to remove the container from your topology and add it again, in order to see the change:"),Object(o.b)("img",{alt:"screenshot",src:Object(c.a)("img/emulators/create-a-docker-container-for-gns3/11.jpg")}),Object(o.b)("p",null,"Instead of seeing a bash prompt, the container automatically launches the HTOP utility."),Object(o.b)("p",null,"At each reboot,  the data changed in your container is lost (it\u2019s not persistent). If you want persistence, you need to use the VOLUME directive in Dockerfile:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'FROM ubuntu:16.04\nRUN mkdir /test\nRUN echo "hello" > /test/world\nVOLUME /test\nWORKDIR /test\n')),Object(o.b)("p",null,"After that, you can publish your container to the world, allowing anyone to able to use it, just by typing the container name in the docker image field. It\u2019s free to create an account on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/"}),"Docker Hub")," for this purpose.  "),Object(o.b)("p",null,"To publish your container to Docker Hub via a \u201cdocker push\u201d, run the following commands in the GNS3 VM CLI:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker login\ndocker push joe/hello\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You will need to replace joe with your Docker hub username."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"More Samples:"),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GNS3/gns3-registry/tree/master/docker"}),"https://github.com/GNS3/gns3-registry/tree/master/docker")))}u.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(76);var r=n(212),a=n(214);function o(e,t){var n=void 0===t?{}:t,o=n.forcePrependBaseUrl,c=void 0!==o&&o,i=n.absolute,s=void 0!==i&&i,l=Object(r.a)().siteConfig,b=(l=void 0===l?{}:l).baseUrl,u=void 0===b?"/":b,p=l.url;if(!e)return e;if(c)return u+e;if(!Object(a.a)(e))return e;var d=u+e.replace(/^\//,"");return s?p+d:d}},214:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);