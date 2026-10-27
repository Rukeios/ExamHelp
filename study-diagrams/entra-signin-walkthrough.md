# Entra ID: what happens when someone signs in (Levels 3–5)

Diagram: [`entra-signin.html`](entra-signin.html).

## 0. Who signs in
- **Users** (employees), **external identities** (B2B guests), **devices**, **workload identities** (managed identities, service principals), **groups**.
- **Dynamic groups** add and remove members by rules, which automates the **access lifecycle**.
- **AD DS** is the on-premises directory of objects: users, **computers**, printers and servers. **Entra Connect** syncs it to Entra ID. Modern auth and SaaS apps belong to **Entra ID**.

## 1. Authentication: prove who you are
- **MFA** uses two or more of: something you know, something you have, something you are.
- Second factors include an Authenticator push with **number matching** (which defeats MFA fatigue), SMS, voice and OATH tokens.
- **Passwordless** methods:
  - Windows Hello for Business
  - Microsoft Authenticator
  - FIDO2 keys / passkeys
  - Certificate-based authentication
- **Not passwordless:** SMS, voice and OATH software/hardware tokens.
- **Windows Hello for Business** uses a PIN, face or fingerprint, and the key is **bound to one device**. It doesn't sync across devices and doesn't use the Authenticator app.
- **Password protection** blocks banned passwords. **SSPR** lets users reset their own password, and **writeback** sends the new password to on-prem AD.
- **Security defaults:** free; turns on MFA for everyone and blocks legacy sign-ins.

## 2. Conditional Access (Entra ID P1): if… then…
- **Signals (if):** user or group, location/IP, device compliance, app, sign-in risk, user risk.
- **Decisions (then):** block, allow, or allow if the user completes MFA, uses a compliant device, accepts the terms of use (acceptance is recorded) or changes their password.
- **ID Protection (P2)** supplies the risk levels.

## 3. Authorization: what you can do
- A token gives **single sign-on**.
- **RBAC** roles follow least privilege.
- **PIM (P2)** gives just-in-time, time-limited admin rights, with approval and logging.
- **Governance:**
  - **Access reviews:** does this person still need this?
  - **Entitlement management:** access packages people request.
  - **Lifecycle:** joiners, movers and leavers.

## 4. Auditing
Sign-in and audit logs record who did what, and when. The four pillars of identity are **administration, authentication, authorization and auditing**. "Tracking what a user accessed" is **auditing**.

## Hooks
- Hello = this device only.
- Passwordless = Hello, Authenticator, FIDO2, certificates. Nothing else.
- Location and device are **signals**. "Require MFA" is a **decision**.
- P1 = Conditional Access. P2 = ID Protection and PIM.
