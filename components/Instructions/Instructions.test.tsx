import { describe, test, expect, vi } from 'vitest'
// import {render, screen} from 'vitest-dom'

import Instructions, { StylesType } from './Instructions'

describe("Instructions component", () => {
  const myStyles = vi.fn().mockReturnValue({})

  test("should render", () => {
    render(<Instructions/>)

    expect(screen.getByRole('form')).toBeDefined()
  })
})