// Campaign endings. window.CAMPAIGN_ENDINGS = { "<prevBand>,<respBand>": {t, p:[...]} }
// Bands are 0/1/2 on each axis (see data-campaign-flags.js bands). Text is from the
// campaign kit (modules/campaign-rpg.js), unchanged.
window.CAMPAIGN_ENDINGS = {
   "2,2":{t:"An Uneventful Tuesday", p:[
     "Nothing happens. Not in October, not at all.",
     "In November a regional authority two counties over loses eleven days of SCADA history and four days of operation to a group that got in through a contractor account nobody closed. The same intrusion set ran a credential against your VPN and found it dead.",
     "There is no incident report with your name on it and no after-action review, because from where anyone else is standing there is nothing to review. You did the job and went home.",
     "This is the best outcome available in this work and it is completely invisible. Get used to it."]},
   "2,1":{t:"Quiet, and Lucky in Places", p:[
     "They never get in. The door you closed was the door they came to.",
     "The gaps you left were real gaps. The only reason they cost nothing is that they were never tested — an untested restore and a rehearsal nobody ran are indistinguishable from good ones right up until they aren't.",
     "Prevention held. Take the win, and look at the dark lamps."]},
   "2,0":{t:"The Best Kind of Wrong", p:[
     "Nothing happened, so you will conclude you ran a good year.",
     "You closed the door, and because the door was closed none of the rest was ever exercised. No off-site copy. No preserved evidence. No incident carried to its final phase.",
     "Every dark lamp below is something you would have needed, and the only reason you didn't need it is one decision that happened to go the right way. That is not a process.",
     "This is the most dangerous ending in the set, because it looks exactly like competence."]},
   "1,2":{t:"Caught in the Hallway", p:[
     "They get in. They get almost nowhere.",
     "The foothold works, but the plant network is behind a boundary and the enumeration produces a map of somewhere that doesn't reach anything. When the encryption comes it lands on one file server and stops.",
     "You preserved what you needed, so you can say precisely what was touched — which turns a notification obligation from a guess into a statement. Restored from an off-site copy inside a day.",
     "Intrusions are not binary. Most of this work is deciding how far one travels."]},
   "1,1":{t:"Slowed Down", p:[
     "They get in, and what you put in place buys real time — unevenly, and not enough of it.",
     "Recovery works where you'd prepared and improvises everywhere else. The plant comes back later than it should have, with gaps in the account of what happened that cannot be closed after the fact.",
     "Partial preparation produces partial outcomes. That sounds obvious; it's also the shape of most real incidents."]},
   "1,0":{t:"Time You Couldn't Spend", p:[
     "You slowed them down and had nothing ready to spend the time on.",
     "The delay is real — nearly two weeks. Nobody uses it, because nothing was rehearsed and no clean copy existed to restore from.",
     "Detection without response capability is an alarm nobody is home to hear."]},
   "0,2":{t:"Textbook", p:[
     "They get in, they move, and at 03:12 on a Tuesday the encryption runs.",
     "And then it goes about as well as this ever goes. The plan runs because the incident before it was carried through to lessons learned. The off-site copy restores the historian by Friday evening. Preserved evidence means the notification is accurate and on time rather than a hedged guess.",
     "Four days degraded. No ransom. No misstatement to a regulator.",
     "Don't read this as a loss. You will get hit eventually — everyone does — and this is what good looks like afterward. It's the realistic ceiling, and most working defenders would sign for it."]},
   "0,1":{t:"Back Online, Partly Blind", p:[
     "Encrypted. You recover, slower than you'd like, but you recover.",
     "The problem starts after. You can restore the plant and you cannot reconstruct the intrusion, so when the state asks what customer data was accessed the honest answer is that you don't know and can't find out.",
     "\"We don't know what they took\" is frequently worse than the outage. Recovery is half the job; being able to say what happened is the other half."]},
   "0,0":{t:"Pay Now", p:[
     "Every historian and file server in the plant, and the backups, which sat in the same building you were told about in Hurricane Season.",
     "There is no clean copy. Nothing was rehearsed, so the first six hours go on working out who is allowed to decide anything. Nothing was preserved, so nobody can say what left.",
     "The utility pays. Nine days later the data appears on a leak site anyway, because the ransom bought a decryption key and a key was never what was being sold.",
     "Double extortion is why \"we have backups\" was never a complete answer, and why every dark lamp is load-bearing."]}
  };
window.CAMPAIGN_AXIS_LABELS = { prev:["Landed","Delayed","Prevented"], resp:["Failed","Partial","Clean"] };
