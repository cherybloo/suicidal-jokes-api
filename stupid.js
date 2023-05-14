//making JSON file

var fs = require("fs");

var options = [
    'A guy walks into a library and asks the librarian for a book on committing suicide.She responds, “Fcuk off, you won’t bring it back.”',   
    'Did you hear about the influencer who became a suicide bomber?At first, he had barely any followers, but then he blew up.',
    'Why did the mathematician commit suicide?Because he had too many problems.',
    'Yo mama so ugly, your birth certificate is an apology letter from the condom factory!',
    'Did you hear about the man who got fired from his job at the suicide hotline?Apparently, they aren’t familiar with the reverse psychology approach.',
    'A pessimist sees a dark tunnel, an optimist sees a light at the end of the tunnel.A realist sees a freight train and the train driver sees three idiots standing on the tracks.',
    'The wife said to her husband, “If I ever get Alzheimers I would commit suicide rather than burdening you with me.”He said, “Thats the fifth time you’ve said that today.”',
    'Why are jokes about suicide bombers not funny?Well for starters, their delivery is just everywhere.',
    'Why do Gardeners commit suicide?Because the grass is always greener on the other side.',
    'How does a Pokemon trainer commit suicide?Escape rope.',
    'Yo mama so ugly, her job is standing in front of the doctor’s office making people sick.',
    'What did they say about the artist who completed suicide by jumping off a building?Well, at least they finally made an impact on the world.',
    'Do you know that some consider Romeo and Juliet a tale of true romantic love?But only if you consider 2 underage kids in a relationship that lasted 3 days causing 2 suicides and 3 murders romantic.',
    'Who are the best readers in the world?Suicide jumpers : hundreds of stories in a few seconds.',
    'What do you call it when someone commits suicide on a mountain?A cliff hanger.',
    'A group of motorcyclists is riding down the road when they notice a girl about to leap from a bridge. They decide to pull over to check.The biker boss gets off his bike and inquires about the girl’s behavior.“I’m going to kill myself by jumping off this bridge.” She replies.Not wanting to appear sensitive in front of his gang, but yet not wanting to pass up the opportunity, the biker offers, “How about you come here and give me a kiss before you jump?”The girl approaches the motorcyclist and kisses him passionately.“Whoa.” says the biker. “That’s the best kiss I have ever had. Are you sure you want to let that talent go to waste?”“No” she replies. “But my parents kicked me out of the house for dressing like a girl.”',
    'What do you do when your suicidal friend asks for a hi-five?You leave him hanging.',
    'Did you hear about the neighbor who told his therapist that they are having suicidal thoughts?He now makes me pay in advance.',
    'Why did the French chef commit suicide?He lost the huile d’olive.',
    'Yo mama so ugly, Doomslayer committed suicide.',
    'How do frogs kill themselves?They Kermit suicide.',
    'Why did the crows fly into the jet engine on purpose?It was a murder-suicide.',
    'What’s inside a suicidal closet?A hanger.',
    'Ever heard the one about the suicidal guy on a skyscraper?Yeah, that one’s a little on the edge.',
    'An old guy was going through a park adjacent to the famed suicide cliff when he noticed a young woman standing at the edge considering death.He came up to her.“Don’t come near me!” she yelled.“Since you’re going to die anyhow, why can’t you make this old man happy with a quickie?” the old man explained.“Over my dead body, you disgusting pervert,” she screamed.“Well, if that’s the case, I’ll walk down and wait for you at the bottom,” the old man remarked as he walked away.The woman stood for another ten minutes before returning to her car and driving away.The old man who was watching her from the bushes sighed, “7 suicide attempts saved this month.”',
    'Why did the blood cell commit suicide?It realized everything it did was in vein.',
    'Why do people commit suicide on railway tracks?Because they have loco motives.',
    'What do you call a flat emo girl?A cutting board.',
    'What’s an emo person’s favorite sport?Jump rope.',
    'Why did the psychotherapist ask his suicidal patient to change his name to ‘Jeffrey Epstein’?To make sure he doesn‘t kill himself.',      
    'Yo mama so short, she committed suicide by jumping off the bed.',
    'Why did Henri Lautrec contemplate suicide?Thought he had nothing else Toulouse.',
    'How do you make a walrus commit suicide?Point at its chest and say, “’What’s that?’”',
    'Why are suicide jokes like bleach?They don’t go down well.',
    'What did the programmer’s suicide note say?“Goodbye world”',
    'An old woman decided she’s had enough of life and wanted to commit suicide.She decided she was going to shoot herself in the heart.So she calls her doctor and asks him, “Doc, where is the heart located in the body?”“Just below your left breast” the doctor explains to her.“Thanks,” she says, and shoot’s herself in the knee.',
    'What’s suicide bombers’ biggest fear?Dying alone.',
    'Why are hairdressers suicidal?They just want to dye.',
    'Why is suicide illegal in China?Destruction of government property.',
    'Why did the Heaven’s Gate Cult commit suicide?They just wanted to keep up with the Joneses.',
    'Yo mama so stupid, she tried to commit suicide by running her Tesla in an enclosed space.',
    'Do you know the problem with suicide jokes?They always end abruptly.',
    'Have you ever realized that suicide could solve all your problems?If you could just get the right people to try it.',
    'A suicidal man had had enough of his misery and chose to jump off his balcony.He stepped out onto the balcony and gripped the railing, looking up to the sky for a sign. Something catches his attention in the corner of his eye. He lowers his sight and notices his armless neighbor, who lives in the building across the street, dancing and raving despite the lack of music.Baffled by this, he yells to the neighbor, “Hey you!”“What?!” asks the neighbor.“How come you’re dancing and raving and having a blast?“What are you talking about!?”“No for real, I’m about to take my life, all limbs intact and you’re armless dancing around? How come?”“Mate, I don’t know what you’re on but I’ve been trying to scratch my ass the last 20 minutes.”',
    'What do you call a suicide bomber in a wheelchair?An RC-XD.',
    'When is the best time to commit suicide?Ate a glock in the morning.',
    'What do you call a Russian suicide bomber?A kommiekaze.',
    'What do you call a suicidal pig?Hambitious.',
    'A man walks into a bar with his head down and shoulders slumped.“Why so blue?” the bartender asks.“I just found out my wife is cheating on me,” the man replies, “so I’ve decided I’m going to drink myself to death. I’ll have some whiskey, please.”“I’m very sorry to hear that,” the bartender says, “but I can’t help you kill yourself.”“Well, what would you do in my situation?” the man asks.The bartender puffs out his chest a bit and says, “Well, if I found out a guy was sleeping with my wife, I wouldn’t sit around feeling sorry for myself…I’d kill the man!”The man jumps up from his stool and exclaims, “That’s a great idea! Thanks!” and runs out of the bar.A couple of hours go by and the bartender starts to get nervous. Suddenly, the man walks back into the bar with a big smile on his face.“Did you kill the guy?” The bartender asks nervously.“Nope! I slept with your wife. I’ll have some whiskey, please.”',
    'A suicide bomber went to heaven.The Angel at the front desk greeted him.',
    'How do homeopaths do suicide?With a fatal underdose.',
    'Did you hear about the neighborhood that organized the best suicide story competition?No one showed up.',
    'What did the physicist say to the suicidal guy on the bridge?Don’t do it! You have potential!',
    'What did the ambitious suicidal person say?“I’m going to kill myself, or die trying.”',
    '“Hi, welcome. There are 72 very horny virgins waiting for you!”“I knew it!” said the bomber. “Bring me the women!”The Angel smiled and said, “Who mentioned anything about women?”',
    'How do you know all suicide bombers self-identify as being old?They are all boomers in the end.',
    'Did you hear about the suicide blonde?Dyed by her own hand.',
    'What kind of meat do you throw at a suicidal man to keep him from jumping?Liver.',
    'What do women with big boobs and suicidal people have in common?Everyone is intrigued when they jump.',
    'Did you hear about the Coca-Cola worker who committed suicide using a can?He was soda pressed.',
    'Why did the suicidal man get a job at the nuclear power plant?For exposure.',
    'A depressed young woman who had lost her job and her home had resolved to take her own life.When a young man noticed her, she was walking along a bridge across the bay, working up the courage to leap in.“Don’t do it!” he yelled. When he glanced at her, he realized she was stunning. He got closer.“What’s the matter?” he inquired. The woman informed him.“All right, here’s the deal,” he continued. “I’m a member of a ship leaving for Europe tomorrow morning. Why don’t you join me aboard the ship? I’ll bring you some food and beverages.” He wrapped his arm over hers. “I make you happy, and you make me happy.”She nodded. There wasn’t much else to do, after all. She didn’t have any relatives. The man was also pretty attractive. There’s no harm in giving it a shot.He hid her in one of the ship’s lifeboats with a pillow and a blanket the next morning. He brought her three sandwiches and a piece of fruit every night, and they slept until sunrise.The captain was performing his rounds one day, perhaps a week after the affair began, and discovered her inside one of the lifeboats. “What on earth are you doing here?” She explained what was happening.“I get food and a trip to Europe, and he gets to screw me.”“He sure does, sweetheart. This is the Sydney Harbor Ferry.”',
    'Why is the suicide rate so high for US sailors?Because they have the Navy blues.',
    'What do you call a suicidal therapist?A hypocrite.',
    "What's the worst thing about being suicidal?The school shooter will always spare you.",
    'Why did the chicken commit suicide?To get to the other side.',
    'Why did Logan Paul go to the suicide forest?To kill his career.',
    'What is the common thing between an entrepreneur and a suicide bomber?Do the job well on first try and they are set for life.',
    'A patient consults with his therapist following a suicide attempt.“Well, Greg, I’ve heard you tried suicide the other day. Is this right?” enquires the therapist.“Unfortunately, this is correct. My wife opted to divorce me, and my children chose to live with her; it hit me hard, man “Greg stated.“I realize this is going to be difficult for you, but could you kindly explain what happened during your suicide attempt and what prevented you?” asks the therapist.“So I went up to this cliff with the door closed and waited for a minute debating whether to just drive away and end it all. Fortunately, there were a dozen people who didn’t want me to give up just yet, and so I didn’t.” Greg stated.“Sounds like remarkable individuals; who were they?” says the therapist.“The people in the back of the bus,” Greg answers.Why did the dolphin commit suicide?He thought his life had no porpoise.',
    'A homicidal and a suicidal patent are put in the same room in a psych ward.The suicidal person says, “Well, that makes 2 people that want me dead.”',
    'How do you help a friend who is on the verge of suicide?Give them a push in the right direction.',
    'What is the thing we learned from cyberbullying?Fat people prefer to commit suicide rather than start a diet.',
    'Why did the feminist jump off the building?She was trying to equalize the suicide rates.',
    'Why do depressed people commit suicide?It lifts their spirits.',
    'What do you call a group of teenage emo girls?Suicide Squad.',
    'A study shows that while more women attempt suicide than men, men are more likely to succeed because they use more lethal of methods.Which just goes to show you, if you want something done right, have a man do it.',
    'What’s the worst thing to say to a suicidal person?“Hang in there, buddy.”',
    'What’s another way to describe suicide?Self-Checkout.',
    'What do you call an overweight suicidal person’s funeral?A large depression in the ground.'
  ]
  
var alexaAnswer=[]

for(var a=0;a<options.length;a++){
    if(options[a].includes('?') && options[a].length<=100){
        qna=options[a].split("?");
        alexaAnswer.push({questions:`${qna[0]}?`,answer:qna[1]});
    }
    else{
        alexaAnswer.push({randomFact:options[a]});
    }
}

var jsonString = JSON.stringify(alexaAnswer);
fs.writeFile('suicidal.json', jsonString,err=>{
    if(err) console.log("fuck myself");
    else console.log("ah shit it's working");
});
