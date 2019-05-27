const CRDT = require('delta-crdts')

const Mvreg = CRDT('mvreg')

const replica1 = Mvreg('replica1')

console.log('replica1 state 1.1', replica1.state())

console.log('write a to replica1')
const delta1 = replica1.write('a')

console.log('delta1', delta1)

console.log('replica1 state 1.2', replica1.state())

console.log('replica1 value', replica1.value())

console.log('---')

const replica2 = Mvreg('replica2')

console.log('replica2 state 2.1', replica2.state())

console.log('apply delta1')
replica2.apply(delta1)

console.log('replica2 state 2.2', replica2.state())

console.log('replica2 value', replica2.value())

console.log('---')

console.log('replica2 state 2.2', replica2.state())

console.log('write b to replica2')
const delta2 = replica2.write('b')

console.log('replica2 state 2.3', replica2.state())

console.log('replica2 value', replica2.value())

console.log('---')

console.log('replica1 state 1.2', replica1.state())

console.log('apply delta2')
replica1.apply(delta2)

console.log('replica1 state 1.3', replica1.state())

console.log('replica1 value', replica1.value())
