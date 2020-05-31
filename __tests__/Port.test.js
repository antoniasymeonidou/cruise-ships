const Port = require('../src/Port.js')

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object)
  })

  it('returns an object', () => {
    const port = new Port('Luna')
    expect(port.name).toEqual('Luna')
  })
})
