interface editorProps {
  type: string,
  content: string
}

interface Props {
 level: number
 instructions: string
 characterText: string
 editor: Array<editorProps>
 answer: Array<string>
}


export const getLevelInfo = (level:number):Props => {
  const levels:Array<Props> = [
    {
      level: 1,
      instructions: "Using a combination of justify-content and align-items to allow each member of the party to reach their destination.",
      characterText: "Let’s prepare for our first adventure! First we need to collect some supplies! I can stop by the guild to gather more information. The Cleric can go stock up on potions. The Mage can stop by the blacksmith to upgrade our weapons.",
      editor: [
        {type: 'text',
        content: ".party {"},
        {type: 'text',
        content: "display: flex;"},
        {type: 'input',
        content: 'justify-content:'},
        {type: 'input2',
        content: 'align-items:'},
        {type: 'text',
        content: "}"},
      ],
      answer: ['space-around', 'end']
    },
    {
      level: 2,
      instructions: "Use grid-column-start to send the attack from the Mage to the monster!",
      characterText: "Oh no it's a monster! Let's have the Mage send a fireball to defeat the monster!",
      editor: [
        {type: 'text',
        content: ".fields {"},
        {type: 'text',
        content: 'display: grid;'},
        {type: 'text',
        content: 'grid-template-columns: 1fr 1fr 1fr;'},
        {type: 'text',
        content: 'grid-template-rows: 1fr 1fr 1fr;'},
        {type: 'text',
        content: '}'},
        {type: 'text',
        content: ''},
        {type: 'text',
        content: "#fireball {"},
        {type: 'input',
        content: 'grid-column-start:'},
        {type: 'text',
        content: '}'}
      ],
      answer: ['3']
    }
  ]
  const chosenLevel:Props = levels[level]
  return chosenLevel
}