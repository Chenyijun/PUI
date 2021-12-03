import ReactTooltip from 'react-tooltip';

interface editorProps {
  type: string,
  content: string,
  indent?: boolean
}

interface Props {
 level: number
 type: string
 instructions: React.ReactNode
 characterText: string
 editor: Array<editorProps>
 answer: Array<string>
 help?: string
}

const cssExplanations = {
  'justifyContent': 'Align items along main-axis',
  'justifyContentExamples':'center | start | end | flex-start | flex-end | left | right | space-between | space-around| space-evenly',
  'alignItems': 'Aligns items along the cross-axis',
  'alignItemsExamples':'center | start | end | flex-start | flex-end| baseline',
  'columnStart': "specify grid item's start position",
  'columnStartExamples': 'auto | # | span #',
  'gridRow': 'Shorthand for grid-row-start + grid-row-end',
  'gridRowExamples': ' auto | # / # | # / span #',
  'gridCol': 'Shorthand for grid-col-start + grid-col-end',
  'gridColExamples': ' auto | # / # | # / span #',
  'direction': 'how flex items are placed in the flex container',
  'directionExamples': 'row | row-reverse | column | column-reverse'
}

const lvl1instructions = (
  <>
    <p>Using a combination of <b data-tip data-for='justify'>justify-content</b> and <b data-tip data-for='align'>align-items</b> to allow each member of the party to reach their destination.</p>
    <ReactTooltip id='justify' aria-haspopup='true'>
      <p>{cssExplanations.justifyContent}</p>
      <p>{cssExplanations.justifyContentExamples}</p>
    </ReactTooltip>
    <ReactTooltip id='align' aria-haspopup='true'>
      <p>{cssExplanations.alignItems}</p>
      <p>{cssExplanations.alignItemsExamples}</p>
    </ReactTooltip>
  </>
)
const lvl2instructions = (
  <>
    <p>Use <b data-tip data-for='start'>grid-column-start</b> to send the attack from the Mage to the monster!</p>
    <ReactTooltip id='start' aria-haspopup='true'>
      <p>{cssExplanations.columnStart}</p>
      <p>{cssExplanations.columnStartExamples}</p>
    </ReactTooltip>
  </>
)
const lvl3instructions = (
  <>
    <p>Use <b data-tip data-for='row'>grid-row</b> to create a firewall between the monster and our party</p>
    <ReactTooltip id='row' aria-haspopup='true'>
      <p>{cssExplanations.gridRow}</p>
      <p>{cssExplanations.gridRowExamples}</p>
    </ReactTooltip>
  </>
)
const lvl4instructions = (
  <>
    <p>Use <b data-tip data-for='direction'>flex-direction</b> to reorganize the party so that Warrior is closest to the monster in a column</p>
    <ReactTooltip id='direction' aria-haspopup='true'>
      <p>{cssExplanations.direction}</p>
      <p>{cssExplanations.directionExamples}</p>
    </ReactTooltip>
  </>
)

const lvl5instructions = (
  <>
    <p>Use <b data-tip data-for='row'>grid-row</b> and <b data-tip data-for='col'> grid-column </b>to send a heal to Warrior.</p>
    <ReactTooltip id='row' aria-haspopup='true'>
      <p>{cssExplanations.gridRow}</p>
      <p>{cssExplanations.gridRowExamples}</p>
    </ReactTooltip>
    <ReactTooltip id='col' aria-haspopup='true'>
      <p>{cssExplanations.gridCol}</p>
      <p>{cssExplanations.gridColExamples}</p>
    </ReactTooltip>
  </>
)

export const levels:Array<Props> = [
  {
    level: 1,
    type: 'flex',
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
    answer: ['space-around', 'end'],
    help: "Hint: Have you tried space-____?"
  },
  {
    level: 2,
    type: 'grid',
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
  },
  {
    level: 3,
    type: 'grid',
    instructions: lvl3instructions,
    characterText: "Let's not let the monsters get any closer! Mage please cast <Firewall> to prevent them from approaching.",
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
      {type: 'text',
      content: "grid-column-start: 2;",
      indent: true},
      {type: 'input',
      content: 'grid-row: 1 / ',
      indent: true},
      {type: 'text',
      content: '}'}
    ],
    answer: ['span 3'],
    help: 'Another way to do it is grid-row: 1 / -1;'
  },
  { 
    level: 4,
    type: 'grid',
    instructions: lvl4instructions,
    characterText: "Watch out Healer! Stand behind me!",
    editor: [
      {type: 'text',
      content: ".party {"},
      {type: 'text',
      content: "display: flex;",
      indent: true},
      {type: 'text',
      content: 'justify-content: start;',
      indent: true},
      {type: 'text',
      content: 'align-items: center;',
      indent: true},
      {type: 'input',
      content: 'flex-direction:',
      indent: true},
      {type: 'text',
      content: "}"},
    ],
    answer: ['column-reverse'],
    help: 'Not quite "column" since the Healer is in front, I wonder how you can reverse it'
  },
  {
    level: 5,
    type: 'grid',
    instructions: lvl5instructions,
    characterText: "I'm hurt! Healer please help!",
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
      content: "#heal {"},
      {type: 'input',
      content: "grid-column: ",
      indent: true},
      {type: 'input2',
      content: 'grid-row:',
      indent: true},
      {type: 'text',
      content: '}'}
    ],
    answer: ['3', '3'],
    help: 'Take a look back at level 3'
  }
]

export const getLevelInfo = (level:number):Props => {
  const chosenLevel:Props = levels[level]
  return chosenLevel
}