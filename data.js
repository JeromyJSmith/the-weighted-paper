/* BACP CoP practice data — unofficial, original material.
   Tiers: core +2, bonus +1, poor -1, serious -2 */

const TIERS = {
  core:    { label: 'Core',    pts:  2, blurb: 'Essential. Omitting it should normally fail the section.' },
  bonus:   { label: 'Bonus',   pts:  1, blurb: 'Genuine good practice, not the load-bearing decision.' },
  poor:    { label: 'Poor',    pts: -1, blurb: 'Unhelpful, avoidant or misdirected; no immediate serious risk.' },
  serious: { label: 'Serious', pts: -2, blurb: 'Foreseeable harm or breach of duty.' }
};

const VARIANTS = {
  V1: { name: 'Balanced', nick: 'ordinary mix', comp: '2 Core · 2 Bonus · 1 Poor · 1 Serious', max: 6, min: -3, pass: 4, headroom: 2,
    tests: 'Ordinary discrimination',
    fail: 'The Serious option.',
    body: 'Two essentials, two helpful extras, one misapplied action, one harmful one. Selecting everything still scrapes a pass here. It is the only mix where ticking widely still survives.' },
  V2: { name: 'Loss-weighted', nick: 'risk', comp: '2 Core · 1 Poor · 2 Serious', max: 4, min: -5, pass: 4, headroom: 0,
    tests: 'Refusing both poles',
    fail: 'Any negative selection at all.',
    body: 'The maximum equals the pass mark. There is no surplus and no room for a mistake. Two Serious options sit at opposite poles: under-reaction and over-reaction. Used for risk, safeguarding, capacity, and the first time a client asks you directly about confidentiality.' },
  V3: { name: 'Single decision, two-tier', nick: 'one choice', comp: '1 Core · 1 Bonus · 3 Serious', max: 2, min: -2, pass: 1, headroom: 1,
    tests: 'Safe versus excellent',
    fail: 'Taking the merely fine answer.',
    body: 'One option is the right action. One is adequate. Three harm the work. You can pass on the adequate answer. The +1 option usually does the correct thing without exploring, checking or consulting first.' },
  V4: { name: 'Nine-option zero-sum', nick: 'nine boxes on the page', comp: '2 Core · 2 Bonus · 4 Poor · 1 Serious', max: 6, min: -6, pass: 4, headroom: 2,
    tests: 'Select-all scores exactly 0',
    fail: 'Scoring zero or below because everything sounded reasonable.',
    body: 'Named for the nine boxes it puts on the page, not for a ninth mix. 2 Core + 2 Bonus + 4 Poor + 1 Serious = 9. The four goods add to +6. The five bads add to −6. Tick all nine and you score exactly 0. That is BACP’s published sample. The four Poor options fail in different ways: one defers, one over-investigates, one contacts the wrong party, one does the right thing in the wrong order.' },
  V5: { name: 'Information Gathering', nick: 'what to explore', comp: '2 Core · 2 Bonus · 2 Poor · 1 Serious', max: 6, min: -4, pass: 4, headroom: 2,
    tests: 'Proportionate curiosity',
    fail: 'Exhaustive enquiry in place of judgement.',
    body: 'Two areas you must explore, two that reward you, two that waste the session, one that looks into someone who is not your client. Exhaustive enquiry feels careful. Here it costs you.' },
  V6: { name: 'Single decision, sole-positive', nick: 'one right action', comp: '1 Core · 3 Serious', max: 2, min: -2, pass: 2, headroom: 0,
    tests: 'One defensible action',
    fail: 'Picking the kindest-sounding option.',
    body: 'One right answer at +2, three at −2, no partial credit. BACP’s Single Decision-Making example. Used where there is one defensible action. The trap is usually generosity: free sessions, informal contact, an exception because the reason is sympathetic.' },
  V7: { name: 'Core-heavy', nick: 'cumulative duties', comp: '3 Core · 2 Poor · 1 Serious', max: 6, min: -4, pass: 4, headroom: 0,
    tests: 'Completeness',
    fail: 'Treating two of three duties as good enough.',
    body: 'Three essentials, no bonus, no surplus. Some obligations are cumulative: a working agreement, a privacy notice, and a record of both. Doing two of the three is not two thirds compliant.' },
  V8: { name: 'Bonus-rich', nick: 'many extras', comp: '1 Core · 4 Bonus · 1 Serious', max: 6, min: -2, pass: 4, headroom: 2,
    tests: 'The load-bearing act among helpful ones',
    fail: 'Passing on points while missing the Core.',
    body: 'Easy to pass, generous surplus, one trap. You can clear the section on four Bonus options and omit the single Core one. Find the load-bearing act first, then take the extras.' }
};

