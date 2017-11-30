const { expect } = require('chai')
const asyncUtil = require('./index')

describe('asyncUtil', () => {
  it('should catch exceptions of a function passed into it', async () => {
    const error = new Error('catch me!')
    const foo = asyncUtil(() => {
      throw error
    })
    expect(foo).to.throw(error)
  })

})
