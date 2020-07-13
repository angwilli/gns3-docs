(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var o=a(2),n=a(9),r=(a(0),a(211)),i=a(213),s={id:"adding-vmware-vms-to-gns3-topologies",title:"Adding VMware VMs to GNS3 Topologies",sidebar_label:"Adding VMware VMs to GNS3 Topologies"},l={id:"emulators/adding-vmware-vms-to-gns3-topologies",isDocsHomePage:!1,title:"Adding VMware VMs to GNS3 Topologies",description:"Introduction",source:"@site/docs/emulators/adding-vmware-vms-to-gns3-topologies.md",permalink:"https://docs.gns3.com/docs/emulators/adding-vmware-vms-to-gns3-topologies",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/emulators/adding-vmware-vms-to-gns3-topologies.md",sidebar_label:"Adding VMware VMs to GNS3 Topologies",sidebar:"someSidebar",previous:{title:"Non-Native IOU for Windows and OSX",permalink:"https://docs.gns3.com/docs/emulators/non-native-iou-for-windows-and-osx"},next:{title:"Docker support in GNS3",permalink:"https://docs.gns3.com/docs/emulators/docker-support-in-gns3"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"VMWare Limitations in GNS3",id:"vmware-limitations-in-gns3",children:[{value:"Limitation of VMware Player",id:"limitation-of-vmware-player",children:[]}]},{value:"Why use VMWare?",id:"why-use-vmware",children:[]},{value:"What about VMWare Fusion?",id:"what-about-vmware-fusion",children:[]},{value:"Add a virtual machine to VMWare Workstation (Local Server)",id:"add-a-virtual-machine-to-vmware-workstation-local-server",children:[]},{value:"Add a virtual machine to GNS3 (Local Server)",id:"add-a-virtual-machine-to-gns3-local-server",children:[]},{value:"Create a GNS3 Topology",id:"create-a-gns3-topology",children:[]}],b={rightToc:c};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This document explains how to add VMware virtual machines to GNS3 topologies. Even though this document discusses the use of VMware virtual machines, you can do something similar using Virtualbox."),Object(r.b)("p",null,"This document will show you two methods of adding a virtual machine to GNS3:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Manually using a local install of GNS3"),Object(r.b)("li",{parentName:"ol"},"Using an appliance and adding the VM to the GNS3 VM")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We are not discussing the importing of the GNS3 VM in this document; but rather the addition of other virtual machines to GNS3 topologies which may be running in the GNS3 VM or running locally."))),Object(r.b)("h2",{id:"vmware-limitations-in-gns3"},"VMWare Limitations in GNS3"),Object(r.b)("p",null,"The data of the VMware VMs are stored outside GNS3. This mean a topology using a VMware VM will not be portable on a different computer. If you want a portable topology you will need to use Qemu."),Object(r.b)("p",null,"You can\u2019t run multiple instances of the same VMware VM if you are using VMware Player. You need a paid version of VMware to do that."),Object(r.b)("h3",{id:"limitation-of-vmware-player"},"Limitation of VMware Player"),Object(r.b)("p",null,"The Player version of VMware has limitations and if your VM are not in the default directory sometimes GNS3 can\u2019t locate the VM you created."),Object(r.b)("p",null,"This problem doesn\u2019t occur with the paid version of VMware because a central database is available to third parties applications."),Object(r.b)("h2",{id:"why-use-vmware"},"Why use VMWare?"),Object(r.b)("p",null,"Some appliances are designed to only run in VMware.  Also, there are times when you may simply prefer using a desktop VM (and the GUI applications it can provide), instead of using the serial console to work with the VMs CLI in a terminal.   Desktop VMs are more responsive in VMware than Qemu, purely due to technical reasons that are beyond the scope of this document."),Object(r.b)("h2",{id:"what-about-vmware-fusion"},"What about VMWare Fusion?"),Object(r.b)("p",null,"On MacOSX,  VMware Fusion is used instead of VMware Workstation. The user interface of VMware Fusion is different than  VMware Workstations, but it works in the same way with GNS3, so the same principles apply."),Object(r.b)("h2",{id:"add-a-virtual-machine-to-vmware-workstation-local-server"},"Add a virtual machine to VMWare Workstation (Local Server)"),Object(r.b)("p",null,"If you already have a virtual machine imported into VMware Workstation, go to the next section of this document."),Object(r.b)("p",null,"Download or copy a virtual machine ISO to your local computer. In this example, TinyCore Linux is used. This is a recommended lightweight Linux distribution:"),Object(r.b)("p",null,"Download link: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://tinycorelinux.net/downloads.html"}),"http://tinycorelinux.net/downloads.html")),Object(r.b)("p",null,"ISO on local PC:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/1.jpg")}),Object(r.b)("p",null,"In VMware Workstation, click ",Object(r.b)("strong",{parentName:"p"},"\u201cCreate a New Virtual Machine\u201d"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/2.jpg")}),Object(r.b)("p",null,"Follow the VMware Wizard to import create the new virtual machine. In the first step, select ",Object(r.b)("strong",{parentName:"p"},"Typical")," and then click ",Object(r.b)("strong",{parentName:"p"},"Next >"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/3.jpg")}),Object(r.b)("p",null,"Point to the ISO file downloaded and click ",Object(r.b)("strong",{parentName:"p"},"Next >"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/4.jpg")}),Object(r.b)("p",null,"Select ",Object(r.b)("strong",{parentName:"p"},"Linux")," as the ",Object(r.b)("strong",{parentName:"p"},"Guest operating system")," and ",Object(r.b)("strong",{parentName:"p"},"Other Linux 4.x")," as the Version and then click ",Object(r.b)("strong",{parentName:"p"},"Next >"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/5.jpg")}),Object(r.b)("p",null,"Name the VM and change the default ",Object(r.b)("strong",{parentName:"p"},"Location")," if you want to. In this example the VM is called TinyCore-Local-VMware and the default Location is used. Then click ",Object(r.b)("strong",{parentName:"p"},"Next >"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/6.jpg")}),Object(r.b)("p",null,"Specify the amount of disk space required by your virtual machine. In this example only 1 GB is allocated. You can also select ",Object(r.b)("strong",{parentName:"p"},"\u201cStore virtual disk as a single file\u201d"),", as this VM will be so small. Then click ",Object(r.b)("strong",{parentName:"p"},"Next >"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/7.jpg")}),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Customize Hardware"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/8.jpg")}),Object(r.b)("p",null,"Customize the hardware of the VM as required. In this example only 128 MB of RAM is required for the VM. To do so, click ",Object(r.b)("strong",{parentName:"p"},"\u201cMemory\u201d")," in the Virtual Machine settings, type ",Object(r.b)("strong",{parentName:"p"},"\u201c128\u201d")," in the dialog box for the amount of memory it will use. Once the required changes have been completed, click ",Object(r.b)("strong",{parentName:"p"},"Close"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/9.jpg")}),Object(r.b)("p",null,"To complete the VM import, click ",Object(r.b)("strong",{parentName:"p"},"Finish"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/10.jpg")}),Object(r.b)("p",null,"The VM is now available in VMware Workstation:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/11.jpg")}),Object(r.b)("p",null,"Power on the virtual machine in VMware Workstation:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/12.jpg")}),Object(r.b)("p",null,"Install the operating system as required. TinyCore Linux does not require this and is booted to RAM by selecting ",Object(r.b)("strong",{parentName:"p"},"Boot TinyCore"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/13.jpg")}),Object(r.b)("p",null,"Complete any operating system installation setup as required. In this example, TinyCore simply boots up and no configuration is required:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/14.jpg")}),Object(r.b)("p",null,"Once install is completed, shut down the virtual machine by either clicking on the ",Object(r.b)("strong",{parentName:"p"},"Suspend")," button in VMware Workstation and select ",Object(r.b)("strong",{parentName:"p"},"Power Off")," (shown below),  or right-clicking on the tab for the virtual machine (containing its name), select ",Object(r.b)("strong",{parentName:"p"},"Power"),", and then ",Object(r.b)("strong",{parentName:"p"},"Shut Down Guest")," (not shown):"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/15.jpg")}),Object(r.b)("p",null,"You are now ready to integrate the new VM with GNS3."),Object(r.b)("h2",{id:"add-a-virtual-machine-to-gns3-local-server"},"Add a virtual machine to GNS3 (Local Server)"),Object(r.b)("p",null,"Once you have installed and configured your virtual machine in VMware Workstation, you are ready to integrate the VM with GNS3."),Object(r.b)("p",null,"Start GNS3 and create a ",Object(r.b)("strong",{parentName:"p"},"New project"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/16.jpg")}),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Edit")," and then ",Object(r.b)("strong",{parentName:"p"},"Preferences"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/17.jpg")}),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"VMware VMs")," and ",Object(r.b)("strong",{parentName:"p"},"New"),", to add a new VMware virtual machine:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/18.jpg")}),Object(r.b)("p",null,"You will be prompted which server type to use, to run this virtual machine. As this article uses the local server, the remote server option is greyed out. Click ",Object(r.b)("strong",{parentName:"p"},"Next>"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/19.jpg")}),Object(r.b)("p",null,"On the next screen, click on the dropdown:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/20.jpg")}),Object(r.b)("p",null,"The dropdown lists all the available VMware virtual machines available on this computer. Left-click on your new TinyCore-Local-VMware virtual machine to select it:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/21.jpg")}),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Finish>")," to complete the import process:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/22.jpg")}),Object(r.b)("p",null,"The new virtual machine is now available in GNS3. Ensure that it is still highlighted, and click ",Object(r.b)("strong",{parentName:"p"},"Edit")," to change the VM settings:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/23.jpg")}),Object(r.b)("p",null,"Click the ",Object(r.b)("strong",{parentName:"p"},"Network")," Tab:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/24.jpg")}),Object(r.b)("p",null,"Ensure that \u201cAllow GNS3 to override non custom VMware adapter\u201d is selected, and click ",Object(r.b)("strong",{parentName:"p"},"OK")," to finish editing the TinyCore-Local-VMware virtual machine\u2019s properties."),Object(r.b)("p",null,"GNS3 will randomly select an available Host-only VMnet to bridge the VMware virtual machine into the GNS3 topology. VMnet 0 (bridged), VMnet 1 (host-only), and VMnet 8 (NAT) are available in VMware by default, but will not be used by GNS3 for this purpose!"),Object(r.b)("p",null,"It is important that any new Host-Only VMnet created for GNS3 to use have the default DHCP for it disabled!"),Object(r.b)("p",null,"Below a screenshot of the Virtual Network Editor (VNE) in VMware Workstation Pro, showing additional Host-only VMnets (VMnets 2-7, and 9 - 19), for illustration purposes. VNE is unavailable to users of VMware Workstation Player."),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/25.jpg")}),Object(r.b)("p",null,"(notice that VMnets 2 - 7 are Host-only, and have their own local DHCP servers disabled. That is important!!)"),Object(r.b)("p",null,"VMware Workstation Players (and VMware Workstation Pro users) can use a script included with GNS3 (named gns3vmnet) to automatically create and configure the additional VMnets necessary."),Object(r.b)("p",null,"In Windows, this executable is located in the default GNS3 installation directory:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/26.jpg")}),Object(r.b)("p",null,"(You may need to create an exemption/exclusion in your anti-virus software to allow this executable to run. This process varies, so consult the documentation of the anti-virus suite you use for instructions.)"),Object(r.b)("p",null,"To have GNS3 automatically create the necessary Host-only VMnets for you (using the aforementioned gns3vmnet file), click on ",Object(r.b)("strong",{parentName:"p"},"VMware -> Advanced local settings"),", and then click on the ",Object(r.b)("strong",{parentName:"p"},"Configure")," button:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/27.jpg")}),Object(r.b)("p",null,"(If necessary, you can have GNS3 remove the host-only VMnets it created by clicking the ",Object(r.b)("strong",{parentName:"p"},"Reset")," button, instead).  "),Object(r.b)("p",null,"Once completed, click Click ",Object(r.b)("strong",{parentName:"p"},"OK")," to complete the integration."),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/28.jpg")}),Object(r.b)("h2",{id:"create-a-gns3-topology"},"Create a GNS3 Topology"),Object(r.b)("p",null,"Once you have integrated the new virtual machine with GNS3, you can now create topologies that contain the new VM."),Object(r.b)("p",null,"To create a new GNS3 topology, select a group of devices in the ",Object(r.b)("strong",{parentName:"p"},"Devices Toolbar")," by clicking the ",Object(r.b)("strong",{parentName:"p"},"End Devices")," button"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/29.jpg")}),Object(r.b)("p",null,"The new virtual machine is now available to be added to a GNS3 topology:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/30.jpg")}),Object(r.b)("p",null,"Drag and drop the selected node (device) to the GNS3 ",Object(r.b)("strong",{parentName:"p"},"Workspace"),". An instance of the node becomes available in the ",Object(r.b)("strong",{parentName:"p"},"Workspace"),". In this example, the TinyCore PC is now available:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/31.jpg")}),Object(r.b)("p",null,"Drag and drop another node into the GNS3 ",Object(r.b)("strong",{parentName:"p"},"Workspace"),". For this article,  a router will be added to the GNS3 workspace. The devices available will depend on your GNS3 configuration:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/32.jpg")}),Object(r.b)("p",null,"Click the ",Object(r.b)("strong",{parentName:"p"},"Toolbar Device")," button again to collapse the group:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/33.jpg")}),Object(r.b)("p",null,"Click the ",Object(r.b)("strong",{parentName:"p"},"Add a Link")," button to start adding links to your topology. The mouse cursor will change to indicate that links can be added:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/34.jpg")}),Object(r.b)("p",null,"Click on the TinyCore-Local-VMware~1 virtual machine in your topology,  to display its  available interfaces. In this example ",Object(r.b)("strong",{parentName:"p"},"Ethernet0")," is available (the available interfaces will be device dependant):"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/35.jpg")}),Object(r.b)("p",null,"Click the interface and then select another device in the topology to connect the interface to. In this example ",Object(r.b)("strong",{parentName:"p"},"Ethernet 0")," on ",Object(r.b)("strong",{parentName:"p"},"TinyCore-Local-VMware")," was selected and the link was joined to the ",Object(r.b)("strong",{parentName:"p"},"FastEthernet0/0")," interface of ",Object(r.b)("strong",{parentName:"p"},"R1"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/36.jpg")}),Object(r.b)("p",null,"Click the ",Object(r.b)("strong",{parentName:"p"},"Add a Link")," button to stop adding links. The mouse cursor will change back to normal to indicate that you have stopped adding links:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/37.jpg")}),Object(r.b)("p",null,"Click the ",Object(r.b)("strong",{parentName:"p"},"Show/Hide interface labels")," button on the ",Object(r.b)("strong",{parentName:"p"},"GNS3 Toolbar")," to display interface labels in your topology:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/38.jpg")}),Object(r.b)("p",null,"This will display the connected interfaces of both devices:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/39.jpg")}),Object(r.b)("p",null,"You are now ready to power on your network devices. Click the ",Object(r.b)("strong",{parentName:"p"},"Start/Resume")," button on the ",Object(r.b)("strong",{parentName:"p"},"GNS3 Toolbar")," to start up your network devices:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/40.jpg")}),Object(r.b)("p",null,"GNS3 indicates that the devices have been powered on by turning the interface connectors from red to green:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/41.jpg")}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"GNS3 will automatically start up the VMware virtual machine when you click the start button (shown below).  The only available console options for this TinyCore-Local-VMware are None and Telnet. We will be using the GUI displayed in GNS3 to configure this device:"))),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/42.jpg")}),Object(r.b)("p",null,"To access the serial console of the router (or any other additional nodes you may have in your topology), click the Console All button in the Toolbar to launch your select terminal emulator.  The below example uses Solar-PuTTY, as it\u2019s included in the Windows GNS3 All-in-one installer from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://gns3.com"}),"gns3.com"),", and is set to be the default terminal emulator (you\u2019re free to select a different terminal emulator. There are instructions available in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../using-gns3/beginners/the-console-terminal"}),"this article")," showing how to do so)."),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/43.jpg")}),Object(r.b)("p",null,"Be advised that Solar-PuTTY is not included by default if the GNS3 AIO installer was downloaded from Github (regular PuTTY will be included instead).  "),Object(r.b)("p",null,"Solar-PuTTY is available for free on SolarWinds website ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.solarwinds.com/free-tools/solar-putty"}),"here"),"."),Object(r.b)("p",null,"If you have downloaded Solar-PuTTY from SolarWinds will be in a .zip archive. Decompress that file, copy the Solar-PuTTY executable to the GNS3 installation directory. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../using-gns3/beginners/the-console-terminal"}),"This article")," (the same one linked to above) shows how to change the default terminal emulator GNS3 will use."),Object(r.b)("p",null,"Let\u2019s go back to the TinyCore-Local-VMware virtual machine running in the VMware Workstation GUI:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/44.jpg")}),Object(r.b)("p",null,"In this example, R1 is configured as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1# configure terminal\nR1(config)# interface fastEthernet 0/0\nR1(config-if)# ip address 10.1.1.1 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# end\nR1#\n")),Object(r.b)("p",null,"Configure the VM with an IP address in the same subnet. In TinyCore, this is done by first selecting the Control Panel:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/45.jpg")}),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Network"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/46.jpg")}),Object(r.b)("p",null,"Configure the relevant IP addressing information and click ",Object(r.b)("strong",{parentName:"p"},"Apply")," and then Exit:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/47.jpg")}),Object(r.b)("p",null,"In this example the following settings have been used:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Interface: eth0\nIP address: 10.1.1.2\nMask: 255.255.255.0\nBroadcast: 10.1.1.255\nGateway: 10.1.1.1\nDNS: 8.8.8.8\n")),Object(r.b)("p",null,"Click Apply to save the network configuration of this VM."),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/48.jpg")}),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Exit")," to close the ",Object(r.b)("strong",{parentName:"p"},"Network Configuration")," pop-up window, and then click on the ",Object(r.b)("strong",{parentName:"p"},"X")," in the upper-right corner of the TinyCore ",Object(r.b)("strong",{parentName:"p"},"Control Panel")," to close it:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/49.jpg")}),Object(r.b)("p",null,"Click on the ",Object(r.b)("strong",{parentName:"p"},"Terminal")," icon at the bottom of the TinyCore GUI to open a terminal:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/50.jpg")}),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/51.jpg")}),Object(r.b)("p",null,"(a terminal is now open)\nPing R1 from the TinyCore PC:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/52.jpg")}),Object(r.b)("p",null,"Result: The New TinyCore PC can ping the GNS3 router R1."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Congratulations!")," You have integrated a new VMware virtual machine with GNS3."),Object(r.b)("p",null,"Addendum:\nIf you\u2019re curious to see which of those new host-only VMnets this particular virtual machine is using, click ",Object(r.b)("strong",{parentName:"p"},"Edit virtual machine settings")," in VMware Workstation:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/53.jpg")}),Object(r.b)("p",null,"When you first created the TinyCore-Local-VMware virtual machine, it was set to use a NAT (VMnet 8) by default:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/54.jpg")}),Object(r.b)("p",null,"After importing this virtual machine into GNS3, adding it to a topology, and powering up, GNS3 happened to select Host-only VMnet 2, during the creation of this article:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/55.jpg")}),Object(r.b)("p",null,"Also note that GNS3 also created and configured a ",Object(r.b)("strong",{parentName:"p"},"Serial Port")," (set to be connected at power on) for this VM, along with a ",Object(r.b)("strong",{parentName:"p"},"Named Pipe"),":"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/emulators/adding-vmware-vms-to-gns3-topologies/56.jpg")}),Object(r.b)("p",null,"The named pipe is ",Object(r.b)("inlineCode",{parentName:"p"},"\\\\.\\pipe\\gns3_vmware\\UUID"),"\nFor more information on this, check the GNS3 Architecture article"))}m.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(a),g=o,d=m["".concat(i,".").concat(g)]||m[g]||p[g]||r;return a?n.a.createElement(d,s(s({ref:t},c),{},{components:a})):n.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},212:function(e,t,a){"use strict";var o=a(0),n=a(52);t.a=function(){return Object(o.useContext)(n.a)}},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(76);var o=a(212),n=a(214);function r(e,t){var a=void 0===t?{}:t,r=a.forcePrependBaseUrl,i=void 0!==r&&r,s=a.absolute,l=void 0!==s&&s,c=Object(o.a)().siteConfig,b=(c=void 0===c?{}:c).baseUrl,m=void 0===b?"/":b,p=c.url;if(!e)return e;if(i)return m+e;if(!Object(n.a)(e))return e;var g=m+e.replace(/^\//,"");return l?p+g:g}},214:function(e,t,a){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return o}))}}]);