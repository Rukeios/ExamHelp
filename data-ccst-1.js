// CCST Networking (Cisco 100-150), part 1: class Sessions 1 to 4 (course modules 1 to 14).
// Written in our own words from Cisco's public CCST Networking exam topics. Nothing here is copied
// from course text. Levels 34-47; one level per module, in the order a class covers them.
// q: [question, [options...], correctIndex, why]  (answer at index 0, shuffled when shown)
(function(){
const S1="Session 1", S2="Session 2", S3="Session 3", S4="Session 4";
const D1="1 Standards & concepts", D2="2 Addressing", D3="3 Endpoints & media", D4="4 Infrastructure";
const L=[
/* ================= Session 1 ================= */
{d:34,track:"ccst",dom:D1,grp:S1,mod:1,min:30,title:"Communication in a connected world: network types, bits, bandwidth and throughput",
pts:[
"Networks come in sizes|A network is two or more devices that can exchange data. A home network links a few devices, a small office network links a business, and the internet links networks to other networks all over the world. Nobody owns the internet. It is a network of networks.",
"Everything is bits|Computers store and send everything as bits: ones and zeros. Eight bits make a byte. A photo, a text and a video call are all just long runs of bits by the time they hit the wire.",
"Three ways to carry a bit|Copper cable carries bits as electrical pulses. Fiber-optic cable carries them as pulses of light. Wireless carries them as radio waves. The message is the same; only the carrier changes.",
"Bandwidth vs throughput|Bandwidth is what the link could carry, like the number of lanes on a highway. Throughput is what actually got through, like the cars that made it past in rush hour. Throughput is never higher than bandwidth, and congestion, slow devices and interference pull it down."],
terms:[["Bit / byte","A single 1 or 0 / a group of eight bits"],["Bandwidth","The most data a link can carry in a given time, measured in bits per second (bps, Mbps, Gbps)"],["Throughput","The data that actually moved across the link in that time"],["Latency","The delay for data to get from one point to another"]],
trap:"Speeds are in bits per second with a small b (Mbps). File sizes are in bytes with a capital B (MB). A 100 Mbps line moves about 12.5 megabytes a second, not 100.",
q:[
["Your internet plan says 300 Mbps, but a speed test at 6 p.m. shows 180 Mbps. What is the 180 Mbps figure?",["Throughput","Bandwidth","Latency","Bit depth"],0,"Throughput is what actually got through at that moment. Bandwidth is the 300 Mbps the link could carry."],
["How many bits are in one byte?",["8","4","10","16"],0,"A byte is eight bits."],
["Which medium carries data as pulses of light?",["Fiber-optic cable","Twisted-pair copper cable","Wi-Fi","Coaxial cable"],0,"Fiber uses light. Copper uses electrical signals and wireless uses radio waves."],
["Which statement about the internet is true?",["It is a worldwide collection of connected networks that no single group owns","It is one large network owned by the major service providers","It is the same thing as the World Wide Web","It only connects devices that use Wi-Fi"],0,"The internet is a network of networks. No one organization owns it."],
["A link has a bandwidth of 1 Gbps. Which result is impossible on that link?",["A throughput of 1.5 Gbps","A throughput of 400 Mbps","A throughput of 950 Mbps","A throughput of 10 Mbps"],0,"Throughput can never be more than the bandwidth of the link."],
["Which unit would an internet provider use to advertise connection speed?",["Megabits per second (Mbps)","Megabytes (MB)","Gigabytes (GB)","Megahertz per byte"],0,"Speed is measured in bits per second. Bytes measure storage and file size."],
["Data is travelling over Wi-Fi. What form does the signal take?",["Radio waves","Electrical pulses","Pulses of light","Sound waves"],0,"Wireless networks send bits as radio waves."],
["Many people in an office start video calls at once and everything slows down. Which measure dropped?",["Throughput","Bandwidth","The number of bits in a byte","The size of the files"],0,"The link's capacity (bandwidth) did not change. Congestion lowered what actually gets through."]]},

{d:35,track:"ccst",dom:D1,grp:S1,mod:2,min:30,title:"Network components, types and connections: clients, servers and how you reach the internet",
pts:[
"Clients ask, servers answer|A client is a device or program that requests something, like your browser asking for a page. A server is the one that provides it, like the web server that sends the page. One computer can be a client for one thing and a server for another.",
"Peer-to-peer|In a peer-to-peer network there is no dedicated server. Each computer shares directly with the others. It is cheap and easy for a handful of devices, but it has no central control, weaker security and does not scale.",
"The three kinds of parts|End devices are where messages start and finish: PCs, phones, printers, servers. Intermediary devices move the messages along: switches, routers, access points. Media is what connects them: copper, fiber or radio.",
"Getting to the internet|An internet service provider (ISP) connects you to the internet. Common home options are cable, DSL over phone lines, fiber, cellular and satellite. Satellite reaches places nothing else does, but the long trip to orbit adds delay."],
terms:[["Client / server","The one that requests a service / the one that provides it"],["End device (host)","A device that is the source or destination of a message"],["Intermediary device","A device that passes traffic along, like a switch or router"],["ISP","Internet service provider: the company that connects you to the internet"]],
trap:"Client and server are roles, not types of hardware. A laptop sharing a folder is acting as a server for that folder.",
q:[
["Your laptop opens a website. In that exchange, what role does the laptop's browser play?",["Client","Server","Intermediary device","Peer"],0,"The browser requests the page, so it is the client. The web server provides it."],
["Which device is an intermediary device?",["A switch","A network printer","A laptop","A file server"],0,"Switches, routers and access points pass traffic along. Printers, laptops and servers are end devices."],
["Three roommates share files directly between their laptops with no dedicated server. What kind of network is this?",["Peer-to-peer","Client-server","Cloud-based","Wide area"],0,"With no dedicated server and devices sharing directly, it is peer-to-peer."],
["What is a drawback of a peer-to-peer network?",["There is no central administration or security","It needs an expensive dedicated server","It can only connect two devices","It cannot share printers"],0,"Peer-to-peer is simple and cheap, but nothing manages accounts or security in one place."],
["A cabin far outside town has no cable, phone or cell coverage. Which connection type is most likely available?",["Satellite","DSL","Cable","Fiber to the home"],0,"Satellite reaches remote areas the other options do not."],
["Which connection type runs over ordinary telephone lines?",["DSL","Cable","Satellite","Cellular"],0,"DSL uses the copper phone line. Cable uses the TV coaxial network."],
["Which item is an end device?",["A smartphone","A router","A wireless access point","A switch"],0,"A phone is where messages start and finish. The others move traffic along."],
["What does an ISP provide?",["A connection from your network to the internet","The websites you visit","The IP addresses inside your home only","The Wi-Fi password for your router"],0,"An ISP links your network to the internet."]]},

{d:36,track:"ccst",dom:D3,grp:S1,mod:3,min:30,title:"Wireless and mobile networks: cellular, Wi-Fi, Bluetooth, NFC and GPS",
pts:[
"Cellular|Phones reach the carrier's network through cell towers. Each generation is faster: 4G made mobile video normal, and 5G adds more speed and less delay. Cellular covers miles and usually comes with a data plan.",
"Wi-Fi|Wi-Fi connects devices to a local network through an access point or wireless router. It covers a home or an office, not a city, and it does not use your cellular data.",
"Short-range radios|Bluetooth pairs nearby devices, like earbuds, keyboards and car stereos, over roughly ten meters. NFC works only within a few centimeters, which is why you tap a phone to pay.",
"GPS only listens|GPS receivers work out location from satellite signals. The phone does not send anything to the satellites. It needs a clear view of the sky, so it struggles indoors."],
terms:[["4G / 5G","Generations of cellular data networks; 5G is the newer and faster"],["Bluetooth","Short-range wireless for pairing nearby devices"],["NFC","Near-field communication: very short range, used for tap-to-pay"],["Tethering / hotspot","Sharing a phone's cellular connection with other devices"]],
trap:"Match the technology to the distance: NFC is a tap, Bluetooth is a room, Wi-Fi is a building, cellular is a city.",
q:[
["You tap your phone on a card reader to pay. Which technology is doing the work?",["NFC","Bluetooth","Wi-Fi","GPS"],0,"NFC works over a few centimeters, which is why payments need a tap."],
["Which technology connects wireless earbuds to a phone?",["Bluetooth","NFC","Cellular","GPS"],0,"Bluetooth pairs nearby devices over short range."],
["A phone has no Wi-Fi nearby but still loads web pages on a highway. What is it using?",["The cellular network","Bluetooth","NFC","GPS"],0,"Cellular reaches the carrier's towers over long distances."],
["How does a phone's GPS find its location?",["It receives signals from satellites and calculates its position","It sends its position to a satellite","It measures the strength of Wi-Fi signals only","It asks the nearest Bluetooth device"],0,"GPS receivers only listen. They work out position from several satellite signals."],
["Which option has the shortest working range?",["NFC","Bluetooth","Wi-Fi","4G cellular"],0,"NFC works within a few centimeters."],
["You share your phone's data connection with a laptop on a train. What is this called?",["Tethering, or using a mobile hotspot","Pairing with NFC","Bridging to GPS","Roaming on Bluetooth"],0,"Sharing a phone's cellular connection is tethering or a mobile hotspot."],
["Compared with 4G, what does 5G mainly offer?",["Higher speeds and lower delay","Longer range from each tower in all cases","No need for cell towers","Free data use"],0,"5G is built for more speed and less latency."],
["Why would you connect a phone to home Wi-Fi rather than stay on cellular?",["It avoids using the mobile data plan","Wi-Fi reaches farther than cellular","Wi-Fi works without a router","Cellular cannot open websites"],0,"Wi-Fi traffic goes over your home internet, so it does not count against the cellular data plan."]]},

{d:37,track:"ccst",dom:D3,grp:S1,mod:4,min:40,title:"Build a home network: the home router, Wi-Fi bands and first-time setup",
pts:[
"One box, several jobs|A home router is really four devices in one case: a router that connects your network to the ISP, a small switch for wired ports, a wireless access point, and usually a DHCP server that hands out addresses.",
"2.4 GHz vs 5 GHz|The 2.4 GHz band reaches farther and gets through walls better, but it is slower and crowded: microwaves, cordless phones and Bluetooth all share it. The 5 GHz band is faster and cleaner, but its range is shorter.",
"The 802.11 family|Wi-Fi standards come from the IEEE and are all named 802.11 plus a letter. Newer letters are faster. Wi-Fi 4 is 802.11n, Wi-Fi 5 is 802.11ac and Wi-Fi 6 is 802.11ax. Devices fall back to the newest standard both sides support.",
"First-time setup|Change the default admin password first. Give the network its own name (the SSID). Turn on WPA2 or WPA3 with a strong passphrase. Leave DHCP on so devices get addresses automatically."],
terms:[["SSID","The name of a wireless network"],["802.11","The IEEE family of Wi-Fi standards"],["WPA2 / WPA3","Current Wi-Fi security; WPA3 is the newer"],["Default credentials","The factory admin username and password, which are public knowledge"]],
trap:"If a lab laptop will not get on the network, check that its adapter is set to obtain an address automatically (DHCP). A leftover manual address is a common reason it fails.",
q:[
["A smart TV at the far end of the house, two walls from the router, keeps dropping off the 5 GHz network. What is the best first step?",["Connect it to the 2.4 GHz band","Change the router's admin password","Switch the TV to Bluetooth","Turn off DHCP"],0,"2.4 GHz reaches farther and passes through walls better than 5 GHz."],
["What is an SSID?",["The name of a wireless network","The password for the router's admin page","The router's public IP address","A type of Ethernet cable"],0,"The SSID is the network name you see in the list of Wi-Fi networks."],
["Which organization publishes the 802.11 wireless standards?",["IEEE","IETF","ISO","ICANN"],0,"The IEEE maintains the 802 standards, including 802.11 for Wi-Fi."],
["Which standard is also called Wi-Fi 6?",["802.11ax","802.11ac","802.11n","802.11g"],0,"Wi-Fi 6 is 802.11ax. Wi-Fi 5 is 802.11ac and Wi-Fi 4 is 802.11n."],
["You unbox a new home router. What should you change first?",["The default administrator password","The channel width","The time zone","The color of the status lights"],0,"Default admin logins are published. Anyone who knows them could take over the router."],
["Which home devices commonly interfere with the 2.4 GHz band?",["Microwave ovens and cordless phones","Fiber-optic cables","Wired Ethernet switches","Smoke detectors"],0,"Microwaves, cordless phones and Bluetooth share the 2.4 GHz range."],
["A home router gives each device an IP address automatically. Which built-in service does that?",["DHCP","DNS","NAT","WPA2"],0,"The DHCP server in the router hands out addresses."],
["Which wireless security setting should you choose on a new home router?",["WPA2 or WPA3 with a strong passphrase","WEP","Open, with a hidden SSID","WPA with the default key"],0,"WPA2 and WPA3 are the current options. WEP and open networks are not safe."]]},

/* ================= Session 2 ================= */
{d:38,track:"ccst",dom:D1,grp:S2,mod:5,min:40,title:"Communication principles: protocols, standards and the OSI and TCP/IP models",
pts:[
"Protocols are the rules|A protocol is an agreed set of rules for a conversation: the format of the message, its size, the timing, how it is addressed and how it is confirmed. Two devices can only talk if they follow the same protocol.",
"Standards make brands work together|Open standards let equipment from different makers work together. The IETF publishes internet standards as RFCs. The IEEE publishes the 802 standards for Ethernet (802.3) and Wi-Fi (802.11).",
"The TCP/IP model|Four layers, top to bottom: Application, Transport, Internet, Network Access. This is the model the internet actually runs on.",
"The OSI model|Seven layers used to describe and troubleshoot networks: 7 Application, 6 Presentation, 5 Session, 4 Transport, 3 Network, 2 Data Link, 1 Physical. The top three OSI layers fold into TCP/IP's Application layer, and the bottom two fold into Network Access."],
terms:[["Protocol","A set of rules both sides follow to communicate"],["RFC","Request for Comments: the documents that define internet standards"],["OSI layers 1-4","Physical, Data Link, Network, Transport"],["Encapsulation","Each layer wrapping the data with its own header on the way down"]],
trap:"Know the layer by its address: MAC addresses and switches are Layer 2 (Data Link). IP addresses and routers are Layer 3 (Network). Ports, TCP and UDP are Layer 4 (Transport).",
q:[
["At which OSI layer does a router make its forwarding decision?",["Layer 3, Network","Layer 2, Data Link","Layer 4, Transport","Layer 1, Physical"],0,"Routers forward by IP address, which is a Layer 3 address."],
["How many layers does the TCP/IP model have?",["Four","Seven","Five","Three"],0,"Application, Transport, Internet and Network Access."],
["Which OSI layer uses MAC addresses?",["Data Link","Network","Transport","Session"],0,"MAC addresses are Layer 2, the Data Link layer."],
["Which TCP/IP layer matches the OSI Network layer?",["Internet","Network Access","Transport","Application"],0,"The TCP/IP Internet layer does the same job as OSI Layer 3."],
["Which organization publishes RFCs that define internet protocols?",["IETF","IEEE","ANSI","TIA"],0,"The IETF publishes internet standards as RFCs."],
["Which three OSI layers are combined into the TCP/IP Application layer?",["Application, Presentation and Session","Transport, Network and Data Link","Session, Transport and Network","Presentation, Session and Transport"],0,"OSI layers 7, 6 and 5 fold into TCP/IP's Application layer."],
["Why do open standards matter in networking?",["Devices from different manufacturers can work together","They make every network use the same password","They remove the need for IP addresses","They guarantee the fastest possible speed"],0,"Standards mean a laptop from one company can talk to a router from another."],
["TCP and UDP operate at which OSI layer?",["Transport","Network","Data Link","Application"],0,"TCP and UDP are Layer 4 protocols."]]},

{d:39,track:"ccst",dom:D3,grp:S2,mod:6,min:30,title:"Network media: twisted pair, coaxial and fiber-optic cable",
pts:[
"Twisted pair|The everyday Ethernet cable: eight copper wires twisted into four pairs, ending in an RJ-45 connector. The twists cancel out interference. Unshielded twisted pair (UTP) is the most common, and a single run is good for 100 meters.",
"Coaxial|One copper core wrapped in insulation and a metal shield. It carries cable TV and cable internet from the provider to your modem.",
"Fiber|A strand of glass or plastic that carries light. It runs the longest distances at the highest speeds and is immune to electrical interference. It costs more and takes more care to install.",
"Pick by the job|Ask four questions: how far, how fast, what is in the way, and what does it cost. Desk to wall jack: twisted pair. Building to building, or past heavy machinery: fiber."],
terms:[["UTP","Unshielded twisted pair, the standard Ethernet cable"],["RJ-45","The eight-pin connector on an Ethernet cable"],["EMI","Electromagnetic interference from motors, power lines and similar sources"],["Crosstalk","A signal on one wire pair bleeding into another pair"]],
trap:"RJ-45 is the wider Ethernet plug. RJ-11 is the smaller telephone plug. They are not interchangeable.",
q:[
["A cable must run 400 meters between two buildings and past large electric motors. Which medium fits best?",["Fiber-optic cable","Unshielded twisted pair","Coaxial cable","Bluetooth"],0,"Fiber covers long distances and is not affected by electrical interference. UTP stops at 100 meters."],
["What is the maximum length of a single twisted-pair Ethernet cable run?",["100 meters","10 meters","500 meters","1 kilometer"],0,"Twisted-pair Ethernet is rated for 100 meters per run."],
["Which connector is on the end of a standard Ethernet patch cable?",["RJ-45","RJ-11","F-type","LC"],0,"Ethernet twisted pair uses RJ-45. RJ-11 is for phones."],
["Why are the wire pairs in an Ethernet cable twisted?",["To reduce interference and crosstalk","To make the cable longer","To carry electrical power faster","To make the cable easier to bend"],0,"Twisting each pair cancels out much of the interference."],
["Which cable type brings cable internet from the provider to a cable modem?",["Coaxial","Fiber-optic","UTP","Serial"],0,"Cable internet arrives over coaxial cable."],
["Which medium is immune to electromagnetic interference?",["Fiber-optic cable","UTP","Coaxial cable","Shielded twisted pair"],0,"Fiber carries light, so electrical noise does not affect it."],
["How many copper wires are inside a standard Ethernet twisted-pair cable?",["8","4","2","6"],0,"Eight wires arranged as four twisted pairs."],
["You need to connect a desktop PC to a wall jack 3 meters away. What is the usual choice?",["A UTP patch cable","A fiber-optic cable","A coaxial cable","A serial cable"],0,"Short runs to a desk use ordinary twisted-pair patch cables."]]},

{d:40,track:"ccst",dom:D4,grp:S2,mod:7,min:40,title:"The access layer: Ethernet frames, MAC addresses, hubs and switches",
pts:[
"Wrapping the data|On the way out, data gets wrapped layer by layer. An IP packet with IP addresses is placed inside an Ethernet frame with MAC addresses. This wrapping is called encapsulation. The receiver unwraps it in the reverse order.",
"MAC addresses|Every network adapter has a MAC address burned in at the factory: 48 bits, written as 12 hexadecimal digits. The first half identifies the manufacturer. It is the address used inside the local network.",
"Hubs repeat, switches direct|A hub copies every signal out of every port, so every device hears everything. A switch reads the destination MAC address and sends the frame out of only the right port.",
"How a switch learns|A switch builds a MAC address table by reading the source address of each frame that arrives. If it does not yet know where the destination is, it floods the frame out of every port except the one it came in on."],
terms:[["Frame","The Layer 2 unit of data on Ethernet"],["MAC address","A 48-bit hardware address, written as 12 hex digits"],["MAC address table","A switch's list of which MAC address is on which port"],["Flooding","Sending a frame out of every port except the one it arrived on"]],
trap:"A switch learns from the source MAC address and forwards by the destination MAC address. Questions often swap the two.",
q:[
["A switch receives a frame for a MAC address that is not in its table. What does it do?",["Sends it out of every port except the one it came in on","Drops the frame","Sends it back to the sender","Sends it only to the router"],0,"An unknown destination is flooded to all other ports."],
["How does a switch fill in its MAC address table?",["By reading the source MAC address of frames as they arrive","By reading the destination IP address of packets","By asking the router for a list","By an administrator typing each one"],0,"It learns which port each device is on from the source address."],
["How long is a MAC address?",["48 bits","32 bits","64 bits","128 bits"],0,"48 bits, shown as 12 hexadecimal digits."],
["What is the main difference between a hub and a switch?",["A hub repeats to every port; a switch sends only to the port that needs it","A hub uses IP addresses; a switch uses MAC addresses","A hub is wireless; a switch is wired","A hub connects networks; a switch connects to the internet"],0,"Hubs repeat everything. Switches forward by destination MAC address."],
["At which OSI layer does a standard Ethernet switch work?",["Layer 2","Layer 3","Layer 4","Layer 1"],0,"Switches forward frames by MAC address, which is Layer 2."],
["What does the first half of a MAC address identify?",["The manufacturer of the adapter","The network the device is on","The country where it was sold","The user's account"],0,"The first 24 bits identify the maker. The rest is unique to the adapter."],
["An IP packet is placed inside an Ethernet frame before it is sent. What is this called?",["Encapsulation","Segmentation","Flooding","Translation"],0,"Wrapping one layer's data inside the next layer's format is encapsulation."],
["Which addresses are found in an Ethernet frame header?",["Source and destination MAC addresses","Source and destination IP addresses","Source and destination port numbers","The SSID and passphrase"],0,"The frame header carries MAC addresses. IP addresses are in the packet inside it."]]},

/* ================= Session 3 ================= */
{d:41,track:"ccst",dom:D2,grp:S3,mod:8,min:40,title:"The Internet Protocol: IPv4 addresses, the network part, the host part and the subnet mask",
pts:[
"What an IPv4 address is|A logical address that identifies a device on a network. It is 32 bits long, written as four numbers from 0 to 255 separated by dots, such as 192.168.1.10. Each number is one octet, which is 8 bits.",
"Two parts in one address|Part of the address names the network and the rest names the host on it. Think of a street name and a house number. Every device on the same network shares the network part and has its own host part.",
"The subnet mask draws the line|The mask shows where the network part ends. With 255.255.255.0, the first three octets are the network and the last one is the host. That is also written /24, because 24 bits are the network part.",
"Three things to get online|To reach other networks a device needs an IP address, a subnet mask and a default gateway. Without the gateway it can still talk to neighbors on its own network, but nothing beyond."],
terms:[["Octet","One of the four 8-bit numbers in an IPv4 address"],["Subnet mask","Marks which bits of an address are the network part"],["Prefix length","The mask as a count of network bits, such as /24"],["Default gateway","The router address a device uses to reach other networks"]],
trap:"Two devices are on the same network only if their network parts match. 192.168.1.10 and 192.168.2.10 with a 255.255.255.0 mask are on different networks.",
q:[
["A PC has the address 192.168.1.10 with mask 255.255.255.0. Which address is on the same network?",["192.168.1.200","192.168.2.10","192.169.1.10","10.168.1.10"],0,"With that mask the first three octets must match: 192.168.1."],
["How many bits are in an IPv4 address?",["32","48","64","128"],0,"Four octets of 8 bits each is 32 bits."],
["What does a subnet mask do?",["Shows which part of the address is the network and which is the host","Hides the address from the internet","Encrypts the address","Converts a name to an address"],0,"The mask divides the address into its network and host parts."],
["Which prefix length is the same as the mask 255.255.255.0?",["/24","/8","/16","/32"],0,"Three octets of 255 is 24 network bits."],
["A laptop can reach printers on its own network but no websites. Which setting is the likeliest problem?",["Default gateway","MAC address","Host name","Screen resolution"],0,"The default gateway is the way out to other networks."],
["What is the largest value one octet of an IPv4 address can hold?",["255","256","128","999"],0,"Eight bits can count from 0 to 255."],
["With the mask 255.255.0.0, which part of 172.16.5.9 is the host part?",["5.9","172.16","9","16.5.9"],0,"The mask covers the first two octets, so the last two are the host part."],
["Which of these is a valid IPv4 address?",["10.0.0.254","10.0.0.256","10.0.254","10.0.0.0.1"],0,"It needs exactly four octets, each from 0 to 255."]]},

{d:42,track:"ccst",dom:D2,grp:S3,mod:9,min:40,title:"IPv4 and network segmentation: unicast, broadcast, multicast, private and public addresses",
pts:[
"Three ways to send|Unicast goes to one device. Broadcast goes to every device on the local network. Multicast goes to a group that asked to receive it, such as a video stream.",
"Private addresses|Three ranges are set aside for use inside private networks and are not routed on the internet: 10.0.0.0/8, 172.16.0.0 to 172.31.255.255, and 192.168.0.0/16. Anyone can use them, which is why most home networks start with 192.168.",
"Special addresses|127.0.0.1 is the loopback address, which a device uses to test itself. An address starting 169.254 means the device asked for an address and no DHCP server answered, so it assigned one to itself.",
"Why split a network|Every broadcast reaches every device in its broadcast domain. One huge network means a lot of broadcast noise. Routers do not forward broadcasts, so splitting a network into smaller ones keeps traffic down and makes it easier to secure."],
terms:[["Broadcast domain","All the devices that receive each other's broadcasts"],["Private address","An address from the reserved ranges, usable only inside a network"],["Loopback","127.0.0.1, used by a device to test its own networking"],["APIPA / link-local","A self-assigned 169.254.x.x address, a sign DHCP did not answer"]],
trap:"The middle private range ends at 172.31, not 172.32. An address like 172.32.0.5 is public.",
q:[
["A PC shows the address 169.254.18.7. What does that tell you?",["It could not reach a DHCP server and assigned itself an address","It has a working public address","It is using the loopback address","It has been given a static address by an administrator"],0,"169.254.x.x is self-assigned when no DHCP server answers."],
["Which address is a private IPv4 address?",["172.20.4.1","172.32.4.1","11.0.0.1","192.169.1.1"],0,"The private range is 172.16.0.0 to 172.31.255.255. The others fall outside the private ranges."],
["Which type of transmission goes to every device on the local network?",["Broadcast","Unicast","Multicast","Anycast"],0,"A broadcast is delivered to all hosts on the local network."],
["Which device stops a broadcast from reaching another network?",["A router","A switch","A hub","An access point"],0,"Routers do not forward broadcasts. Switches and hubs pass them along."],
["What is the address 127.0.0.1 used for?",["Testing the device's own network software","Reaching the default gateway","Sending a broadcast","Reaching the DHCP server"],0,"It is the loopback address. Traffic sent to it never leaves the device."],
["A live video stream is sent only to the devices that joined the stream. What type of transmission is this?",["Multicast","Broadcast","Unicast","Loopback"],0,"Multicast goes to a group of interested receivers."],
["Why can millions of homes all use 192.168.1.x addresses at once?",["Private addresses are reused inside each network and are not routed on the internet","Each home buys the range from its ISP","The addresses are changed by the switch","Home networks do not use IP"],0,"Private ranges can be reused by anyone because they stay inside the local network."],
["What is one benefit of splitting a large network into smaller networks?",["Fewer devices receive each broadcast","Every device gets a public address","Cables can be longer","MAC addresses are no longer needed"],0,"Smaller networks mean smaller broadcast domains and less broadcast traffic."]]},

{d:43,track:"ccst",dom:D2,grp:S3,mod:10,min:40,title:"IPv6 addressing: why it exists, the format and the two shortening rules",
pts:[
"Why IPv6|IPv4 has about 4.3 billion addresses, and the world ran out of new ones. IPv6 addresses are 128 bits long, which gives more addresses than anyone could use.",
"The format|An IPv6 address is 32 hexadecimal digits in eight groups of four, separated by colons. Each group is 16 bits. Hexadecimal uses 0 to 9 and a to f.",
"Two shortening rules|Rule one: drop the leading zeros in any group, so 0db8 becomes db8 and 0000 becomes 0. Rule two: replace one run of all-zero groups with a double colon (::). You may use the double colon only once in an address.",
"Living side by side|IPv4 and IPv6 do not talk to each other directly. Networks use dual stack (run both), tunneling (carry IPv6 inside IPv4 packets) or translation (convert between them) while both are in use."],
terms:[["Hextet","One of the eight 16-bit groups in an IPv6 address"],["Dual stack","A device or network running IPv4 and IPv6 at the same time"],["Tunneling","Carrying one protocol's packets inside another's"],["Prefix length","The count of network bits; /64 is the usual size for an IPv6 network"]],
trap:"Only leading zeros can be dropped, never trailing ones: 0a00 shortens to a00, not to a. And two double colons in one address is always invalid.",
q:[
["What is the shortest correct form of 2001:0db8:0000:0000:0000:0000:0000:0001?",["2001:db8::1","2001:db8:0:1","2001:0db8::0001","2001:db8::0::1"],0,"Drop the leading zeros, then replace the single run of all-zero groups with a double colon."],
["How many bits are in an IPv6 address?",["128","32","64","48"],0,"IPv6 addresses are 128 bits long."],
["How many times can the double colon (::) appear in one IPv6 address?",["Once","Twice","As often as needed","Never"],0,"More than one would make it impossible to tell how many zeros each one stands for."],
["Which of these is NOT a valid IPv6 address?",["2001:db8::12::1","2001:db8::1","fe80::1","::1"],0,"It uses the double colon twice."],
["What is the main reason IPv6 was created?",["IPv4 ran out of addresses","IPv4 could not be used on Wi-Fi","IPv4 addresses were too long to type","IPv4 did not support routers"],0,"IPv4's 32-bit space was exhausted. IPv6 gives a far larger one."],
["A network runs IPv4 and IPv6 at the same time on every device. What is this approach called?",["Dual stack","Tunneling","Translation","Segmentation"],0,"Dual stack means both protocols run side by side."],
["How is the group 0a00 correctly shortened?",["a00","a","0a","It cannot be shortened"],0,"Only the leading zero is dropped. The trailing zeros are part of the value."],
["Which number system is used to write IPv6 addresses?",["Hexadecimal","Decimal","Binary","Octal"],0,"IPv6 uses hexadecimal digits: 0 to 9 and a to f."]]},

{d:44,track:"ccst",dom:D1,grp:S3,mod:11,min:30,title:"Dynamic addressing with DHCP: static vs dynamic, and the four-step handshake",
pts:[
"Static vs dynamic|A static address is typed in by hand and never changes. It suits servers, printers and routers that others need to find in the same place. A dynamic address is handed out automatically by DHCP, which suits everything else.",
"What DHCP hands out|A DHCP server gives each device an IP address, a subnet mask, a default gateway and DNS server addresses. The address is leased for a set time and goes back in the pool when the lease runs out.",
"The four steps: DORA|Discover: the client broadcasts to ask if any DHCP server is out there. Offer: a server offers an address. Request: the client asks to take that offer. Acknowledge: the server confirms and the lease begins.",
"When DHCP fails|If nobody answers the Discover, a Windows device gives itself a 169.254 address and cannot reach the internet. Check the cable or Wi-Fi first, then the DHCP server."],
terms:[["DHCP","Dynamic Host Configuration Protocol: automatic IP settings"],["Lease","How long a device may keep the address it was given"],["Address pool","The range of addresses a DHCP server can hand out"],["DORA","Discover, Offer, Request, Acknowledge"]],
trap:"The step after Offer is Request, sent by the client. The server's Acknowledge comes last. The order is always Discover, Offer, Request, Acknowledge.",
q:[
["A DHCP client has just received an Offer. What does it send next?",["DHCP Request","DHCP Acknowledge","DHCP Discover","DHCP Release"],0,"DORA: Discover, Offer, Request, Acknowledge. The client answers the Offer with a Request."],
["Which message does a client broadcast to find a DHCP server?",["DHCP Discover","DHCP Offer","DHCP Request","DHCP Acknowledge"],0,"Discover is the first message, sent as a broadcast because the client has no address yet."],
["Which device should normally have a static IP address?",["A network printer shared by the office","A visitor's phone","A laptop that moves between sites","A tablet on guest Wi-Fi"],0,"Devices that others must always find at the same address get static addresses."],
["Which of these does a DHCP server NOT hand out?",["The device's MAC address","The subnet mask","The default gateway","DNS server addresses"],0,"The MAC address is built into the adapter. DHCP provides IP settings."],
["What happens when a DHCP lease expires and is not renewed?",["The address returns to the pool for another device","The device keeps the address forever","The DHCP server shuts down","The device's MAC address changes"],0,"Leases let addresses be reused once a device no longer needs them."],
["Which message completes the DHCP process?",["Acknowledge, from the server","Request, from the client","Offer, from the server","Discover, from the client"],0,"The server's Acknowledge confirms the lease."],
["What is the main advantage of DHCP over static addressing?",["Less manual work and fewer typing mistakes","Addresses never change","It works without a network connection","It is required for IPv4 to function"],0,"Automatic configuration saves time and avoids duplicate or mistyped addresses."],
["In a home network, which device usually acts as the DHCP server?",["The home router","The ISP's web server","Each laptop","The network printer"],0,"The home router normally runs the DHCP service."]]},

/* ================= Session 4 ================= */
{d:45,track:"ccst",dom:D4,grp:S4,mod:12,min:30,title:"Gateways to other networks: the default gateway and NAT",
pts:[
"The router is the door|A router sits on the edge between networks. Each of its interfaces is on a different network. For the devices on a network, the router's interface on that network is their default gateway, the door to everywhere else.",
"Two sides of a home router|The inside (LAN) interface has a private address, such as 192.168.1.1, and that is the gateway for your devices. The outside (WAN) interface gets a public address from the ISP.",
"NAT|Private addresses are not allowed on the internet. Network Address Translation swaps the private source address for the router's public one as traffic leaves, and swaps it back when the reply returns. The whole house appears as one public address.",
"What NAT buys you|It stretches the short supply of IPv4 addresses, and it keeps inside addresses out of view from the internet."],
terms:[["Default gateway","The router interface on your own network that leads to other networks"],["NAT","Network Address Translation between private and public addresses"],["LAN / WAN interface","The router's inside-facing / outside-facing connection"],["Public address","An address that is unique and reachable on the internet"]],
trap:"The default gateway must be on the same network as the device. A PC at 192.168.1.50/24 cannot use 192.168.2.1 as its gateway.",
q:[
["A PC at 192.168.1.50 with mask 255.255.255.0 has its default gateway set to 192.168.2.1. What will happen?",["It can reach local devices but not other networks","It cannot reach any device at all","It works normally","It gets a new address from DHCP"],0,"The gateway is on a different network, so the PC cannot reach it. Local traffic still works."],
["What does NAT do on a home router?",["Replaces private addresses with the router's public address for internet traffic","Hands out IP addresses to devices","Translates website names into addresses","Encrypts Wi-Fi traffic"],0,"NAT translates between the private addresses inside and the public address outside."],
["Which address would a home router's internal (LAN) interface most likely have?",["192.168.1.1","8.8.8.8","127.0.0.1","169.254.1.1"],0,"The inside interface uses a private address and acts as the gateway."],
["Ten devices in a house browse the web at once. How many public IPv4 addresses does a website see?",["One, the router's public address","Ten, one for each device","None","Two, one for each band"],0,"NAT makes all inside devices appear as the router's single public address."],
["Where does a home router's external (WAN) address come from?",["The ISP","The router's own DHCP pool","The laptop's network adapter","The Wi-Fi standard in use"],0,"The ISP assigns the public address on the outside interface."],
["What is a device's default gateway?",["The router interface on its own network","The nearest switch","The DNS server","The ISP's web server"],0,"The gateway is the local router address used to reach other networks."],
["Why can private addresses not be used directly on the internet?",["Internet routers do not route private address ranges","They are slower than public addresses","They are too long","They only work over Wi-Fi"],0,"Private ranges are reused everywhere, so they are not routed on the internet."],
["Which benefit does NAT provide?",["It conserves public IPv4 addresses","It increases bandwidth","It removes the need for a router","It assigns MAC addresses"],0,"Many private devices share one public address."]]},

{d:46,track:"ccst",dom:D4,grp:S4,mod:13,min:40,title:"The ARP process: matching IP addresses to MAC addresses",
pts:[
"Two addresses, two jobs|The IP address says where the message is finally going and stays the same for the whole trip. The MAC address says which device gets the frame on this one hop, and it changes at every router.",
"What ARP does|A device knows the IP address it wants but needs the matching MAC address to build the frame. It broadcasts an ARP request: who has this IP? The owner replies directly with its MAC address.",
"The ARP cache|The answer is saved in the ARP table (cache) for a while so the device does not have to ask every time. On Windows, arp -a shows it.",
"Local or remote|If the destination is on the same network, the device uses ARP to find the destination's own MAC address. If it is on another network, the device uses ARP to find the default gateway's MAC address and sends the frame to the router."],
terms:[["ARP","Address Resolution Protocol: finds the MAC address for a known IPv4 address"],["ARP request","A broadcast asking who owns an IP address"],["ARP reply","A unicast answer carrying the owner's MAC address"],["ARP cache","A device's saved list of IP-to-MAC matches"]],
trap:"For a destination on another network, the frame carries the destination's IP address but the default gateway's MAC address. ARP never crosses a router.",
q:[
["A PC sends data to a web server on a different network. Which MAC address does it put in the frame as the destination?",["The default gateway's MAC address","The web server's MAC address","The switch's MAC address","The broadcast MAC address"],0,"Traffic for another network is handed to the router, so the frame is addressed to the gateway's MAC."],
["What does ARP find?",["The MAC address that belongs to a known IPv4 address","The IP address that belongs to a website name","A free IP address for a new device","The fastest route to a network"],0,"ARP maps an IPv4 address to a MAC address."],
["How is an ARP request sent?",["As a broadcast to every device on the local network","As a unicast to the router only","As a multicast to all switches","Directly to the internet"],0,"The sender does not know who owns the address, so it asks everyone on the local network."],
["How is an ARP reply sent?",["As a unicast back to the device that asked","As a broadcast to everyone","To the DHCP server","To the default gateway only"],0,"The owner answers the requester directly."],
["Which command shows the ARP cache on a Windows PC?",["arp -a","ipconfig /all","ping -a","netstat"],0,"arp -a lists the saved IP-to-MAC matches."],
["Why does a device keep an ARP cache?",["So it does not have to send an ARP request for every frame","To store website passwords","To remember its DHCP lease","To block broadcasts"],0,"Saving recent answers cuts down on repeated ARP broadcasts."],
["As a packet crosses several routers, which address stays the same from start to finish?",["The destination IP address","The destination MAC address","The source MAC address","Both MAC addresses"],0,"IP addresses stay the same end to end. MAC addresses change at each hop."],
["A PC wants to reach another PC on its own network and has its IP address. Whose MAC address does it ask for with ARP?",["The other PC's","The default gateway's","The switch's","The DHCP server's"],0,"For a local destination the device resolves the destination's own MAC address."]]},

{d:47,track:"ccst",dom:D4,grp:S4,mod:14,min:40,title:"Routing between networks: what routers do and how they choose a path",
pts:[
"Why routers exist|Switches move frames inside one network. To get from one network to another you need a router. A router reads the destination IP address of each packet and forwards it toward the right network.",
"The routing table|A router keeps a list of the networks it knows and which interface or next router leads to each. If a packet's destination is not in the table and there is no default route, the router drops it.",
"Three ways a route gets in|Directly connected: the router has an interface on that network. Static: an administrator typed the route in. Dynamic: routers share what they know with each other using a routing protocol.",
"The default route|A catch-all for anything not listed: send it this way. On a home router the default route points at the ISP."],
terms:[["Routing table","A router's list of known networks and how to reach them"],["Directly connected route","A network attached to one of the router's own interfaces"],["Static route","A route entered by hand"],["Default route","Where to send traffic that matches nothing else in the table"]],
trap:"A router with no matching route and no default route drops the packet. It does not flood it the way a switch floods an unknown frame.",
q:[
["A router receives a packet for a network that is not in its routing table, and it has no default route. What does it do?",["Drops the packet","Floods it out of every interface","Sends it back to the sender's switch","Holds it until a route appears"],0,"Routers drop packets they have no route for. Flooding is what switches do with unknown frames."],
["Which address does a router use to decide where to forward a packet?",["Destination IP address","Destination MAC address","Source MAC address","Source port number"],0,"Routing is a Layer 3 decision made on the destination IP address."],
["An administrator types a route into a router by hand. What kind of route is it?",["Static","Dynamic","Directly connected","Default gateway"],0,"A manually entered route is a static route."],
["A router has an interface configured on the 10.1.1.0/24 network. How does that network appear in its routing table?",["As a directly connected route","As a dynamic route","As a static route","It does not appear"],0,"Networks on the router's own interfaces are directly connected."],
["What is a default route used for?",["Traffic whose destination matches no other route","Traffic to devices on the same switch","Broadcast traffic only","Traffic from the DHCP server"],0,"The default route is the catch-all path."],
["Which device is needed for two different IP networks to communicate?",["A router","A hub","A second switch","A longer cable"],0,"Only a router forwards packets between networks."],
["How do routers learn dynamic routes?",["By exchanging information with other routers using a routing protocol","By reading MAC addresses from frames","From the DHCP server","From each PC's ARP cache"],0,"Routing protocols let routers share the networks they know about."],
["On a home router, where does the default route point?",["Toward the ISP","Toward the wireless printer","Toward the newest device","Toward the loopback address"],0,"Everything not on the home network is sent to the ISP."]]}
];
window.CCST_MODULES=[null,"Communication in a Connected World","Network Components, Types, and Connections","Wireless and Mobile Networks","Build a Home Network","Communication Principles","Network Media","The Access Layer","The Internet Protocol","IPv4 and Network Segmentation","IPv6 Addressing Formats and Rules","Dynamic Addressing with DHCP","Gateways to Other Networks","The ARP Process","Routing Between Networks"];
L.forEach(d=>window.DAYS.push(d));
})();
