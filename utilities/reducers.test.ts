import { CountActionType, countReducer, InitialActionType } from './reducers'

import {expect, test, describe } from 'vitest'

describe("DispatchCount", () => {
  test("reducer should return 1 for value field", () => {
    let countState = {
      type: '+1',
      value: 0
    }

    const newState = countReducer(countState as CountActionType, {type: '+1', value: 0} )

    expect(newState.value).toBe<CountActionType['value']>(1)
  })
})
