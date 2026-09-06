const INDICATED_CASES = [
  {
    id: "c1",
    title: "Low Mood and Escalating Risk",
    setting: "Private practice",
    contract: "Open-ended",
    presenting: "Low mood, poor sleep and difficulty coping since a relationship ended",
    themes: [
      "contracting",
      "informed-choice",
      "confidentiality",
      "records",
      "data-protection",
      "suicide",
      "self-harm",
      "mental-health-presentations"
    ],
    brief: "Priya, 34, has self-referred to your private practice after finding you online. She describes several months of low mood, poor sleep and tearfulness since her long-term relationship ended, and says she is \"not coping\" but has kept working full time. She has no previous contact with mental health services and takes no regular medication. She has never had therapy before and asks early on how confidential the sessions will be, mentioning she would not want her family to find out she is struggling. This is your first meeting; no formal agreement is yet in place.",
    sections: [
      {
        id: "c1sA",
        label: "Section A",
        type: "mdm",
        stem: "What would be important to cover with Priya in this first session?",
        options: [
          {
            t: "Ask what she is hoping therapy will help her with, in her own words.",
            p: 1,
            why: "Understanding Priya's own goals supports collaborative working and keeps the contract responsive to her expressed needs.",
            refs: [
              "2018:31",
              "2026:1.1a"
            ]
          },
          {
            t: "Tell her that everything she says will remain completely confidential between the two of you.",
            p: -2,
            why: "This is inaccurate and could later force you to break a promise; the framework requires you to disclose foreseeable limits to confidentiality, not deny they exist.",
            refs: [
              "2018:55",
              "2026:3.1d"
            ]
          },
          {
            t: "Suggest she consider whether a shorter, structured intervention such as CBT might suit her better than open-ended work.",
            p: -1,
            why: "Redirecting her towards a different modality this early, before you understand her needs, oversteps what you know and is not yet your decision to make for her.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Postpone discussing confidentiality until she raises it again, to avoid alarming her.",
            p: -1,
            why: "She has already raised the topic; delaying it risks her disclosing information before she has had a chance to make an informed choice about what to share.",
            refs: [
              "2018:31",
              "2026:3.1d"
            ]
          },
          {
            t: "Check whether she has understood what you have told her about confidentiality and give her a chance to ask questions.",
            p: 1,
            why: "Informing clients about limits is only useful if they have understood them; checking comprehension is good practice in gaining informed consent.",
            refs: [
              "2018:31",
              "2026:1.1a"
            ]
          },
          {
            t: "Ask detailed questions about the breakup so you can assess who was at fault.",
            p: -2,
            why: "This is not relevant to contracting or safety, positions you as a judge of blame, and diverts the first session from establishing a working agreement.",
            refs: []
          },
          {
            t: "Explain the limits of confidentiality, including when you might need to share information without her agreement.",
            p: 2,
            why: "Priya has already raised confidentiality; stating the limits clearly at the outset lets her give genuinely informed consent to the work, as the framework requires.",
            refs: [
              "2018:31",
              "2026:3.1d"
            ]
          },
          {
            t: "Agree the practical terms of the contract, such as fees, cancellation policy and session length.",
            p: 2,
            why: "A clear working agreement covering practical terms is part of building an appropriate relationship and gives Priya a record of what she can expect.",
            refs: [
              "2018:31",
              "2026:1.2b"
            ]
          }
        ],
        newInfo: null
      },
      {
        id: "c1sB",
        label: "Section B",
        type: "ig",
        stem: "Which areas would you like to explore with Priya to understand her difficulties?",
        options: [
          {
            t: "Ask what support she currently has around her, such as friends, family or her GP.",
            p: 1,
            why: "Knowing her existing support network helps you gauge isolation and identify who else might help if things get harder.",
            refs: [],
            reveal: "She says she has two close friends she sees occasionally but has not told them how bad things have got. She is registered with a GP but has not been in for over a year and feels awkward going \"just for feelings\"."
          },
          {
            t: "Ask her to rate her mood out of ten so you can track a numeric score across sessions.",
            p: -1,
            why: "A bare number adds little at this stage compared with an open description of her experience, and risks reducing a first conversation to box-ticking.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask how her mood and sleep problems are affecting her work and daily functioning.",
            p: 1,
            why: "Functional impact helps you judge severity alongside her own description and informs how urgently things need to be addressed.",
            refs: [],
            reveal: "She says she is still making deadlines but is exhausted, has cried at her desk twice, and has stopped replying to friends' messages for days at a time."
          },
          {
            t: "Ask her to describe a typical night and how her sleep has changed over recent months.",
            p: 2,
            why: "Sleep is a presenting complaint; a concrete description helps you understand severity and pattern rather than relying on a general label.",
            refs: [],
            reveal: "Priya says she is lying awake until 2 or 3am most nights, replaying arguments from the relationship, then struggling to get up for work. She has stopped her usual evening walk and often skips breakfast."
          },
          {
            t: "Ask her to talk you through her ex-partner's personality so you can assess whether the relationship was abusive.",
            p: -2,
            why: "This assumes a conclusion you have no basis for yet and steers the session toward diagnosing the relationship rather than understanding her current distress and risk.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask her to list every argument she had with her ex-partner in chronological order.",
            p: -1,
            why: "A detailed chronological account of the relationship is not necessary yet and would use most of the session without helping you understand her current mood, sleep or risk.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask her whether she thinks her low mood is a sign of a personality disorder.",
            p: -2,
            why: "Offering or inviting a diagnostic label this early is outside what a first-session conversation needs and could be unsettling and unhelpful.",
            refs: [
              "2018:2"
            ],
            reveal: null
          },
          {
            t: "Ask whether she has noticed any thoughts of not wanting to be here, or of harming herself.",
            p: 2,
            why: "Direct, plain questions about suicidal and self-harm thoughts are part of a proportionate first-session risk conversation and give her permission to be honest.",
            refs: [
              "2018:10",
              "2026:2.4c"
            ],
            reveal: "Priya pauses, then says that some nights she has thought \"it would be easier if I just didn't wake up\", though she has not thought about how she would do this. She looks relieved to have said it."
          }
        ],
        newInfo: "Priya says the thought of not waking up passes within a few minutes and she has never acted on it or made a plan. She says she feels calmer having said it out loud and is willing to keep talking about how she is coping."
      },
      {
        id: "c1sC",
        label: "Section C",
        type: "mdm",
        stem: "How do you respond to what Priya has told you about her sleep, mood and passing thoughts?",
        options: [
          {
            t: "Agree together what she will do if the thoughts become stronger or more frequent between now and your next session.",
            p: 1,
            why: "A simple collaborative safety plan gives her something concrete without treating a first disclosure as an emergency.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Tell her that what she has described means you will need to inform her GP after this session.",
            p: -2,
            why: "Passive, fleeting thoughts with no plan and no history do not on their own justify overriding her confidentiality; this is a disproportionate response that could damage trust before work has begun.",
            refs: [
              "2018:10",
              "2026:3.1a"
            ]
          },
          {
            t: "Tell her you are glad she trusts you enough to share this and that you will keep working with her on it.",
            p: 1,
            why: "Acknowledging her disclosure supportively helps sustain the relationship that makes ongoing honesty about risk possible.",
            refs: [
              "2018:12"
            ]
          },
          {
            t: "End the session early and advise her to go to A&E to be assessed as a precaution.",
            p: -2,
            why: "This is disproportionate to what she has described, takes the decision out of her hands, and is not indicated by passive ideation with no plan or intent.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Thank her for telling you and ask more about what those thoughts feel like and how often they occur.",
            p: 2,
            why: "Responding with openness and further gentle enquiry keeps her talking and gives you the detail needed to judge risk proportionately rather than reacting to a label.",
            refs: [
              "2018:26",
              "2026:1.1a"
            ]
          },
          {
            t: "Move the conversation on quickly to avoid dwelling on something that might upset her further.",
            p: -1,
            why: "Avoiding the topic leaves you without the detail you need to judge risk and may signal to Priya that this is not something you want to hear about.",
            refs: []
          },
          {
            t: "Suggest she should not be living alone given what she has told you.",
            p: -1,
            why: "This goes well beyond the information available, is not your decision to make for her, and risks feeling controlling rather than supportive.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Ask directly whether she has ever made a plan or attempt, and what has stopped her acting on the thoughts.",
            p: 2,
            why: "Asking about plans, means and protective factors is a proportionate way of assessing current risk without overreacting to a passing thought.",
            refs: [
              "2018:10",
              "2026:2.4c"
            ]
          }
        ],
        newInfo: "Priya agrees to a simple plan: she will contact a named friend or call 111 if the thoughts intensify, and you will check in on this at the start of each session. Sessions continue weekly. Six weeks later, Priya arrives looking more withdrawn than usual."
      },
      {
        id: "c1sD",
        label: "Section D",
        type: "mdm",
        stem: "Priya says the thoughts are stronger and more frequent, and that she has been keeping some sleeping tablets rather than taking them. How do you respond?",
        options: [
          {
            t: "Remind her of the plan you agreed and ask whether it still feels workable to her.",
            p: 1,
            why: "Revisiting the existing safety plan together, rather than discarding it, respects the work already done and checks whether it needs updating.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Ask her how many tablets she has kept, where they are, and whether she has thought about using them.",
            p: 2,
            why: "Establishing means, quantity and intent is the concrete detail that turns a general worry into an assessable, proportionate picture of current risk.",
            refs: [
              "2018:10",
              "2026:2.4c"
            ]
          },
          {
            t: "Explore with her what has changed in the last six weeks to make the thoughts stronger.",
            p: 2,
            why: "Understanding what has driven the escalation helps you and Priya address the actual triggers, not just the symptom, and keeps the work collaborative.",
            refs: [
              "2018:26",
              "2026:1.1a"
            ]
          },
          {
            t: "Reassure her that lots of people keep spare medication and this is probably nothing to worry about.",
            p: -1,
            why: "Minimising what she has disclosed shuts down further exploration and could stop her being honest about how serious things have become.",
            refs: []
          },
          {
            t: "Tell her you will need to call her GP today because she has told you about the tablets.",
            p: -2,
            why: "Contacting the GP before you have explored intent, quantity and her willingness to work on this with you overrides her wishes prematurely and is not yet proportionate.",
            refs: [
              "2018:10",
              "2026:3.1a"
            ]
          },
          {
            t: "Change the subject to her sleep hygiene routine so the session does not become too heavy.",
            p: -1,
            why: "Deflecting from a significant escalation in risk leaves it unexplored and could mean a genuine increase in danger goes unaddressed.",
            refs: []
          },
          {
            t: "Tell her firmly she must hand the tablets to family before the next session or you will stop seeing her.",
            p: -2,
            why: "Issuing an ultimatum removes her agency, is not proportionate to what you currently know, and risks ending the relationship that is helping her stay safe.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Name clearly that keeping the tablets increases the risk if the thoughts get stronger, and ask how she feels about that.",
            p: 1,
            why: "Being candid about the risk the tablets represent, without panic, keeps Priya informed and involved in thinking about her own safety.",
            refs: [
              "2018:12",
              "2026:1.1b"
            ]
          }
        ],
        newInfo: "Priya says she has around three weeks' worth of her prescribed sleeping tablets set aside \"just in case things get too much\", kept in a drawer at home. She has not decided to use them and says telling you feels like a relief, but she is frightened of what will happen if you tell anyone else."
      },
      {
        id: "c1sE",
        label: "Section E",
        type: "sdm",
        stem: "What is the most appropriate next step, given what Priya has told you about the tablets?",
        options: [
          {
            t: "Tell her you will contact her GP straight after this session, whether or not she agrees.",
            p: -2,
            why: "Overriding her confidentiality now, before exploring collaborative options and without an assessment of imminent intent, is disproportionate and could deter her from disclosing further.",
            refs: [
              "2018:10",
              "2026:3.1a"
            ]
          },
          {
            t: "Work with Priya now on reducing her access to the tablets, such as asking a friend to hold them.",
            p: 2,
            why: "Means restriction agreed with the client is a proportionate, collaborative response to a real increase in risk that does not require overriding her confidentiality at this point.",
            refs: [
              "2018:26",
              "2026:2.4c"
            ]
          },
          {
            t: "Reassure her that because she has no immediate plan, no further action is needed beyond continuing to talk in future sessions.",
            p: -2,
            why: "Treating a stockpile of medication as requiring no active response understates the risk and misses the chance to work with her now on reducing access to means.",
            refs: [
              "2018:9",
              "2026:2.4c"
            ]
          },
          {
            t: "Say nothing further about the tablets today, and only revisit it if Priya raises it again herself.",
            p: -2,
            why: "Leaving a disclosed stockpile of medication unaddressed defers something that cannot safely wait and is not a proportionate response to what she has just told you.",
            refs: [
              "2018:10"
            ]
          }
        ],
        newInfo: "Priya agrees, reluctantly, to ask her flatmate to hold most of the tablets, keeping only her regular prescribed dose accessible. She says she still does not want you contacting her GP and asks what you are going to write down about today's conversation."
      },
      {
        id: "c1sF",
        label: "Section F",
        type: "mdm",
        stem: "Priya asks what you are going to write down about today's session. How do you approach your records?",
        options: [
          {
            t: "Tell her you will leave the tablets and the risk conversation out of your notes entirely.",
            p: -2,
            why: "Omitting a significant risk disclosure and the safety plan from the record is not adequate or relevant record-keeping and would leave you and any future supervisor without the information needed to support her safely.",
            refs: [
              "2018:15",
              "2026:3.2c"
            ]
          },
          {
            t: "Store the notes securely in line with your data protection obligations and your practice's privacy notice.",
            p: 1,
            why: "Secure storage that complies with data protection law is a basic requirement for any records containing sensitive personal information.",
            refs: [
              "2018:15",
              "2026:3.1b"
            ]
          },
          {
            t: "Say you keep very detailed verbatim notes of everything discussed, including her exact words, in case they are ever needed as evidence.",
            p: -1,
            why: "Verbatim, exhaustive notes go beyond what is adequate and relevant and are not proportionate record-keeping for the purpose of the service.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          },
          {
            t: "Explain that these notes could be relevant if you ever needed to justify your decisions to a supervisor or in a complaint.",
            p: 1,
            why: "It is honest and useful for Priya to understand that records also serve accountability purposes, which is a genuine and foreseeable use of the information.",
            refs: [
              "2018:31",
              "2026:1.2b"
            ]
          },
          {
            t: "Tell her honestly that you will record the risk discussion factually, including the plan you agreed about the tablets.",
            p: 2,
            why: "Being open with her about what goes into the record respects her right to know how her information is used and keeps your notes and your relationship with her consistent.",
            refs: [
              "2018:55",
              "2026:3.1a"
            ]
          },
          {
            t: "Record what was disclosed and agreed factually and proportionately, without unnecessary interpretation or detail.",
            p: 2,
            why: "Records should be factual, adequate and relevant to the service being provided, which protects Priya's privacy while still documenting the risk decision made.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          },
          {
            t: "Suggest she write her own account of the session so you can attach it to your notes instead of writing your own.",
            p: -1,
            why: "This shifts your professional responsibility for record-keeping onto the client and is not a genuine substitute for your own factual, adequate record of the work.",
            refs: [
              "2018:15"
            ]
          },
          {
            t: "Tell her you do not keep any written records at all so there is nothing anyone could ever access.",
            p: -2,
            why: "Keeping no record of a significant risk disclosure and safety plan is not defensible practice and would undermine continuity of care and accountability.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          }
        ],
        newInfo: "Priya appears reassured by your explanation and says she trusts you to keep things sensible. She then asks directly: \"you're not going to tell my GP about any of this, are you?\""
      },
      {
        id: "c1sG",
        label: "Section G",
        type: "sdm",
        stem: "How do you answer Priya's question about whether you will tell her GP?",
        options: [
          {
            t: "Promise her firmly that you will never involve her GP under any circumstances, no matter what happens.",
            p: -2,
            why: "An absolute promise contradicts the limits of confidentiality you agreed at contracting and could leave you unable to act if her risk genuinely became urgent.",
            refs: [
              "2018:9",
              "2026:3.1d"
            ]
          },
          {
            t: "Tell her you will phone the GP today regardless of her wishes, since medication is involved.",
            p: -2,
            why: "The current picture is one of collaboratively managed, non-imminent risk with an agreed safety plan in place; unilaterally overriding her confidentiality now is disproportionate to what you actually know.",
            refs: [
              "2018:10",
              "2026:3.1a"
            ]
          },
          {
            t: "Say you would rather she contact her GP herself with your support, but would need to act if her safety became urgent.",
            p: 2,
            why: "This keeps Priya in control of sharing her own health information where risk is currently being managed collaboratively, while being transparent about the limits you agreed to at the outset.",
            refs: [
              "2018:10",
              "2026:3.1d"
            ]
          },
          {
            t: "Avoid giving her a clear answer today so you do not have to commit to a position either way.",
            p: -2,
            why: "Leaving Priya without clarity about confidentiality undermines the informed agreement you established at contracting and does not resolve the decision that needs making.",
            refs: [
              "2018:31",
              "2026:1.2b"
            ]
          }
        ],
        newInfo: null
      }
    ]
  },
  {
    id: "c2",
    title: "Six Sessions at School",
    setting: "School counselling service",
    contract: "Closed — six sessions",
    presenting: "Low mood and withdrawal from friends, noticed by her form tutor",
    themes: [
      "safeguarding-children",
      "three-way-agreement",
      "confidentiality",
      "information-sharing",
      "competence",
      "supervision",
      "equality",
      "accessibility"
    ],
    brief: "Jordan, 14, has been referred to the school counselling service by her form tutor, who noticed she has seemed withdrawn and tearful over the past month and has stopped sitting with her usual friends at lunch. The school offers a fixed six-session contract through an external counselling service that visits weekly. Jordan's mother has given general consent for her to access the service, in line with the school's standard arrangement. Jordan has not had counselling before. This is your first meeting with her, before any individual agreement has been made, and the three-way agreement between Jordan, the school and your service has not yet been talked through with her directly.",
    sections: [
      {
        id: "c2sA",
        label: "Section A",
        type: "mdm",
        stem: "What would be important to cover with Jordan in this first meeting?",
        options: [
          {
            t: "Tell Jordan that whatever she says to you is entirely private and will never be shared with anyone at school.",
            p: -2,
            why: "This is not true of a school counselling service with safeguarding duties, and promising absolute confidentiality sets up a agreement you cannot honour later.",
            refs: [
              "2018:55",
              "2026:3.1d"
            ]
          },
          {
            t: "Ask Jordan what she already understands about why she has been referred to you.",
            p: 1,
            why: "Starting from Jordan's own understanding helps you correct any misconceptions about the referral and keeps her involved in the process from the outset.",
            refs: [
              "2018:27",
              "2026:1.1a"
            ]
          },
          {
            t: "Ask Jordan to sign a written contract before discussing anything, so the paperwork is completed first.",
            p: -1,
            why: "Leading with paperwork before Jordan has had the terms explained and understood risks the agreement feeling procedural rather than genuinely informed.",
            refs: [
              "2018:31"
            ]
          },
          {
            t: "Ask Jordan for her friends' names so you can find out from them what has been going on.",
            p: -2,
            why: "Approaching Jordan's peers is outside what this session needs, oversteps her privacy, and is not a proportionate way of understanding her own experience.",
            refs: []
          },
          {
            t: "Explain in plain language what will and will not be shared with the school and her mother.",
            p: 2,
            why: "Jordan needs to understand the actual boundaries of the three-way agreement before she decides what to bring to sessions, not a vague reassurance of privacy.",
            refs: [
              "2018:31",
              "2026:3.1d"
            ]
          },
          {
            t: "Focus this first meeting entirely on rapport-building and leave the agreement for a later session.",
            p: -1,
            why: "Delaying the agreement means Jordan could disclose things before she understands the limits of confidentiality, undermining informed consent to the work.",
            refs: [
              "2018:31",
              "2026:3.1d"
            ]
          },
          {
            t: "Check that Jordan understands the counselling is time-limited to six sessions and ask how that feels to her.",
            p: 2,
            why: "A closed contract shapes what can realistically be worked on, and Jordan is entitled to know this and to react to it before you begin.",
            refs: [
              "2018:31",
              "2026:1.2a"
            ]
          },
          {
            t: "Tell her she can stop attending sessions at any point if she decides they are not for her.",
            p: 1,
            why: "Making clear that attendance is her choice, so far as the school context allows, respects her autonomy within a service she did not personally request.",
            refs: [
              "2018:27"
            ]
          }
        ],
        newInfo: "Jordan listens carefully and says she understands the six sessions and the idea that some things might need to be shared. She says she finds it hard to read long forms because of her dyslexia and asks if you can just talk her through things instead."
      },
      {
        id: "c2sB",
        label: "Section B",
        type: "ig",
        stem: "Which areas would you like to explore with Jordan to understand what has been happening?",
        options: [
          {
            t: "Ask what she used to enjoy doing with her friends and whether that has changed.",
            p: 1,
            why: "Comparing past and present routines helps you and Jordan see concretely what has been lost, rather than working only from the label of low mood.",
            refs: [],
            reveal: "Jordan says she used to walk to school with two friends most mornings but has been avoiding them because she feels like she has nothing to talk about anymore."
          },
          {
            t: "Ask her what has changed recently that might explain why she has been feeling low.",
            p: 2,
            why: "An open question about recent change invites Jordan to identify what matters to her rather than you guessing at causes.",
            refs: [],
            reveal: "Jordan says things at home have felt tense since her parents separated over the summer, and she has been spending more time alone in her room on her phone instead of seeing friends."
          },
          {
            t: "Ask how things are at home at the moment.",
            p: 2,
            why: "Given the withdrawal and low mood noticed at school, understanding her home situation is central to making sense of what she is going through.",
            refs: [
              "2018:27"
            ],
            reveal: "She says her dad moved out three months ago and her mum has been \"stressed all the time\" about money. Jordan says she tries not to add to the stress by staying in her room."
          },
          {
            t: "Ask her to describe her parents' relationship before the separation in detail.",
            p: -1,
            why: "A detailed history of the parents' relationship is not necessary to understand Jordan's current experience and risks the session becoming about the adults rather than her.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask her directly whether she thinks her mum or dad is to blame for the separation.",
            p: -2,
            why: "Inviting Jordan to allocate blame between her parents is not appropriate and could place her in a loyalty conflict that does not help her current distress.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask whether she has anyone at school or at home she feels she can talk to.",
            p: 1,
            why: "Identifying existing sources of support helps you understand how isolated Jordan currently feels and who else might be able to help.",
            refs: [],
            reveal: "She says she has not told her form tutor or her mum how she is really feeling, because she does not want to worry anyone further."
          },
          {
            t: "Move straight to setting goals for the six sessions before hearing more about her current situation.",
            p: -1,
            why: "Setting goals before understanding what is actually going on risks the sessions being based on an incomplete picture of what Jordan needs.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask her to guess what her form tutor said about her in the referral.",
            p: -2,
            why: "Speculating about what a third party said is not useful information and could make Jordan anxious or defensive rather than open with you.",
            refs: [],
            reveal: null
          }
        ],
        newInfo: "Over the next two sessions Jordan settles and begins talking more freely. In session three, she mentions in passing that when things get \"too much\" at home she sometimes scratches her arm with her fingernails until it stings, though she says she has never used anything sharp and it does not leave marks."
      },
      {
        id: "c2sC",
        label: "Section C",
        type: "mdm",
        stem: "How do you respond to what Jordan has told you about scratching herself when things feel too much?",
        options: [
          {
            t: "Tell Jordan you will need to inform the designated safeguarding lead about this straight after the session.",
            p: -2,
            why: "Superficial scratching with no marks and no disclosed intent to escalate does not clearly meet the threshold for an immediate safeguarding referral without further exploration.",
            refs: [
              "2018:10",
              "2026:2.4c"
            ]
          },
          {
            t: "Tell her this is a normal part of being a teenager and not something to worry about.",
            p: -1,
            why: "Minimising self-harm, even mild and infrequent, risks Jordan feeling dismissed and could stop her being honest about it if it gets worse.",
            refs: []
          },
          {
            t: "Say nothing about it directly and hope it resolves as she settles into the sessions.",
            p: -1,
            why: "Leaving a self-harm disclosure unaddressed misses the chance to understand it properly and to judge whether it is moving towards something more serious.",
            refs: [
              "2018:10"
            ]
          },
          {
            t: "Reflect back that it sounds like a way of coping with feelings that are hard to put into words.",
            p: 1,
            why: "Naming the function of the behaviour without alarm keeps Jordan talking and shows her the disclosure has been heard rather than judged.",
            refs: [
              "2018:12"
            ]
          },
          {
            t: "Ask her to promise you she will never do it again before the session ends.",
            p: -2,
            why: "Extracting a promise is not a genuine safety measure, is unlikely to be kept, and can shut down honest conversation about what is actually happening.",
            refs: []
          },
          {
            t: "Ask her more about when this happens, how often, and what she does instead when she manages not to.",
            p: 2,
            why: "Understanding frequency, triggers and existing coping helps you judge how serious this is and work with Jordan on it, rather than reacting to the word alone.",
            refs: [
              "2018:27",
              "2026:2.4c"
            ]
          },
          {
            t: "Note this clearly in your records and plan to discuss it in supervision before your next session.",
            p: 1,
            why: "This sits close to but not clearly over the safeguarding threshold, so bringing it to supervision promptly supports a considered rather than solo decision.",
            refs: [
              "2018:64",
              "2026:4.3d"
            ]
          },
          {
            t: "Ask her whether the urge to scratch ever feels like it could turn into something that would injure her more seriously.",
            p: 2,
            why: "Checking for escalation or intent to cause more serious harm is a proportionate way of assessing whether this has crossed into a safeguarding concern.",
            refs: [
              "2018:10",
              "2026:2.4c"
            ]
          }
        ],
        newInfo: "Jordan says the scratching happens maybe once or twice a week, mostly at night, and she has never thought about doing anything that would leave a lasting injury. She asks you not to tell her mum, and seems calmer after talking about it."
      },
      {
        id: "c2sD",
        label: "Section D",
        type: "mdm",
        stem: "The Head of Year stops you in the corridor and asks you to tell her exactly what Jordan has been saying in sessions. How do you respond?",
        options: [
          {
            t: "Suggest arranging a proper meeting with the designated safeguarding lead if there is a specific worry to discuss.",
            p: 1,
            why: "Redirecting a corridor request into the proper safeguarding channel keeps any information-sharing decision structured and accountable rather than informal.",
            refs: [
              "2018:55",
              "2026:2.4b"
            ]
          },
          {
            t: "Tell her everything Jordan has said so far, since she is a senior member of staff and is asking directly.",
            p: -2,
            why: "Seniority alone is not a basis for disclosure; handing over session content without a safeguarding justification breaches the confidentiality agreed with Jordan.",
            refs: [
              "2018:55",
              "2026:3.1a"
            ]
          },
          {
            t: "Refuse to say anything at all, including whether Jordan is attending sessions.",
            p: -1,
            why: "Basic operational facts such as attendance are usually within what a three-way agreement allows the school to know; a blanket refusal is more absolute than the agreement requires.",
            refs: [
              "2018:31"
            ]
          },
          {
            t: "Explain that session content is confidential under the three-way agreement, but offer to discuss general progress.",
            p: 2,
            why: "This holds the boundary agreed with Jordan while still being collaborative with the school within what the agreement actually allows.",
            refs: [
              "2018:31",
              "2026:3.1a"
            ]
          },
          {
            t: "Promise to email her a full written summary of the sessions by the end of the day.",
            p: -1,
            why: "Committing to hand over a session summary without first checking what the agreement allows or consulting Jordan or your supervisor gives away control of confidential information too quickly.",
            refs: [
              "2018:55",
              "2026:3.1a"
            ]
          },
          {
            t: "Ask why she is asking now, so you can understand whether there is a specific concern prompting the request.",
            p: 2,
            why: "Finding out what is driving the request helps you judge whether there is new information relevant to safeguarding that changes the picture.",
            refs: [
              "2018:9",
              "2026:1.4b"
            ]
          },
          {
            t: "Report the Head of Year to your professional body for asking the question.",
            p: -2,
            why: "A single query from a colleague trying to support a pupil does not warrant a formal complaint and is a disproportionate response to a reasonable, if misplaced, request.",
            refs: []
          },
          {
            t: "Let her know you will raise this in your next supervision session before deciding how to respond.",
            p: 1,
            why: "Taking an unplanned request for confidential information to supervision supports a considered decision rather than an on-the-spot concession.",
            refs: [
              "2018:64",
              "2026:4.3d"
            ]
          }
        ],
        newInfo: "The Head of Year explains she is asking because Jordan's grades have dropped and another pupil mentioned Jordan has seemed \"really down\" lately. She has no other specific information and agrees to wait for a proper conversation with the safeguarding lead if needed."
      },
      {
        id: "c2sE",
        label: "Section E",
        type: "sdm",
        stem: "What is the most appropriate action now, given what Jordan has disclosed and the Head of Year's approach?",
        options: [
          {
            t: "Make a full written safeguarding referral naming the self-harm in detail, without discussing it with Jordan first.",
            p: -2,
            why: "A formal referral before discussing it with Jordan or gauging escalation is more than this borderline disclosure currently warrants and could damage the working relationship unnecessarily.",
            refs: [
              "2018:10",
              "2026:2.4c"
            ]
          },
          {
            t: "Decide the disclosure is minor and take no action or record beyond your own session notes.",
            p: -2,
            why: "Self-harm disclosed by a 14-year-old sits close to the safeguarding threshold and taking no wider action at all risks missing a genuine and growing concern.",
            refs: [
              "2018:9",
              "2026:2.4c"
            ]
          },
          {
            t: "Wait until the six sessions end before deciding whether anything needs to be shared with the school.",
            p: -2,
            why: "Deferring the decision for weeks leaves a live safeguarding question unaddressed for longer than is proportionate or safe.",
            refs: [
              "2018:10"
            ]
          },
          {
            t: "Speak informally with the designated safeguarding lead about the general picture, without naming specifics Jordan asked you to keep private.",
            p: 2,
            why: "This keeps the safeguarding lead sighted on a borderline situation while respecting as much of Jordan's confidentiality as possible, in line with a proportionate response.",
            refs: [
              "2018:10",
              "2026:2.4b"
            ]
          }
        ],
        newInfo: "The safeguarding lead thanks you for flagging it, agrees the current information does not meet the threshold for a formal referral, and asks you to let her know promptly if anything changes. Jordan is not told about this conversation yet."
      },
      {
        id: "c2sF",
        label: "Section F",
        type: "mdm",
        stem: "Jordan asks whether she gets a say in what happens next and mentions again that written information is hard for her. How do you proceed?",
        options: [
          {
            t: "Tell her that as a minor she has no say and decisions will be made for her by the adults involved.",
            p: -2,
            why: "This overstates adult authority and ignores the framework's expectation that a young person's capacity to be involved in decisions is properly considered, not assumed away by age alone.",
            refs: [
              "2018:27"
            ]
          },
          {
            t: "Tell her you cannot discuss the safeguarding conversation with her at all, now or later.",
            p: -2,
            why: "A blanket refusal to ever discuss it goes beyond what confidentiality to other adults requires and leaves Jordan uninformed about a process concerning her.",
            refs: [
              "2018:31"
            ]
          },
          {
            t: "Talk her through the options verbally rather than relying on a written leaflet, given what she told you about her dyslexia.",
            p: 2,
            why: "Adjusting how you communicate so Jordan can actually understand her options is a reasonable adjustment that supports her genuine involvement in decisions about her.",
            refs: [
              "2018:22",
              "2026:1.1d"
            ]
          },
          {
            t: "Explain to her what has been discussed with the safeguarding lead so far, in terms she can follow.",
            p: 1,
            why: "Keeping Jordan informed about decisions that affect her, in accessible language, respects her position in the three-way agreement.",
            refs: [
              "2018:31",
              "2026:1.1d"
            ]
          },
          {
            t: "Give her the standard written leaflet about the service and move on without checking she can read it.",
            p: -1,
            why: "Handing over written material without checking accessibility, when she has already told you it is hard for her, fails to make the adjustment she has asked for.",
            refs: [
              "2018:22",
              "2026:1.1d"
            ]
          },
          {
            t: "Judge that Jordan has the maturity and understanding to be involved in decisions about her own care at this stage.",
            p: 2,
            why: "Assessing her actual understanding, rather than assuming a fixed rule by age, reflects a Gillick-style approach to a young person's evolving capacity to be involved in decisions.",
            refs: [
              "2018:27"
            ]
          },
          {
            t: "Suggest she ask her mother to explain things to her instead of doing so yourself.",
            p: -1,
            why: "Passing your explanation to a parent, rather than communicating directly and accessibly yourself, sidesteps your responsibility to Jordan as your client.",
            refs: [
              "2018:22"
            ]
          },
          {
            t: "Ask her what would make it easier for her to take in information during your remaining sessions.",
            p: 1,
            why: "Asking Jordan directly about what helps her rather than guessing is a practical way of making a reasonable adjustment that actually fits her needs.",
            refs: [
              "2018:22",
              "2026:1.1d"
            ]
          }
        ],
        newInfo: "Jordan says talking things through out loud helps a lot and thanks you for checking. In your fifth session, with one remaining, she becomes tearful and tells you she scratched her arm hard enough to draw blood for the first time last night, after a serious argument with her mother, and says she does not feel safe at home right now."
      },
      {
        id: "c2sG",
        label: "Section G",
        type: "sdm",
        stem: "Jordan has drawn blood self-harming and says she does not feel safe at home. What do you do now?",
        options: [
          {
            t: "Keep this within the sessions as before, since Jordan previously asked you not to tell her mother.",
            p: -2,
            why: "Continuing to hold this in confidence now fails to act when a genuine safeguarding threshold has been crossed and leaves Jordan without the wider support she needs.",
            refs: [
              "2018:9",
              "2026:2.4c"
            ]
          },
          {
            t: "Tell Jordan you need to inform the safeguarding lead today because of what she has just disclosed, and explain what happens next.",
            p: 2,
            why: "An escalation in self-harm together with a direct statement of feeling unsafe at home now clearly meets the safeguarding threshold, and telling Jordan what is happening keeps her informed rather than blindsided.",
            refs: [
              "2018:10",
              "2026:3.3a"
            ]
          },
          {
            t: "Wait until the sixth and final session to decide whether to say anything to the school.",
            p: -2,
            why: "An escalation involving drawn blood and feeling unsafe at home cannot safely wait until the contract ends; this defers action that is needed now.",
            refs: [
              "2018:10"
            ]
          },
          {
            t: "Contact Jordan's mother directly yourself instead of going through the school's safeguarding process.",
            p: -2,
            why: "Bypassing the designated safeguarding lead and the school's agreed process, especially when the home relationship itself may be part of the concern, is not the proportionate or appropriate route.",
            refs: [
              "2018:31",
              "2026:2.4a"
            ]
          }
        ],
        newInfo: null
      }
    ]
  },
  {
    id: "c3",
    title: "EAP referral and endings",
    setting: "Employee assistance programme (EAP)",
    contract: "Closed — six sessions",
    presenting: "Work-related stress and anxiety following a grievance at work",
    themes: [
      "eap",
      "three-way-agreement",
      "contracting",
      "boundaries",
      "information-sharing",
      "endings",
      "complaints",
      "continuity"
    ],
    brief: "Dean, 41, has been referred for six sessions through his employer's EAP after raising a grievance against his line manager. The referral form names work-related stress and anxiety as the presenting issue. The EAP provider's standard terms set out a three-way agreement between Dean, the practitioner and the EAP: sessions are confidential, but the provider may be told whether Dean has attended and, at the end of the work, given a brief closing summary of whether further support is recommended. Dean says he agreed to this when he signed up but has not really read it. He is anxious about his manager finding out what he says in the room, and unsure whether the counsellor reports back to his employer directly.",
    sections: [
      {
        id: "c3sA",
        label: "Section A",
        type: "mdm",
        stem: "What would be important to cover with Dean in the first session?",
        options: [
          {
            t: "Go through what the three-way agreement with the EAP actually permits to be shared and with whom.",
            p: 2,
            why: "The EAP contract is a three-way agreement and Dean needs to understand its actual limits before he can consent meaningfully to therapy.",
            refs: [
              "2018:31c",
              "2026:1.2b"
            ]
          },
          {
            t: "Check Dean's understanding of confidentiality and clarify that session content itself is not passed to his employer.",
            p: 2,
            why: "Dean is specifically anxious about his manager finding out what he says; naming this limit directly builds trust and informed consent.",
            refs: [
              "2018:55d",
              "2026:3.1d"
            ]
          },
          {
            t: "Confirm the six-session limit now so Dean can plan how to use the time given his grievance is ongoing.",
            p: 1,
            why: "Fixed limits on the number of sessions should be made explicit as part of contracting, especially where an unresolved workplace issue may need more time.",
            refs: [
              "2018:38",
              "2026:4.5a"
            ]
          },
          {
            t: "Ask Dean what he wants to get from the six sessions given the grievance is still live.",
            p: 1,
            why: "Establishing the client's own goals early is basic good contracting and helps focus a short piece of work.",
            refs: [
              "2018:31a"
            ]
          },
          {
            t: "Tell Dean the sessions are entirely private and nothing about them will ever reach the EAP.",
            p: -2,
            why: "This overstates confidentiality: the agreed EAP contract usually permits attendance confirmation and an end-of-work summary, so this promise is inaccurate and could backfire.",
            refs: [
              "2018:31c",
              "2026:3.1d"
            ]
          },
          {
            t: "Suggest Dean withdraw his grievance so the sessions can focus purely on his anxiety.",
            p: -1,
            why: "This steers Dean toward a specific workplace decision that is his to make and outside the counsellor's role or competence.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Spend the session mainly gathering a detailed employment history and disciplinary timeline for the file.",
            p: -1,
            why: "This is premature record-building rather than establishing the therapeutic relationship and contract Dean needs in session one.",
            refs: [
              "2018:15"
            ]
          },
          {
            t: "Contact the EAP provider immediately to ask them to clarify their reporting terms before continuing.",
            p: -1,
            why: "The practitioner should already know their own commissioning contract; delaying the session to query it undermines the client's first meeting unnecessarily.",
            refs: [
              "2018:31f"
            ]
          },
          {
            t: "Move straight into a structured anxiety intervention without discussing the referral context.",
            p: -1,
            why: "Skipping contracting to get to technique misses the specific tension Dean has raised about trust and disclosure.",
            refs: [
              "2018:30"
            ]
          }
        ],
        newInfo: "Dean confirms he understands the three-way agreement once it is explained, and says he feels reassured that his manager will not see what he discusses. He asks whether the EAP will be told anything at all before the six sessions end."
      },
      {
        id: "c3sB",
        label: "Section B",
        type: "ig",
        stem: "Which areas would you want to explore further with Dean about his situation?",
        options: [
          {
            t: "Ask Dean what stage his grievance process has reached and what outcome he is hoping for.",
            p: 2,
            why: "Understanding the grievance timeline helps gauge how much this external process is driving Dean's distress and what six sessions can realistically address.",
            refs: [
              "2018:51"
            ],
            reveal: "Dean says the grievance was submitted five weeks ago and HR have opened an investigation but given no timeframe. He wants to be moved to a different team, not to leave the organisation, but feels increasingly unable to concentrate at work."
          },
          {
            t: "Ask how Dean is currently managing at work day to day.",
            p: 2,
            why: "Day-to-day functioning at work is directly relevant to the presenting issue and to any later question about fitness to work.",
            refs: [
              "2018:51"
            ],
            reveal: "Dean says he is making mistakes he never used to make, has taken two days off sick, and dreads seeing his manager in the corridor. He has not yet told his GP about this."
          },
          {
            t: "Ask whether Dean has told anyone else at work about starting counselling.",
            p: 1,
            why: "Knowing who else is aware shapes how carefully information needs to be handled and whether Dean feels exposed.",
            refs: [
              "2018:55b"
            ],
            reveal: "Dean has told no one except HR, who arranged the referral. He specifically does not want his line manager to know he is attending."
          },
          {
            t: "Ask Dean what support, if any, he already has outside of work.",
            p: 1,
            why: "Existing support such as family, friends or a GP affects risk and what six sessions need to focus on.",
            refs: [
              "2018:51"
            ],
            reveal: "Dean lives with his partner, who knows about the grievance but not about the counselling. He has no other current source of support and has not seen his GP in over a year."
          },
          {
            t: "Ask Dean to describe his manager's personality in detail.",
            p: -2,
            why: "This invites a one-sided character assessment of a third party that is not the counsellor's business to gather and does not serve Dean's therapeutic goals.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask Dean exactly what he wrote in his formal grievance letter, word for word.",
            p: -2,
            why: "This treats the session as an investigation into the grievance document rather than exploring Dean's own experience and distress.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask Dean whether he thinks HR are handling the grievance fairly.",
            p: -1,
            why: "This risks positioning the counsellor as an ally in Dean's dispute with his employer rather than staying focused on his wellbeing.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask Dean for his manager's job title and full contact details.",
            p: -1,
            why: "There is no current need for this information and gathering it edges toward involvement in the workplace process rather than therapy.",
            refs: [],
            reveal: null
          }
        ],
        newInfo: "Dean discloses he has not slept properly in three weeks and has started avoiding checking his work email at home. He says the uncertainty of the investigation is the hardest part."
      },
      {
        id: "c3sC",
        label: "Section C",
        type: "mdm",
        stem: "The EAP's HR contact emails asking you to confirm whether Dean has been attending his sessions. How do you respond?",
        options: [
          {
            t: "Confirm attendance only, in line with what was agreed in the three-way contract and explained to Dean.",
            p: 2,
            why: "Confirming attendance is typically within the scope of an EAP three-way agreement and was already explained to Dean, so this stays within agreed limits.",
            refs: [
              "2018:55c",
              "2026:3.1a"
            ]
          },
          {
            t: "Tell Dean that HR have asked for confirmation of attendance before you reply to them.",
            p: 2,
            why: "Being transparent with Dean about contact from the commissioner respects his role in decisions about his own information.",
            refs: [
              "2018:44",
              "2026:1.1b"
            ]
          },
          {
            t: "Check the wording of the original EAP contract before replying to make sure attendance confirmation is actually covered.",
            p: 1,
            why: "Verifying the specific terms rather than assuming protects against sharing more, or less, than was agreed.",
            refs: [
              "2018:31c"
            ]
          },
          {
            t: "Reply briefly, giving only the fact requested and nothing about content or progress.",
            p: 1,
            why: "Limiting the reply to the specific fact asked for keeps disclosure proportionate to what was agreed.",
            refs: [
              "2018:55f",
              "2026:3.1a"
            ]
          },
          {
            t: "Refuse to reply to HR at all and do not acknowledge the email.",
            p: -1,
            why: "Blanket refusal to engage with a commissioner ignores that attendance confirmation is normally a legitimate part of the agreed EAP contract, and is not itself a breach of confidentiality.",
            refs: [
              "2018:31f"
            ]
          },
          {
            t: "Tell HR that Dean has attended and also summarise what he has been discussing in sessions.",
            p: -2,
            why: "This discloses session content beyond what the three-way agreement permits and without Dean's specific consent for that extra detail.",
            refs: [
              "2018:55f",
              "2026:3.1a"
            ]
          },
          {
            t: "Forward Dean's case notes to HR so they have full context for their records.",
            p: -1,
            why: "Sending clinical notes to the commissioning organisation goes far beyond any typical EAP agreement and breaches confidentiality.",
            refs: [
              "2018:55a",
              "2026:3.2c"
            ]
          },
          {
            t: "Ask HR to put their request in writing and then ignore it until the six sessions finish.",
            p: -1,
            why: "Delaying a straightforward, permitted response creates unnecessary friction with the commissioner over something the contract already covers.",
            refs: [
              "2018:56"
            ]
          },
          {
            t: "Tell HR you cannot confirm anything at all, including whether Dean is even a client.",
            p: -1,
            why: "This overcorrects: confirming attendance is usually within the three-way agreement, so declining even that undermines a legitimate, agreed channel of information.",
            refs: [
              "2018:31c"
            ]
          }
        ],
        newInfo: "You confirm attendance only, as agreed. Two weeks later the same HR contact emails again, this time asking for your professional opinion on whether Dean is fit to return to full duties."
      },
      {
        id: "c3sD",
        label: "Section D",
        type: "sdm",
        stem: "How do you respond to HR's request for an opinion on Dean's fitness to work?",
        options: [
          {
            t: "Explain that fitness-to-work opinions are outside what the counselling contract covers and outside your role and competence to provide.",
            p: 2,
            why: "Fitness-to-work assessment is a distinct occupational health function; giving such an opinion would exceed both the agreed contract and clinical competence.",
            refs: [
              "2018:31f",
              "2026:4.1a"
            ]
          },
          {
            t: "Give HR your honest clinical impression of how Dean seems to be coping, based on the sessions.",
            p: -2,
            why: "This discloses assessment of the client beyond the agreed attendance-only terms and without Dean's informed consent to that specific disclosure.",
            refs: [
              "2018:55f",
              "2026:3.1a"
            ]
          },
          {
            t: "Suggest to HR that Dean is not fit for full duties without checking this with Dean first.",
            p: -2,
            why: "Making a determination about Dean's capacity and passing it to his employer without his knowledge or consent overrides his autonomy and the confidentiality basis of the work.",
            refs: [
              "2018:26",
              "2026:1.1a"
            ]
          },
          {
            t: "Ignore the request and say nothing back to HR at all.",
            p: -2,
            why: "Leaving a commissioner's request unanswered is unhelpful and avoids the more useful step of clarifying the boundaries of the contract to them directly.",
            refs: [
              "2018:56"
            ]
          }
        ],
        newInfo: "You explain to HR that fitness-to-work opinions sit outside the counselling contract and suggest they refer to occupational health if needed. You raise this with Dean, who is relieved but worried about what happens once his six sessions run out, since the grievance is still unresolved."
      },
      {
        id: "c3sE",
        label: "Section E",
        type: "mdm",
        stem: "Session five arrives. Dean is still struggling and the grievance outcome has not yet been decided. What would you do?",
        options: [
          {
            t: "Discuss openly with Dean that only one session remains and explore what he needs as the ending approaches.",
            p: 2,
            why: "Being sensitive to the client's expectations as an ending approaches, especially an imposed one, is part of managing endings well.",
            refs: [
              "2018:39",
              "2026:4.5c"
            ]
          },
          {
            t: "Talk with Dean about what other sources of support might be available once the EAP sessions end.",
            p: 2,
            why: "Where a closed contract ends while difficulties continue, discussing alternative routes such as the GP or longer-term counselling supports continuity of care.",
            refs: [
              "2018:41",
              "2026:4.5d"
            ]
          },
          {
            t: "Raise in supervision how to manage the ending well given the unresolved grievance and Dean's ongoing distress.",
            p: 1,
            why: "Using supervision to think through a difficult ending is good practice and supports a considered response rather than an improvised one.",
            refs: [
              "2018:60"
            ]
          },
          {
            t: "Check with Dean whether he wants any information passed to the EAP about needing further support.",
            p: 1,
            why: "The end-of-work summary is part of the agreed three-way contract, and checking what Dean wants said keeps this collaborative.",
            refs: [
              "2018:31c",
              "2026:1.2b"
            ]
          },
          {
            t: "Tell Dean you will contact the EAP yourself to demand more sessions on his behalf.",
            p: -1,
            why: "This takes the decision out of Dean's hands and assumes an outcome the counsellor cannot guarantee, rather than working with him on his options.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Avoid mentioning the approaching ending so as not to add to Dean's stress.",
            p: -2,
            why: "Avoiding the topic of an approaching ending leaves Dean unprepared and denies him the chance to plan, which the framework specifically asks practitioners to guard against.",
            refs: [
              "2018:39",
              "2026:4.5c"
            ]
          },
          {
            t: "Extend the sessions informally without telling the EAP, since Dean clearly needs more support.",
            p: -1,
            why: "Quietly exceeding the commissioned number of sessions breaches the contract with the EAP and creates an unclear, unaccountable arrangement.",
            refs: [
              "2018:31f"
            ]
          },
          {
            t: "Tell Dean that six sessions should have been enough and encourage him to manage the rest alone.",
            p: -1,
            why: "This dismisses Dean's continuing distress rather than exploring what support he genuinely needs next.",
            refs: [
              "2018:51"
            ]
          },
          {
            t: "Wait until the final session to mention that the work is ending.",
            p: -1,
            why: "Leaving this until the last possible moment does not give Dean meaningful time to prepare for the ending or explore next steps.",
            refs: [
              "2018:39"
            ]
          }
        ],
        newInfo: "Dean says he would like the EAP told that he may benefit from further support. In the final session, he mentions he is unhappy that no one warned him at the outset that six sessions might not be enough, and says he is thinking of raising this with the EAP provider."
      },
      {
        id: "c3sF",
        label: "Section F",
        type: "mdm",
        stem: "Dean says he is considering making a complaint that he was not properly warned the six sessions might be insufficient. How do you respond?",
        options: [
          {
            t: "Acknowledge Dean's concern directly and ask him to say more about what he feels went wrong.",
            p: 2,
            why: "Taking a client's concern seriously and exploring it at the earliest opportunity is the appropriate first response to a potential complaint.",
            refs: [
              "2018:49",
              "2026:1.1a"
            ]
          },
          {
            t: "Check your own records of what was discussed about the session limit in the first session.",
            p: 2,
            why: "Reviewing what was actually recorded and agreed at contracting is necessary before responding to a concern about what was or was not explained.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          },
          {
            t: "Tell Dean about the EAP provider's and BACP's complaints processes so he knows his options.",
            p: 1,
            why: "Clients should be informed of applicable complaints routes when a concern is raised.",
            refs: [
              "2018:49"
            ]
          },
          {
            t: "Take this to supervision to reflect on the ending and whether anything could have been handled differently.",
            p: 1,
            why: "Reflecting in supervision on a client's dissatisfaction supports honest, accountable practice.",
            refs: [
              "2018:53",
              "2026:4.3d"
            ]
          },
          {
            t: "Tell Dean he signed the EAP terms so there is nothing more to discuss.",
            p: -2,
            why: "Dismissing a client's concern by pointing to paperwork rather than engaging with it fails the basic duty to take complaints seriously.",
            refs: [
              "2018:49"
            ]
          },
          {
            t: "Offer Dean a refund or free extra sessions immediately to head off a complaint.",
            p: -1,
            why: "Making an unplanned offer under pressure, without reflection or clarity about what actually went wrong, is a premature fix rather than a considered response.",
            refs: [
              "2018:52"
            ]
          },
          {
            t: "Contact the EAP provider straight away to warn them Dean might complain.",
            p: -1,
            why: "Raising this with the commissioner before talking it through with Dean, or without his knowledge, bypasses him and risks appearing defensive rather than accountable.",
            refs: [
              "2018:44"
            ]
          },
          {
            t: "Suggest Dean is being unreasonable given how much support he received in six sessions.",
            p: -1,
            why: "Minimising or arguing against a client's expressed concern is unlikely to resolve it and risks further damaging trust.",
            refs: [
              "2018:49"
            ]
          },
          {
            t: "Say nothing further and let the sessions end without addressing what Dean has raised.",
            p: -1,
            why: "Leaving a raised concern unaddressed misses the chance to resolve it early and respectfully.",
            refs: [
              "2018:49"
            ]
          }
        ],
        newInfo: "After talking it through, Dean says he mainly wants it noted that the six-session limit should be explained more clearly to future clients, and he is not planning to take it further formally. He asks what will now happen with the information passed to the EAP."
      },
      {
        id: "c3sG",
        label: "Section G",
        type: "sdm",
        stem: "What is the most appropriate way to close this piece of work with the EAP and with Dean?",
        options: [
          {
            t: "Send the EAP only the agreed summary that Dean may benefit from further support, and confirm with Dean what was sent.",
            p: 2,
            why: "This matches exactly what was agreed in the three-way contract and keeps Dean informed of what has actually been disclosed, closing the work transparently.",
            refs: [
              "2018:31d",
              "2026:3.1a"
            ]
          },
          {
            t: "Send the EAP a full account of the six sessions so they understand exactly what was discussed.",
            p: -2,
            why: "A full account goes well beyond the agreed end-of-work summary and breaches the confidentiality basis of the three-way agreement.",
            refs: [
              "2018:55f",
              "2026:3.1a"
            ]
          },
          {
            t: "Send nothing to the EAP at all, since the sessions are now finished.",
            p: -2,
            why: "This withholds the agreed end-of-work information Dean consented to, which the EAP is entitled to receive under the three-way contract.",
            refs: [
              "2018:31d"
            ]
          },
          {
            t: "Tell Dean the work is simply over and no further contact with the EAP is needed.",
            p: -2,
            why: "This ignores the agreed closing summary and leaves Dean without the continuity step of the EAP being told he may need further support.",
            refs: [
              "2018:31d",
              "2026:4.5d"
            ]
          }
        ],
        newInfo: null
      }
    ]
  },
  {
    id: "c4",
    title: "Cross-border online therapy",
    setting: "Online private practice",
    contract: "Open-ended, weekly",
    presenting: "Low mood and adjustment difficulties following a relationship breakdown",
    themes: [
      "remote-working",
      "cross-border",
      "data-protection",
      "records",
      "digital-tools",
      "confidentiality",
      "competence",
      "insurance"
    ],
    brief: "Amara, 34, has been having weekly video sessions with a private practitioner in the UK for four months, working on low mood after a relationship breakdown. She tells the practitioner she has accepted a job offer and will relocate to a country in continental Europe within six weeks, but would like to continue sessions online afterwards because the work feels unfinished. The practitioner has never worked with a client based outside the UK before. The practitioner uses secure video software and keeps notes on a laptop.",
    sections: [
      {
        id: "c4sA",
        label: "Section A",
        type: "mdm",
        stem: "What would be important to think through before agreeing to continue seeing Amara once she has relocated?",
        options: [
          {
            t: "Check whether your professional indemnity insurance covers work with a client based in her new country.",
            p: 2,
            why: "Insurance cover for cross-border work needs to extend to all the countries in which the client is based, and this cannot be assumed.",
            refs: [
              "2018:19",
              "2026:4.2a"
            ]
          },
          {
            t: "Consider whether you have the competence and knowledge to work responsibly across this particular border.",
            p: 2,
            why: "Continuing to work with Amara abroad requires confidence that you can meet legal and professional obligations relevant to her new location, not just your own.",
            refs: [
              "2018:2a",
              "2026:4.1c"
            ]
          },
          {
            t: "Discuss with Amara that legal and regulatory duties, such as safeguarding reporting, may differ once she is abroad and that you will need to check what applies.",
            p: 1,
            why: "Legal obligations can vary by jurisdiction, and being upfront that this needs checking, rather than assuming UK rules simply travel, is honest and realistic.",
            refs: [
              "2018:46",
              "2026:3.3b"
            ]
          },
          {
            t: "Raise this in supervision to think through whether continuing is appropriate before committing to it.",
            p: 1,
            why: "A new and unfamiliar situation like cross-border work is exactly the kind of decision that benefits from supervision before being agreed.",
            refs: [
              "2018:60",
              "2026:4.3d"
            ]
          },
          {
            t: "Agree to continue straight away since online sessions look the same wherever the client is sitting.",
            p: -2,
            why: "This assumes cross-border work carries no extra obligations, when insurance, competence and legal duties can all change once a client is in another country.",
            refs: [
              "2018:19",
              "2026:4.2a"
            ]
          },
          {
            t: "Tell Amara you will simply stop working together the day she leaves the UK, without exploring alternatives.",
            p: -1,
            why: "Ending abruptly without exploring whether continued or alternative support is possible does not manage the ending in a way that minimises harm to the client.",
            refs: [
              "2018:41",
              "2026:4.5d"
            ]
          },
          {
            t: "Assume UK data protection law will continue to apply in exactly the same way once Amara is abroad.",
            p: -1,
            why: "Data protection obligations can depend on where records are stored and where the client is located, so this cannot simply be assumed without checking.",
            refs: [
              "2026:3.2b"
            ]
          },
          {
            t: "Tell Amara this is a legal grey area so you would rather not discuss it further.",
            p: -1,
            why: "Refusing to engage with the question at all avoids the practitioner's responsibility to think it through, even though some aspects genuinely are jurisdiction-dependent.",
            refs: [
              "2018:46"
            ]
          },
          {
            t: "Decide alone, without telling Amara, whether to continue and only inform her once you have decided.",
            p: -1,
            why: "This is a decision that affects Amara directly and should be worked through with her, not settled unilaterally before she is involved.",
            refs: [
              "2026:1.4a"
            ]
          }
        ],
        newInfo: "Amara says she is moving to a country within the EU for a two-year work contract and would prefer to keep the same practitioner if at all possible, but says she would understand if this were not workable."
      },
      {
        id: "c4sB",
        label: "Section B",
        type: "ig",
        stem: "Which areas would you want to explore before deciding how to proceed with Amara?",
        options: [
          {
            t: "Ask Amara exactly which country and city she is moving to and from when.",
            p: 2,
            why: "Knowing the specific destination and timing is essential to checking insurance, legal obligations and practical continuity before deciding anything.",
            refs: [
              "2026:4.1c"
            ],
            reveal: "Amara confirms she is moving to Berlin in six weeks for a fixed two-year contract, with the possibility of returning to the UK afterwards. She will have local health insurance through her new employer but no local mental health support arranged."
          },
          {
            t: "Ask Amara whether she has, or would be willing to arrange, any local support in her new country as a safety net.",
            p: 2,
            why: "Given the practitioner cannot always guarantee continuity across borders, exploring local backup options is a reasonable safeguard for Amara's wellbeing.",
            refs: [
              "2018:41"
            ],
            reveal: "Amara says she has not looked into this but would be willing to find a local GP registration once she arrives, in case of any emergency or need for in-person support."
          },
          {
            t: "Ask Amara what she understands about how her data and notes are currently stored and protected.",
            p: 1,
            why: "Amara's own understanding of data handling is relevant background before any change in her circumstances that could affect where and how her data is processed.",
            refs: [
              "2026:3.1c"
            ],
            reveal: "Amara says she has never really thought about it and assumed her sessions were simply private between the two of you, with notes kept by you."
          },
          {
            t: "Ask Amara what she would want to happen if ongoing sessions turned out not to be possible.",
            p: 1,
            why: "Exploring a fallback plan respects Amara's autonomy in preparing for an outcome that may be outside the practitioner's control.",
            refs: [
              "2018:41"
            ],
            reveal: "Amara says she would want a referral to another practitioner, ideally one experienced in working with clients living abroad, rather than being left without any support."
          },
          {
            t: "Ask Amara for the exact address of her new workplace in Berlin.",
            p: -2,
            why: "This level of detail about her employer has no bearing on the clinical or contractual decisions that need to be made.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask Amara to translate relevant German mental health regulations herself before the next session.",
            p: -2,
            why: "This puts the burden of a professional and legal check onto the client, when it is the practitioner's own responsibility to establish this.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask Amara whether she thinks her new job will work out long term.",
            p: -1,
            why: "This drifts into speculation about her career rather than exploring what is actually relevant to continuing the therapeutic contract.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask Amara who else in her life knows she has been having counselling.",
            p: -1,
            why: "While potentially relevant another time, this does not address the immediate decisions needed about continuing work across borders.",
            refs: [],
            reveal: null
          }
        ],
        newInfo: "You tell Amara you will look into whether continuing is workable and come back to her."
      },
      {
        id: "c4sC",
        label: "Section C",
        type: "mdm",
        stem: "You have looked into continuing once Amara is in Berlin. What would be important to cover when you come back to her?",
        options: [
          {
            t: "Tell her honestly what you have checked — insurance, competence, any legal or regulatory issues — and what is still uncertain.",
            p: 2,
            why: "Honesty about what you know and do not know lets Amara make an informed choice about continuing, rather than being reassured by silence.",
            refs: [
              "2018:2a",
              "2026:4.1c"
            ]
          },
          {
            t: "Propose any changes to the working agreement that follow from the move — location, emergency contact, a backup if the connection fails, local GP — and agree them with her.",
            p: 2,
            why: "A change of country is a change to the contract. The working agreement needs to record what will be different, and she is entitled to a record of it.",
            refs: [
              "2018:31",
              "2026:1.2b"
            ]
          },
          {
            t: "Take the decision to supervision and record your reasoning.",
            p: 1,
            why: "Cross-border work is unfamiliar practice for this practitioner, and supervision is the place to think it through before committing.",
            refs: [
              "2018:60",
              "2026:4.3d"
            ]
          },
          {
            t: "Give her time to consider rather than asking her to decide in the same minute.",
            p: 1,
            why: "Informed consent for a changed contract is not a same-session signature. Time to think is ordinary respect.",
            refs: [
              "2018:31",
              "2026:1.2a"
            ]
          },
          {
            t: "Agree to continue without telling her what you found, because you do not want to worry her.",
            p: -2,
            why: "Withholding material information about cover, competence or legal duties so that she agrees is not partnership and is not honesty.",
            refs: [
              "2018:2",
              "2026:2.2"
            ]
          },
          {
            t: "Tell her it is all fine and there is nothing extra to think about.",
            p: -1,
            why: "A blanket reassurance closes the decision rather than sharing it, and it may not be true.",
            refs: [
              "2018:2a"
            ]
          },
          {
            t: "Ask her to sign a new contract immediately, before you have explained what would change.",
            p: -1,
            why: "A signature without explanation confuses admin with informed consent.",
            refs: [
              "2018:31"
            ]
          },
          {
            t: "Suggest she finds a German-speaking therapist because you would rather not work this out.",
            p: -1,
            why: "Ending the work to avoid your own homework, without exploring whether continuing is possible, does not manage the ending with her.",
            refs: [
              "2018:41",
              "2026:4.5d"
            ]
          },
          {
            t: "Continue exactly as before with no review of the working agreement.",
            p: -1,
            why: "The contract was written for UK-based work. Leaving it untouched treats a change of country as if nothing had happened.",
            refs: [
              "2018:31",
              "2026:1.2b"
            ]
          }
        ],
        newInfo: "Amara thanks you and asks what personal data you are holding on her overall, saying she wants to see her full record before deciding whether to continue once abroad."
      },
      {
        id: "c4sD",
        label: "Section D",
        type: "sdm",
        stem: "Amara formally asks, in writing, to see all the personal data you hold about her. What is the most appropriate first response?",
        options: [
          {
            t: "Treat this as a subject access request under UK GDPR and explain the process and timescale to Amara.",
            p: 2,
            why: "A client's written request to see their data is a subject access request under UK GDPR, and clients should be told how and when this will be handled.",
            refs: [
              "2018:15",
              "2026:3.1b"
            ]
          },
          {
            t: "Tell Amara you will decide later whether to respond, since she has not yet left the UK.",
            p: -2,
            why: "There is no basis for delaying a legitimate subject access request simply because the client has not yet relocated.",
            refs: [
              "2026:3.1b"
            ]
          },
          {
            t: "Refuse the request because the notes are your own working documents and not really hers.",
            p: -2,
            why: "Clinical records about a client are generally within scope of a subject access request; refusing outright misunderstands data protection obligations.",
            refs: [
              "2026:3.1b"
            ]
          },
          {
            t: "Send Amara everything you can find immediately by email without checking what the records actually contain.",
            p: -2,
            why: "Sending records without reviewing them first risks disclosing third-party information or sensitive material inappropriately, rather than handling the request properly.",
            refs: [
              "2026:3.2a"
            ]
          }
        ],
        newInfo: "You confirm to Amara that this will be handled as a subject access request and explain the process, including the timescale set by the ICO's guidance on UK GDPR. You begin reviewing your records to prepare a response."
      },
      {
        id: "c4sE",
        label: "Section E",
        type: "mdm",
        stem: "While preparing your response to Amara's subject access request, what would be important to do?",
        options: [
          {
            t: "Check your notes are factual, adequate and relevant before sharing them, correcting anything inaccurate.",
            p: 2,
            why: "Records should be factual, adequate and relevant to the service provided, and a subject access request is a natural point to confirm this is still true.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          },
          {
            t: "Consider whether any of the material identifies a third party and how to handle that appropriately.",
            p: 2,
            why: "Personal data about other people mentioned in the notes needs careful handling so their information is not disclosed inappropriately in the response.",
            refs: [
              "2026:3.1a"
            ]
          },
          {
            t: "Discuss the request in supervision, including how it feels to have your notes reviewed by the client.",
            p: 1,
            why: "Supervision offers a space to reflect on the professional and personal aspects of a client scrutinising your record-keeping.",
            refs: [
              "2018:60"
            ]
          },
          {
            t: "Note down for your own records what was disclosed, what was redacted, and when the response was sent.",
            p: 1,
            why: "The file should show how the request was handled, not only that a pack was sent.",
            refs: [
              "2018:15",
              "2026:3.2c"
            ]
          },
          {
            t: "Rewrite your session notes retrospectively to make them look more polished before sending them.",
            p: -2,
            why: "Altering records after the fact to present them differently misrepresents what was actually recorded at the time and undermines record-keeping integrity.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          },
          {
            t: "Withhold rough handwritten jottings from the response on the basis that they were never typed up.",
            p: -1,
            why: "Records held about a client include informal notes, not only the typed file. A subject access request covers what is held, not what was later polished.",
            refs: [
              "2018:15",
              "2026:3.2c"
            ]
          },
          {
            t: "Add speculative clinical opinions about Amara's prognosis into the notes before sending them.",
            p: -1,
            why: "Inserting new material for the purpose of the request rather than sharing what was genuinely recorded misrepresents the actual record.",
            refs: [
              "2018:15"
            ]
          },
          {
            t: "Ask a colleague uninvolved in the case to review the notes and decide what to send.",
            p: -1,
            why: "Handing this decision to someone with no relationship to Amara or the work is unnecessary and does not respect the confidentiality of the case.",
            refs: [
              "2018:55a"
            ]
          },
          {
            t: "Delay the response well beyond what was communicated to Amara because it feels time-consuming.",
            p: -1,
            why: "Failing to keep to the timescale already explained to Amara undermines the transparency promised when the request was accepted.",
            refs: [
              "2026:3.1b"
            ]
          }
        ],
        newInfo: "You complete the review and send Amara her records within the timescale you set out, redacting a brief third-party reference. She thanks you and says she would like to try continuing sessions after her move, if it is workable."
      },
      {
        id: "c4sF",
        label: "Section F",
        type: "mdm",
        stem: "Three weeks after Amara relocates, your video call cuts out completely partway through a difficult session with no way to reconnect. What would you do?",
        options: [
          {
            t: "Use an agreed backup method, such as a phone call, to re-establish contact with Amara as soon as possible.",
            p: 2,
            why: "Having and using an agreed fallback for technology failure minimises disruption and harm to the client when a session is interrupted.",
            refs: [
              "2018:41",
              "2026:2.1b"
            ]
          },
          {
            t: "Check in with Amara afterwards about how she was left feeling by the sudden disconnection.",
            p: 2,
            why: "An abrupt, unplanned break in contact during a difficult session can be distressing, and following up addresses any harm caused.",
            refs: [
              "2018:52",
              "2026:2.2a"
            ]
          },
          {
            t: "Review with Amara whether your current technology and backup plan are reliable enough for ongoing cross-border sessions.",
            p: 1,
            why: "A real technology failure is a practical prompt to review whether the current setup is fit for purpose given the distance involved.",
            refs: [
              "2026:2.1b"
            ]
          },
          {
            t: "Note the incident and what happened in Amara's record for accountability and future reference.",
            p: 1,
            why: "Keeping an accurate record of a significant disruption to sessions supports good practice and future planning.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          },
          {
            t: "Wait for Amara to contact you next week without trying to reach her sooner.",
            p: -2,
            why: "Leaving a client who was mid-session in a difficult moment without any attempt at prompt contact does not manage an unplanned break appropriately.",
            refs: [
              "2018:41",
              "2026:4.5d"
            ]
          },
          {
            t: "Decide to end the working relationship immediately because the technology cannot be trusted.",
            p: -1,
            why: "Ending abruptly over a single technical failure, without discussing it with Amara or exploring alternatives, is a disproportionate response.",
            refs: [
              "2018:41"
            ]
          },
          {
            t: "Assume the call cut out because Amara chose to leave and take no further action.",
            p: -1,
            why: "Assuming the worst about the client's intentions rather than checking what actually happened risks misreading a technical problem as something else.",
            refs: [
              "2018:51"
            ]
          },
          {
            t: "Message Amara only to reschedule the next session, without addressing what happened in this one.",
            p: -1,
            why: "Moving straight to logistics without acknowledging the disrupted session misses the chance to repair any impact on Amara.",
            refs: [
              "2018:52"
            ]
          },
          {
            t: "Send Amara a detailed written account of everything discussed before the call cut out, by email.",
            p: -1,
            why: "Committing session content to an email is a disproportionate and less secure way to handle a technical interruption compared with re-establishing contact directly.",
            refs: [
              "2026:3.1a"
            ]
          }
        ],
        newInfo: "You reach Amara by phone shortly afterwards. She is shaken but relieved to hear from you, and you agree a clearer backup plan for future sessions. She asks whether, given everything that has happened, continuing to work together long-distance is really still a good idea."
      },
      {
        id: "c4sG",
        label: "Section G",
        type: "sdm",
        stem: "Amara asks directly whether you think continuing sessions with her in Germany is the right way forward. What is the most appropriate response?",
        options: [
          {
            t: "Share your honest view, including what you have checked and what remains uncertain, and decide together with Amara.",
            p: 2,
            why: "Working collaboratively on this decision, with an honest account of what has and has not been verified, respects Amara's autonomy while being transparent about genuine limits.",
            refs: [
              "2026:1.4a",
              "2026:4.1c"
            ]
          },
          {
            t: "Tell Amara it is entirely her decision and offer no view of your own either way.",
            p: -2,
            why: "Withholding your professional perspective entirely leaves Amara without information she needs, when collaborative decision-making means sharing your view, not avoiding it.",
            refs: [
              "2026:1.4a"
            ]
          },
          {
            t: "Tell Amara you will keep working together regardless of what the insurance or legal checks show.",
            p: -2,
            why: "Committing regardless of what checks on insurance and legal obligations reveal risks working outside proper cover or unclear obligations.",
            refs: [
              "2018:19",
              "2026:4.2a"
            ]
          },
          {
            t: "Tell Amara you cannot possibly continue and end the work immediately without further discussion.",
            p: -2,
            why: "Ending unilaterally without discussing what has actually been found out, or exploring options with Amara, does not manage this ending collaboratively or minimise harm.",
            refs: [
              "2026:4.5d"
            ]
          }
        ],
        newInfo: null
      }
    ]
  },
  {
    id: "c5",
    title: "Faith, Family and the Charity",
    setting: "Third-sector counselling charity (rural)",
    contract: "Open-ended",
    presenting: "Low mood and anxiety since a recent bereavement, within a close-knit rural and faith community",
    themes: [
      "equality",
      "culture",
      "faith",
      "accessibility",
      "reasonable-adjustments",
      "dual-relationship",
      "boundaries",
      "gifts",
      "competence",
      "supervision"
    ],
    brief: "You work two days a week for a small counselling charity serving a rural community with limited other services nearby. Nadia, 44, has been referred following the death of her father. She describes her Christian faith and her extended family's expectations as central to how she understands her grief. She has waited several weeks for an appointment because she was reluctant to be seen by a male counsellor or by anyone outside her own community. The contract is open-ended, funded by a small grant, and reviewed every six sessions. The charity has only two other counsellors and a part-time administrator.",
    sections: [
      {
        id: "c5sA",
        label: "Section A",
        type: "mdm",
        stem: "What would be important to discuss with Nadia in the first session?",
        options: [
          {
            t: "Ask her to describe her family's religious practices in detail so you can learn about her community.",
            p: -1,
            why: "Expecting the client to educate you at length in session one places the burden of your learning on her rather than you informing yourself elsewhere where possible.",
            refs: [
              "2018:22g"
            ]
          },
          {
            t: "Suggest she would be better served by a faith leader instead of continuing with the charity.",
            p: -1,
            why: "Redirecting her away from therapy she has waited weeks for, before exploring her actual needs, removes choice rather than supporting it.",
            refs: [
              "2018:22g"
            ]
          },
          {
            t: "Tell her that counselling works best when religious belief is put to one side during sessions.",
            p: -2,
            why: "This dismisses a significant part of her identity and meaning-making rather than working with it, and risks alienating her from the service entirely.",
            refs: [
              "2018:22d",
              "2026:1.1f"
            ]
          },
          {
            t: "Reassure her that everyone at the charity already knows her family and will look after her.",
            p: -1,
            why: "This is a false and potentially concerning reassurance in a small rural charity, and risks minimising confidentiality before it has even been explained.",
            refs: [
              "2018:31c"
            ]
          },
          {
            t: "Explain the contract, confidentiality and its limits in plain language and check her understanding.",
            p: 2,
            why: "Clear, understandable contracting is a basic requirement before therapeutic work can proceed on the basis of informed consent.",
            refs: [
              "2018:31b",
              "2026:1.2b"
            ]
          },
          {
            t: "Acknowledge that waiting several weeks may have been difficult and ask how she is managing meanwhile.",
            p: 1,
            why: "A brief, human acknowledgement of the wait supports the relationship without over-focusing on service failings in session one.",
            refs: []
          },
          {
            t: "Ask Nadia what role her faith and family play in how she wants to work on her grief.",
            p: 2,
            why: "Inviting her to define this herself respects her autonomy and avoids you assuming what her faith means to her, consistent with working with identity in an open-minded way.",
            refs: [
              "2018:22d",
              "2026:1.1f"
            ]
          },
          {
            t: "Move straight into a structured bereavement questionnaire without first discussing her preferences.",
            p: -1,
            why: "Starting with a standard tool before understanding what matters to her about the referral process risks feeling procedural rather than collaborative.",
            refs: [
              "2018:31a"
            ]
          },
          {
            t: "Ask what made it hard to be seen sooner and whether anything about the service still feels difficult.",
            p: 1,
            why: "Naming and exploring her hesitancy about the referral shows the service is willing to adapt rather than expecting her to simply fit in.",
            refs: [
              "2018:25"
            ]
          }
        ],
        newInfo: "Nadia mentions in passing that her younger sister, Grace, works at the charity as the part-time administrator, though Grace is not involved in clinical work."
      },
      {
        id: "c5sB",
        label: "Section B",
        type: "sdm",
        stem: "How do you respond to learning that Nadia's sister works at the charity?",
        options: [
          {
            t: "Say nothing and continue exactly as before since Grace only does administrative work.",
            p: -2,
            why: "Ignoring a known dual relationship without any review means it cannot be actively managed if the risk to confidentiality changes.",
            refs: [
              "2018:33d"
            ]
          },
          {
            t: "Raise it with your supervisor and agree how to manage the dual relationship going forward.",
            p: 2,
            why: "Reviewing an emerging dual relationship in supervision, then deciding jointly how to safeguard confidentiality and boundaries, is the proportionate first step.",
            refs: [
              "2018:33d",
              "2026:4.3d"
            ]
          },
          {
            t: "Tell Nadia you cannot continue working with her because her sister works at the charity.",
            p: -2,
            why: "Ending the contract abruptly is disproportionate when the sister has no clinical role and the risk has not yet been assessed or discussed.",
            refs: [
              "2018:33b"
            ]
          },
          {
            t: "Ask Nadia to get her sister moved to a different role before you continue seeing her.",
            p: -2,
            why: "Demanding a change to a colleague's employment is outside your authority and puts an unfair burden on the client to solve your dilemma.",
            refs: [
              "2018:57"
            ]
          }
        ],
        newInfo: "In supervision, you and your supervisor agree that Grace's role gives her no access to client files or session content, but you will confirm this directly with Nadia and review it again in a few sessions."
      },
      {
        id: "c5sC",
        label: "Section C",
        type: "ig",
        stem: "Which areas would you like to explore with Nadia now?",
        options: [
          {
            t: "Ask how she is finding the pace and structure of sessions so far.",
            p: 2,
            why: "Checking in on pace and structure gives her a chance to shape the work rather than you assuming it is going well.",
            refs: [
              "2018:32"
            ],
            reveal: "Nadia says she appreciates having time to talk but sometimes loses track of what has been said when there is noise, and has not wanted to mention it before now."
          },
          {
            t: "Ask her directly what she thinks caused her father's death.",
            p: -2,
            why: "This is an intrusive, closed line of enquiry that centres your curiosity rather than her current, presenting difficulty.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask her to rate her faith commitment on a scale so you can record it in her file.",
            p: -1,
            why: "Reducing a client's faith to a numeric rating for the file is reductive and not something she has been asked to consent to.",
            refs: [
              "2018:15"
            ],
            reveal: null
          },
          {
            t: "Ask how she felt about the referral process and the wait for an appointment.",
            p: 1,
            why: "Understanding her experience of accessing the service can reveal barriers that affect her ongoing engagement.",
            refs: [
              "2018:25"
            ],
            reveal: "She says the wait was hard but she persisted because there was nowhere else nearby she felt comfortable attending."
          },
          {
            t: "Ask what, if anything, would make it easier for her to keep attending.",
            p: 1,
            why: "A direct, open question about what would help her continue is a simple way to surface practical barriers.",
            refs: [
              "2018:22f"
            ],
            reveal: "She says a quieter room or a different time slot would help a lot, and that she nearly did not come back after a particularly noisy session."
          },
          {
            t: "Ask her sister informally whether Nadia has mentioned any problems with sessions.",
            p: -1,
            why: "Approaching a relative who is also a colleague about a client's experience breaches confidentiality and blurs the dual relationship further.",
            refs: [
              "2018:55",
              "2026:3.1a"
            ],
            reveal: null
          },
          {
            t: "Ask whether she has considered stopping therapy given how difficult attending has been.",
            p: -1,
            why: "Suggesting she stop, before exploring what might make attendance workable, closes down the conversation prematurely.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask Nadia to bring a family member to future sessions to help explain things to her.",
            p: -1,
            why: "This assumes a solution before you have asked Nadia what she herself would find helpful, and could compromise confidentiality.",
            refs: [
              "2018:31c"
            ],
            reveal: null
          },
          {
            t: "Ask whether the room, timing or format of sessions currently work well for her.",
            p: 2,
            why: "This opens the conversation about access needs directly rather than waiting for her to raise a problem herself.",
            refs: [
              "2018:22f",
              "2026:4.4d"
            ],
            reveal: "Nadia explains she has a hearing impairment in one ear and finds it hard to follow the session when there is background noise from the shared office next door, which happens most Tuesday afternoons."
          }
        ],
        newInfo: "You raise the noise issue with the charity manager, who agrees Nadia can be moved to a quieter room and offers an earlier time slot that avoids the noisy period."
      },
      {
        id: "c5sD",
        label: "Section D",
        type: "mdm",
        stem: "How would you take forward the change in room and timing for Nadia?",
        options: [
          {
            t: "Confirm the new room and time with Nadia and check it genuinely works for her.",
            p: 2,
            why: "Adjustments should be agreed with the client rather than simply announced, so they meet her actual needs.",
            refs: [
              "2026:4.4d",
              "2018:22f"
            ]
          },
          {
            t: "Ask the manager to remind other staff to keep noise down near the counselling rooms generally.",
            p: 1,
            why: "A general reminder addresses the underlying cause for other clients too, without singling Nadia out.",
            refs: []
          },
          {
            t: "Note in the file that Nadia has a disability without specifying what adjustment was agreed.",
            p: -1,
            why: "A vague label without the practical detail is less useful for continuity and risks reducing her to a category rather than a person.",
            refs: [
              "2018:15"
            ]
          },
          {
            t: "Record the adjustment and the reason for it briefly in her notes.",
            p: 2,
            why: "A concise record supports continuity of care and shows the service responded to a genuine access need.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          },
          {
            t: "Decide unilaterally to end sessions ten minutes early each time to reduce the risk of noise.",
            p: -1,
            why: "Shortening sessions without discussing it with Nadia reduces the service she is entitled to and was not something she asked for.",
            refs: [
              "2018:31a"
            ]
          },
          {
            t: "Tell Nadia the change is temporary and she should expect to return to the noisy room later.",
            p: -2,
            why: "Presenting a reasonable adjustment as temporary and conditional undermines the point of making it and was not agreed with her.",
            refs: [
              "2026:4.4d"
            ]
          },
          {
            t: "Check with Nadia whether the earlier time slot creates any new difficulty, such as childcare or travel.",
            p: 1,
            why: "A change intended to help could create a different barrier, so it is worth checking before assuming the problem is solved.",
            refs: [
              "2018:22f"
            ]
          },
          {
            t: "Mention to Grace that the room change was needed because of Nadia's hearing.",
            p: -2,
            why: "Sharing details of a client's health need with a relative who is also a colleague is an avoidable breach of confidentiality.",
            refs: [
              "2018:55",
              "2026:3.1a"
            ]
          }
        ],
        newInfo: "Sessions settle into the new room and time. Some weeks later, around the anniversary of her father's death, Nadia brings a small, hand-embroidered cloth as a gift, explaining it is traditional in her family to give something handmade at this time."
      },
      {
        id: "c5sE",
        label: "Section E",
        type: "mdm",
        stem: "How would you respond to Nadia offering the embroidered cloth?",
        options: [
          {
            t: "Accept the cloth without comment and move straight on to the rest of the session.",
            p: -2,
            why: "Accepting without any discussion misses an opportunity to understand what the gift means to her and to consider it as part of the work.",
            refs: [
              "2018:33a"
            ]
          },
          {
            t: "Tell her you will keep the cloth in your own home as a personal reminder of her progress.",
            p: -1,
            why: "Framing a client's gift as a personal keepsake blurs the professional purpose of accepting it and centres your own attachment rather than her needs.",
            refs: [
              "2018:35"
            ]
          },
          {
            t: "Refuse the gift immediately, telling her that accepting gifts from clients is against the rules.",
            p: -2,
            why: "A flat refusal framed as a rule, without exploring the cultural and personal significance of the moment, risks feeling rejecting at a sensitive time and ignores that no absolute rule against gifts exists.",
            refs: [
              "2018:33a"
            ]
          },
          {
            t: "Accept the gift and suggest she call you by your first name from now on to reflect the closeness.",
            p: -1,
            why: "Using the gift as grounds to change the formality of the relationship conflates a boundary question with an unrelated change that was not discussed on its own merits.",
            refs: [
              "2018:33a"
            ]
          },
          {
            t: "Explain gently that you want to honour her tradition without changing the nature of your work together.",
            p: 1,
            why: "Naming the tension openly, rather than silently accepting or refusing, keeps the relationship transparent.",
            refs: [
              "2018:44"
            ]
          },
          {
            t: "Think about whether accepting or declining would be more consistent with her wellbeing and the boundaries of your work together.",
            p: 2,
            why: "Weighing the decision against both the client's benefit and the professional relationship, rather than applying a blanket rule, reflects considered boundary-setting.",
            refs: [
              "2018:33a",
              "2026:1.3a"
            ]
          },
          {
            t: "Note the gift and the conversation about it in your records and flag it for supervision.",
            p: 1,
            why: "Recording a boundary event and taking it to supervision supports transparency and ongoing reflection, particularly given the family connection to the charity.",
            refs: [
              "2018:15",
              "2026:4.3d"
            ]
          },
          {
            t: "Ask her to say more about what giving this means to her at this point in her grief.",
            p: 2,
            why: "Exploring the meaning of the gift with her, rather than reacting to the object alone, keeps the focus on her experience and the therapeutic relationship.",
            refs: [
              "2018:33a",
              "2026:1.3b"
            ]
          }
        ],
        newInfo: "After discussion, you accept the cloth, note it and the conversation in Nadia's file, and agree with your supervisor to keep it under review. Nadia later discloses that she has started experiencing chest pains and dizziness that her GP has not yet fully investigated, alongside her low mood, and says she trusts your judgement about what to do about the physical symptoms too."
      },
      {
        id: "c5sF",
        label: "Section F",
        type: "mdm",
        stem: "How would you respond to Nadia's disclosure about her physical symptoms and her request for your guidance on them?",
        options: [
          {
            t: "Discuss the disclosure in supervision, given it sits at the edge of your competence and involves physical health.",
            p: 1,
            why: "Bringing a case that touches on the limits of your competence to supervision is good practice, particularly when a client is looking to you for guidance beyond your role.",
            refs: [
              "2018:60",
              "2026:4.3d"
            ]
          },
          {
            t: "Tell her not to worry about the symptoms because stress can cause similar sensations.",
            p: -2,
            why: "Offering a reassuring medical opinion you are not qualified to give could delay her seeking necessary investigation and understates the risk.",
            refs: [
              "2018:14a"
            ]
          },
          {
            t: "Suggest a specific supplement or remedy that you have heard helps with chest pain and dizziness.",
            p: -1,
            why: "Recommending a health remedy is well outside your competence and could cause harm if her symptoms have a serious physical cause.",
            refs: [
              "2018:14a",
              "2026:4.1a"
            ]
          },
          {
            t: "Explain that assessing physical symptoms is outside your competence and encourage her to follow up urgently with her GP.",
            p: 2,
            why: "Being clear about the limits of your competence, while supporting her to get appropriate medical input, keeps her safe without you overstepping your role.",
            refs: [
              "2018:14a",
              "2026:4.1a"
            ]
          },
          {
            t: "Tell her that with faith and patience the symptoms will likely resolve on their own.",
            p: -1,
            why: "Offering a faith-based prediction about a physical health outcome you are not qualified to assess could discourage her from seeking timely medical care.",
            refs: [
              "2018:14a"
            ]
          },
          {
            t: "Ask what her GP has said so far and whether it would help to plan what to raise at her next appointment.",
            p: 2,
            why: "Helping her prepare to advocate for herself with her GP supports her without you taking on a medical role you are not trained for.",
            refs: [
              "2018:29"
            ]
          },
          {
            t: "Ask how she is feeling about the delay in investigation and whether it is adding to her distress.",
            p: 1,
            why: "Exploring the emotional impact of the uninvestigated symptoms is within your competence and relevant to her presenting difficulties.",
            refs: []
          },
          {
            t: "End the session early and tell her to come back once the GP has investigated further.",
            p: -1,
            why: "Withdrawing support rather than continuing to work with her presenting distress leaves her without help at a point she has asked for it.",
            refs: [
              "2018:41"
            ]
          },
          {
            t: "Contact her GP directly yourself to report her symptoms without discussing this with her first.",
            p: -1,
            why: "Contacting a third party about her health without her agreement bypasses her autonomy when there is no indication of immediate serious risk requiring this.",
            refs: [
              "2018:26",
              "2026:1.1a"
            ]
          }
        ],
        newInfo: "Nadia follows up with her GP, who arranges further tests; results are pending. She continues attending sessions and, at a six-session review, tells you she wants to keep working with you but is also aware her sister still works at the charity and asks whether this is a problem."
      },
      {
        id: "c5sG",
        label: "Section G",
        type: "sdm",
        stem: "How do you respond to Nadia raising the question of her sister's role again at the review?",
        options: [
          {
            t: "Tell her it is not something she needs to think about since it was already resolved in supervision.",
            p: -2,
            why: "Closing down her question rather than including her in the ongoing review treats the dual relationship as solely your concern, not a shared one.",
            refs: [
              "2018:33d"
            ]
          },
          {
            t: "Suggest she transfer to one of the other two counsellors at the charity instead.",
            p: -2,
            why: "Proposing a transfer she has not asked for, without first exploring her own view, removes choice from a client who has just said she wants to continue.",
            refs: [
              "2018:26"
            ]
          },
          {
            t: "Reassure her that family connections do not matter in a small rural service like this.",
            p: -2,
            why: "Dismissing the relevance of the dual relationship ignores real confidentiality risks in a small community and is not a considered response to her question.",
            refs: [
              "2018:33b"
            ]
          },
          {
            t: "Talk it through with Nadia openly, confirm what safeguards are in place, and ask if she has any concerns about continuing.",
            p: 2,
            why: "Revisiting the dual relationship transparently with the client herself, and checking her view, keeps the arrangement under active, collaborative review.",
            refs: [
              "2018:33d",
              "2026:1.4a"
            ]
          }
        ],
        newInfo: null
      }
    ]
  },
  {
    id: "c6",
    title: "Unwell, Online and Under Review",
    setting: "Private practice",
    contract: "Open-ended",
    presenting: "Recurrent anxiety and relationship difficulties, alongside pressures in the practitioner's own working life",
    themes: [
      "fitness-to-practise",
      "self-care",
      "supervision",
      "service-disruption",
      "continuity",
      "complaints",
      "social-media",
      "boundaries",
      "safeguarding-adults",
      "risk-to-others"
    ],
    brief: "You are a private practitioner working from a shared therapy suite with two other self-employed counsellors. You have an open-ended contract with Daniel, 39, who has been seeing you weekly for four months for anxiety and relationship difficulties. You have been recovering from a viral illness for the past fortnight and have noticed your concentration and stamina are reduced, though you have continued seeing clients. You have supervision monthly. This week you notice a one-star public review of your practice naming you personally, and a colleague in the shared suite, Kirsty, has seemed increasingly unlike herself in the corridor between sessions.",
    sections: [
      {
        id: "c6sA",
        label: "Section A",
        type: "mdm",
        stem: "What would be important for you to do about your reduced concentration this week?",
        options: [
          {
            t: "Reduce your caseload slightly this week to protect the sessions you do keep.",
            p: 1,
            why: "A modest, proactive adjustment to workload can help maintain quality of care while you recover, without an abrupt full stop.",
            refs: [
              "2018:91d"
            ]
          },
          {
            t: "Tell your clients today that you have been unwell and ask them how they feel about it.",
            p: -1,
            why: "Volunteering personal health details to clients before you have decided whether any change is actually needed shifts an unnecessary burden onto them.",
            refs: [
              "2018:44"
            ]
          },
          {
            t: "Check whether you have adequate rest and support in place outside work this week.",
            p: 1,
            why: "Attending to basic wellbeing needs is part of maintaining the resilience needed to sustain safe practice.",
            refs: [
              "2018:91b",
              "2026:2.3a"
            ]
          },
          {
            t: "Increase your caseload this week to cover for a colleague, despite feeling below your best.",
            p: -1,
            why: "Taking on additional work while your own capacity is reduced runs counter to sustaining the resilience needed for safe practice.",
            refs: [
              "2018:91b"
            ]
          },
          {
            t: "Reflect honestly on whether your current health is affecting the quality of your sessions.",
            p: 2,
            why: "Honest self-monitoring of your health and its effect on your work is the starting point for deciding whether any change is needed.",
            refs: [
              "2018:91b",
              "2026:2.3a"
            ]
          },
          {
            t: "Carry on exactly as normal since missing sessions would be unfair to clients.",
            p: -2,
            why: "Prioritising attendance over an honest assessment of your fitness to practise risks lower-quality or unsafe sessions for clients.",
            refs: [
              "2018:18",
              "2026:2.3a"
            ]
          },
          {
            t: "Bring your concerns about concentration and stamina to your next supervision session.",
            p: 2,
            why: "Supervision is the appropriate place to reflect on your fitness to practise and decide what action, if any, is proportionate.",
            refs: [
              "2018:60",
              "2026:4.3d"
            ]
          },
          {
            t: "Decide unilaterally to take two weeks off without discussing it with anyone first.",
            p: -2,
            why: "Taking an extended break without any supervisory input or planning for client continuity is a disproportionate, unplanned response.",
            refs: [
              "2018:41"
            ]
          }
        ],
        newInfo: "In supervision, you and your supervisor agree to monitor your health over the next two weeks and revisit whether any change to your caseload is needed. That afternoon, you discover a public online review naming you and criticising your \"unprofessional and distracted\" manner in a recent session."
      },
      {
        id: "c6sB",
        label: "Section B",
        type: "sdm",
        stem: "How do you respond to finding the public review naming you?",
        options: [
          {
            t: "Message the reviewer directly through the platform to ask them to take the review down.",
            p: -2,
            why: "Approaching a possible client to pressure removal of a review risks a further breach of confidentiality and an inappropriate use of the relationship.",
            refs: [
              "2018:55",
              "2026:1.3a"
            ]
          },
          {
            t: "Post a public reply describing what actually happened in the session to defend your reputation.",
            p: -2,
            why: "Responding publicly risks confirming or implying who the client is and disclosing session content, breaching confidentiality regardless of provocation.",
            refs: [
              "2018:55",
              "2026:3.1a"
            ]
          },
          {
            t: "Ask friends and colleagues to post positive reviews to balance it out as quickly as possible.",
            p: -2,
            why: "Orchestrating counter-reviews is a form of public self-defence that misrepresents independent feedback and could bring the profession into disrepute.",
            refs: [
              "2018:48",
              "2026:1.3e"
            ]
          },
          {
            t: "Avoid responding publicly, and discuss the review and its content in supervision.",
            p: 2,
            why: "Not engaging publicly protects confidentiality and the profession's standing, and supervision is the right place to process your reaction and any follow-up.",
            refs: [
              "2018:48",
              "2026:1.3d"
            ]
          }
        ],
        newInfo: "You decide not to respond publicly and raise it in supervision, where you reflect that the review may relate to a session earlier in your illness. Later that week, you notice Kirsty, the colleague who shares your therapy suite, smelling strongly of alcohol before a client session and appearing unsteady."
      },
      {
        id: "c6sC",
        label: "Section C",
        type: "mdm",
        stem: "What would be important to do about your observations of Kirsty before her session?",
        options: [
          {
            t: "Post about the incident in a private counsellors' forum to get advice from strangers online.",
            p: -1,
            why: "Discussing an identifiable colleague and possible client risk on a public or semi-public forum before acting risks confidentiality and disrepute.",
            refs: [
              "2018:48",
              "2026:1.3d"
            ]
          },
          {
            t: "Check whether the practice has a policy for concerns about a colleague's fitness to practise.",
            p: 1,
            why: "Established procedures, where they exist, should guide how such a concern is escalated and recorded.",
            refs: [
              "2018:56"
            ]
          },
          {
            t: "Take the concern to your supervisor promptly, even outside your usual supervision slot.",
            p: 1,
            why: "A concern about a colleague's fitness to practise that could affect a client today warrants prompt reflection rather than waiting for the next scheduled supervision.",
            refs: [
              "2018:60",
              "2026:4.3d"
            ]
          },
          {
            t: "Consider whether the client due to see Kirsty needs to be protected from seeing her in this state.",
            p: 2,
            why: "Sharing a responsibility for the safety of all clients means considering whether the immediate session should go ahead at all.",
            refs: [
              "2018:11"
            ]
          },
          {
            t: "Say nothing today since it is not your place to comment on another self-employed practitioner.",
            p: -2,
            why: "Sharing a therapy suite does not remove the shared responsibility for client safety, and staying silent leaves a client at possible risk today.",
            refs: [
              "2018:11",
              "2026:2.4a"
            ]
          },
          {
            t: "Assume it is a one-off and decide to monitor quietly without saying anything today.",
            p: -1,
            why: "Deferring any action leaves today's client unprotected and does not reflect the shared responsibility to act on a live safety concern.",
            refs: [
              "2018:11"
            ]
          },
          {
            t: "Speak to Kirsty directly and share what you have observed before she sees her client.",
            p: 2,
            why: "Raising a direct, immediate concern with a colleague whose fitness to practise may be impaired gives her the chance to respond before any client is seen.",
            refs: [
              "2018:11",
              "2026:2.4a"
            ]
          },
          {
            t: "Confront Kirsty loudly in the shared waiting area in front of her arriving client.",
            p: -1,
            why: "Raising a sensitive concern in front of a client is likely to embarrass both colleagues and undermine trust in the service, even though the concern itself is valid.",
            refs: [
              "2018:58"
            ]
          },
          {
            t: "Cancel Kirsty's client yourself without telling Kirsty what you are doing or why.",
            p: -1,
            why: "Acting unilaterally behind a colleague's back, rather than speaking to her directly first, is a disproportionate step before she has had a chance to respond.",
            refs: [
              "2018:58"
            ]
          }
        ],
        newInfo: "Kirsty admits she has been drinking and agrees not to see her client today; you help her contact the client to reschedule and she agrees to speak to her own supervisor urgently. Later that day, in your own session, Daniel discloses that during a recent argument he grabbed his brother by the throat and says he is worried he \"might do something worse\" if his brother provokes him again."
      },
      {
        id: "c6sD",
        label: "Section D",
        type: "ig",
        stem: "Which areas would you like to explore with Daniel about this disclosure?",
        options: [
          {
            t: "Ask what usually helps him manage his temper when he feels provoked.",
            p: 1,
            why: "Exploring his existing coping strategies is relevant to assessing risk and to any safety planning you do together.",
            refs: [],
            reveal: "Daniel says he usually walks away, but did not this time because he had been drinking and felt cornered in his brother's flat."
          },
          {
            t: "Ask him to promise you right now that nothing like this will ever happen again.",
            p: -1,
            why: "Extracting a promise offers false reassurance rather than a genuine assessment of risk and does little to keep anyone safer.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask whether he has thoughts of harming his brother again, and how likely he feels this is.",
            p: 2,
            why: "Directly assessing current intent and likelihood is central to judging whether there is an imminent risk that might need to override confidentiality.",
            refs: [
              "2018:9",
              "2026:3.3a"
            ],
            reveal: "Daniel says he does not want to hurt his brother and is frightened by what he did, but is not sure he can control his temper if there is another confrontation about the inheritance."
          },
          {
            t: "Tell him you will need to report this to the police before discussing it further.",
            p: -2,
            why: "Announcing a report before any assessment of risk, and without a general legal duty in England requiring one for this kind of disclosure, is premature and disproportionate.",
            refs: [
              "2018:10",
              "2026:3.3c"
            ],
            reveal: null
          },
          {
            t: "Ask whether his brother knows how frightened Daniel is by what happened.",
            p: 1,
            why: "Understanding whether the person potentially at risk has any awareness of the situation is relevant to how proportionate any action might be.",
            refs: [
              "2018:9"
            ],
            reveal: "Daniel says his brother brushed it off as a one-off and they have not spoken since, which worries Daniel because he does not know when they will next be in contact."
          },
          {
            t: "Ask him to tell you everything about the inheritance dispute in full financial detail.",
            p: -2,
            why: "A detailed financial history is not necessary to assess risk and diverts the session away from the safety-relevant material.",
            refs: [],
            reveal: null
          },
          {
            t: "Ask him to describe what happened during the argument and what led up to it.",
            p: 2,
            why: "Understanding the specific circumstances is necessary before you can assess the level and nature of any ongoing risk.",
            refs: [
              "2018:9",
              "2026:3.3b"
            ],
            reveal: "Daniel says the argument was over money their late mother left them; he grabbed his brother's throat for a few seconds before letting go, and has not been violent with anyone before this."
          },
          {
            t: "Ask him whether he has ever had similar thoughts about anyone else in his life.",
            p: -1,
            why: "Broadening the enquiry beyond the immediate, specific concern before it has been properly assessed risks losing focus on the actual risk in front of you.",
            refs: [],
            reveal: null
          }
        ],
        newInfo: "Daniel says the brothers are not in regular contact and no further meeting is planned soon, but he wants help managing his temper before they next see each other. You judge there is no indication of an imminent, planned attack."
      },
      {
        id: "c6sE",
        label: "Section E",
        type: "mdm",
        stem: "How would you take this disclosure forward with Daniel?",
        options: [
          {
            t: "Work with Daniel on a short safety plan for what he will do if he feels provoked again.",
            p: 1,
            why: "A practical plan focused on de-escalation directly addresses the risk he has described and supports him to manage it himself.",
            refs: []
          },
          {
            t: "Tell Daniel there is a general legal duty to report this to the police and you have no choice.",
            p: -2,
            why: "This misstates the law: there is no general legal duty in England to report an adult's disclosure of a past incident, so telling him otherwise is inaccurate and disempowering.",
            refs: [
              "2026:3.3b"
            ]
          },
          {
            t: "Contact his brother directly to warn him about what Daniel has said.",
            p: -2,
            why: "Contacting a third party without Daniel's knowledge or consent, when there is no indication of an imminent planned attack, is a disproportionate breach of confidentiality.",
            refs: [
              "2018:26",
              "2026:3.1a"
            ]
          },
          {
            t: "Decide the matter is resolved and make no record since no meeting with his brother is planned soon.",
            p: -1,
            why: "Treating the disclosure as closed without any record leaves no basis for reviewing the risk if circumstances change.",
            refs: [
              "2018:15"
            ]
          },
          {
            t: "End the session and tell him to come back only once things have calmed down at home.",
            p: -1,
            why: "Withdrawing support at the point he is disclosing distress and risk leaves him without help when he most needs it.",
            refs: [
              "2018:41"
            ]
          },
          {
            t: "Discuss with Daniel how the confidentiality agreement applies to what he has told you.",
            p: 2,
            why: "Talking through how your existing agreement on limits to confidentiality applies to this specific disclosure keeps the process transparent and collaborative.",
            refs: [
              "2018:31c",
              "2026:3.1d"
            ]
          },
          {
            t: "Record the disclosure and your risk assessment clearly and factually in his notes.",
            p: 1,
            why: "An accurate, factual record of what was disclosed and how you assessed it protects both Daniel and you if the situation develops.",
            refs: [
              "2018:15",
              "2026:3.2a"
            ]
          },
          {
            t: "Take the disclosure to supervision to assess the level of risk and agree a proportionate response.",
            p: 2,
            why: "A considered risk assessment in supervision, rather than an automatic report, reflects that this is a judgement call about proportionality, not a fixed legal duty.",
            refs: [
              "2018:60",
              "2026:3.3b"
            ]
          }
        ],
        newInfo: "Two weeks later, your health has not fully recovered and your GP recommends a short period of rest. You realise you will need to take an unplanned break from practice for at least two to three weeks."
      },
      {
        id: "c6sF",
        label: "Section F",
        type: "mdm",
        stem: "How would you plan for this unplanned break from practice?",
        options: [
          {
            t: "Check your arrangements for a colleague or your clinical will to support clients while you are away.",
            p: 2,
            why: "Having a named contact who can support clients if you are unreachable is part of responsible planning for breaks or more serious absence.",
            refs: [
              "2018:42",
              "2026:4.5e"
            ]
          },
          {
            t: "Cancel all sessions by a single generic text message with no further explanation.",
            p: -2,
            why: "A single impersonal message for all clients, including one who has recently disclosed a risk concern, does not manage the break in a way that minimises harm or disruption.",
            refs: [
              "2018:41",
              "2026:4.5d"
            ]
          },
          {
            t: "Tell Daniel and your other clients as soon as possible, with as much notice as you can give.",
            p: 2,
            why: "Giving clients prompt, honest notice of an unplanned break helps them prepare and reduces the disruption to their care.",
            refs: [
              "2018:41",
              "2026:4.5d"
            ]
          },
          {
            t: "Decide to keep seeing Daniel specifically throughout the break because his situation feels urgent.",
            p: -1,
            why: "Continuing to work while your GP has recommended rest risks delivering a lower standard of care than your own health currently allows.",
            refs: [
              "2018:18",
              "2026:2.3a"
            ]
          },
          {
            t: "Offer Daniel the option of a referral to another practitioner if he needs support during the break.",
            p: 1,
            why: "Given his recent disclosure, offering an alternative source of support during the gap is a sensible continuity measure.",
            refs: [
              "2018:41"
            ]
          },
          {
            t: "Say nothing to clients and simply stop responding to messages until you are ready to return.",
            p: -2,
            why: "Disappearing without notice leaves clients, especially one currently managing a risk to his brother, without any support or explanation.",
            refs: [
              "2018:41"
            ]
          },
          {
            t: "Ask Kirsty to take over your full caseload immediately given the pressure you are under.",
            p: -1,
            why: "Handing your caseload to a colleague whose own fitness to practise has recently been in question, without further review, is not a safe continuity plan.",
            refs: [
              "2018:11",
              "2026:2.4a"
            ]
          },
          {
            t: "Discuss with your supervisor how to manage the caseload and your own return to work.",
            p: 1,
            why: "Supervision support helps you plan a safe and appropriately paced return rather than resuming a full caseload immediately.",
            refs: [
              "2018:60",
              "2026:4.3d"
            ]
          }
        ],
        newInfo: "You give clients two weeks' notice, arrange for a trusted colleague to be a point of contact for urgent concerns, and agree a plan with your supervisor for a phased return."
      },
      {
        id: "c6sG",
        label: "Section G",
        type: "sdm",
        stem: "Daniel says he is anxious about the break and unsure whether to raise a concern about the earlier distracted session. How do you respond?",
        options: [
          {
            t: "Reassure him that the session cannot have been affected because your standard of work is consistently high.",
            p: -2,
            why: "Dismissing the possibility that your health affected a session, without genuine reflection, is not the open and honest response his concern deserves.",
            refs: [
              "2018:52a",
              "2026:2.2a"
            ]
          },
          {
            t: "Suggest he write a public review instead so other clients can be warned about what happened.",
            p: -2,
            why: "Directing a client toward a public airing of a concern about your own practice, rather than a direct or formal route, is a strange and unhelpful deflection.",
            refs: [
              "2018:49"
            ]
          },
          {
            t: "Encourage him to raise it directly with you now, and explain how to make a formal complaint if he is not satisfied.",
            p: 2,
            why: "Inviting him to raise the concern directly, while making sure he knows about formal routes too, treats his concern seriously and keeps him informed of his options.",
            refs: [
              "2018:49",
              "2026:2.2a"
            ]
          },
          {
            t: "Tell him it is best not to raise it now since you are about to take a break anyway.",
            p: -2,
            why: "Discouraging him from raising a concern because of your own timing puts your convenience ahead of his right to be heard.",
            refs: [
              "2018:49"
            ]
          }
        ],
        newInfo: null
      }
    ]
  }
];

const INDICATED_PATTERNS = [
  {
    k: "escalation",
    n: "Reflexive escalation",
    d: "Involving a third party — police, GP, safeguarding lead, emergency services — at a point the case had not yet justified.",
    test: function (o) { return o.p < 0 && /\b(police|999|ambulance|emergency services|crisis team|social services|social care|safeguarding lead|designated safeguarding|refer(ral)? (him|her|them)?|GP|hospital)\b/i.test(o.t); }
  },
  {
    k: "directive",
    n: "Advising rather than exploring",
    d: "Telling the client what to do, or forming a view on their behalf, instead of working with what they bring.",
    test: function (o) { return o.p < 0 && /\b(advise|advice|recommend|tell (him|her|them) (to|that they should)|suggest (he|she|they) should|encourage (him|her|them) to|persuade|reassure)\b/i.test(o.t); }
  },
  {
    k: "absolutism",
    n: "Confidentiality absolutism",
    d: "Refusing to share or discuss anything at all, where a proportionate and agreed disclosure was the appropriate response.",
    test: function (o) { return o.p < 0 && /\b(refuse|decline to (share|discuss|confirm)|will not (share|disclose|confirm)|nothing (will|would) (ever )?be shared|promise (him|her|them) (that )?(nothing|everything))\b/i.test(o.t); }
  },
  {
    k: "roledrift",
    n: "Working outside your role",
    d: "Giving an opinion, assessment or service that belongs to another professional, or that you were not contracted to give.",
    test: function (o) { return o.p < 0 && /\b(diagnos|assess (his|her|their) fitness|fitness to work|opinion on|write a (report|letter)|medication|prescri|sick note|fit note)\b/i.test(o.t); }
  },
  {
    k: "boundary",
    n: "Boundary slippage",
    d: "Accepting, extending or blurring something that belonged outside the working relationship.",
    test: function (o) { return o.p < 0 && /\b(accept (the )?(gift|present|invitation)|social media|friend request|outside the session|personal (phone|number|email|account)|meet (him|her|them) (for|at)|home address)\b/i.test(o.t); }
  },
  {
    k: "noconsult",
    n: "Not using supervision or policy",
    d: "Missing an indicated option that took the question to supervision, to the service policy, or to a colleague.",
    missed: true,
    test: function (o) { return o.p > 0 && /\b(supervis|service policy|agency policy|working agreement|consult|designated safeguarding lead|professional body|BACP)\b/i.test(o.t); }
  },
  {
    k: "latesafeguard",
    n: "Slow to protect",
    d: "Missing an indicated option that concerned safety, risk or safeguarding at the point the case had established it.",
    missed: true,
    test: function (o) { return o.p > 0 && /\b(risk|safeguard|safety|harm|suicid|self-harm|protect|danger)\b/i.test(o.t); }
  },
  {
    k: "consent",
    n: "Moving without consent",
    d: "Missing an indicated option about explaining limits, seeking agreement, or checking the client had understood.",
    missed: true,
    test: function (o) { return o.p > 0 && /\b(consent|limits of confidentiality|explain|working agreement|check (he|she|they) (has|have) understood|agree with (him|her|them)|discuss with (him|her|them))\b/i.test(o.t); }
  }
];
