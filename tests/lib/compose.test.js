import { compose } from '../../src/lib/compose'

describe('ufo:lib:compose', () => {
    test('compose', () => {
        expect(compose({ a: 1 })).toEqual({ a: 1 });
        expect(compose({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
        expect(compose({ a: 1 }, { b: 2 }, {c: 3})).toEqual({ a: 1, b: 2, c: 3 });
    })
    test('compose:override', () => {
        expect(compose({ a: 1 }, { b: 2 }, {b: 3})).toEqual({ a: 1, b: 3 });
    })
})
