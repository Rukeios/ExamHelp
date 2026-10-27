# Level 7: one request, all the way in

Diagram: [`level7-network.html`](level7-network.html). It started as a student's own hand sketch ([original](img/level7-rj-original-sketch.png)), which was corrected and redrawn.

## The customer's path (red)
1. **Internet → DDoS Protection.** It absorbs floods of junk traffic so the site stays up (availability). It doesn't read what's inside the traffic.
2. **Azure Firewall:** one central rulebook (IPs, ports, domain names) for traffic coming in AND going out, across many VNets.
3. **WAF (Web Application Firewall):** opens each web request and blocks attacks hidden inside it, such as SQL injection and cross-site scripting.
4. **Web server in VNet A.** It reads the database password from **Key Vault**, so the password is never stored in code.
5. **Web server → database VM in VNet B.** This needs **peering**, because separate VNets can't talk until you connect them. The **NSG** on the database subnet allows only the web server on the database port and denies everything else.

## The admin's path (purple)
- The admin connects to **Azure Bastion over HTTPS (port 443) through the Azure portal**.
- Bastion lives inside Azure and makes the **RDP/SSH** connection to the VM's **private** IP.
- So RDP and SSH never cross the internet, and the VM needs no public IP.

## Defender for Cloud (gold dashed box)
- It watches everything inside Azure.
- **Free:** posture management, recommendations and secure score.
- **Paid Defender plans:** threat alerts on workloads.

## Corrections to the original sketch
1. "RDF" should be **RDP**.
2. **Bastion placement:** the sketch showed RDP/SSH leaving the admin's computer before Bastion. In reality the admin uses HTTPS to the portal and Bastion, and RDP/SSH only happens inside Azure.
3. **Added DDoS Protection** at the edge.
4. **Added peering** between the two VNets, which is required for web → database traffic.
5. **Added Key Vault** for the database password.
6. **Email:** Azure Firewall can filter outbound mail traffic, but email *threats* (phishing, bad attachments) belong to **Defender for Office 365**, which is Level 8.
7. Real designs sometimes put the WAF in front of the firewall. For SC-900, the order doesn't matter. Know what each one inspects.

## One-line hooks
- Flood → DDoS
- Central rules, domain names, outbound → Azure Firewall
- SQL injection / XSS → WAF
- Allow or deny by port on one subnet → NSG
- Separate networks → VNets (connected by peering)
- RDP/SSH with no public IP → Bastion
- Secrets, keys, certificates → Key Vault
- Score and recommendations → posture management
- Attack alerts → workload protection
