/* eslint react/react-in-jsx-scope: 0, react/display-name: 0 */
'use strict'
const { h, Text } = require('ink') // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Website',
    url: 'https://shoheihagiwara.github.io/resume'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/shoheihagiwara'
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/shoheihagiwara',
  },
  {
    label: 'Quit',
    action() {
      process.exit() // eslint-disable-line no-process-exit,unicorn/no-process-exit
    },
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>Hi! I'm Shohei!</Text>
      <Text>I love developing software!</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