const CASES = [
  {
    id: 1,
    name: 'Priya',
    strap: 'Online private practice · bereavement, low mood',
    facts: [
      ['Client', 'Priya, 34, works in hospital administration'],
      ['Setting', 'Your own private practice; sessions delivered online by video'],
      ['Contract', 'Open-ended, weekly, self-funded at £55 per session'],
      ['Presenting issue', 'Persistent low mood and exhaustion following a workplace restructure and the death of her father eleven months ago']
    ],
    background: 'Priya self-referred through your website. In your pre-session enquiry call she said she chose you because you offer evening online appointments and she cannot reliably get to an in-person room. She lives alone. She has had no previous counselling. She has completed your working agreement and privacy notice but has not returned the signed copy. You are four sessions in when the events in Section C occur.',
    sections: [
      {
        id: '1A', letter: 'A', title: 'Opening exploration', variant: 'V5', kind: 'Information Gathering', type: 'multi',
        prompt: 'Priya’s first session is in three days. Which areas would you want to explore with her?',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'A1', tier: 'core',    text: 'Her current support network, GP registration, and any medication or medical involvement', why: 'Safety and medical context are what let you judge competence and risk under 4.1(a) and 2.4. Without them you are working blind.' },
          { id: 'A2', tier: 'core',    text: 'What Priya hopes will be different as a result of counselling, and how she will know', why: '1.1(a) requires you to work in partnership in deciding how you will work together. Goals are jointly set, not assumed.' },
          { id: 'A3', tier: 'bonus',   text: 'The meaning and circumstances of her father’s death, and what support she has had around it', why: 'Humane and important, but material Priya will bring in her own time. The section is answerable without it.' },
          { id: 'A4', tier: 'bonus',   text: 'Whether working online by video suits her, what her setting at home is like, and what she would want to happen if she were distressed at the end of a session', why: 'Remote-working suitability under 2.1(b) and 2.1(d) — excellent practice, and credit you can spend elsewhere.' },
          { id: 'A5', tier: 'poor',    text: 'Whether her attachment style indicates unresolved paternal transference that will need interpretation', why: 'Imports a modality-specific formulation before the client has spoken, breaching 1.1(f).' },
          { id: 'A6', tier: 'poor',    text: 'A full chronology of every job she has held, so you can map the restructure against her career', why: 'The classic Information Gathering distractor: exhaustive, plausible-sounding, disproportionate to the presenting concern.' },
          { id: 'A7', tier: 'serious', text: 'Which of her colleagues were responsible for the restructure, so you can understand who is at fault', why: 'Pursues third parties for your own curiosity, engages 3.1(a) privacy duties toward people who are not your clients, and inverts Best interest.' }
        ],
        rationale: 'A1 and A2 are Core. A3 and A4 are the Bonus pair, and the reason they are Bonus rather than Core is the specific mechanic BACP describes for Information Gathering: positive picks reveal more about the client, but you never <em>need</em> that extra information, because each section supplies what is required to answer it.<br><br><strong>Note the shape.</strong> Two Poor options rather than one is deliberate. Information Gathering is where over-selection feels most virtuous, and this is the section that should teach you it is not free.'
      },
      {
        id: '1B', letter: 'B', title: 'First-session contracting', variant: 'V4', kind: 'Multiple Decision-Making', type: 'multi',
        prompt: 'What is important to establish or clarify with Priya in the first session?',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'B1', tier: 'core',    text: 'Confirm she has read the privacy notice, and check she understands the foreseeable limits to confidentiality, including any digital storage or platform that may collect data', why: '3.1(d) requires agreement to foreseeable limitations on confidentiality including digital storage systems, platforms or tools that may monitor or collect data.' },
          { id: 'B2', tier: 'core',    text: 'Agree and record a working agreement covering fees, cancellation, review points and how either of you would end the work, and give her a copy', why: '1.2(b) requires the client be given a record of the working agreement; 3.4(b) covers fee transparency.' },
          { id: 'B3', tier: 'bonus',   text: 'Agree what would happen if the video connection fails mid-session, and confirm her location and an emergency contact for use only if you had serious concern for her safety', why: 'Remote contingency planning under 2.1(b) and 2.1(d). Genuinely good; a competent practitioner might reasonably raise it in session two.' },
          { id: 'B4', tier: 'bonus',   text: 'Agree how and when the work will be reviewed, and what she should do if she is unhappy with it', why: 'Review and complaints information under 1.2(b) and 1.4(a).' },
          { id: 'B5', tier: 'poor',    text: 'Ask her to sign and return the agreement before you will begin any therapeutic work', why: 'Makes a signature a precondition of care, confusing an administrative artefact with informed consent under 1.2.' },
          { id: 'B6', tier: 'poor',    text: 'Tell her that because the work is open-ended there is no need to discuss endings at this stage', why: 'Contradicts 4.5(a) and 4.5(c), but is recoverable later.' },
          { id: 'B7', tier: 'poor',    text: 'Explain your theoretical orientation in detail so she can decide whether it is evidence-based for bereavement', why: 'Substitutes practitioner self-justification for the client’s actual questions — and mistakes the CoP’s own subject matter.' },
          { id: 'B8', tier: 'poor',    text: 'Ask her to stop talking to friends about her father until you have worked through the grief together', why: 'Issues a directive about her private life before you have understood it, contrary to 1.1(c) and Respect.' },
          { id: 'B9', tier: 'serious', text: 'Reassure her that everything she says will remain confidential in all circumstances', why: 'A promise you are legally unable to keep under 3.3(a). Discovering that at the point of a safeguarding or suicide-risk disclosure causes real harm to trust.' }
        ],
        rationale: 'This is the zero-sum section. The four positives total +6 and the five negatives total −6, so selecting every option scores exactly zero — the arithmetic BACP demonstrates in its own sample. If your instinct is that a caring practitioner would do all nine of these things, this section is the one that will cost you.<br><br>The four Poor options are each wrong in a <em>different register</em>, which is what a nine-option section is for.'
      },
      {
        id: '1C', letter: 'C', title: 'The unsigned agreement', variant: 'V7', kind: 'Multiple Decision-Making', type: 'multi',
        prompt: 'In session four you notice Priya still has not returned the signed working agreement or privacy notice. She says: “I thought we were already doing this. Do I really need to sign something?”',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'C1', tier: 'core',    text: 'Walk through the working agreement with her now, check she understands fees, cancellation, review, endings and the limits of confidentiality, and give her a written record of what you have agreed', why: '1.2(b) requires the client be given a record of the working agreement. Four sessions in without that record is the gap; a signature is not a substitute for shared understanding.' },
          { id: 'C2', tier: 'core',    text: 'Confirm she has a copy of the privacy notice in a form she can use, and check she understands the foreseeable limits to confidentiality, including digital storage or the platform you work on', why: '3.1(c)–(d): accessible privacy information and agreement to foreseeable limitations. Completing a form at intake is not the same as understanding it.' },
          { id: 'C3', tier: 'core',    text: 'Record that this review happened, what was clarified, and that she has a copy of the agreement', why: '3.2 requires an adequate record of the work. The missing signed copy is itself something the file should account for, together with what you did about it.' },
          { id: 'C4', tier: 'poor',    text: 'Tell her the work cannot continue until the signed copy is on file', why: 'Makes a signature a precondition of care four sessions in, confusing an administrative artefact with informed consent under 1.2.' },
          { id: 'C5', tier: 'poor',    text: 'Say signatures are just admin so there is no need to go over it again', why: 'Closes the gap rather than repairing it. The issue is not the signature; it is whether she has a record of what you have agreed.' },
          { id: 'C6', tier: 'serious', text: 'Tell her that without a signature nothing she has said so far is covered by confidentiality, so you will need to start again from session one', why: 'A false statement about confidentiality, and it discards four sessions of work. Confidentiality does not depend on a returned form.' }
        ],
        rationale: 'Three Core options, no Bonus, no headroom. You pass on two of the three Core options with no negatives; take one negative and you need all three. The shape exists because the working agreement, the privacy notice, and the record of both are cumulative. Doing two of the three is not two thirds compliant.<br><br><strong>What is deliberately unscored.</strong> Exploring why the form has sat unsigned is humane, and in a V1 or V8 section it would be a Bonus option. It is absent here because a core-heavy section removes the option to earn credit for the relational move while missing the governance duty.'
      },
      {
        id: '1D', letter: 'D', title: 'Risk and alcohol use', variant: 'V2', kind: 'Multiple Decision-Making', type: 'multi',
        prompt: 'Priya discloses that she has been drinking most evenings to get to sleep, sometimes a bottle of wine, and that last week she “didn’t much care” whether she woke up. She is adamant she has no plan and does not want her GP told.',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'D1', tier: 'core',    text: 'Stay with her, explore the meaning, frequency and intensity of the thought directly, and assess current risk collaboratively with her', why: 'Enacts the collaborative process in section A of the Framework: discuss, listen, reflect, weigh duties, record.' },
          { id: 'D2', tier: 'core',    text: 'Discuss openly what would change your position on contacting her GP, name the limits you set out in the working agreement, and record the discussion and your rationale', why: 'Keeps her in a decision about her own life while being honest about the limits already agreed.' },
          { id: 'D3', tier: 'poor',    text: 'Move on to a different topic, since raising it further might reinforce the thought', why: 'Avoidance, failing 2.4(c) and Do no harm — but it at least leaves the door open.' },
          { id: 'D4', tier: 'serious', text: 'Agree not to mention it again, because she has said she does not want it discussed', why: 'Converts avoidance into a binding promise you cannot keep, compounding the 3.3(a)(iii) suicide-risk obligation with a Trust breach.' },
          { id: 'D5', tier: 'serious', text: 'Contact her GP immediately without telling her, on the grounds that any mention of not caring about waking up is an emergency', why: 'Abandons collaboration where collaboration remains possible. 2.4(c) frames disclosure around risk of immediate serious harm; this does not meet that threshold without further assessment.' }
        ],
        rationale: 'The maximum equals the pass mark. Both Core options are compulsory, a single negative selection fails the section outright, and the section can cost more than it can earn. That asymmetry is the point: risk sections are where a wrong move is not offset by a good one.<br><br>D4 and D5 are Serious in opposite directions, and that pairing is the diagnostic. If you selected both D1 and D2 <em>and</em> one of D4 or D5, you scored +2 and failed. Adding a wrong action does not dilute it.'
      },
      {
        id: '1E', letter: 'E', title: 'Competence and self-care', variant: 'V8', kind: 'Multiple Decision-Making', type: 'multi',
        prompt: 'You realise that Priya’s alcohol use, bereavement and low mood are stretching your experience, and that you have felt preoccupied with her between sessions.',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'E1', tier: 'core',    text: 'Bring your competence to work with this presentation to supervision explicitly, and agree who holds which responsibilities', why: '4.1(b) requires discussing competence for specific client groups in supervision; 4.3(e) covers agreement on who holds key responsibilities. Preoccupation between sessions is itself supervisory material.' },
          { id: 'E2', tier: 'bonus',   text: 'Identify relevant CPD and specialist alcohol services, and discuss referral or parallel support openly with Priya if needed', why: '4.1(a) and 4.1(d) on competence and referral. A maintenance action, not the decision that protects this client this month.' },
          { id: 'E3', tier: 'bonus',   text: 'Monitor your own psychological and physical health and seek your own professional support if your resilience is affected', why: '2.3(a)–(c) on health and resilience.' },
          { id: 'E4', tier: 'bonus',   text: 'Review your caseload, workload and the spacing of demanding sessions', why: 'Genuine good practice; credit you can spend covering a Poor selection elsewhere.' },
          { id: 'E5', tier: 'bonus',   text: 'Revisit the working agreement with Priya at a review point, including whether the current frequency and format still fit what she needs', why: '1.2(a) on honesty about your competence, and ordinary review practice.' },
          { id: 'E6', tier: 'serious', text: 'Message Priya between sessions from your personal social media account to check on her', why: '1.3(d) requires a clear boundary between personal and professional digital accounts, and it risks the dual-relationship prohibition in 1.3(a).' }
        ],
        rationale: 'The bonus-rich shape and the only section in this case study where you can bank meaningful surplus. It passes on E1 plus any two Bonus options, or on all four Bonus options <em>without</em> the Core — which is deliberate, and worth sitting with. Four good-but-optional actions can carry you over a section pass mark while you omit the one mandatory thing. The arithmetic forgives it; supervision would not.'
      },
      {
        id: '1F', letter: 'F', title: 'Unplanned ending', variant: 'V6', kind: 'Single Decision-Making', type: 'single',
        prompt: 'Priya emails to say she is stopping counselling from today because money is tight, and thanks you. What is the most appropriate response?',
        instruction: 'Select one option only.',
        options: [
          { id: 'F1', tier: 'core',    text: 'Reply warmly, acknowledge her decision and her reason, offer a final session to review the work and endings while making clear the choice is hers, and give clear information about record retention and how to raise a concern', why: 'Combines 4.5(c)–(d) on reasonable notice and minimising disruption, Respect for her decision, and 3.1(c) and 3.2 on records information.' },
          { id: 'F2', tier: 'serious', text: 'Reply that ending by email is not acceptable and that she is contractually obliged to attend a final session', why: 'Misuses the contract to coerce, breaching 1.1(c) and Respect.' },
          { id: 'F3', tier: 'serious', text: 'Interpret the ending as avoidance of grief and tell her so, urging her to reconsider', why: 'Imposes an interpretation to overturn her decision, failing 1.1(f) and Anti-oppression.' },
          { id: 'F4', tier: 'serious', text: 'Offer to continue seeing her free of charge for as long as she needs, since money is the only obstacle', why: 'The option candidates most often misread as kind. It creates an unbounded, unagreed arrangement that changes the power in the relationship, engaging 1.3 and 3.4.' },
          { id: 'F5', tier: 'serious', text: 'Do not reply, delete her notes immediately and close the file', why: 'Breaches 3.2(b) and retention duties under 3.1(b), and abandons her without the honesty required by 2.2.' }
        ],
        rationale: 'The sole-positive shape, matching BACP’s own Single Decision-Making example: one correct answer at +2 and three wrong answers at −2 each, with no partial-credit middle option. There is no safe hedge and no way to pass by being merely inoffensive.'
      }
    ]
  },
  {
    id: 2,
    name: 'Callum',
    strap: 'School-commissioned service · a reluctant 16-year-old and a safeguarding disclosure',
    facts: [
      ['Client', 'Callum, 16, in his first year of sixth form'],
      ['Setting', 'A school-commissioned counselling service; you are a self-employed associate working on site one day a week'],
      ['Contract', 'Closed — six sessions, funded by the school, with review at session four'],
      ['Presenting issue', 'Referred by his head of year for “anger and disengagement”; Callum says he is fine and was “sent”']
    ],
    background: 'The school’s referral form describes two incidents of Callum leaving lessons and one verbal altercation. The head of year has asked you to “let her know what’s going on with him.” Callum’s parents separated last year and he lives with his mother and younger sister. He arrives for session one with headphones on and sits with his coat zipped up. You are three sessions in when the events in Section D occur.',
    sections: [
      {
        id: '2A', letter: 'A', title: 'Setting and referral', variant: 'V5', kind: 'Information Gathering', type: 'multi',
        prompt: 'Before or during your first meeting with Callum, which areas would you want to explore or establish?',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'A1', tier: 'core',    text: 'The school’s safeguarding policy and reporting route, who the designated safeguarding lead is, and how the service’s confidentiality operates in practice', why: '2.4(a) requires all necessary safeguarding policies and procedures; 2.4(b) requires that people using the service can access them and know who to contact. You cannot deliver this service safely without it.' },
          { id: 'A2', tier: 'core',    text: 'What information the school expects to receive from you, and what has already been agreed with Callum and his family about that', why: 'A commissioned service creates a three-way contract; 1.2(a)–(b) require accurate information about the service and a recorded working agreement.' },
          { id: 'A3', tier: 'bonus',   text: 'Callum’s own understanding of why he has been referred, and whether he wants to be there at all', why: 'Excellent practice under 1.1(a), 1.1(c) and Collaboration — but relational, and buildable in session.' },
          { id: 'A4', tier: 'bonus',   text: 'Whether Callum knows he can decline, what would happen if he did, and how that would be communicated to the school', why: 'Clarifying the right to decline is good practice rather than a governance precondition.' },
          { id: 'A5', tier: 'poor',    text: 'Whether Callum’s behaviour meets diagnostic criteria for a conduct disorder, so you can advise the school', why: 'Exceeds role and competence under 4.1(a) and 4.4(a).' },
          { id: 'A6', tier: 'poor',    text: 'A full developmental and family history from his mother before you meet him, so you arrive well briefed', why: 'Gathering a comprehensive third-party history before meeting a 16-year-old inverts whose account matters, contrary to 1.1(f).' },
          { id: 'A7', tier: 'serious', text: 'A full account of the altercation from the other student involved, before you meet Callum', why: 'Gathers confidential information about a third party who is not your client, engaging 3.1(a), for material you have no role in adjudicating.' }
        ],
        rationale: 'A1 is Core and non-negotiable. A2 is Core because a commissioned service creates a three-way contract. A3 and A4 are Bonus: relational and buildable in session rather than governance preconditions. A6 is the Information Gathering trap in this case.'
      },
      {
        id: '2B', letter: 'B', title: 'Confidentiality with a minor', variant: 'V2', kind: 'Multiple Decision-Making', type: 'multi',
        prompt: 'Callum says: “So you’ll just tell Miss everything, right? That’s how it works here.”',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'B1', tier: 'core',    text: 'Explain plainly what you will and will not share with the school, what would make you share something, and who you would tell first', why: '3.1(d) requires agreement to foreseeable limitations on confidentiality.' },
          { id: 'B2', tier: 'core',    text: 'Check what he understood from any information already given, and give him the privacy notice in a form he can actually use', why: '3.1(c) requires a clear and accessible privacy notice; 1.1(d) requires reasonable adjustments — for a 16-year-old that means accessible language, not an adult signature.' },
          { id: 'B3', tier: 'poor',    text: 'Avoid the question and suggest he raise it with his head of year instead', why: 'Deflection fails Honesty, Transparency and 1.4(b) on dealing with ethical issues promptly — but it does not misinform him.' },
          { id: 'B4', tier: 'serious', text: 'Tell him nothing he says will ever leave the room, to build trust quickly', why: 'Unkeepable against 3.3(a) duties on child abuse, safeguarding, suicide risk and serious crime.' },
          { id: 'B5', tier: 'serious', text: 'Tell him the school pays for the service so it is entitled to a summary of each session', why: 'Subordinates the client to the commissioner and misstates the position, breaching Confidentiality, 3.1(a) and Best interest.' }
        ],
        rationale: 'Loss-weighted: two Core positives, no Bonus, no headroom, and a section that can cost more than it earns. A young person’s first direct question about confidentiality is a single high-stakes moment — get it wrong and everything afterward is built on a false premise. B4 and B5 are both false statements about confidentiality, in opposite directions.'
      },
      {
        id: '2C', letter: 'C', title: 'Commissioner request', variant: 'V1', kind: 'Multiple Decision-Making', type: 'multi',
        prompt: 'The head of year stops you in the corridor and says: “Between us — is he saying anything about his dad? I need to know before the pastoral meeting.”',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'C1', tier: 'core',    text: 'Decline to discuss Callum’s material in a corridor, and say clearly and courteously what you can and cannot share and why', why: '3.1(a) and 3.3 — and the setting matters: a corridor is not a lawful or private place to discuss a client regardless of what is said.' },
          { id: 'C2', tier: 'core',    text: 'Offer a proper conversation about the service’s reporting arrangements, separate from the content of his sessions', why: 'Separates governance from content. The school is entitled to know how the service works under 1.2(a), and entitled to nothing about what Callum said.' },
          { id: 'C3', tier: 'bonus',   text: 'Tell Callum that the request was made and how you responded, at the next appropriate point', why: 'Builds the transparency 1.1(a) and Trust depend on, and makes the confidentiality you promised in Section B real.' },
          { id: 'C4', tier: 'bonus',   text: 'Take the commissioner pressure to supervision, and record the request and your response', why: '1.4(c) and 4.3 — commissioner pressure on a lone associate is textbook supervisory material.' },
          { id: 'C5', tier: 'poor',    text: 'Say you will “see what you can do” to avoid an awkward exchange with a colleague you rely on for room access', why: 'Not a disclosure, but an ambiguous half-promise made to protect your own working relationship, failing Honesty and 1.4(b).' },
          { id: 'C6', tier: 'serious', text: 'Give her a general summary of Callum’s feelings about his father, without naming specifics, since she is his head of year and has a duty of care', why: '“A general summary without specifics” is still disclosure of therapeutic content without consent or a 3.3(a) trigger. Duty of care is not a confidentiality override.' }
        ],
        rationale: 'The balanced shape: two Core, two Bonus, one Poor, one Serious. Selecting everything scores +3, which passes — this is the only variant in either case study where indiscriminate selection still clears the section, and it is included precisely so you notice how unusual that is.'
      },
      {
        id: '2D', letter: 'D', title: 'Safeguarding disclosure', variant: 'V4', kind: 'Multiple Decision-Making', type: 'multi',
        prompt: 'In session three Callum says his mother’s new partner “kicks off” most weekends, that last month he put his fist through a door, and that Callum sometimes takes his eleven-year-old sister to a friend’s house until it is quiet. He says: “You can’t tell anyone. Seriously. It’ll make it worse.”',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'D1', tier: 'core',    text: 'Tell him honestly that this is something you cannot keep to yourself, explain why, and tell him what you are going to do and when', why: '2.2 requires honesty with Callum about what you are doing rather than reporting behind him. Doing D2 without D1 is safe but unkind.' },
          { id: 'D2', tier: 'core',    text: 'Follow the school’s safeguarding procedure and share the concern with the designated safeguarding lead without delay', why: '3.3(a) removes your discretion where child abuse or a child at risk is disclosed — and there is an eleven-year-old in the house. Doing D1 without D2 is kind and non-compliant.' },
          { id: 'D3', tier: 'bonus',   text: 'Stay with him and explore what he fears will happen if this is shared, and what would help him through the next few days', why: 'The containment. It matters; it is not the load-bearing decision.' },
          { id: 'D4', tier: 'bonus',   text: 'Record what he said in his own words, factually and proportionately, together with your rationale and the action taken', why: 'The record. Proportionate, factual, contemporaneous.' },
          { id: 'D5', tier: 'poor',    text: 'Agree to hold it until the next session so he has time to think about whether he wants anything done', why: 'Defers a safeguarding response to the client’s timetable.' },
          { id: 'D6', tier: 'poor',    text: 'Ask him for a detailed account of every incident before deciding whether it meets a threshold', why: 'Makes you the investigator — a role that belongs to the designated safeguarding lead and statutory services. Your threshold is concern, not proof.' },
          { id: 'D7', tier: 'poor',    text: 'Telephone his mother the same evening to hear her account before contacting anyone at school', why: 'Contacts the household that contains the alleged risk, which can escalate it.' },
          { id: 'D8', tier: 'poor',    text: 'Tell him you have to report it and end the session there so you can act immediately', why: 'The right thing in the wrong order, leaving a distressed 16-year-old with no session and no plan.' },
          { id: 'D9', tier: 'serious', text: 'Promise him you will keep it between the two of you, on the basis that he is 16 and can decide for himself', why: 'An unkeepable promise made at the exact moment the duty crystallises. Being 16 does not displace a safeguarding concern about a younger sibling.' }
        ],
        rationale: 'The second zero-sum section: four positives totalling +6, five negatives totalling −6, select-all scores zero. It is placed on the safeguarding disclosure because this is where the urge to do everything is strongest and where four of the nine plausible-sounding actions are wrong. None of the four Poor options is stupid.'
      },
      {
        id: '2E', letter: 'E', title: 'Review and reporting', variant: 'V8', kind: 'Multiple Decision-Making', type: 'multi',
        prompt: 'The session-four review is due. The school’s contract manager emails asking for “a short written update on progress and any concerns” for each student in the service.',
        instruction: 'Select all responses you consider essential.',
        options: [
          { id: 'E1', tier: 'core',    text: 'Agree with Callum, before writing anything, what the update will say and what it will not, and give him the opportunity to see it', why: '1.1(a) on partnership and 3.1(d) on foreseeable limitations converge here: an agreed report is a continuation of the contract, an unagreed one is a disclosure.' },
          { id: 'E2', tier: 'bonus',   text: 'Write only what is factual, proportionate and necessary for the school’s stated purpose — attendance, engagement, and whether the work is continuing', why: 'Data minimisation under 3.2 and 3.1(c).' },
          { id: 'E3', tier: 'bonus',   text: 'Clarify in writing with the contract manager what the service does and does not report, and where that was agreed', why: 'Commissioner clarity under 1.2(a).' },
          { id: 'E4', tier: 'bonus',   text: 'Take the request to supervision as a commissioner-boundary issue and record the outcome', why: 'Supervision under 4.3.' },
          { id: 'E5', tier: 'bonus',   text: 'Check whether six sessions is enough, and what onward options exist if it is not', why: 'Endings and continuity under 4.5(b).' },
          { id: 'E6', tier: 'serious', text: 'Attach your session notes so the school has the full picture and can make its own judgement', why: 'Session notes are not a progress report. Breaches 3.2(b) and 3.1(a), and outsources a judgement that is yours to a party with different interests.' }
        ],
        rationale: 'Bonus-rich, and the second place in the paper where you can bank surplus. It passes on E1 plus any two Bonus options, or on four Bonus options with the Core omitted — again, deliberately. You can produce a careful, proportionate, well-supervised report about a young person without ever telling him it exists, and the arithmetic will let you through.'
      },
      {
        id: '2F', letter: 'F', title: 'Request to continue privately', variant: 'V3', kind: 'Single Decision-Making', type: 'single',
        prompt: 'At the end of session six Callum says: “This has actually been alright. Can I just keep seeing you? I’ve got money from my job, I’d pay you myself.”',
        instruction: 'Select one option only.',
        options: [
          { id: 'F1', tier: 'core',    text: 'Tell him you are glad it has been useful, explain that you cannot simply convert a school-commissioned placement into a private arrangement and why, say you will take it to supervision and check the position with the service, and set out the other routes available to him in the meantime', why: 'The full-credit answer: respects the request, is honest about the constraint, does not decide alone under 1.4(c), and discharges 4.5(b) and 4.5(d).' },
          { id: 'F2', tier: 'bonus',   text: 'Thank him, decline the private arrangement, and give him clear written information about local services he can self-refer to', why: 'Not unethical — it declines appropriately and signposts, satisfying 4.5(d) — but it closes the conversation without exploring what he is asking for or checking the position, so it forgoes the bonus.' },
          { id: 'F3', tier: 'serious', text: 'Agree to continue privately from next week at a reduced rate, since he is nearly an adult and is paying for himself', why: 'Breaches 1.3(a) on dual and conflicting roles, 3.4 on financial arrangements, and the commissioner contract.' },
          { id: 'F4', tier: 'serious', text: 'Tell him the six sessions are complete and there is nothing further you can do', why: 'Serious by omission — a flat refusal with no onward information fails 4.5(b) and 4.5(d) and abandons him at the point he first engaged.' },
          { id: 'F5', tier: 'serious', text: 'Agree informally to “stay in touch” and see how he gets on, without a contract or fee', why: 'The definition of boundary drift under 1.3(a)–(b): no working agreement, no safeguarding route, no record.' }
        ],
        rationale: 'The two-tier single decision: one answer is fully right, one is defensible but thin, three are damaging. Unlike the sole-positive shape in Case Study 1, this section separates safe from excellent rather than pass from fail — F2 passes at +1 without earning the headroom.'
      }
    ]
  }
];

const BEHAVIOURS = [
  { name: 'Proportionate curiosity',            sections: ['1A', '2A'], fail: 'Exhaustive or third-party enquiry.' },
  { name: 'Restraint under a zero-sum trap',    sections: ['1B', '2D'], fail: 'A section score of zero or below — you selected nearly everything.' },
  { name: 'Completeness of cumulative duties',  sections: ['1C'],       fail: 'Two of three Core options taken as “good enough”.' },
  { name: 'Refusing both poles',                sections: ['1D', '2B'], fail: 'Any Serious selection — note which pole you drifted to.' },
  { name: 'Credit banking',                     sections: ['1E', '2E'], fail: 'Passing on Bonus alone while omitting the Core.' },
  { name: 'One-shot judgement',                 sections: ['1F', '2F'], fail: 'Any negative selection; no partial credit to recover it.' }
];
