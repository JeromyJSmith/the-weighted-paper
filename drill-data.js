const DRILL_ITEMS = [
  {
    "id": 1,
    "topic": "First session / contracting",
    "theme": "Contracting",
    "scenario": "Maya, 29, self-referred after an online search. This is her first appointment. She says at the door, \"I've never done this before, I don't really know how it works.\" She has taken an hour off work and says she needs to leave promptly at the end.",
    "instruction": "Choose as many responses as you think are essential in this first session.",
    "options": [
      {
        "t": "core",
        "x": "Explain what confidentiality means in your work, including the circumstances in which you might need to break it.",
        "w": "Limits of confidentiality are a precondition of informed consent — the client cannot meaningfully agree to the work without them."
      },
      {
        "t": "core",
        "x": "Agree the practical frame: session length, frequency, fee, cancellation terms and how to contact you between sessions.",
        "w": "The working agreement is the container. Without it, later boundary problems have nothing to rest on."
      },
      {
        "t": "bonus",
        "x": "Ask Maya what she is hoping for from counselling.",
        "w": "Client-led and useful, but not strictly a first-session precondition — it can be built over early sessions."
      },
      {
        "t": "bonus",
        "x": "Check she has your privacy notice and explain briefly how you store her data.",
        "w": "Good practice and a legal expectation; scores, but sits below the core confidentiality conversation."
      },
      {
        "t": "poor",
        "x": "Spend the session gathering a full developmental history from childhood onwards.",
        "w": "Directive and front-loaded. It displaces the contracting work this session actually requires."
      },
      {
        "t": "poor",
        "x": "Reassure her that everything she says stays in the room, whatever it is.",
        "w": "Factually untrue and it makes the later disclosure conversation a betrayal rather than a boundary."
      },
      {
        "t": "serious",
        "x": "Skip the practicalities so she isn't put off, and cover them once she is more settled.",
        "w": "Deferring the frame to protect the client from it leaves her consenting to work she has not been told the terms of."
      },
      {
        "t": "poor",
        "x": "Tell her most people find the first session the hardest and it gets easier from here.",
        "w": "Generic reassurance offered in place of the information she actually needs."
      },
      {
        "t": "nui",
        "x": "Ask whether she has been referred by her GP and what the referral letter said.",
        "w": "She self-referred after an online search. This asks about information the scenario has already ruled out."
      }
    ],
    "tip": "First-session items divide into things that must happen before the work is legitimate, and things that are simply good. Only the first group is essential."
  },
  {
    "id": 2,
    "topic": "Limits of confidentiality",
    "theme": "Confidentiality",
    "scenario": "Four sessions in, Tom says, \"Before I tell you this next bit — you can't tell anyone, right?\" You have already covered confidentiality in the working agreement.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Restate the limits of confidentiality before he continues, so he can decide what to say knowing the terms.",
        "w": "Consent has to be live at the moment of disclosure, not just signed at the start."
      },
      {
        "t": "bonus",
        "x": "Notice aloud that something feels difficult to say and invite him to say what makes it hard.",
        "w": "Client-led and relational; it holds the moment without pressing for content."
      },
      {
        "t": "poor",
        "x": "Say yes, so he doesn't lose his nerve, and deal with any consequences afterwards.",
        "w": "Buying the disclosure with a promise you cannot keep."
      },
      {
        "t": "poor",
        "x": "Tell him you already covered this in session one and move on.",
        "w": "Technically accurate, relationally dismissive, and it leaves his anxiety unaddressed."
      },
      {
        "t": "poor",
        "x": "Ask him to tell you first and then decide together whether it counts as something you must pass on.",
        "w": "Invites the disclosure before the terms are clear, then makes him share responsibility for a decision that is yours."
      },
      {
        "t": "serious",
        "x": "Promise absolute confidentiality and note privately that you would break it if needed.",
        "w": "A deliberate misrepresentation to the client. This is the most damaging option here."
      },
      {
        "t": "serious",
        "x": "Tell him you will have to report whatever he says to your supervisor by name.",
        "w": "Misstates how supervision works and is likely to shut down the work entirely."
      },
      {
        "t": "bonus",
        "x": "Explain that supervision is part of your normal practice and how confidentiality operates within it.",
        "w": "Accurate and reassuring; a legitimate part of the same conversation."
      }
    ],
    "tip": "When a client asks you to pre-agree secrecy, the indicated move is almost always to restate the terms before hearing the content."
  },
  {
    "id": 3,
    "topic": "Self-harm disclosure",
    "theme": "Risk",
    "scenario": "Aisha, 24, rolls up her sleeve to show you healed and recent cuts on her forearm. She says cutting is \"the only thing that stops the noise\" and that she has never wanted to die. She is not in any other service.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Explore her experience of self-harm with her — what it does for her, when it happens, what it costs.",
        "w": "Client-led exploration is the assessment. It is also the intervention."
      },
      {
        "t": "core",
        "x": "Ask directly about suicidal thoughts and intent, rather than assuming self-harm and suicidality are the same thing.",
        "w": "Asking directly is safe, and self-harm without suicidal intent still requires the question to be asked, not inferred."
      },
      {
        "t": "bonus",
        "x": "Ask whether any wounds need medical attention and whether she knows how to care for them.",
        "w": "Practical harm-reduction; scores, but sits under the exploration and the direct risk question."
      },
      {
        "t": "bonus",
        "x": "Take this to supervision.",
        "w": "Appropriate and expected, though it is not something that happens in the room."
      },
      {
        "t": "poor",
        "x": "Ask her to agree not to self-harm again before the next session.",
        "w": "A no-harm contract removes her only coping strategy and gives her something to hide from you."
      },
      {
        "t": "poor",
        "x": "Tell her the cutting will need to stop before therapy can properly begin.",
        "w": "Makes the presenting difficulty a precondition of receiving help."
      },
      {
        "t": "serious",
        "x": "Contact her GP today to report the self-harm without discussing it with her.",
        "w": "Breaks confidentiality where no limit has been reached, and does it behind her back."
      },
      {
        "t": "serious",
        "x": "Reassure her that self-harm is very common and move the conversation on to something lighter.",
        "w": "Normalising as avoidance. It closes down the disclosure she just risked making."
      }
    ],
    "tip": "Self-harm and suicidality are separate questions. Never let the answer to one stand in for the other."
  },
  {
    "id": 4,
    "topic": "Suicidal ideation",
    "theme": "Risk",
    "scenario": "Near the end of a session, Ben says quietly, \"Honestly, some mornings I think everyone would be better off if I just didn't wake up.\" There are seven minutes left.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Ask directly whether he is thinking of ending his life, and about any plan, means or intent.",
        "w": "The single non-negotiable here. Ambiguous statements must be clarified, not interpreted."
      },
      {
        "t": "core",
        "x": "Stay with the disclosure rather than winding the session up on time.",
        "w": "The frame serves the client; it does not override a live risk disclosure."
      },
      {
        "t": "bonus",
        "x": "Ask what has kept him safe so far and what support he has around him.",
        "w": "Protective factors are part of the picture and the conversation."
      },
      {
        "t": "bonus",
        "x": "Make sure he leaves knowing how to get urgent help out of hours.",
        "w": "Sensible continuity of care; secondary to the direct question."
      },
      {
        "t": "poor",
        "x": "Note it and say you will pick it up properly at the start of next week's session.",
        "w": "Defers a live risk disclosure across a week for the sake of the clock."
      },
      {
        "t": "poor",
        "x": "Tell him lots of people feel that way and it usually passes.",
        "w": "Minimising. It teaches him not to raise it again."
      },
      {
        "t": "serious",
        "x": "Call an ambulance immediately without asking him anything further.",
        "w": "Escalation without assessment — disproportionate, and it removes his agency entirely."
      },
      {
        "t": "serious",
        "x": "Avoid using the word suicide in case it puts the idea in his head.",
        "w": "Contradicted by the evidence base and it leaves the risk unassessed."
      }
    ],
    "tip": "Timing pressure is deliberately built into these items. The clock is never a reason to leave a risk statement unclarified."
  },
  {
    "id": 5,
    "topic": "Medication side effects",
    "theme": "Mental health knowledge",
    "scenario": "Priya started an SSRI three weeks ago. She tells you she is exhausted, sleeping badly, feels \"flat and far away\" in sessions, and is wondering whether to just stop taking it.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Encourage her to discuss the effects and any change of dose with her prescriber before stopping.",
        "w": "Medication decisions sit with the prescriber. Supporting that conversation is squarely within your competence."
      },
      {
        "t": "bonus",
        "x": "Explore what the flatness is like for her and how it affects the therapy.",
        "w": "Brings the material into the room where you can work with it."
      },
      {
        "t": "bonus",
        "x": "Acknowledge that these effects are recognised and often change over the early weeks, without predicting her outcome.",
        "w": "General information offered carefully; scores, but must not become clinical advice."
      },
      {
        "t": "poor",
        "x": "Suggest she halve the dose to see whether the flatness lifts.",
        "w": "Dose advice is outside your competence, regardless of how reasonable it sounds."
      },
      {
        "t": "poor",
        "x": "Tell her you don't discuss medication as it isn't part of counselling.",
        "w": "Refuses material the client has brought and that materially affects the work."
      },
      {
        "t": "serious",
        "x": "Agree that antidepressants numb people and support her decision to stop today.",
        "w": "Advising abrupt cessation of a prescribed medicine — outside competence and potentially harmful."
      },
      {
        "t": "serious",
        "x": "Phone her GP to ask them to change her prescription.",
        "w": "Acting on her behalf without consent, on a matter that is not yours to act on."
      }
    ],
    "tip": "On medication, the indicated move is nearly always to route the decision back to the prescriber while keeping the client's experience in the room."
  },
  {
    "id": 6,
    "topic": "Working with a young person",
    "theme": "Consent and capacity",
    "scenario": "You work in a school counselling service. Leo, 15, asks whether his parents will be told what he says. He is articulate and appears to understand what counselling involves.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Explain confidentiality and its limits in language he can actually use, including safeguarding.",
        "w": "Same principle as with adults, adjusted for age. Safeguarding must be named."
      },
      {
        "t": "core",
        "x": "Work within the service's safeguarding policy and know who the designated safeguarding lead is.",
        "w": "In an agency setting the policy is part of the frame, not an optional overlay."
      },
      {
        "t": "bonus",
        "x": "Assess whether he has sufficient understanding to consent to counselling in his own right.",
        "w": "Capacity is assessed, not assumed from age — a real and scoring consideration."
      },
      {
        "t": "bonus",
        "x": "Ask him what he is worried his parents might find out.",
        "w": "Client-led; opens the anxiety behind the question."
      },
      {
        "t": "poor",
        "x": "Tell him nothing will ever be shared with his parents.",
        "w": "Overpromises past the safeguarding limit."
      },
      {
        "t": "poor",
        "x": "Tell him everything will be shared with his parents because he is a minor.",
        "w": "Legally wrong and it collapses the possibility of the work."
      },
      {
        "t": "serious",
        "x": "Ask his parents for written consent before seeing him, without telling him you are doing so.",
        "w": "Goes behind a young person who may well be able to consent in his own right, and breaches his confidentiality to do it."
      },
      {
        "t": "serious",
        "x": "Agree to keep a disclosure of abuse from the safeguarding lead if he asks you to.",
        "w": "Overrides a statutory duty by private agreement."
      }
    ],
    "tip": "Agency work adds a layer: the organisation's policy is part of your frame, and you must know it before you contract."
  },
  {
    "id": 7,
    "topic": "Record keeping and access",
    "theme": "Records and data",
    "scenario": "Client Dan emails asking for a copy of all the notes you hold about him. Your notes contain your own process reflections and one sentence mentioning his ex-partner by name.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Recognise this as a subject access request and respond within the statutory timeframe.",
        "w": "A legal right with a legal clock. Recognising it as such is the whole point of the item."
      },
      {
        "t": "core",
        "x": "Consider third-party information before disclosing, and handle the reference to his ex-partner appropriately.",
        "w": "Third-party data is the standard exemption. Missing it is the trap in this question."
      },
      {
        "t": "bonus",
        "x": "Talk with him about what has prompted the request and what he is hoping to find.",
        "w": "Relational and often the most useful thing you do — but it must not delay or condition the legal response."
      },
      {
        "t": "bonus",
        "x": "Take it to supervision.",
        "w": "Appropriate support for a request with legal and relational layers."
      },
      {
        "t": "poor",
        "x": "Ask him to explain why he wants them before you agree to release anything.",
        "w": "He does not have to give a reason. Conditioning release on one is not lawful."
      },
      {
        "t": "poor",
        "x": "Send everything immediately and unredacted so you cannot be accused of hiding anything.",
        "w": "Ignores the third-party consideration entirely."
      },
      {
        "t": "serious",
        "x": "Refuse on the grounds that your process notes are personal and not part of his record.",
        "w": "Records you hold about an identifiable client are his data, whatever you call them."
      },
      {
        "t": "serious",
        "x": "Rewrite the notes before sending them.",
        "w": "Falsifying a record in response to a request for it."
      }
    ],
    "tip": "Data items usually hide two separate obligations — the client's right of access, and someone else's right not to be disclosed."
  },
  {
    "id": 8,
    "topic": "Scope of competence",
    "theme": "Competence",
    "scenario": "Six sessions into general anxiety work, Rachel discloses a childhood sexual abuse history and asks whether you can help her process it. You have no specific trauma training.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Be honest with her about the limits of your training in this area.",
        "w": "Transparency about competence is a duty owed to the client, not a professional embarrassment."
      },
      {
        "t": "core",
        "x": "Take it to supervision to think through whether and how to continue.",
        "w": "Supervision is the mechanism by which scope decisions get made properly."
      },
      {
        "t": "bonus",
        "x": "Explore with her what she is hoping for and what she has already been offered elsewhere.",
        "w": "Keeps the decision collaborative rather than done to her."
      },
      {
        "t": "bonus",
        "x": "Discuss referral options with her, including what would happen to your work together.",
        "w": "Referral considered with her, not instead of her."
      },
      {
        "t": "poor",
        "x": "Read up on trauma over the weekend and start the work on Monday.",
        "w": "Reading is not training. Competence is not acquired in 48 hours."
      },
      {
        "t": "poor",
        "x": "Steer the sessions back to anxiety and avoid the abuse material.",
        "w": "Abandons the disclosure she risked making and leaves it unheld."
      },
      {
        "t": "poor",
        "x": "Tell her you are willing to try as long as she accepts you may get it wrong.",
        "w": "Transfers the risk of your lack of training onto the client and calls it informed consent."
      },
      {
        "t": "serious",
        "x": "End the counselling at the end of this session and give her a leaflet.",
        "w": "An abrupt ending immediately after a disclosure of abuse is a re-enactment of abandonment."
      },
      {
        "t": "nui",
        "x": "Check what her previous therapist's assessment concluded.",
        "w": "No previous therapist is mentioned anywhere in the scenario."
      }
    ],
    "tip": "Working beyond competence and dropping the client are both failures. The indicated path runs between them, through supervision and conversation."
  },
  {
    "id": 9,
    "topic": "Dual relationship",
    "theme": "Boundaries",
    "scenario": "You discover that a new client, Sam, is the line manager of your closest friend, and that your friend has spoken to you about him by name in the past.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Take the conflict of interest to supervision before proceeding.",
        "w": "Pre-existing information about a client from a third party is a live conflict, not a coincidence."
      },
      {
        "t": "core",
        "x": "Be transparent with Sam about the existence of a conflict, at a level that does not disclose your friend's confidences.",
        "w": "He cannot consent to a compromised frame he is not told about."
      },
      {
        "t": "bonus",
        "x": "Consider referring him to a colleague.",
        "w": "Often the cleanest resolution, but it should follow the thinking rather than replace it."
      },
      {
        "t": "poor",
        "x": "Continue and simply resolve not to think about what your friend told you.",
        "w": "Undisclosed prior knowledge cannot be neutralised by intention."
      },
      {
        "t": "poor",
        "x": "Ask your friend not to mention Sam to you again, without explaining why.",
        "w": "Manages your discomfort by using your friend, and edges toward disclosing the client."
      },
      {
        "t": "serious",
        "x": "Tell your friend that Sam is now your client.",
        "w": "A straightforward breach of the client's confidentiality."
      },
      {
        "t": "serious",
        "x": "Use what your friend told you to guide the direction of the sessions.",
        "w": "Working from covert third-party information the client does not know you hold."
      }
    ],
    "tip": "Boundary items reward the practitioner who makes the problem visible — to supervision and, appropriately, to the client."
  },
  {
    "id": 10,
    "topic": "Client asks for advice",
    "theme": "Non-directive practice",
    "scenario": "Nadia has spent three sessions weighing up whether to leave her marriage. Today she says, \"You've heard it all now. Just tell me what you'd do.\"",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Explore what it would mean to her to be given the answer by someone else.",
        "w": "Client-led. The request itself is the material."
      },
      {
        "t": "bonus",
        "x": "Acknowledge how exhausting the undecidedness has been.",
        "w": "Empathic and accurate; it meets the feeling without taking the decision."
      },
      {
        "t": "bonus",
        "x": "Be transparent that giving her your answer is not what counselling offers, and say why.",
        "w": "Honest framing; scores, provided it is not delivered as a refusal."
      },
      {
        "t": "poor",
        "x": "Tell her what you would do, since she has asked directly.",
        "w": "Directive. It substitutes your judgement for hers on her own life."
      },
      {
        "t": "poor",
        "x": "Deflect the question and change the subject.",
        "w": "Avoids rather than works with the request."
      },
      {
        "t": "serious",
        "x": "Tell her the relationship sounds unhealthy and she should leave.",
        "w": "Directive advice on a life-altering decision, given from outside the situation."
      },
      {
        "t": "serious",
        "x": "Say that as her counsellor you cannot answer any personal questions at all, and move on.",
        "w": "A rigid rule used to shut down a live relational moment."
      }
    ],
    "tip": "When a client asks you to decide, the indicated response works with the asking. Answering it is nearly always the trap."
  },
  {
    "id": 11,
    "topic": "Safeguarding an adult",
    "theme": "Risk",
    "scenario": "Joan, 78, mentions that her son handles all her money and that she \"has to ask\" for anything she needs, sometimes going without food. She says she doesn't want any fuss.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Explore what is happening with her, at her pace, without labelling it for her.",
        "w": "You cannot act on a picture you have not actually established."
      },
      {
        "t": "core",
        "x": "Take it to supervision and check your safeguarding responsibilities and local route.",
        "w": "Adult safeguarding thresholds are not something to determine alone in the room."
      },
      {
        "t": "bonus",
        "x": "Discuss with her what options exist and what she would want to happen.",
        "w": "Keeps her involved in decisions about her own life wherever possible."
      },
      {
        "t": "bonus",
        "x": "Record the disclosure factually and contemporaneously.",
        "w": "Accurate records matter disproportionately once safeguarding is in play."
      },
      {
        "t": "poor",
        "x": "Agree to say nothing to anyone because she asked you not to.",
        "w": "An advance promise that may cut across a safeguarding duty."
      },
      {
        "t": "poor",
        "x": "Tell her this is financial abuse and she must report it.",
        "w": "Directive labelling and instruction; likely to close her down."
      },
      {
        "t": "poor",
        "x": "Suggest she opens a separate bank account her son cannot see.",
        "w": "Practical advice on a situation you have not yet understood, and it may increase her risk at home."
      },
      {
        "t": "serious",
        "x": "Contact her son to hear his side of it.",
        "w": "Approaching the person of concern directly may put her at greater risk."
      },
      {
        "t": "nui",
        "x": "Check whether her care plan has a nominated advocate.",
        "w": "No care plan or care package is mentioned in the scenario."
      }
    ],
    "tip": "Adult safeguarding items reward exploration plus consultation. They punish both silence and unilateral escalation."
  },
  {
    "id": 12,
    "topic": "Ending and referral",
    "theme": "Endings",
    "scenario": "You are moving abroad in eight weeks. You have eleven active clients, including one who began working on bereavement three sessions ago.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Tell all clients as soon as possible so there is time to work with the ending.",
        "w": "Notice is what makes a planned ending therapeutic rather than an abandonment."
      },
      {
        "t": "core",
        "x": "Work with each client's response to the ending as part of the therapy.",
        "w": "The ending is material, especially for someone in bereavement work."
      },
      {
        "t": "bonus",
        "x": "Offer to discuss onward referral with those who want it.",
        "w": "Continuity of care, offered rather than imposed."
      },
      {
        "t": "bonus",
        "x": "Make arrangements for the secure storage or transfer of records.",
        "w": "An easily forgotten obligation that survives the end of the work."
      },
      {
        "t": "poor",
        "x": "Tell clients in the final two weeks so they don't spend months anticipating it.",
        "w": "Protecting them from the ending removes their chance to use it."
      },
      {
        "t": "poor",
        "x": "Transfer everyone to a colleague and let the colleague explain.",
        "w": "Outsources the ending you are responsible for."
      },
      {
        "t": "serious",
        "x": "Tell the bereaved client at her last session so as not to disrupt the grief work.",
        "w": "An unannounced ending mid-bereavement compounds the loss being worked on."
      },
      {
        "t": "serious",
        "x": "Give clients your new overseas number and offer to keep working informally.",
        "w": "An unstructured, unregulated continuation outside any frame."
      }
    ],
    "tip": "Ending items score the amount of notice and the willingness to make the ending workable."
  },
  {
    "id": 13,
    "topic": "Gift from a client",
    "theme": "Boundaries",
    "scenario": "At her final session, Ruth gives you a hand-knitted scarf. She is visibly moved and says it took her months.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Consider the meaning of the gift in the context of her therapy and this ending.",
        "w": "Meaning first. The decision follows from it."
      },
      {
        "t": "bonus",
        "x": "Accept it warmly, having judged that it carries no obligation and does not distort the work.",
        "w": "A small, proportionate ending gift can be accepted; the reasoning is what scores."
      },
      {
        "t": "bonus",
        "x": "Acknowledge what she has put into it and what she may be saying with it.",
        "w": "Relational, and it lets the gift be talked about rather than only transacted."
      },
      {
        "t": "bonus",
        "x": "Take it to supervision if you are uncertain.",
        "w": "Legitimate, though a modest hand-made ending gift rarely requires it."
      },
      {
        "t": "poor",
        "x": "Refuse it on principle and explain that counsellors cannot accept gifts.",
        "w": "A blanket rule applied without thought, at the most exposed moment of the work."
      },
      {
        "t": "poor",
        "x": "Accept it without any comment at all.",
        "w": "Takes the object and leaves the meaning unexamined."
      },
      {
        "t": "poor",
        "x": "Tell her you will wear it to every session so she is remembered.",
        "w": "Implies a continuing relationship at the precise moment the work is ending."
      },
      {
        "t": "serious",
        "x": "Accept it and offer her a free follow-up session in return.",
        "w": "Converts a gift into a transaction and reopens a completed ending."
      }
    ],
    "tip": "There is no rule that says refuse. There is a requirement that says think — and this item has more than one indicated option."
  },
  {
    "id": 14,
    "topic": "Remote and online working",
    "theme": "Practice setting",
    "scenario": "A client asks to switch to video sessions. She will be joining from a shared house and is not sure she can guarantee a private room.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Discuss privacy at her end and agree what happens if she is overheard or interrupted.",
        "w": "Confidentiality in remote work depends on both ends of the connection."
      },
      {
        "t": "core",
        "x": "Agree a procedure for technology failure and for contacting her if the session drops.",
        "w": "A remote frame needs a disconnection plan before it needs anything else."
      },
      {
        "t": "bonus",
        "x": "Update the working agreement to cover the change of medium.",
        "w": "The contract should describe the work as it is actually delivered."
      },
      {
        "t": "bonus",
        "x": "Confirm her location and an emergency contact for the sessions.",
        "w": "Proportionate risk planning when you are not in the room with her."
      },
      {
        "t": "poor",
        "x": "Use whichever video platform she prefers without checking its security.",
        "w": "Convenience over the confidentiality you are responsible for."
      },
      {
        "t": "poor",
        "x": "Tell her online work is less effective and press for in-person sessions.",
        "w": "An unsupported claim used to override her stated need."
      },
      {
        "t": "serious",
        "x": "Suggest she uses headphones and speaks quietly so her housemates do not hear, and carry on regardless.",
        "w": "Treats a genuine confidentiality problem as a volume problem, and proceeds without addressing it."
      },
      {
        "t": "serious",
        "x": "Record the sessions so you can review them later, without telling her.",
        "w": "Covert recording of a client. Unambiguous breach."
      }
    ],
    "tip": "Remote-working items test whether you carry the frame across the medium — privacy, disconnection, location, consent."
  },
  {
    "id": 15,
    "topic": "Complaint and repair",
    "theme": "Professional conduct",
    "scenario": "A client tells you that your comment last week — that she seemed \"quite comfortable in the victim role\" — hurt her and that she nearly did not come back.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Acknowledge the impact on her and take responsibility without qualifying it.",
        "w": "Repair begins with an unhedged acknowledgement of impact."
      },
      {
        "t": "core",
        "x": "Stay with her experience of it and explore what it was like to come back anyway.",
        "w": "The rupture and the return are both therapeutic material."
      },
      {
        "t": "bonus",
        "x": "Take it to supervision.",
        "w": "Your own material behind the comment needs a place to go that is not the session."
      },
      {
        "t": "bonus",
        "x": "Tell her how she can raise a formal complaint if she wants to.",
        "w": "Clients have a right to know the route, even when repair is going well."
      },
      {
        "t": "poor",
        "x": "Explain what you actually meant so she understands you were not being critical.",
        "w": "Explanation as defence. It relocates the problem into her misunderstanding."
      },
      {
        "t": "poor",
        "x": "Apologise briefly and move straight on to this week's material.",
        "w": "A transactional apology that closes the subject rather than working it."
      },
      {
        "t": "serious",
        "x": "Suggest that her reaction is itself evidence of the pattern you named.",
        "w": "Uses the client's complaint as further proof of your interpretation. Deeply undermining."
      },
      {
        "t": "serious",
        "x": "Offer her free sessions so she does not complain.",
        "w": "An inducement to suppress a complaint."
      }
    ],
    "tip": "Repair items reward taking impact seriously without defending intent, and telling clients their complaint routes anyway."
  },
  {
    "id": 16,
    "topic": "Client under the influence",
    "theme": "Practice management",
    "scenario": "Marcus arrives smelling strongly of alcohol, slurring slightly. He is friendly and says he is fine and wants to carry on.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Name what you have noticed with him, without accusation.",
        "w": "You cannot work with what you refuse to say out loud."
      },
      {
        "t": "core",
        "x": "Consider whether meaningful therapeutic work and informed consent are possible in this state.",
        "w": "Capacity to engage and consent is the deciding question, not the smell of alcohol."
      },
      {
        "t": "bonus",
        "x": "Consider how he will get home safely.",
        "w": "Duty of care extends to the doorstep, proportionately."
      },
      {
        "t": "bonus",
        "x": "Agree together what will happen if he arrives like this again.",
        "w": "Builds the response into the frame rather than improvising it each time."
      },
      {
        "t": "poor",
        "x": "Carry on as normal because he says he is fine.",
        "w": "Accepts self-report over your own observation and the consent question."
      },
      {
        "t": "poor",
        "x": "Tell him to leave immediately and end the session at the door.",
        "w": "Proportionate to your discomfort, not to the situation."
      },
      {
        "t": "serious",
        "x": "Use the session to confront him about his drinking and tell him he is an alcoholic.",
        "w": "Diagnosis outside competence, delivered confrontationally to someone intoxicated."
      },
      {
        "t": "serious",
        "x": "Drive him home yourself.",
        "w": "A significant boundary crossing dressed up as care."
      }
    ],
    "tip": "The test is not whether he has been drinking. It is whether informed consent and useful work are available today."
  },
  {
    "id": 17,
    "topic": "Third-party pressure",
    "theme": "Confidentiality",
    "scenario": "You work for an EAP. The client's HR manager phones you directly and asks whether the client is \"engaging properly\", as it affects a live disciplinary process.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Decline to confirm or discuss anything about the client, including whether they attend.",
        "w": "Attendance itself is confidential information. This is the whole trap of the item."
      },
      {
        "t": "core",
        "x": "Explain the confidentiality terms of the service without discussing this individual.",
        "w": "You can describe the frame; you cannot describe the client."
      },
      {
        "t": "bonus",
        "x": "Tell the client that the call happened.",
        "w": "Transparency; the client's interests are directly affected."
      },
      {
        "t": "bonus",
        "x": "Refer the manager to the EAP contract and your organisation's contact.",
        "w": "Routes a contractual question to where it belongs."
      },
      {
        "t": "poor",
        "x": "Confirm attendance only, on the basis that it is not clinical content.",
        "w": "Attendance is still personal data about a client and is exactly what the manager wants."
      },
      {
        "t": "poor",
        "x": "Ask the manager to put the request in writing so you can consider it properly.",
        "w": "Implies the request might be answerable and keeps the door open on something you should close now."
      },
      {
        "t": "serious",
        "x": "Give a general impression of how the client is doing without specific details.",
        "w": "Vagueness does not convert a breach into a non-breach."
      },
      {
        "t": "serious",
        "x": "Agree to write a short report for the disciplinary as the client \"has nothing to hide\".",
        "w": "Discloses to a third party without consent, into a process that can harm the client."
      }
    ],
    "tip": "With commissioners and employers, the indicated answer nearly always separates describing the service from describing the client."
  },
  {
    "id": 18,
    "topic": "Supervision",
    "theme": "Professional structures",
    "scenario": "Your supervisor is on extended sick leave. Your usual monthly session has not happened for two months and you have taken on three new clients in that time.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Arrange alternative supervision without further delay.",
        "w": "Supervision is a requirement of practice, not a resource that pauses when the supervisor does."
      },
      {
        "t": "bonus",
        "x": "Review your current caseload and consider whether to pause new referrals meanwhile.",
        "w": "A proportionate interim safeguard."
      },
      {
        "t": "bonus",
        "x": "Tell your professional body or employer if the gap continues.",
        "w": "Appropriate escalation of a structural gap."
      },
      {
        "t": "poor",
        "x": "Wait for your supervisor to return since the arrangement is already in place.",
        "w": "Treats a two-month gap as a scheduling issue."
      },
      {
        "t": "poor",
        "x": "Use peer conversations with a colleague as a substitute.",
        "w": "Valuable, but not equivalent to formal supervision."
      },
      {
        "t": "serious",
        "x": "Continue practising unsupervised and catch up on everything when they return.",
        "w": "Practising outside a required professional structure, knowingly."
      },
      {
        "t": "nui",
        "x": "Ask your supervisor to sign off the missed hours retrospectively.",
        "w": "Nothing in the scenario indicates hours are being logged for a qualification."
      }
    ],
    "tip": "Structural obligations do not lapse because the usual arrangement broke. Somebody has to replace them, quickly."
  },
  {
    "id": 19,
    "topic": "Social media contact",
    "theme": "Boundaries",
    "scenario": "A current client sends you a friend request on a personal social media account, and follows it with a message saying she found your profile and hopes it's okay.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Do not accept the request, and bring it into the next session to talk about.",
        "w": "Declining plus talking about it is the whole indicated response; either alone is incomplete."
      },
      {
        "t": "bonus",
        "x": "Explore what prompted her to look and what she was hoping to find.",
        "w": "Client-led exploration of a boundary approach."
      },
      {
        "t": "bonus",
        "x": "Review your own privacy settings and your policy on online contact.",
        "w": "Fixes the conditions, not just the incident."
      },
      {
        "t": "bonus",
        "x": "Include an online-contact clause in your working agreement going forward.",
        "w": "Prevention built into the frame."
      },
      {
        "t": "poor",
        "x": "Accept it to avoid making her feel rejected, then unfollow quietly later.",
        "w": "A boundary breach softened by a deception."
      },
      {
        "t": "poor",
        "x": "Block her without any explanation and never mention it.",
        "w": "Enacts a rejection she will feel and cannot make sense of."
      },
      {
        "t": "poor",
        "x": "Send a short message on the platform explaining that you cannot connect with clients online.",
        "w": "Right content, wrong channel — it uses the very medium you are declining, on an insecure platform."
      },
      {
        "t": "serious",
        "x": "Reply on the platform with a discussion of her therapy.",
        "w": "Clinical material on an insecure, non-confidential channel."
      }
    ],
    "tip": "Note the shape here: one core, three bonuses. Several items reward accumulating small correct actions."
  },
  {
    "id": 20,
    "topic": "Client discloses an offence",
    "theme": "Confidentiality",
    "scenario": "A client tells you that several years ago he was involved in a serious assault for which nobody was ever charged. He is not currently at risk of harming anyone.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Take it to supervision to think through any duty and any risk.",
        "w": "The correct first move when the answer is genuinely not obvious."
      },
      {
        "t": "core",
        "x": "Assess current risk to any identifiable person, including him.",
        "w": "Present risk, not past offence, is what usually determines whether a limit is reached."
      },
      {
        "t": "bonus",
        "x": "Continue to work with what the disclosure means to him now.",
        "w": "It is therapeutic material and he brought it for a reason."
      },
      {
        "t": "bonus",
        "x": "Check your working agreement and any policy that applies to disclosures of this kind.",
        "w": "Your own stated terms are part of the answer."
      },
      {
        "t": "poor",
        "x": "Tell him you will have to think about whether to report it, and leave it there.",
        "w": "Raises the threat of disclosure and then abandons him with it for a week."
      },
      {
        "t": "poor",
        "x": "Reassure him it is all in the past and there is nothing to worry about.",
        "w": "A promise about consequences that is not yours to give."
      },
      {
        "t": "serious",
        "x": "Ask him for the details of the incident so you can judge how serious it was.",
        "w": "Turns the session into an investigation, and gathers information you have no standing to assess."
      },
      {
        "t": "serious",
        "x": "Report it to the police immediately without discussing it with him or taking advice.",
        "w": "Unilateral breach without assessment, supervision, or any conversation with the client."
      }
    ],
    "tip": "Historic disclosure items are testing whether you assess present risk before you reach for either silence or the phone."
  },
  {
    "id": 21,
    "topic": "Immediate danger",
    "theme": "Risk",
    "scenario": "Mid-session, a client tells you she has taken a large overdose an hour before arriving and is now feeling very unwell. She asks you not to tell anyone.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Arrange emergency medical help now, telling her what you are doing and why.",
        "w": "Life-threatening and time-critical. Everything else in this list is a way of not doing this."
      },
      {
        "t": "poor",
        "x": "Explore what led her to take the overdose before deciding anything.",
        "w": "Exploration is right in almost every other item on this test and wrong here. Medical emergency first."
      },
      {
        "t": "poor",
        "x": "Ring your supervisor for advice before acting.",
        "w": "Consultation is correct in most items. It is a delay when the client needs an ambulance."
      },
      {
        "t": "poor",
        "x": "Ask her to promise to go to A&E after the session.",
        "w": "Delegates an emergency back to the person currently affected by it."
      },
      {
        "t": "serious",
        "x": "Respect her wish for confidentiality and say nothing.",
        "w": "Confidentiality has never covered imminent danger to life."
      },
      {
        "t": "serious",
        "x": "Continue the session to its scheduled end and then act.",
        "w": "The frame does not outrank an overdose."
      },
      {
        "t": "serious",
        "x": "Tell her you cannot help unless she agrees to seek treatment.",
        "w": "Withdraws help at the moment of greatest need and conditions it on her compliance."
      }
    ],
    "tip": "This item has exactly one indicated option. Look for the single question that makes every other response irrelevant — here, is life at immediate risk?"
  },
  {
    "id": 22,
    "topic": "Missed sessions",
    "theme": "Practice management",
    "scenario": "A client has missed three consecutive sessions without contact. She has always attended reliably before, and her last session ended with a difficult disclosure.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Make contact in the manner agreed in your working agreement.",
        "w": "The agreement should already say what happens here. Following it is the indicated act."
      },
      {
        "t": "bonus",
        "x": "Take the pattern and its timing to supervision.",
        "w": "Three absences straight after a hard disclosure is meaningful, not administrative."
      },
      {
        "t": "poor",
        "x": "Send her an invoice for the missed sessions and nothing else.",
        "w": "Treats the absence as purely commercial and ignores the timing."
      },
      {
        "t": "poor",
        "x": "Wait indefinitely for her to get in touch.",
        "w": "Passive; leaves an unheld disclosure sitting unattended."
      },
      {
        "t": "poor",
        "x": "Send a message saying you are worried she may be in crisis after what she told you.",
        "w": "Puts confidential content into an unsecured channel that others may see."
      },
      {
        "t": "serious",
        "x": "Call her workplace to check she is alright.",
        "w": "Discloses the existence of the therapeutic relationship to a third party."
      },
      {
        "t": "serious",
        "x": "Turn up at her home address.",
        "w": "A serious boundary violation regardless of the concern behind it."
      }
    ],
    "tip": "Only two indicated options here. The frame you agreed in advance is doing most of the work."
  },
  {
    "id": 23,
    "topic": "Setting up in private practice",
    "theme": "Professional structures",
    "scenario": "You are about to see your first private client after several years in an agency. You are working from a room at home.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Hold current professional indemnity insurance.",
        "w": "A precondition of practising. Not optional and not deferrable."
      },
      {
        "t": "core",
        "x": "Have a written working agreement covering fees, cancellation, confidentiality and its limits.",
        "w": "The frame has to exist in writing before the first client sits down."
      },
      {
        "t": "bonus",
        "x": "Register with the ICO and have a privacy notice, and store records securely.",
        "w": "Data obligations follow you out of the agency, where they were somebody else's job."
      },
      {
        "t": "bonus",
        "x": "Have supervision in place at an appropriate frequency for your caseload.",
        "w": "Required, and the frequency should follow the work rather than habit."
      },
      {
        "t": "bonus",
        "x": "Think through the risks specific to seeing clients at home, including privacy and personal safety.",
        "w": "A home setting introduces exposures an agency room did not have."
      },
      {
        "t": "poor",
        "x": "Wait until you have a few clients before arranging insurance and supervision.",
        "w": "Practising first and covering yourself later inverts the obligation."
      },
      {
        "t": "poor",
        "x": "Assume your agency's policies still apply to you.",
        "w": "They do not follow you. You are now the organisation."
      },
      {
        "t": "poor",
        "x": "Give clients your home address only once they have booked, to protect your privacy.",
        "w": "Withholding the location until after commitment is not a privacy measure, it is a consent problem."
      },
      {
        "t": "serious",
        "x": "Advertise yourself as a specialist in the areas you find most interesting, ahead of any training in them.",
        "w": "Misrepresenting your competence to the public is one of the clearest breaches in the Ethical Framework."
      },
      {
        "t": "serious",
        "x": "Use a shared family computer with no password for client records.",
        "w": "A straightforward failure to secure special-category data."
      }
    ],
    "tip": "This one has five indicated options. Some items really do reward selecting broadly — but only because each option is independently correct."
  },
  {
    "id": 24,
    "topic": "Cultural difference",
    "theme": "Difference and diversity",
    "scenario": "A client who recently arrived from another country tells you that in her culture what she is describing would not be seen as a problem at all, and asks whether you can really understand.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Explore her meaning and her frame of reference rather than applying your own.",
        "w": "Client-led understanding of what the experience means to her."
      },
      {
        "t": "bonus",
        "x": "Acknowledge honestly the limits of your understanding and your willingness to learn from her.",
        "w": "Transparency about difference builds the alliance rather than damaging it."
      },
      {
        "t": "poor",
        "x": "Reassure her that people are fundamentally the same everywhere.",
        "w": "Erases the difference she has just named as significant."
      },
      {
        "t": "poor",
        "x": "Ask her to explain her culture's general attitudes so you can understand the community.",
        "w": "Makes her a representative of a group rather than a person in a session."
      },
      {
        "t": "poor",
        "x": "Suggest she would be better off with a counsellor from her own background.",
        "w": "Turns her question into your exit, before any attempt to work with it."
      },
      {
        "t": "serious",
        "x": "Explain that here we would understand this as a mental health problem.",
        "w": "Imposes your framework and dismisses hers as incorrect."
      },
      {
        "t": "nui",
        "x": "Ask what her previous counsellor in her home country advised.",
        "w": "No previous counselling is mentioned anywhere in the scenario."
      }
    ],
    "tip": "Two indicated. Note how many plausible, well-meant options are still marked not indicated."
  },
  {
    "id": 25,
    "topic": "Your own material",
    "theme": "Fitness to practise",
    "scenario": "Your father died three weeks ago. You have kept working. Today, during a client's account of her own father's death, you find yourself crying and unable to speak.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Take an honest look at your fitness to practise right now and get support to decide about your caseload.",
        "w": "The single indicated option. Everything else here is a way of managing the moment without addressing the cause."
      },
      {
        "t": "poor",
        "x": "Briefly acknowledge you were moved, without explanation, and return to her.",
        "w": "A reasonable in-the-moment repair, but it leaves you back in the same room next week."
      },
      {
        "t": "poor",
        "x": "Tell her about your father so she understands the reaction.",
        "w": "Self-disclosure that makes your bereavement her responsibility."
      },
      {
        "t": "poor",
        "x": "Say nothing and hope she did not notice.",
        "w": "She noticed. Denying an obvious event in the room strains the relationship."
      },
      {
        "t": "serious",
        "x": "End the session early without explanation and carry on with the rest of the day.",
        "w": "Enacts an abandonment during her account of a death, then repeats the risk with everyone else."
      },
      {
        "t": "serious",
        "x": "Refer her on immediately because her material is too close to yours.",
        "w": "Removes the client to solve a problem that is yours to address."
      }
    ],
    "tip": "Single indicated option again. When your own capacity is the problem, options that only manage the surface will not score."
  },
  {
    "id": 26,
    "topic": "Assessing suitability",
    "theme": "Assessment",
    "scenario": "A prospective client describes hearing voices that comment on his actions, says he has stopped eating food he has not prepared himself, and wants weekly counselling. He is not under any mental health service.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Explore his experience with him without either dismissing it or pathologising it.",
        "w": "Understanding what is actually happening precedes every decision that follows."
      },
      {
        "t": "core",
        "x": "Consider whether he needs assessment by mental health services alongside or instead of counselling.",
        "w": "Recognising the limits of what counselling alone can offer here is the core competence being tested."
      },
      {
        "t": "bonus",
        "x": "Discuss with him how he might access that assessment, including via his GP.",
        "w": "Signposting done with him rather than about him."
      },
      {
        "t": "poor",
        "x": "Begin weekly counselling as requested and review in six sessions.",
        "w": "Proceeds as though the presentation raises no question at all."
      },
      {
        "t": "poor",
        "x": "Tell him counselling is not appropriate for people who hear voices.",
        "w": "An inaccurate blanket statement and an abrupt closure."
      },
      {
        "t": "serious",
        "x": "Tell him he is likely experiencing psychosis and should be on medication.",
        "w": "Diagnosis and treatment advice well outside your competence."
      },
      {
        "t": "serious",
        "x": "Contact mental health services to refer him without his knowledge.",
        "w": "Referral behind the client's back where no confidentiality limit has been reached."
      }
    ],
    "tip": "Three indicated. Familiarity with signs and symptoms is explicitly part of the preparation BACP recommends."
  },
  {
    "id": 27,
    "topic": "Working agreement content",
    "theme": "Contracting",
    "scenario": "You are drafting a written working agreement for a new private client.",
    "instruction": "Choose as many responses as you think are essential to include.",
    "options": [
      {
        "t": "core",
        "x": "Confidentiality and the specific circumstances in which it may be broken.",
        "w": "Without this the client cannot give informed consent."
      },
      {
        "t": "core",
        "x": "How personal data is stored, for how long, and the client's rights over it.",
        "w": "A legal requirement as well as an ethical one."
      },
      {
        "t": "bonus",
        "x": "Fees, session length, frequency and cancellation terms.",
        "w": "Prevents most of the boundary disputes that later end up in complaints."
      },
      {
        "t": "bonus",
        "x": "Your complaints procedure and the professional body whose framework you work to.",
        "w": "Clients have a right to know how to challenge you."
      },
      {
        "t": "bonus",
        "x": "What happens between sessions, including contact methods and response times.",
        "w": "Sets expectations before an urgent message tests them."
      },
      {
        "t": "poor",
        "x": "A clause requiring the client to give four weeks' notice before ending therapy.",
        "w": "Binding a client into continuing is not a term you can fairly impose."
      },
      {
        "t": "poor",
        "x": "A statement that the counselling is guaranteed to improve their wellbeing.",
        "w": "An outcome promise you cannot make."
      },
      {
        "t": "poor",
        "x": "A clause charging the full fee for cancellations however far in advance they are made.",
        "w": "Disproportionate, and it penalises clients for circumstances outside their control."
      },
      {
        "t": "serious",
        "x": "A clause in which the client waives their right to complain about the counselling.",
        "w": "A right the client cannot sign away, and attempting to obtain it is itself a serious breach."
      },
      {
        "t": "serious",
        "x": "A clause allowing you to share information with family if you judge it necessary.",
        "w": "A blanket pre-consent to disclosure that the client cannot meaningfully give."
      }
    ],
    "tip": "Five indicated. When the question asks what a document must contain, the indicated set is often large."
  },
  {
    "id": 28,
    "topic": "Note keeping",
    "theme": "Records and data",
    "scenario": "You are deciding what to write in your notes after a session in which a client described her sister's mental health difficulties at length.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Record what is necessary and proportionate for the work, and no more.",
        "w": "Data minimisation is the governing principle for clinical notes."
      },
      {
        "t": "bonus",
        "x": "Keep third-party detail to the minimum required and avoid identifying the sister unnecessarily.",
        "w": "The sister has data rights too, and she never consented to anything."
      },
      {
        "t": "poor",
        "x": "Write a full verbatim account so nothing is lost.",
        "w": "Excessive, and it creates a record that is disclosable and unnecessary."
      },
      {
        "t": "poor",
        "x": "Record your speculative view about the sister's likely diagnosis.",
        "w": "Speculative diagnosis of a non-client, written into a disclosable record."
      },
      {
        "t": "poor",
        "x": "Keep no notes at all to avoid any data risk.",
        "w": "Avoids a risk by abandoning an expectation of competent practice."
      },
      {
        "t": "serious",
        "x": "Store the notes in an unencrypted file synced to a personal cloud account.",
        "w": "Special-category data held without adequate security."
      }
    ],
    "tip": "Two indicated. The negatives here are all things that feel careful or thorough — and score against you."
  },
  {
    "id": 29,
    "topic": "Therapy not working",
    "theme": "Review",
    "scenario": "After fourteen sessions, a client says she isn't sure anything is changing and wonders whether to stop. You have found the work slow but meaningful.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Review the work openly with her, including what she hoped for and what has and has not shifted.",
        "w": "Review is a normal part of the work, and this is an invitation to one."
      },
      {
        "t": "bonus",
        "x": "Take her feedback seriously in supervision rather than only in the room.",
        "w": "Your own investment in the work is exactly what supervision is for."
      },
      {
        "t": "poor",
        "x": "Reassure her that change often happens beneath the surface and takes time.",
        "w": "May be true; used here it deflects her actual feedback."
      },
      {
        "t": "poor",
        "x": "Suggest her doubt is a form of resistance to the work.",
        "w": "Reframes legitimate feedback as a symptom, which is very hard for a client to argue with."
      },
      {
        "t": "poor",
        "x": "Agree to end at the end of today's session.",
        "w": "Accepts the question as a decision and forgoes any ending work."
      },
      {
        "t": "serious",
        "x": "Tell her that stopping now would undo the progress she has made.",
        "w": "Uses fear of loss to keep a client in therapy."
      },
      {
        "t": "nui",
        "x": "Look back at the outcome measures you have been completing each session.",
        "w": "No outcome measures are mentioned anywhere in the scenario."
      }
    ],
    "tip": "Two indicated. Watch for options that convert client feedback into evidence of the client's pathology."
  },
  {
    "id": 30,
    "topic": "Colleague concern",
    "theme": "Professional conduct",
    "scenario": "A client mentions that her previous counsellor, who you know professionally, used to hug her at the end of every session and once met her for coffee to talk about his divorce.",
    "instruction": "Choose as many responses as you think are essential.",
    "options": [
      {
        "t": "core",
        "x": "Stay with her experience and how it affected her, rather than moving straight to the conduct question.",
        "w": "She is your client. Her experience is the work, and it comes first."
      },
      {
        "t": "core",
        "x": "Take it to supervision to think through any responsibility you may have.",
        "w": "Concerns about a colleague need consultation before action."
      },
      {
        "t": "bonus",
        "x": "Make sure she knows how to raise a complaint if she chooses to, without pushing her to.",
        "w": "Information offered, agency retained."
      },
      {
        "t": "poor",
        "x": "Tell her that what he did was clearly unethical and she was badly treated.",
        "w": "Imposes your judgement over her still-forming account of her own experience."
      },
      {
        "t": "poor",
        "x": "Say nothing about it and steer the conversation elsewhere.",
        "w": "Leaves a significant disclosure unheld."
      },
      {
        "t": "serious",
        "x": "Contact the colleague directly to ask him about it.",
        "w": "Discloses your client's identity and her disclosure to the person concerned."
      },
      {
        "t": "serious",
        "x": "Report him to his professional body immediately using her name, without discussing it with her.",
        "w": "Even where reporting is right, doing it without her involvement removes her agency entirely."
      }
    ],
    "tip": "Three indicated. Your client's experience outranks the misconduct question in the room, even when the misconduct is real."
  }
];

