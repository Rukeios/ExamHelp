// CCST Networking Pocket Notes and recall cards, part 2 (levels 48-59, course modules 15 to 26).
// Our own words, organized by Cisco's public CCST Networking (100-150) exam topics.
// Course links for these levels are built in data-cn-ccst-1.js from window.CCST_MODULES.
(function(){
const REV="2026-11-13";
const TOPICS="https://learningcontent.cisco.com/documents/CCST+Networking+Objective+Domain_Cisco_Final_wCiscoLogo.pdf";
const O={
  "1.3":"Differentiate between LAN, WAN, MAN, CAN, PAN, and WLAN",
  "1.4":"Compare and contrast cloud and on-premises applications and services",
  "1.5":"Describe common network applications and protocols",
  "2.2":"Identify IPv4 addresses and subnet formats",
  "2.3":"Identify IPv6 addresses and prefix formats",
  "3.4":"Demonstrate how to set up and check network connectivity on Windows, Linux, Mac OS, Android, and Apple iOS",
  "4.4":"Explain basic routing concepts",
  "4.5":"Explain basic switching concepts",
  "5.3":"Run basic diagnostic commands and interpret the results"
};
const D={48:"1 Standards & concepts",49:"1 Standards & concepts",50:"5 Diagnosing problems",51:"1 Standards & concepts",52:"1 Standards & concepts",53:"2 Addressing",
  54:"4 Infrastructure",55:"4 Infrastructure",56:"2 Addressing",57:"4 Infrastructure",58:"1 Standards & concepts",59:"1 Standards & concepts"};
const C=(id,day,obj,topic,title,lines,clue,cards)=>({
  id:"ccst."+id,cert:"ccst",day,dom:D[day],obj,objTitle:O[obj],topic,title,lines,clue,
  cards:cards.map((c,i)=>({id:"ccst."+id+".c"+(i+1),kind:c[0],q:c[1],a:c[2]})),
  src:[TOPICS],reviewed:REV,status:"drafted",v:1});
const concepts=[
/* 48 */
C("tcp-vs-udp",48,"1.5","Transport","TCP vs UDP",[
  "TCP sets up a connection, confirms delivery and resends what is lost.",
  "UDP just sends: no setup, no confirmation, no resends.",
  "Live voice, video and games use UDP.",
  "Downloads, web pages and email use TCP."
],"Must arrive complete: TCP. Must arrive on time: UDP.",[
  ["term","What does TCP do that UDP does not?","Confirms delivery and resends lost data, in order."],
  ["use","A voice call app can't wait for resends. Which protocol does it use?","UDP."]]),
C("common-ports",48,"1.5","Ports","Ports to know",[
  "FTP 20 and 21. SSH 22. Telnet 23. SMTP 25.",
  "DNS 53. DHCP 67 and 68. HTTP 80.",
  "POP3 110. NTP 123. IMAP 143. HTTPS 443.",
  "The IP address finds the device; the port finds the program."
],"Secure versions: SSH 22 beats Telnet 23, HTTPS 443 beats HTTP 80.",[
  ["term","Which port does DNS use?","53."],
  ["use","A firewall must allow secure web traffic. Which port?","443 (HTTPS)."]]),
/* 49 */
C("email-protocols",49,"1.5","Email","Email protocols",[
  "SMTP sends mail.",
  "POP3 downloads mail to one device, usually removing it from the server.",
  "IMAP keeps mail on the server and syncs every device.",
  "Reading on several devices means IMAP."
],"SMTP sends. POP3 and IMAP read.",[
  ["term","What does SMTP do?","Sends email from a client to a server and between servers."],
  ["use","Mail must match on a phone, laptop and webmail. Which protocol?","IMAP."]]),
C("secure-vs-plain",49,"1.5","Services","Secure vs plain-text services",[
  "HTTP and HTTPS carry the web; HTTPS is encrypted.",
  "Telnet and SSH give a remote command line; SSH is encrypted.",
  "FTP and SFTP move files; SFTP is encrypted.",
  "NTP keeps device clocks in sync."
],"Plain text: Telnet, FTP, HTTP. Encrypted: SSH, SFTP, HTTPS.",[
  ["term","What does NTP do?","Keeps device clocks synchronized."],
  ["use","Which protocol should replace Telnet for managing a switch?","SSH."]]),
/* 50 */
C("ipconfig-family",50,"3.4","Commands","Checking your settings",[
  "Windows: ipconfig shows address, mask and gateway.",
  "ipconfig /all adds MAC, DHCP server and DNS servers.",
  "Linux: ip address. Mac: ifconfig.",
  "ipconfig /release and /renew get a fresh DHCP address."
],"Need the MAC or DNS servers on Windows? Add /all.",[
  ["term","What does ipconfig /all add over ipconfig?","The MAC address, DHCP server, DNS servers and lease details."],
  ["use","Which Linux command shows interface addresses?","ip address (or ip a)."]]),
C("ping-trace-nslookup",50,"5.3","Commands","ping, tracert and nslookup",[
  "ping tests reachability with ICMP echo requests and replies.",
  "tracert (Windows) or traceroute shows each router hop.",
  "nslookup tests DNS name resolution.",
  "Firewalls often block ping, so no reply isn't proof a device is down."
],"Ping by IP works but by name fails: suspect DNS.",[
  ["term","Which protocol does ping use?","ICMP."],
  ["use","Which command shows where along the path traffic stops?","tracert on Windows, traceroute on Linux and Mac."]]),
/* 51 */
C("network-sizes",51,"1.3","Network types","PAN to WAN",[
  "PAN: around one person.",
  "LAN: one home or building. WLAN: a LAN over Wi-Fi.",
  "CAN: buildings on one campus. MAN: a city.",
  "WAN: long distances through a provider."
],"Person, building, campus, city, world: PAN, LAN, CAN, MAN, WAN.",[
  ["term","What is a CAN?","A campus area network linking several buildings on one site."],
  ["use","Two offices in different states are linked through a provider. What network type?","A WAN."]]),
C("topology-layers",51,"1.3","Design","Topologies and layers",[
  "Star: all devices connect to one central switch.",
  "Mesh: several links per device for backup paths.",
  "Access layer: where devices plug in.",
  "Distribution gathers access switches; the core is the backbone."
],"Users plug into access. The core is the backbone.",[
  ["term","What is the weak point of a star topology?","The central device: if it fails, everything on it loses its connection."],
  ["use","Which design layer connects user PCs?","The access layer."]]),
/* 52 */
C("virtualization",52,"1.4","Virtualization","Hypervisors and VMs",[
  "A hypervisor runs several virtual machines on one physical server.",
  "Type 1 runs on bare metal, in data centers.",
  "Type 2 runs as an app on a normal operating system.",
  "Fewer physical servers saves power, space and cost."
],"Bare metal is Type 1. An app on your laptop is Type 2.",[
  ["term","What is a hypervisor?","Software that creates and runs virtual machines."],
  ["use","A VM runs inside an app on a Windows laptop. Which hypervisor type?","Type 2."]]),
C("cloud-models",52,"1.4","Cloud","Cloud service and deployment models",[
  "IaaS: rent servers; you manage the operating system.",
  "PaaS: a ready platform to run your code.",
  "SaaS: finished software you just use.",
  "Public, private, hybrid, or on-premises in your own building."
],"You patch the OS: IaaS. You just sign in: SaaS.",[
  ["term","What is SaaS?","Software as a service: finished software used over the internet, like web email."],
  ["use","Sensitive systems stay in-house and the website runs in a public cloud. Which deployment model?","Hybrid."]]),
/* 53 */
C("binary",53,"2.2","Number systems","Binary",[
  "Place values: 128, 64, 32, 16, 8, 4, 2, 1.",
  "Add the places holding a 1: 11000000 = 192.",
  "To convert, subtract place values from left to right.",
  "65 = 64 + 1 = 01000001."
],"Check every conversion by adding it back up.",[
  ["term","What is 11111111 in decimal?","255."],
  ["use","Convert 192 to binary.","11000000."]]),
C("hexadecimal",53,"2.3","Number systems","Hexadecimal",[
  "Hex digits run 0 to 9, then a to f.",
  "One hex digit is four bits.",
  "Two hex digits make a byte: ff = 255.",
  "MAC and IPv6 addresses are written in hex."
],"One hex digit, four bits.",[
  ["term","How many bits does one hex digit hold?","Four."],
  ["use","What is hex ff in decimal?","255."]]),
/* 54 */
C("duplex-mdix",54,"4.5","Switching","Duplex and auto-MDIX",[
  "Full duplex sends and receives at once.",
  "Half duplex takes turns.",
  "A duplex mismatch causes slow links and errors.",
  "Auto-MDIX makes either cable type work."
],"Slow link with errors: check both ends' duplex.",[
  ["term","What is a duplex mismatch?","One end set to full duplex and the other to half."],
  ["use","Which feature lets a port accept a crossover or straight-through cable?","Auto-MDIX."]]),
C("vlans-trunks",54,"4.5","Switching","VLANs and trunks",[
  "A VLAN is a separate logical network on a switch.",
  "Each VLAN is its own broadcast domain.",
  "A trunk carries several VLANs; 802.1Q tags the frames.",
  "Traffic between VLANs needs a router or Layer 3 switch."
],"Between VLANs means routing.",[
  ["term","Which standard tags VLAN frames on a trunk?","802.1Q."],
  ["use","Guest Wi-Fi must be kept apart from staff PCs on the same switch. What do you use?","A separate VLAN."]]),
/* 55 */
C("ip-properties",55,"4.4","Network layer","What IP promises",[
  "Connectionless: no setup before sending.",
  "Best effort: no delivery guarantee.",
  "Media independent: any copper, fiber or radio link.",
  "Reliability comes from TCP, not IP."
],"IP delivers best effort. TCP makes it reliable.",[
  ["term","What does best effort mean?","IP tries to deliver packets but does not guarantee it."],
  ["use","Which layer resends lost data?","The transport layer, using TCP."]]),
C("ttl-hop-limit",55,"4.4","Network layer","TTL and Hop Limit",[
  "Each router lowers an IPv4 packet's TTL by one.",
  "At zero the packet is dropped.",
  "This stops packets looping forever.",
  "IPv6 calls the same field Hop Limit."
],"TTL in IPv4, Hop Limit in IPv6.",[
  ["term","What happens when TTL reaches zero?","The router drops the packet."],
  ["use","Which IPv6 field replaces TTL?","Hop Limit."]]),
/* 56 */
C("network-broadcast",56,"2.2","IPv4","Network and broadcast addresses",[
  "All host bits 0: the network address.",
  "All host bits 1: the broadcast address.",
  "Neither can be assigned to a device.",
  "192.168.10.0/24: network .0, broadcast .255."
],"First address names the network. Last address reaches everyone.",[
  ["term","What is the broadcast address of 10.1.1.0/24?","10.1.1.255."],
  ["use","Host 192.168.1.130/25. What is its network address?","192.168.1.128."]]),
C("host-counts-classes",56,"2.2","IPv4","Host counts and classes",[
  "Usable hosts = 2 to the power of host bits, minus 2.",
  "/24: 254. /25: 126. /26: 62. /30: 2.",
  "Class A 1–126, B 128–191, C 192–223.",
  "Class D 224–239 is multicast."
],"Always subtract 2.",[
  ["term","How many usable hosts in a /26?","62."],
  ["use","Which class is 172.20.5.1?","Class B."]]),
/* 57 */
C("arp-risks",57,"4.5","Address resolution","ARP's weak spots",[
  "Every ARP request is a broadcast.",
  "ARP believes any reply it gets.",
  "Fake replies redirect traffic: ARP spoofing.",
  "The attacker ends up in the middle of the traffic."
],"ARP trusts everyone, which is how spoofing works.",[
  ["term","What is ARP spoofing?","Sending fake ARP replies so traffic goes to the attacker's MAC address."],
  ["use","Why does ARP add load on big networks?","Every request is a broadcast all devices must process."]]),
C("neighbor-discovery",57,"2.3","Address resolution","IPv6 Neighbor Discovery",[
  "IPv6 has no ARP; it uses Neighbor Discovery (ICMPv6).",
  "Neighbor Solicitation asks; Neighbor Advertisement answers.",
  "Router Advertisements give the prefix and gateway.",
  "It uses multicast, never broadcast."
],"IPv6 question offering ARP? Rule it out.",[
  ["term","Which protocol carries Neighbor Discovery?","ICMPv6."],
  ["use","How does an IPv6 host learn its prefix without DHCP?","From a Router Advertisement."]]),
/* 58 */
C("dns-lookup",58,"1.5","DNS","How a DNS lookup works",[
  "Check the local cache first.",
  "Then a DNS server asks the root servers.",
  "Then the top-level domain servers, like .com.",
  "Then the domain's own servers; the answer is cached."
],"Cache, root, top-level domain, domain.",[
  ["term","Where does a device look first for a name?","Its own DNS cache."],
  ["use","After the root, which servers does a lookup for example.com reach?","The .com top-level domain servers."]]),
C("records-relay-slaac",58,"1.5","Addressing services","Records, relay and SLAAC",[
  "A: IPv4. AAAA: IPv6. MX: mail. CNAME: alias.",
  "A DHCP relay agent forwards requests across a router.",
  "SLAAC: an IPv6 device makes its own address.",
  "Stateless DHCPv6 adds extras like DNS servers."
],"Four As for the address four times as long.",[
  ["term","Which record names a domain's mail server?","MX."],
  ["use","Clients across a router can't reach the DHCP server. What's needed?","A DHCP relay agent on the router."]]),
/* 59 */
C("ports-sockets",59,"1.5","Transport","Port ranges and sockets",[
  "Well-known: 0 to 1023.",
  "Registered: 1024 to 49151.",
  "Dynamic: 49152 to 65535, picked by clients.",
  "A socket is an IP address plus a port."
],"Servers listen on well-known ports. Clients use dynamic ones.",[
  ["term","What is a socket?","An IP address combined with a port number."],
  ["use","Which range does a client pick its port from?","Dynamic, 49152 to 65535."]]),
C("handshake-window",59,"1.5","Transport","Handshake and flow control",[
  "Open: SYN, SYN-ACK, ACK.",
  "Close: FIN from each side, each acknowledged.",
  "Sequence numbers put segments back in order.",
  "Window size limits what's sent before an ACK."
],"SYN, SYN-ACK, ACK.",[
  ["term","What is the TCP three-way handshake?","SYN, SYN-ACK, ACK."],
  ["use","Which TCP field controls how much is sent before waiting?","The window size."]])
];
(window.CN_PACKS=window.CN_PACKS||[]).push({id:"ccst-2",cert:"ccst",label:"CCST Networking part 2",version:"3.1.0",reviewed:REV,objectives:O,concepts});
})();
