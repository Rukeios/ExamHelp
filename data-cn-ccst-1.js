// CCST Networking Pocket Notes and recall cards, part 1 (levels 34-47, class Sessions 1 to 4).
// Our own words, organized by Cisco's public CCST Networking (100-150) exam topics.
(function(){
const REV="2026-11-12";
const TOPICS="https://learningcontent.cisco.com/documents/CCST+Networking+Objective+Domain_Cisco_Final_wCiscoLogo.pdf";
const O={
  "1.1":"Identify the fundamental conceptual building blocks of networks",
  "1.2":"Differentiate between bandwidth and throughput",
  "1.3":"Differentiate between LAN, WAN, MAN, CAN, PAN, and WLAN",
  "1.5":"Describe common network applications and protocols",
  "2.1":"Compare and contrast private addresses and public addresses",
  "2.2":"Identify IPv4 addresses and subnet formats",
  "2.3":"Identify IPv6 addresses and prefix formats",
  "3.1":"Identify cables and connectors commonly used in local area networks",
  "3.2":"Differentiate between Wi-Fi, cellular, and wired network technologies",
  "3.3":"Describe endpoint devices",
  "4.4":"Explain basic routing concepts",
  "4.5":"Explain basic switching concepts",
  "6.3":"Configure basic wireless security on a home router"
};
const D={34:"1 Standards & concepts",35:"1 Standards & concepts",36:"3 Endpoints & media",37:"3 Endpoints & media",38:"1 Standards & concepts",39:"3 Endpoints & media",40:"4 Infrastructure",
  41:"2 Addressing",42:"2 Addressing",43:"2 Addressing",44:"1 Standards & concepts",45:"4 Infrastructure",46:"4 Infrastructure",47:"4 Infrastructure"};
const C=(id,day,obj,topic,title,lines,clue,cards)=>({
  id:"ccst."+id,cert:"ccst",day,dom:D[day],obj,objTitle:O[obj],topic,title,lines,clue,
  cards:cards.map((c,i)=>({id:"ccst."+id+".c"+(i+1),kind:c[0],q:c[1],a:c[2]})),
  src:[TOPICS],reviewed:REV,status:"drafted",v:1});
const concepts=[
/* 34 */
C("bits-and-signals",34,"1.1","Data","Bits and signals",[
  "All data is bits: ones and zeros. Eight bits make a byte.",
  "Copper carries bits as electrical pulses.",
  "Fiber carries bits as light.",
  "Wireless carries bits as radio waves."
],"Same bits, three carriers: electricity, light or radio.",[
  ["term","How many bits are in a byte?","Eight."],
  ["use","A cable carries data as pulses of light. What kind of cable is it?","Fiber-optic."]]),
C("bandwidth-throughput",34,"1.2","Speed","Bandwidth vs throughput",[
  "Bandwidth is the most a link can carry.",
  "Throughput is what actually got through.",
  "Throughput is never higher than bandwidth.",
  "Both are measured in bits per second."
],"Capacity is bandwidth. The measured result is throughput.",[
  ["term","What is throughput?","The amount of data that actually crossed the link in a given time."],
  ["use","A 500 Mbps plan tests at 320 Mbps. Which number is the bandwidth?","500 Mbps. The 320 Mbps is throughput."]]),
/* 35 */
C("client-server-p2p",35,"1.1","Roles","Clients, servers and peers",[
  "A client requests a service. A server provides it.",
  "They are roles, so one machine can play both.",
  "Peer-to-peer has no dedicated server.",
  "Peer-to-peer is simple but has no central control."
],"Who asks is the client. Who answers is the server.",[
  ["term","What is a peer-to-peer network?","Computers that share directly with each other, with no dedicated server."],
  ["use","A browser asks a web server for a page. Which one is the client?","The browser."]]),
C("network-parts-isp",35,"1.1","Components","Network parts and ISP links",[
  "End devices start and finish messages.",
  "Intermediary devices pass traffic along: switches, routers, access points.",
  "Media connects them: copper, fiber or radio.",
  "An ISP connects your network to the internet by cable, DSL, fiber, cellular or satellite."
],"If it only passes traffic along, it is an intermediary device.",[
  ["term","Name two intermediary devices.","Any two of: switch, router, wireless access point."],
  ["use","A remote ranch has no cable, phone line or cell signal. Which internet option fits?","Satellite."]]),
/* 36 */
C("cellular-wifi",36,"3.2","Wireless","Cellular vs Wi-Fi",[
  "Cellular reaches the carrier through cell towers and covers miles.",
  "5G is faster than 4G, with less delay.",
  "Wi-Fi joins a local network through an access point.",
  "Wi-Fi does not use the cellular data plan."
],"Miles of coverage and a data plan: cellular. One building: Wi-Fi.",[
  ["term","What does 5G improve over 4G?","Higher speed and lower delay."],
  ["use","Sharing a phone's data connection with a laptop is called what?","Tethering, or a mobile hotspot."]]),
C("short-range-gps",36,"3.2","Wireless","Bluetooth, NFC and GPS",[
  "Bluetooth pairs nearby devices across a room.",
  "NFC works within a few centimeters: tap to pay.",
  "GPS receives satellite signals to find location.",
  "GPS does not transmit to the satellites."
],"A tap is NFC. A room is Bluetooth.",[
  ["term","What is NFC used for?","Very short-range exchanges, like tap-to-pay."],
  ["use","Wireless earbuds connect to a phone. Which technology?","Bluetooth."]]),
/* 37 */
C("wifi-bands-standards",37,"3.2","Wi-Fi","Wi-Fi bands and standards",[
  "2.4 GHz reaches farther but is slower and crowded.",
  "5 GHz is faster with shorter range.",
  "Wi-Fi standards are IEEE 802.11.",
  "Wi-Fi 4 is 802.11n, Wi-Fi 5 is 802.11ac, Wi-Fi 6 is 802.11ax."
],"Far and through walls: 2.4 GHz. Fast and close: 5 GHz.",[
  ["term","Which standard is Wi-Fi 6?","802.11ax."],
  ["use","A device two walls from the router keeps dropping off 5 GHz. What should you try?","Connect it to the 2.4 GHz band."]]),
C("home-router-setup",37,"6.3","Setup","Home router setup",[
  "A home router is a router, switch, access point and DHCP server in one.",
  "Change the default admin password first.",
  "Set your own SSID.",
  "Use WPA2 or WPA3 with a strong passphrase."
],"Default password, SSID, WPA2 or WPA3: the first three things to set.",[
  ["term","What is an SSID?","The name of a wireless network."],
  ["use","A new router still has its factory admin login. What is the risk?","Default logins are public, so anyone could take control of the router."]]),
/* 38 */
C("protocols-standards",38,"1.5","Rules","Protocols and standards",[
  "A protocol is a set of rules both sides follow.",
  "Open standards let different brands work together.",
  "The IETF publishes internet standards as RFCs.",
  "The IEEE publishes 802.3 Ethernet and 802.11 Wi-Fi."
],"Internet protocols: IETF. Ethernet and Wi-Fi: IEEE.",[
  ["term","What is a protocol?","An agreed set of rules for how devices communicate."],
  ["use","Which body publishes the Ethernet and Wi-Fi standards?","The IEEE."]]),
C("osi-tcpip-models",38,"1.1","Models","OSI and TCP/IP models",[
  "OSI has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
  "TCP/IP has four: Network Access, Internet, Transport, Application.",
  "MAC addresses are Layer 2. IP addresses are Layer 3.",
  "TCP and UDP are Layer 4."
],"Switch and MAC: Layer 2. Router and IP: Layer 3.",[
  ["term","Name the four TCP/IP layers from top to bottom.","Application, Transport, Internet, Network Access."],
  ["use","A router forwards by IP address. Which OSI layer is that?","Layer 3, the Network layer."]]),
/* 39 */
C("twisted-pair",39,"3.1","Cabling","Twisted-pair cable",[
  "Eight copper wires in four twisted pairs.",
  "The twists reduce interference and crosstalk.",
  "It ends in an RJ-45 connector.",
  "One run is good for 100 meters."
],"Ethernet patch cable: UTP, RJ-45, 100 meters.",[
  ["term","What is the maximum length of one twisted-pair Ethernet run?","100 meters."],
  ["use","Which connector is on a standard Ethernet cable?","RJ-45."]]),
C("coax-fiber",39,"3.1","Cabling","Coaxial and fiber",[
  "Coaxial is one copper core with a shield.",
  "Coaxial carries cable TV and cable internet.",
  "Fiber carries light over long distances at high speed.",
  "Fiber is immune to electrical interference."
],"Long distance or heavy interference: choose fiber.",[
  ["term","Why is fiber immune to electromagnetic interference?","It carries light, not electrical signals."],
  ["use","A cable must run 300 meters past large motors. Which medium fits?","Fiber-optic cable."]]),
/* 40 */
C("frames-mac",40,"4.5","Ethernet","Frames and MAC addresses",[
  "An IP packet travels inside an Ethernet frame.",
  "The frame header holds source and destination MAC addresses.",
  "A MAC address is 48 bits, written as 12 hex digits.",
  "The first half identifies the manufacturer."
],"Frames and MAC addresses belong to Layer 2.",[
  ["term","How long is a MAC address?","48 bits, written as 12 hexadecimal digits."],
  ["use","Putting an IP packet inside an Ethernet frame is called what?","Encapsulation."]]),
C("switch-learning",40,"4.5","Switching","How a switch forwards",[
  "A hub repeats every signal to every port.",
  "A switch learns from the source MAC address.",
  "It forwards by the destination MAC address.",
  "An unknown destination is flooded to all other ports."
],"Learn from source, forward by destination, flood the unknown.",[
  ["term","What is a MAC address table?","A switch's list of which MAC address is reachable on which port."],
  ["use","A switch gets a frame for a MAC address it has not seen. What does it do?","Floods it out of every port except the one it arrived on."]]),
/* 41 */
C("ipv4-structure",41,"2.2","IPv4","IPv4 address structure",[
  "An IPv4 address is 32 bits: four octets from 0 to 255.",
  "One part names the network, the rest names the host.",
  "The subnet mask marks where the network part ends.",
  "255.255.255.0 is the same as /24."
],"Matching network parts means the same network.",[
  ["term","What does the subnet mask show?","Which bits are the network part and which are the host part."],
  ["use","Mask 255.255.255.0. Are 192.168.1.10 and 192.168.2.10 on the same network?","No. The third octet differs, so the network parts do not match."]]),
C("host-settings",41,"2.2","IPv4","Settings a host needs",[
  "An IP address identifies the device.",
  "A subnet mask defines its network.",
  "A default gateway leads to other networks.",
  "Without a gateway, only local devices are reachable."
],"Local works but nothing beyond: check the default gateway.",[
  ["term","What is a default gateway?","The router address a device uses to reach other networks."],
  ["use","A PC reaches the office printer but no websites. Which setting do you check first?","The default gateway."]]),
/* 42 */
C("uni-broad-multi",42,"2.2","IPv4","Unicast, broadcast, multicast",[
  "Unicast goes to one device.",
  "Broadcast goes to every device on the local network.",
  "Multicast goes to a group that joined.",
  "Routers do not forward broadcasts."
],"One, all or a group: unicast, broadcast, multicast.",[
  ["term","What is a broadcast domain?","All the devices that receive each other's broadcasts."],
  ["use","Which device splits one broadcast domain into two?","A router."]]),
C("private-special",42,"2.1","IPv4","Private and special addresses",[
  "Private ranges: 10.x.x.x, 172.16 to 172.31, and 192.168.x.x.",
  "Private addresses are not routed on the internet.",
  "127.0.0.1 is loopback, for self-testing.",
  "169.254.x.x means DHCP did not answer."
],"A 169.254 address points to a DHCP problem.",[
  ["term","What are the three private IPv4 ranges?","10.0.0.0/8, 172.16.0.0 to 172.31.255.255, and 192.168.0.0/16."],
  ["use","A PC shows 169.254.7.20. What went wrong?","It could not reach a DHCP server, so it assigned itself an address."]]),
/* 43 */
C("ipv6-format",43,"2.3","IPv6","IPv6 format and shortening",[
  "128 bits: eight groups of four hex digits.",
  "Drop leading zeros in any group.",
  "Replace one run of all-zero groups with a double colon.",
  "Use the double colon only once."
],"Two double colons in one address is always invalid.",[
  ["term","How many bits is an IPv6 address?","128."],
  ["use","Shorten 2001:0db8:0000:0000:0000:0000:0000:0001.","2001:db8::1"]]),
C("ipv4-ipv6-together",43,"2.3","IPv6","IPv4 and IPv6 together",[
  "IPv6 exists because IPv4 ran out of addresses.",
  "Dual stack runs both at once.",
  "Tunneling carries IPv6 inside IPv4 packets.",
  "Translation converts between the two."
],"Running both protocols side by side is dual stack.",[
  ["term","What is dual stack?","A device or network running IPv4 and IPv6 at the same time."],
  ["use","IPv6 packets are wrapped inside IPv4 packets to cross an IPv4 network. What is that?","Tunneling."]]),
/* 44 */
C("static-dynamic",44,"1.5","DHCP","Static vs dynamic addresses",[
  "A static address is set by hand and does not change.",
  "Servers, printers and routers usually get static addresses.",
  "DHCP hands out an address, mask, gateway and DNS servers.",
  "A DHCP address is leased for a set time."
],"Devices others must always find get static addresses.",[
  ["term","What is a DHCP lease?","The length of time a device may keep the address it was given."],
  ["use","An office printer keeps changing address and users lose it. What is the fix?","Give it a static address."]]),
C("dora",44,"1.5","DHCP","The DHCP handshake",[
  "Discover: the client broadcasts for a server.",
  "Offer: a server offers an address.",
  "Request: the client asks for that offer.",
  "Acknowledge: the server confirms the lease."
],"DORA: Discover, Offer, Request, Acknowledge.",[
  ["term","What are the four DHCP steps in order?","Discover, Offer, Request, Acknowledge."],
  ["use","A client just received a DHCP Offer. What does it send next?","A DHCP Request."]]),
/* 45 */
C("default-gateway",45,"4.4","Routing","The default gateway",[
  "A router connects networks; each interface is on a different one.",
  "The router's interface on your network is your default gateway.",
  "The gateway must be on the same network as the device.",
  "A home router's outside address comes from the ISP."
],"The gateway address always shares your network part.",[
  ["term","Where does a home router's public address come from?","The ISP assigns it to the outside (WAN) interface."],
  ["use","A PC is 192.168.1.50/24 with gateway 192.168.2.1. What breaks?","It cannot reach other networks, because the gateway is not on its network."]]),
C("nat",45,"2.1","Addressing","NAT",[
  "Private addresses cannot travel on the internet.",
  "NAT swaps the private source address for the router's public one.",
  "Replies are swapped back on the way in.",
  "Many devices share one public address."
],"Private inside, public outside: the router is doing NAT.",[
  ["term","What does NAT stand for and do?","Network Address Translation. It translates between private and public addresses."],
  ["use","Eight home devices browse at once. How many public addresses do websites see?","One: the router's public address."]]),
/* 46 */
C("arp",46,"4.5","ARP","ARP",[
  "ARP finds the MAC address for a known IPv4 address.",
  "The request is a broadcast: who has this IP?",
  "The reply is a unicast with the MAC address.",
  "Answers are saved in the ARP cache."
],"Know the IP, need the MAC: that is ARP.",[
  ["term","How is an ARP request sent?","As a broadcast to every device on the local network."],
  ["use","Which Windows command shows the ARP cache?","arp -a"]]),
C("local-vs-remote",46,"4.5","ARP","Local vs remote delivery",[
  "Same network: ARP for the destination's own MAC address.",
  "Other network: ARP for the default gateway's MAC address.",
  "IP addresses stay the same end to end.",
  "MAC addresses change at every router."
],"Remote destination: its IP address, the gateway's MAC address.",[
  ["term","Which address changes at each router hop?","The MAC addresses. The IP addresses stay the same."],
  ["use","A PC sends to a server on another network. Whose MAC address goes in the frame?","The default gateway's."]]),
/* 47 */
C("routing-table",47,"4.4","Routing","The routing table",[
  "A router forwards by destination IP address.",
  "Its routing table lists known networks and how to reach them.",
  "No matching route and no default route: the packet is dropped.",
  "The default route is the catch-all."
],"Switches flood the unknown. Routers drop it.",[
  ["term","What is a default route?","The path used for traffic that matches no other route in the table."],
  ["use","A router has no route for a packet and no default route. What happens?","The packet is dropped."]]),
C("route-sources",47,"4.4","Routing","Where routes come from",[
  "Directly connected: a network on the router's own interface.",
  "Static: typed in by an administrator.",
  "Dynamic: learned from other routers through a routing protocol.",
  "Only a router moves traffic between networks."
],"Typed in is static. Learned from other routers is dynamic.",[
  ["term","What is a directly connected route?","A network attached to one of the router's own interfaces."],
  ["use","Two routers share their known networks automatically. What kind of routes result?","Dynamic routes."]])
];
(window.CN_PACKS=window.CN_PACKS||[]).push({id:"ccst-1",cert:"ccst",label:"CCST Networking part 1",version:"3.0.0",reviewed:REV,objectives:O,concepts});

// Learning links for each level: the class module on NetAcad, plus Cisco's public exam topics.
const M=window.CCST_MODULES||[];
const links={};
(window.DAYS||[]).filter(d=>d.track==="ccst"&&d.mod).forEach(d=>{
  links[d.d]=[
    {title:"Cisco NetAcad: Module "+d.mod+", "+M[d.mod],url:"https://www.netacad.com/",focus:"Read the module and do its labs in the Cisco NetAcad course",kind:"class"},
    {title:"Cisco: CCST Networking exam topics",url:TOPICS,focus:"The official list of what the exam covers",kind:"guide"}];
});
window.COURSE_LINKS=Object.assign(window.COURSE_LINKS||{},links);
})();
