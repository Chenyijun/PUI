import ReactTooltip from 'react-tooltip';

interface editorProps {
  type: string,
  content: string,
  indent?: boolean
}

interface Props {
 level: number
 instructions: React.ReactNode
 characterText: string
 editor: Array<editorProps>
 answer: Array<string>
}

const lvl1instructions = (
  <>
    <p>Using a combination of <b data-tip='Justify-content'>justify-content</b> and <b>align-items</b> to allow each member of the party to reach their destination.</p>
    <ReactTooltip />
  </>
)
const lvl2instructions = (
  <>
    <p>Use <b>grid-column-start</b> to send the attack from the Mage to the monster!</p>
    <ReactTooltip />
  </>
)

export const getLevelInfo = (level:number):Props => {
  const levels:Array<Props> = [
    {
      level: 1,
      instructions: lvl1instructions,
      characterText: "Let’s prepare for our first adventure! First we need to collect some supplies! I can stop by the guild to gather more information. The Cleric can go stock up on potions. The Mage can stop by the blacksmith to upgrade our weapons.",
      editor: [
        {type: 'text',
        content: ".party {"},
        {type: 'text',
        content: "display: flex;",
        indent: true},
        {type: 'input',
        content: 'justify-content:',
        indent: true},
        {type: 'input2',
        content: 'align-items:',
        indent: true},
        {type: 'text',
        content: "}"},
      ],
      answer: ['space-around', 'end']
    },
    {
      level: 2,
      instructions: lvl2instructions,
      characterText: "Oh no it's a monster! Let's have the Mage send a fireball to defeat the monster!",
      editor: [
        {type: 'text',
        content: ".fields {"},
        {type: 'text',
        content: 'display: grid;',
        indent: true},
        {type: 'text',
        content: 'grid-template-columns: 1fr 1fr 1fr;',
        indent: true},
        {type: 'text',
        content: 'grid-template-rows: 1fr 1fr 1fr;',
        indent: true},
        {type: 'text',
        content: '}'},
        {type: 'text',
        content: ''},
        {type: 'text',
        content: "#fireball {"},
        {type: 'input',
        content: 'grid-column-start:',
        indent: true},
        {type: 'text',
        content: '}'}
      ],
      answer: ['3']
    }
  ]
  const chosenLevel:Props = levels[level]
  return chosenLevel
}