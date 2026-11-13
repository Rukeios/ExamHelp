// CCST Networking (Cisco 100-150), part 2: Cisco NetAcad course modules 15 to 26.
// Written in our own words from Cisco's public CCST Networking exam topics. Nothing here is copied
// from course text. Levels 48-59; one level per module, in course order.
// q: [question, [options...], correctIndex, why]  (answer at index 0, shuffled when shown)
(function(){
const S5="Part 5 · Modules 15–17", S6="Part 6 · Modules 18–20", S7="Part 7 · Modules 21–23", S8="Part 8 · Modules 24–26";
const D1="1 Standards & concepts", D2="2 Addressing", D4="4 Infrastructure", D5="5 Diagnosing problems";
const L=[
/* ================= Part 5 ================= */
{d:48,track:"ccst",dom:D1,grp:S5,mod:15,min:30,title:"TCP and UDP: reliable delivery, fast delivery and port numbers",
pts:[
"Two ways to deliver|An application picks TCP or UDP to carry its data. TCP is like a tracked parcel: it sets up a connection, numbers every piece, confirms delivery and resends anything lost. UDP is like dropping postcards in a mailbox: no setup, no tracking and nothing resent.",
"Why anyone picks UDP|All that tracking costs time. Live voice, video calls and online games would rather lose a scrap of data than wait for a resend, so they use UDP. Quick one-question lookups, like most DNS queries, use it too.",
"Port numbers|The IP address gets data to the right device. The port number gets it to the right program on that device, so a web page and an email download arriving at once don't get mixed up.",
"Ports worth knowing|FTP 20 and 21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67 and 68, HTTP 80, POP3 110, NTP 123, IMAP 143, HTTPS 443."],
terms:[["TCP","Connection-oriented transport: ordered, acknowledged, resends what is lost"],["UDP","Connectionless transport: low overhead, no delivery confirmation"],["Port number","Identifies the application or service a segment is for"],["Overhead","The extra header data and messages a protocol adds"]],
trap:"Important is not the same as reliable. A video call matters, but it still uses UDP, because a late piece of audio is worse than a missing one.",
q:[
["A video call app would rather skip a lost scrap of audio than wait for it to be resent. Which transport protocol fits?",["UDP","TCP","ICMP","ARP"],0,"UDP has no resends, which suits live audio and video where late data is useless."],
["Which feature does TCP provide that UDP does not?",["Resending data that was lost","Port numbers","Delivery over IP","Use on wireless networks"],0,"Both use ports and both run over IP. Only TCP tracks and resends lost data."],
["Which port does HTTPS use by default?",["443","80","22","53"],0,"HTTPS is 443. HTTP is 80, SSH is 22 and DNS is 53."],
["What does the destination port number in a segment identify?",["The application or service on the receiving device","The receiving device on the network","The router the data passes through","The network the device is on"],0,"The IP address finds the device. The port finds the program on it."],
["Which service uses port 22?",["SSH","Telnet","FTP","SMTP"],0,"SSH is 22. Telnet is 23, FTP is 20 and 21, SMTP is 25."],
["A large software download must arrive complete, with every byte in order. Which transport protocol carries it?",["TCP","UDP","ICMP","NTP"],0,"TCP's ordering and resends make sure nothing is missing."],
["Which statement describes UDP?",["It sends without setting up a connection and does not confirm delivery","It sets up a connection before sending any data","It resends segments that are lost","It puts out-of-order segments back in order"],0,"UDP is connectionless and does not track delivery. The others describe TCP."],
["Which port number is used by DNS?",["53","25","110","443"],0,"DNS uses port 53."]]},

{d:49,track:"ccst",dom:D1,grp:S5,mod:16,min:40,title:"Application layer services: web, email, file transfer, remote access and time",
pts:[
"Web|HTTP moves web pages between a browser and a server. HTTPS is the same thing encrypted, so nobody else on the network can read or change what is sent. Check for https before typing a password.",
"Email|SMTP sends mail: from your app to your mail server, and between mail servers. To read it, POP3 downloads messages to one device and usually removes them from the server. IMAP leaves them on the server and keeps every device in sync.",
"Files and remote access|FTP moves files but sends the login in plain text. SFTP does the same job encrypted, over SSH. Telnet gives a remote command line in plain text. SSH gives the same command line encrypted, which is why SSH replaced Telnet.",
"Services in the background|DNS turns names into addresses. DHCP hands out addresses. NTP keeps every device's clock in step, which matters for logs, certificates and sign-ins."],
terms:[["HTTPS","HTTP with encryption, port 443"],["SMTP","Sends email; port 25"],["IMAP / POP3","Read mail kept on the server and synced / downloaded to one device"],["NTP","Network Time Protocol: keeps clocks in sync"]],
trap:"SMTP only sends mail. Reading mail is POP3 or IMAP. If the mail must look the same on a phone, a laptop and webmail, the answer is IMAP.",
q:[
["You read email on your phone, laptop and the webmail site, and a message read on one shows as read on all three. Which protocol makes that work?",["IMAP","POP3","SMTP","FTP"],0,"IMAP keeps mail on the server and syncs its state to every device."],
["Which protocol sends email from a mail app to the mail server?",["SMTP","IMAP","POP3","SNMP"],0,"SMTP sends. IMAP and POP3 are for reading."],
["Why should a technician use SSH rather than Telnet to manage a router?",["SSH encrypts the session, including the password","Telnet cannot reach routers","SSH works over longer cables","Telnet only works over Wi-Fi"],0,"Telnet sends everything, passwords included, in plain text."],
["Which protocol keeps the clocks on network devices in sync?",["NTP","DNS","DHCP","SNMP"],0,"NTP is the Network Time Protocol."],
["What is the difference between HTTP and HTTPS?",["HTTPS encrypts the traffic between the browser and the server","HTTPS is only used for file downloads","HTTP uses IP addresses and HTTPS does not","HTTPS works without a web server"],0,"HTTPS adds encryption to the same web protocol."],
["Which protocol transfers files encrypted, using SSH?",["SFTP","FTP","TFTP","SMTP"],0,"SFTP runs over SSH. FTP and TFTP send in plain text."],
["A mail app downloads messages to one computer and they disappear from the server. Which protocol is it most likely using?",["POP3","IMAP","SMTP","HTTPS"],0,"POP3 typically downloads and removes mail from the server."],
["Which service turns a website name into an IP address?",["DNS","DHCP","NTP","SMTP"],0,"DNS resolves names to addresses."]]},

{d:50,track:"ccst",dom:D5,grp:S5,mod:17,min:40,title:"Network testing utilities: ipconfig, ping, tracert and nslookup",
pts:[
"See your settings|On Windows, ipconfig shows the IP address, mask and default gateway. ipconfig /all adds the MAC address, the DHCP server and the DNS servers. On Linux use ip address (ip a). On a Mac, ifconfig.",
"ping|ping sends ICMP echo requests and waits for echo replies. A reply proves the path works both ways and shows the round-trip time. Work outward: ping 127.0.0.1, then your own address, then the default gateway, then something on the internet.",
"Find where it stops|tracert on Windows, or traceroute on Linux and Mac, lists each router along the path with its delay. The hop where replies stop, or the delay jumps, is where to look.",
"Test name lookup|nslookup asks a DNS server for the address of a name. If pinging an IP address on the internet works but pinging a name fails, the connection is fine and DNS is the problem."],
terms:[["ICMP","The protocol ping and traceroute use for test and error messages"],["ipconfig /all","Windows command showing full adapter settings, including MAC and DNS"],["tracert / traceroute","Lists every router hop on the way to a destination"],["nslookup","Queries a DNS server to resolve a name"]],
trap:"A failed ping does not always mean a device is down. Many firewalls block ping. Check another way, like opening the service, before blaming the network.",
q:[
["Pinging 8.8.8.8 gets replies, but pinging www.example.com says the host could not be found. What is the likeliest problem?",["DNS","The default gateway","The network cable","The network adapter"],0,"Traffic reaches the internet by address, so only name lookup is failing."],
["Which Windows command shows the network adapter's MAC address and DNS servers?",["ipconfig /all","ipconfig","ping -a","tracert"],0,"Plain ipconfig shows only the address, mask and gateway. /all shows the rest."],
["On Windows, which command lists each router a packet passes through on the way to a destination?",["tracert","ping","nslookup","ipconfig"],0,"tracert shows every hop. Linux and Mac call it traceroute."],
["Which protocol does ping use?",["ICMP","TCP","UDP","ARP"],0,"ping sends ICMP echo requests and gets ICMP echo replies."],
["Pinging 127.0.0.1 succeeds. What does that prove?",["The device's own TCP/IP software is working","The internet connection is working","The default gateway is reachable","DNS is working"],0,"The loopback address never leaves the device, so it only tests the device itself."],
["A server does not answer ping, but its website loads fine. What is the likely reason?",["A firewall is blocking ping","The server is turned off","The server's cable is unplugged","The server has the wrong IP address"],0,"The site loading proves the server is up. Firewalls often drop ICMP."],
["Which command tests whether a DNS server can resolve a name?",["nslookup","tracert","ipconfig /release","arp -a"],0,"nslookup sends a DNS query and shows the answer."],
["On a Linux computer, which command shows the IP addresses on its interfaces?",["ip address","ipconfig /all","tracert","nslookup"],0,"Linux uses ip address (or ip a). ipconfig is the Windows command."]]},

/* ================= Part 6 ================= */
{d:51,track:"ccst",dom:D1,grp:S6,mod:18,min:40,title:"Network design: network sizes, topologies and the three-layer model",
pts:[
"Sizes of network|PAN: around one person, like a phone and earbuds. LAN: one home or building. WLAN: a LAN over Wi-Fi. CAN: several buildings on one campus. MAN: across a city. WAN: across long distances, linking sites through a provider. The internet is the largest WAN.",
"Topologies|Star: every device cables back to a central switch, which is how most networks are built today. Mesh: devices link to several others, so there are backup paths. Bus and ring are older layouts. Physical topology is how the cables run; logical topology is how the data flows.",
"Three layers|Larger networks are built in layers. Access: where users and devices plug in. Distribution: gathers the access switches and applies rules. Core: the fast backbone between parts of the network. Small sites often merge distribution and core into one, called a collapsed core.",
"Design goals|Fault tolerance, so one failure doesn't take everything down. Scalability, so the network can grow. Quality of service (QoS), so voice and video get priority. And security throughout."],
terms:[["PAN / LAN / WAN","Personal area, local area and wide area networks"],["Star topology","Every device connects to one central device"],["Access, distribution, core","The three layers of a hierarchical network design"],["QoS","Quality of service: giving time-sensitive traffic priority"]],
trap:"Mesh gives the most backup paths but costs the most cabling. Star is cheapest to manage, but its central switch is a single point of failure.",
q:[
["Your phone, smartwatch and earbuds connect to each other around you. What type of network is that?",["PAN","LAN","CAN","MAN"],0,"A personal area network covers the space around one person."],
["A company links its offices in two different states through a service provider. What type of network connects them?",["WAN","LAN","PAN","WLAN"],0,"A wide area network spans long distances, usually through a provider."],
["Every PC in an office cables to one central switch. What topology is this?",["Star","Mesh","Bus","Ring"],0,"All devices connect to one central point."],
["In a three-layer design, where do user PCs and printers connect?",["Access layer","Distribution layer","Core layer","Internet layer"],0,"End devices plug in at the access layer."],
["Which layer of a three-layer design is the high-speed backbone?",["Core","Access","Distribution","Physical"],0,"The core moves traffic quickly between parts of the network."],
["Voice calls break up whenever large downloads run. Which design feature addresses this?",["Quality of service (QoS)","A mesh topology","More access switches","A longer default route"],0,"QoS gives voice traffic priority over bulk downloads."],
["What is the main weakness of a star topology?",["If the central switch fails, every device on it loses its connection","It needs a cable between every pair of devices","Data must travel around a loop","It cannot use Ethernet"],0,"The central device is a single point of failure."],
["A university connects the networks of several buildings on its grounds. What type of network is this?",["CAN","PAN","MAN","WLAN"],0,"A campus area network links buildings on one site."]]},

{d:52,track:"ccst",dom:D1,grp:S6,mod:19,min:30,title:"Cloud and virtualization: hypervisors, IaaS, PaaS, SaaS and deployment models",
pts:[
"Virtualization|Virtualization lets one physical server run several virtual machines (VMs), each with its own operating system. Software called a hypervisor shares out the processor, memory and storage. Fewer physical boxes means less power, space and cost.",
"Two kinds of hypervisor|Type 1 runs directly on the hardware, called bare metal, and is what data centers use. Type 2 runs as an app on a normal operating system, like running a Linux VM on your laptop for a lab.",
"Service models|IaaS: you rent virtual servers, storage and networks, and you manage the operating system. PaaS: you get a ready platform to build and run apps on. SaaS: you simply use finished software, like web email. Down that list, you manage less and less.",
"Deployment models|Public cloud runs on a provider's shared infrastructure. Private cloud serves one organization. Hybrid mixes the two, often with on-premises equipment. On-premises means you own and run the hardware at your own site."],
terms:[["Hypervisor","Software that creates and runs virtual machines"],["Virtual machine","A software computer with its own operating system"],["IaaS / PaaS / SaaS","Infrastructure, platform and software as a service"],["Hybrid cloud","A mix of public cloud with private cloud or on-premises systems"]],
trap:"If the customer still installs and patches the operating system, it is IaaS. If they only sign in and use the software, it is SaaS.",
q:[
["A business signs into web-based email and office apps from a browser and never installs or maintains them. Which service model is this?",["SaaS","IaaS","PaaS","On-premises"],0,"Software as a service is finished software you just use."],
["A company rents virtual servers from a provider and installs and patches its own operating systems on them. Which service model is this?",["IaaS","SaaS","PaaS","Private cloud"],0,"With infrastructure as a service, the customer manages the operating system."],
["What software lets one physical server run several virtual machines?",["A hypervisor","A firewall","A DNS server","A routing protocol"],0,"The hypervisor creates the VMs and shares the hardware between them."],
["A student runs a Linux VM inside an app on their Windows laptop. Which type of hypervisor is that?",["Type 2","Type 1","Bare metal","Cloud native"],0,"A Type 2 hypervisor runs on top of an existing operating system."],
["Developers get a ready environment to deploy their code without managing servers or operating systems. Which service model is this?",["PaaS","IaaS","SaaS","On-premises"],0,"Platform as a service provides the platform; the developers bring the app."],
["A company keeps sensitive systems in its own data center and runs its public website on a cloud provider. Which deployment model is this?",["Hybrid","Public","Private","Community"],0,"Mixing on-premises or private systems with public cloud is hybrid."],
["What is a main benefit of server virtualization?",["Fewer physical servers, saving power, space and cost","Every VM gets its own physical network card","Servers no longer need operating systems","It removes the need for backups"],0,"Several VMs share one physical machine."],
["What does on-premises mean?",["The organization owns and runs the hardware at its own site","The software is rented by the month","The servers are shared with other companies","The apps run only in a browser"],0,"On-premises means the equipment is in the organization's own building."]]},

{d:53,track:"ccst",dom:D2,grp:S6,mod:20,min:40,title:"Number systems: binary, decimal and hexadecimal",
pts:[
"Binary place values|Each bit in an octet has a place value. From left to right: 128, 64, 32, 16, 8, 4, 2, 1. Add up the places that hold a 1. 11000000 is 128 + 64 = 192. All eight ones is 255.",
"Decimal to binary|Start at 128 and work right. If the number is at least the place value, write 1 and subtract it; otherwise write 0. For 65: 0 for 128, 1 for 64 (leaving 1), then 0s until the last place, which is 1. So 65 is 01000001.",
"Hexadecimal|Hex counts 0 to 9 and then a to f, so one hex digit holds 0 to 15: exactly four bits. Two hex digits make one byte, from 00 to ff (255). MAC addresses and IPv6 addresses are written in hex for that reason.",
"Why it matters|Masks, network addresses and IPv6 all make sense once you can see the bits. 255.255.255.0 is twenty-four 1s followed by eight 0s, which is why it is written /24."],
terms:[["Binary","Base 2: only the digits 0 and 1"],["Place value","What each position is worth: 128, 64, 32, 16, 8, 4, 2, 1"],["Hexadecimal","Base 16: 0 to 9 and a to f; one digit is four bits"],["Octet","Eight bits, from 0 to 255"]],
trap:"Check a conversion by adding the place values back up. 01000001 is 64 + 1 = 65. If an answer key disagrees with your arithmetic, the arithmetic wins.",
q:[
["What is the binary number 11000000 in decimal?",["192","128","160","224"],0,"128 + 64 = 192."],
["What is the decimal number 65 in binary?",["01000001","01001110","01100001","10000001"],0,"65 = 64 + 1. The others are 78, 97 and 129."],
["What is the binary number 11111111 in decimal?",["255","256","128","254"],0,"Every place is on: 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255."],
["How many bits does one hexadecimal digit represent?",["4","8","2","16"],0,"One hex digit covers 0 to 15, which takes four bits."],
["What is hexadecimal ff in decimal?",["255","16","99","15"],0,"ff is two hex digits at their highest, the same as eight binary ones."],
["What is the binary number 10101000 in decimal?",["168","170","160","172"],0,"128 + 32 + 8 = 168."],
["What is the place value of the leftmost bit in an octet?",["128","256","64","1"],0,"From left to right the places are 128, 64, 32, 16, 8, 4, 2, 1."],
["Why is the mask 255.255.255.0 written as /24?",["In binary it is 24 ones followed by 8 zeros","It allows 24 hosts","It uses two to four octets","It was the 24th mask defined"],0,"The number after the slash counts the 1 bits in the mask."]]},

/* ================= Part 7 ================= */
{d:54,track:"ccst",dom:D4,grp:S7,mod:21,min:40,title:"Ethernet switching: duplex, auto-MDIX, VLANs and trunks",
pts:[
"Duplex|Full duplex sends and receives at the same time. Half duplex takes turns. Modern switch ports run full duplex. If one end is set to full and the other to half, called a duplex mismatch, the link still works but it is slow and drops data.",
"Automatic settings|Ports normally agree on speed and duplex by themselves (auto-negotiation). Auto-MDIX lets a port work with either a straight-through or a crossover cable, so the cable type rarely matters anymore.",
"VLANs|A VLAN splits one physical switch into separate logical networks. Each VLAN is its own broadcast domain, so guest Wi-Fi, phones and staff PCs can share a switch and still be kept apart. Devices in different VLANs need a router or a Layer 3 switch to talk.",
"Trunks|A trunk link carries several VLANs between switches over one cable. The 802.1Q standard tags each frame with its VLAN number so the switch at the other end knows where it belongs."],
terms:[["Full duplex","Sending and receiving at the same time"],["Duplex mismatch","One end full duplex, the other half: slow with errors"],["VLAN","A logical network on a switch; its own broadcast domain"],["Trunk (802.1Q)","A link carrying several VLANs, with each frame tagged"]],
trap:"A Layer 2 switch alone cannot move traffic between VLANs. That takes routing: a router or a Layer 3 switch.",
q:[
["A link between a PC and a switch works but is slow and full of errors. One end is set to full duplex and the other to half. What is this called?",["A duplex mismatch","A VLAN mismatch","A broadcast storm","An auto-MDIX failure"],0,"Mismatched duplex settings cause slow links with errors."],
["What does a VLAN create?",["A separate broadcast domain on the same physical switch","A faster cable connection","A wireless network","A public IP address range"],0,"Each VLAN is its own logical network and broadcast domain."],
["Which standard tags frames with a VLAN number on a trunk link?",["802.1Q","802.11","802.3af","802.1X"],0,"802.1Q is VLAN tagging. 802.11 is Wi-Fi, 802.3af is PoE and 802.1X is port sign-in."],
["PCs in VLAN 10 and VLAN 20 on the same switch need to communicate. What is required?",["A router or a Layer 3 switch","A longer cable","A hub between them","Auto-MDIX on both ports"],0,"Moving traffic between VLANs is routing."],
["Which feature lets a switch port work with either a straight-through or a crossover cable?",["Auto-MDIX","802.1Q","Full duplex","Port security"],0,"Auto-MDIX adjusts the port to the cable."],
["What does full duplex mean?",["Sending and receiving at the same time","Sending twice as fast in one direction","Using two cables for one link","Taking turns to send and receive"],0,"Half duplex takes turns. Full duplex does both at once."],
["One cable between two switches must carry traffic for several VLANs. What is that link called?",["A trunk","An access link","A crossover","A loopback"],0,"Trunks carry multiple VLANs."],
["Why might an office put its guest Wi-Fi on its own VLAN?",["To keep guest traffic apart from staff devices","To make the guest Wi-Fi faster than wired","To give guests public IP addresses","To avoid needing a router"],0,"Separate VLANs keep the groups on separate networks."]]},

{d:55,track:"ccst",dom:D4,grp:S7,mod:22,min:30,title:"The network layer: what IP promises, TTL and how a host picks a path",
pts:[
"What IP promises|IP is connectionless: nothing is set up before sending. It is best effort: it does not guarantee delivery. And it is media independent: it works the same over copper, fiber or Wi-Fi. If reliability is needed, TCP adds it on top.",
"Time to Live|Each IPv4 packet carries a TTL number. Every router lowers it by one, and at zero the packet is thrown away. That stops a packet caught in a loop from circling forever. traceroute uses this on purpose to find each hop.",
"How a host decides|Before sending, a device compares the destination with its own network. Same network: deliver directly. Different network: send to the default gateway. On Windows, route print shows the device's own routing table.",
"IPv6 differences|The IPv6 header is simpler and a fixed size. The Hop Limit field does the TTL's job. IPv6 has no broadcast at all; it uses multicast instead."],
terms:[["Connectionless","Sends without setting up a session first"],["Best effort","No guarantee that a packet arrives"],["TTL","Time to Live: lowered by one at each router; dropped at zero"],["Hop Limit","The IPv6 field that does the TTL's job"]],
trap:"IP does not resend lost packets. If a question asks what makes delivery reliable, the answer is TCP at the transport layer, not IP.",
q:[
["What happens when a packet's TTL reaches zero at a router?",["The router drops the packet","The router sends it to the default route","The router resets the TTL to 255","The router floods it out of every interface"],0,"A TTL of zero means the packet is discarded."],
["Which IPv6 header field does the same job as the IPv4 TTL?",["Hop Limit","Flow Label","Traffic Class","Next Header"],0,"Hop Limit is lowered at each router, just like TTL."],
["What does it mean that IP is a best-effort protocol?",["It does not guarantee that packets arrive","It always picks the fastest path","It encrypts every packet","It resends any packet that is lost"],0,"IP tries to deliver but makes no promise."],
["IP works the same way over copper, fiber and Wi-Fi. What is this property called?",["Media independence","Best effort","Encapsulation","Segmentation"],0,"IP does not care what physical medium carries it."],
["A host's destination is on a different network. Where does the host send the packet?",["To its default gateway","Straight to the destination's MAC address","To the DNS server","Out as a broadcast"],0,"Traffic for other networks goes to the default gateway."],
["Which Windows command displays the device's own routing table?",["route print","ipconfig","arp -a","nslookup"],0,"route print shows the routes the host knows."],
["Why does the IPv4 header have a TTL field?",["To stop packets from looping forever","To measure download speed","To store the sender's MAC address","To encrypt the packet"],0,"TTL puts a limit on how many routers a packet can cross."],
["Which kind of address does IPv6 not have?",["Broadcast","Unicast","Multicast","Anycast"],0,"IPv6 replaced broadcast with multicast."]]},

{d:56,track:"ccst",dom:D2,grp:S7,mod:23,min:40,title:"IPv4 address structure: network and broadcast addresses, host counts and classes",
pts:[
"Network and broadcast addresses|In every network, the address with all host bits set to 0 is the network address, which names the network itself. The address with all host bits set to 1 is the broadcast address. Neither can be given to a device. For 192.168.10.0/24 they are .0 and .255.",
"Counting hosts|Usable hosts = 2 to the power of the host bits, minus 2. A /24 has 8 host bits: 256 − 2 = 254. A /25 has 7: 126. A /26 has 6: 62. A /30 has 2: only 2 hosts, which is just right for a link between two routers.",
"Address classes|The old class system still turns up on exams. Class A: first octet 1 to 126, default /8. Class B: 128 to 191, /16. Class C: 192 to 223, /24. Class D, 224 to 239, is for multicast. Class E is experimental. 127 is set aside for loopback.",
"Subnetting|Borrowing host bits for the network part splits one network into smaller ones. Each bit you borrow doubles the number of subnets and halves the hosts in each."],
terms:[["Network address","All host bits 0; names the network"],["Broadcast address","All host bits 1; reaches every host on the network"],["Usable hosts","2 to the power of host bits, minus 2"],["Subnetting","Splitting a network by borrowing host bits"]],
trap:"Always subtract 2. A /24 has 256 addresses but only 254 usable hosts, because the network and broadcast addresses can't be assigned.",
q:[
["How many usable host addresses are in a /24 network?",["254","256","255","252"],0,"256 addresses minus the network and broadcast addresses."],
["What is the broadcast address of the network 192.168.10.0/24?",["192.168.10.255","192.168.10.0","192.168.10.1","192.168.255.255"],0,"All host bits set to 1 gives .255."],
["A host has the address 192.168.1.130/25. What is its network address?",["192.168.1.128","192.168.1.0","192.168.1.127","192.168.1.129"],0,"A /25 splits the last octet at 128, and 130 falls in the upper half."],
["How many usable hosts are in a /30 network?",["2","4","6","30"],0,"Two host bits give 4 addresses, minus 2."],
["Which class does the address 172.20.5.1 belong to?",["Class B","Class A","Class C","Class D"],0,"First octets from 128 to 191 are Class B."],
["Which first-octet range is reserved for multicast?",["224 to 239 (Class D)","192 to 223 (Class C)","128 to 191 (Class B)","1 to 126 (Class A)"],0,"Class D, 224 to 239, is multicast."],
["How many usable hosts are in a /26 network?",["62","64","126","30"],0,"Six host bits give 64 addresses, minus 2."],
["What happens when you borrow one more host bit for the network part?",["The number of subnets doubles and each holds half as many hosts","Each subnet holds twice as many hosts","The broadcast address disappears","The address becomes IPv6"],0,"Every borrowed bit doubles the subnets and halves their size."]]},

/* ================= Part 8 ================= */
{d:57,track:"ccst",dom:D4,grp:S8,mod:24,min:40,title:"Address resolution: ARP problems and IPv6 Neighbor Discovery",
pts:[
"ARP in one breath|IPv4 devices use ARP to learn the MAC address for an IP address on the local network: a broadcast question, a direct answer, and a cache entry that expires after a while.",
"Where ARP falls short|Every ARP request is a broadcast, so big networks get noisy. ARP also believes any reply. An attacker can send fake replies that tie the gateway's IP address to their own MAC address. That is ARP spoofing, or poisoning, and it puts them in the middle of other people's traffic.",
"IPv6 uses Neighbor Discovery|IPv6 has no ARP. Neighbor Discovery, part of ICMPv6, does the job: a Neighbor Solicitation asks who has an address, and a Neighbor Advertisement answers with the MAC address. It uses multicast, so devices that aren't involved can ignore it.",
"Finding routers|IPv6 hosts send a Router Solicitation to find routers. Routers send Router Advertisements carrying the network prefix and the default gateway. That is how an IPv6 device learns its network without DHCP."],
terms:[["ARP spoofing","Fake ARP replies that redirect traffic to an attacker"],["Neighbor Solicitation","IPv6 message asking for a neighbor's MAC address"],["Neighbor Advertisement","IPv6 reply giving the MAC address"],["Router Advertisement","IPv6 router message with the prefix and gateway"]],
trap:"IPv6 never uses ARP or broadcast. If an IPv6 question offers ARP as an answer, rule it out; the answer is Neighbor Discovery, which is part of ICMPv6.",
q:[
["Which protocol does IPv6 use instead of ARP?",["Neighbor Discovery, part of ICMPv6","ARPv6","DHCPv6","DNS"],0,"IPv6 resolves MAC addresses with Neighbor Discovery messages."],
["An attacker sends fake ARP replies so that other devices send their gateway traffic to the attacker's PC. What is this attack called?",["ARP spoofing","DNS poisoning","MAC flooding","Phishing"],0,"Forged ARP replies are ARP spoofing, also called ARP poisoning."],
["Which IPv6 message asks for the MAC address of a device on the local network?",["Neighbor Solicitation","Neighbor Advertisement","Router Advertisement","Router Solicitation"],0,"The solicitation asks. The advertisement answers."],
["How can an IPv6 host learn its network prefix and default gateway without DHCP?",["From a Router Advertisement","From an ARP reply","From a DNS AAAA record","From its MAC address table"],0,"Routers announce the prefix and gateway in Router Advertisements."],
["Why can ARP cause problems on very large networks?",["Every ARP request is a broadcast that all devices must process","ARP encrypts too much traffic","ARP only works across routers","ARP requires a DNS server"],0,"More devices means more broadcasts reaching everyone."],
["Neighbor Discovery messages belong to which protocol?",["ICMPv6","TCP","UDP","ARP"],0,"Neighbor Discovery is built on ICMPv6."],
["Which message does an IPv6 router send to announce itself and its network prefix?",["Router Advertisement","Neighbor Solicitation","Router Solicitation","Neighbor Advertisement"],0,"Routers advertise. Hosts solicit."],
["When an IPv6 device looks for a neighbor's MAC address, how does it send the question?",["As a multicast","As a broadcast to every device","As a unicast to the default gateway","Through the DNS server"],0,"IPv6 has no broadcast, so Neighbor Discovery uses multicast."]]},

{d:58,track:"ccst",dom:D1,grp:S8,mod:25,min:40,title:"IP addressing services: how DNS works, record types, DHCP relay and SLAAC",
pts:[
"How DNS finds a name|Your device checks its own cache first. If the answer isn't there, it asks a DNS server, which works down the hierarchy: the root servers, then the top-level domain servers such as .com or .org, then the server for that domain. The answer is cached for next time.",
"Record types|A record: a name to an IPv4 address. AAAA: a name to an IPv6 address. MX: which server accepts mail for a domain. CNAME: an alias that points to another name. NS: which servers hold the domain's records.",
"DHCP across routers|A DHCP Discover is a broadcast, and routers don't forward broadcasts. To serve clients on another network, the router is set up as a DHCP relay agent, which passes their requests on to the server.",
"IPv6 address options|SLAAC: the device builds its own address from the prefix in the Router Advertisement. Stateless DHCPv6: SLAAC for the address, plus a DHCPv6 server for extras like DNS servers. Stateful DHCPv6: the server hands out the address, much like DHCP for IPv4."],
terms:[["A / AAAA record","Name to IPv4 address / name to IPv6 address"],["MX record","Names the mail server for a domain"],["DHCP relay agent","A router that forwards DHCP requests to a server on another network"],["SLAAC","Stateless address autoconfiguration: an IPv6 device makes its own address"]],
trap:"AAAA is the IPv6 record, not a stronger A record. Four As, because an IPv6 address is four times as long as an IPv4 one.",
q:[
["Which DNS record maps a name to an IPv6 address?",["AAAA","A","MX","CNAME"],0,"A is for IPv4. AAAA is for IPv6."],
["Which DNS record says which server accepts email for a domain?",["MX","A","NS","CNAME"],0,"MX stands for mail exchanger."],
["Clients on a different network from the DHCP server keep getting 169.254 addresses. What does the router between them need?",["To be set up as a DHCP relay agent","To run NAT","A VLAN trunk","Port 443 opened"],0,"The relay agent forwards the broadcast Discover to the DHCP server."],
["An IPv6 device creates its own address from the prefix in a Router Advertisement. What is this method called?",["SLAAC","Stateful DHCPv6","APIPA","NAT"],0,"Stateless address autoconfiguration needs no DHCP server for the address."],
["When resolving a name, where does a device look first?",["Its own DNS cache","A root DNS server","A top-level domain server","The website's server"],0,"A cached answer saves a trip to the DNS server."],
["After the root servers, which DNS servers does a lookup for example.com reach next?",["The .com top-level domain servers","The example.com web server","The DHCP server","The nearest router"],0,"The root points to the .com servers, which point to the domain's own servers."],
["Which record makes www.example.com an alias for another name?",["CNAME","AAAA","MX","NS"],0,"A CNAME points one name at another."],
["In stateless DHCPv6, what does the DHCPv6 server provide?",["Extra settings, such as DNS servers, while the device makes its own address","The device's IPv6 address","The device's MAC address","Nothing; no server is used"],0,"Stateless means the server keeps no record of addresses, only hands out extras."]]},

{d:59,track:"ccst",dom:D1,grp:S8,mod:26,min:40,title:"The transport layer: segments, sockets, the three-way handshake and flow control",
pts:[
"Segments and ports|The transport layer cuts data into segments and labels each one with a source and destination port. That lets one device run a browser, email and a game at the same time and keep each one's data apart.",
"Port ranges and sockets|Well-known ports, 0 to 1023, belong to common services. Registered ports run from 1024 to 49151. Dynamic ports, 49152 to 65535, are picked by clients for their side of each conversation. An IP address plus a port is a socket, such as 192.168.1.20:52144.",
"The three-way handshake|TCP opens a connection in three steps. SYN: let's talk. SYN-ACK: agreed, let's talk. ACK: confirmed. When finished, each side sends a FIN and the other acknowledges it.",
"Keeping it reliable|TCP numbers each segment with sequence numbers so the receiver can put them back in order. The receiver acknowledges what arrived, and the sender resends what didn't. The window size tells the sender how much it can send before waiting; that's flow control."],
terms:[["Segment","The transport layer's unit of data"],["Socket","An IP address plus a port number"],["Three-way handshake","SYN, SYN-ACK, ACK"],["Window size","How much data can be sent before an acknowledgment is needed"]],
trap:"The handshake is SYN, SYN-ACK, ACK. The server answers with one combined SYN-ACK, not a separate SYN and ACK.",
q:[
["What is the correct order of the TCP three-way handshake?",["SYN, SYN-ACK, ACK","SYN, ACK, SYN-ACK","ACK, SYN, SYN-ACK","SYN, SYN, ACK"],0,"The client sends SYN, the server answers SYN-ACK, the client confirms with ACK."],
["Which port range do clients pick from for their own side of a conversation?",["49152 to 65535 (dynamic)","0 to 1023 (well-known)","1024 to 49151 (registered)","1 to 100"],0,"Clients use a random dynamic port for each conversation."],
["What is a socket?",["An IP address combined with a port number","A physical network jack","A type of Ethernet cable","A DNS record"],0,"The pair identifies one end of a conversation."],
["How does TCP put segments back in the right order?",["With sequence numbers","With the window size","With the TTL","With MAC addresses"],0,"Sequence numbers show where each segment belongs."],
["Which TCP feature controls how much data is sent before waiting for an acknowledgment?",["The window size","The sequence number","The port number","The checksum"],0,"The window size is TCP's flow control."],
["Which port range contains well-known service ports like 80 and 443?",["0 to 1023","1024 to 49151","49152 to 65535","65536 and up"],0,"Common services use the well-known ports."],
["Which TCP flag is used to end a connection normally?",["FIN","SYN","PSH","URG"],0,"FIN signals that a side has finished sending."],
["How does one PC keep the data for its browser and its email app apart?",["Each application uses its own port number","Each application gets its own IP address","Each application uses a different cable","The router sorts them by MAC address"],0,"Port numbers tell the transport layer which app each segment belongs to."]]}
];
const M=window.CCST_MODULES||(window.CCST_MODULES=[null]);
Object.assign(M,{15:"TCP and UDP",16:"Application Layer Services",17:"Network Testing Utilities",18:"Network Design",19:"Cloud and Virtualization",20:"Number Systems",
  21:"Ethernet Switching",22:"Network Layer",23:"IPv4 Address Structure",24:"Address Resolution",25:"IP Addressing Services",26:"Transport Layer"});
L.forEach(d=>window.DAYS.push(d));
})();
