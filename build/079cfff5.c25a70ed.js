(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(9),a=(n(0),n(211)),i=n(213),c={id:"move-from-iouvm-gns3-vm",title:"Move from IOUVM to GNS3 VM",sidebar_label:"Move from IOUVM to GNS3 VM"},s={id:"using-gns3/advanced/move-from-iouvm-gns3-vm",isDocsHomePage:!1,title:"Move from IOUVM to GNS3 VM",description:"Starting with GNS3 v1.4,  the IOUVM was deprecated in favor of the GNS3 VM.",source:"@site/docs/using-gns3/advanced/move-from-iouvm-gns3-vm.md",permalink:"https://docs.gns3.com/docs/using-gns3/advanced/move-from-iouvm-gns3-vm",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/advanced/move-from-iouvm-gns3-vm.md",sidebar_label:"Move from IOUVM to GNS3 VM",sidebar:"someSidebar",previous:{title:"Special IP addresses in GNS3",permalink:"https://docs.gns3.com/docs/using-gns3/advanced/special-ip-addresses"},next:{title:"Settings profiles",permalink:"https://docs.gns3.com/docs/using-gns3/advanced/settings-profiles"}},l=[{value:"Why a new VM?",id:"why-a-new-vm",children:[]},{value:"But I will lose my projects!",id:"but-i-will-lose-my-projects",children:[]},{value:"How much time is required for the upgrade",id:"how-much-time-is-required-for-the-upgrade",children:[]},{value:"How to Upgrade",id:"how-to-upgrade",children:[{value:"Step 1 Download the GNS3 VM",id:"step-1-download-the-gns3-vm",children:[]},{value:"Step 2 Launch the wizard",id:"step-2-launch-the-wizard",children:[]},{value:"Step 3 Follow the wizard",id:"step-3-follow-the-wizard",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Starting with GNS3 v1.4,  the IOUVM was deprecated in favor of the GNS3 VM."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This conversion tool is available only for GNS3 1.X you can\u2019t use it in 2.0 and later. If you want to convert a 1.3 installation with IOUVM to 2.0,  you need to might to version 1.5, first, then to 2.0.  "))),Object(a.b)("h2",{id:"why-a-new-vm"},"Why a new VM?"),Object(a.b)("p",null,"The original VM was a hack made by the community and after maintain by the GNS3 team. But this vm has several issues:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"OS was stripped down, without any way to properly reinstall missing packages"),Object(a.b)("li",{parentName:"ul"},"No script allowing users to rebuild the VM from scratch"),Object(a.b)("li",{parentName:"ul"},"Blocked on a specific Debian version with old packages"),Object(a.b)("li",{parentName:"ul"},"Old Python version 3.3,  with annoying bugs in the GNS3 context"),Object(a.b)("li",{parentName:"ul"},"Supports ",Object(a.b)("em",{parentName:"li"},"only")," IOU"),Object(a.b)("li",{parentName:"ul"},"Upgrade path is unnecessarily painful"),Object(a.b)("li",{parentName:"ul"},"Only VirtualBox was supported")),Object(a.b)("p",null,"The new GNS3 VM is:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"One click upgrade"),Object(a.b)("li",{parentName:"ul"},"Supports IOU, dynamips, qemu docker, and futures solutions"),Object(a.b)("li",{parentName:"ul"},"Easy to build a new VM for everyone"),Object(a.b)("li",{parentName:"ul"},"Easier to use"),Object(a.b)("li",{parentName:"ul"},"Correctly supports Virtualbox, VMWare, Hyper-V, and KVM"),Object(a.b)("li",{parentName:"ul"},"Nat and Host-only interface support")),Object(a.b)("p",null,"You have no easy way for using GNS3 1.4 in the IOUVM. The easier solution is to move to the new GNS3 VM. Trying to get GNS3 1.4 running on the IOUVM will probably require you days of work for fixing the broken OS dependencies."),Object(a.b)("h2",{id:"but-i-will-lose-my-projects"},"But I will lose my projects!"),Object(a.b)("p",null,"No we provide tools for upgrading. We recommend to backup your .gns3 project files before the upgrade."),Object(a.b)("h2",{id:"how-much-time-is-required-for-the-upgrade"},"How much time is required for the upgrade"),Object(a.b)("p",null,"No more than 5 minutes."),Object(a.b)("h2",{id:"how-to-upgrade"},"How to Upgrade"),Object(a.b)("h3",{id:"step-1-download-the-gns3-vm"},"Step 1 Download the GNS3 VM"),Object(a.b)("p",null,"Go to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.gns3.com"}),"http://www.gns3.com")," and download the lastest  VM for VirtualBox or VMware."),Object(a.b)("h3",{id:"step-2-launch-the-wizard"},"Step 2 Launch the wizard"),Object(a.b)("p",null,"Launch GNS3 and in the tools menu launch IOU VM Converter"),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/advanced/move-from-iouvm-gns3-vm/1.jpg")}),Object(a.b)("h3",{id:"step-3-follow-the-wizard"},"Step 3 Follow the wizard"),Object(a.b)("p",null,"After cliking on the IOUVM converter button you will see a wizard helping you to move from the IOUVM to the GNS3 VM. Just follow the instructions on screen carefully."),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/advanced/move-from-iouvm-gns3-vm/2.jpg")}))}d.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var r=n(0),o=n(52);t.a=function(){return Object(r.useContext)(o.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(76);var r=n(212),o=n(214);function a(e,t){var n=void 0===t?{}:t,a=n.forcePrependBaseUrl,i=void 0!==a&&a,c=n.absolute,s=void 0!==c&&c,l=Object(r.a)().siteConfig,u=(l=void 0===l?{}:l).baseUrl,d=void 0===u?"/":u,p=l.url;if(!e)return e;if(i)return d+e;if(!Object(o.a)(e))return e;var b=d+e.replace(/^\//,"");return s?p+b:b}},214:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);