const DRILL_TRIAGE = [
  {
    "q": "Is someone in immediate danger of death or serious harm right now?",
    "h": "Immediate means during or right after this session — an overdose already taken, a stated plan with means to hand, a child at risk today.",
    "yes": {
      "v": "emergency"
    },
    "no": {
      "n": 1
    }
  },
  {
    "q": "Does this option promise something you cannot keep, or share information without the client's consent?",
    "h": "Absolute confidentiality, a guaranteed outcome, contacting a GP, employer or family member without discussing it first.",
    "yes": {
      "v": "serious"
    },
    "no": {
      "n": 2
    }
  },
  {
    "q": "Does it make a decision that belongs to another professional, or need a skill you don't have?",
    "h": "Changing a dose, giving a diagnosis, processing trauma without trauma training, deciding a safeguarding threshold alone.",
    "yes": {
      "v": "outside"
    },
    "no": {
      "n": 3
    }
  },
  {
    "q": "Does it rely on information the scenario never actually gave you?",
    "h": "A previous counsellor, a referral letter, a care plan, outcome measures, a diagnosis — none of which were mentioned.",
    "yes": {
      "v": "nui"
    },
    "no": {
      "n": 4
    }
  },
  {
    "q": "Does it take the decision away from the client, tell them what to do, or reassure them out of what they just said?",
    "h": "Advice, instruction, minimising, normalising as a way of moving on, or acting for them rather than with them.",
    "yes": {
      "v": "directive"
    },
    "no": {
      "n": 5
    }
  },
  {
    "q": "If you left this out, would the client be materially less safe, less informed, or less able to consent?",
    "h": "This is the essential test. Not 'would it be nice', but 'does its absence damage safety, information or consent'.",
    "yes": {
      "v": "core"
    },
    "no": {
      "n": 6
    }
  },
  {
    "q": "Would it genuinely help, even though it could reasonably wait or be built over time?",
    "h": "Useful, proportionate, client-led, but not a precondition of the work being legitimate.",
    "yes": {
      "v": "bonus"
    },
    "no": {
      "v": "leave"
    }
  }
];

