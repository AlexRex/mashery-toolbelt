const PropTypes = require('prop-types')
const eachProps = require('each-props')
const inquirer = require('inquirer')
const deep = require('../../utils/deep')
const loadDataFile = require('../../utils/loadDataFile')
const blueprintPropTypes = require('./utils/blueprintPropTypes')

const USER_INPUT = 'INPUT!'
const PROP_TYPE_LOG_TEXT = 'Warning: Failed prop type: '

// Collect all properties with value of USER_INPUT and request user to enter them.
// Then replace them in blueprint
function waitForUserInputs (blueprint) {
  const inputs = []

  eachProps(blueprint, (value, path) => {
    if (value === USER_INPUT) {
      inputs.push(path)
    }
  })

  const questions = inputs.map(path => ({
    name: path,
    type: 'input',
    message: `Value for ${path}:`,
    allow_empty: true
  }))

  return inquirer.prompt(questions).then(answers => {
    for (key in answers) {
      deep.set(blueprint, key, answers[key])
    }

    return blueprint
  })
}

function loadBlueprint (blueprint) {
  if (!blueprint) {
    return null
  }

  if (typeof blueprint === 'string') {
    blueprint = loadDataFile(blueprint)
  }

  const origError = console.error
  const errors = []

  console.error = function (...argumens) {
    if (
      typeof arguments[0] === 'string' &&
      argumens[0].startsWith(PROP_TYPE_LOG_TEXT)
    ) {
      errors.push(argumens[0].replace(PROP_TYPE_LOG_TEXT, ''))
    } else {
      origError(...arguments)
    }
  }

  PropTypes.checkPropTypes(blueprintPropTypes, blueprint, 'prop', 'blueprint')
  console.error = origError

  if (errors.length > 0) {
    throw new Error(`Blueprint contains errors:\n${errors.join('\n')}`)
  }

  return waitForUserInputs(blueprint)
}

module.exports = loadBlueprint