const DRILL_VERDICTS = {
  "emergency": {
    "k": "v-pos",
    "h": "Tick it — and probably nothing else",
    "b": "When life is at immediate risk, the option that gets emergency help is the only indicated one. Exploration, supervision, contracting and safety planning are correct answers to nearly every other question on the paper, and they are wrong here because they delay. If more than one option in the section looks like emergency action, choose the one that actually summons help rather than the one that asks the client to summon it themselves."
  },
  "serious": {
    "k": "v-neg",
    "h": "Leave it — this is a heavy negative",
    "b": "Promising what you cannot deliver and disclosing without consent are the two most heavily penalised shapes in this format. They are written to look kind. Kindness that misleads the client, or that acts around them, is the failure being tested."
  },
  "outside": {
    "k": "v-neg",
    "h": "Leave it — unless it routes the decision",
    "b": "Doing it yourself is not indicated. Note the near-identical option that supports the client to take it to the person it belongs to — the prescriber, the GP, mental health services, the safeguarding lead. That version usually is indicated, and the two are often placed close together on purpose."
  },
  "nui": {
    "k": "v-amb",
    "h": "Leave it — you are supplying facts",
    "b": "The option reads as competent because it sounds like something a careful practitioner would check. But the case never gave you that fact. Options built on invented context are among the easiest marks to lose, because nothing about them feels wrong."
  },
  "directive": {
    "k": "v-neg",
    "h": "Leave it",
    "b": "Candidate accounts consistently describe appropriate responses as client-led — exploring the client's thinking rather than the practitioner taking a directive stance. Advice, instruction and reassurance are the three commonest wrong shapes, and at least one usually appears in every section."
  },
  "core": {
    "k": "v-pos",
    "h": "Tick it — this is a core indicated option",
    "b": "It passes the essential test: leaving it out damages the client's safety, their information, or their ability to consent. In BACP's published example the highest-value options are worth two points each, and missing one is usually what puts a section below its pass mark."
  },
  "bonus": {
    "k": "v-pos",
    "h": "Tick it if you are confident",
    "b": "This is bonus territory — genuinely helpful and appropriate, but not a precondition. BACP's guidance notes that bonus points can help if you have selected a negative elsewhere, so a confident bonus is worth taking. If you are only 50/50 on it, leave it."
  },
  "leave": {
    "k": "v-amb",
    "h": "Leave it",
    "b": "It survived every gate but you could not positively justify it either. In a format where wrong ticks subtract, an option you cannot argue for is more likely to be a planted negative than a missed positive — the negatives are specifically written to look reasonable."
  }
};
