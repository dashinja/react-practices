import styles from '@/styles/Home.module.css'
import { useReducer } from 'react'
import { CountActionType, countReducer, InitialActionType, InitialSubmitState, submitReducer, SubmitStateType } from '@/utilities/reducers'

export default function Home() {

  const [countState, dispatchCount] = useReducer(countReducer, InitialActionType)

  const [submittedState, dispatchSubmitted] = useReducer(submitReducer, InitialSubmitState)

  const previouslySubmittedValues = submittedState.arrayValue.join(', ')

  return (
    <div className={styles.myCenter}>
      <h3>Main Page</h3>

      <form>
        <label htmlFor='initial-amount'>Choose an Initial Number</label>
        <br />
        <input
          id='initial-amount'
          type={'text'}
          onChange={(e) => {
            !Number.isNaN(parseInt(e.target.value)) ?
              dispatchCount({
                type: 'changed_input',
                value: parseInt(e.target.value)
              } as CountActionType) :
              dispatchCount({
                type: 'changed_input',
                value: 0
              })
          }}
          value={countState.value}
        />
        <br />

        <button
          onClick={(e): void => {
            e.preventDefault()
            dispatchCount({
              type: '+1',
              value: countState.value
            } as CountActionType)
          }}
        >
          +1 Value
        </button>

        <button
          onClick={(e): void => {
            e.preventDefault()
            dispatchCount({
              type: '-1',
              value: countState.value
            } as CountActionType)
          }
          }
        >
          -1 Value
        </button>


        <button
          onClick={(e) => {
            e.preventDefault()
            dispatchSubmitted({
              type: 'submitted',
              arrayValue: submittedState.arrayValue,
              newValue: countState.value
            } as SubmitStateType)
          }}
        >
          Submit
        </button>
      </form>
      <div>
        <label htmlFor='prev-sub'>Previous Submissions</label>
        <div id='prev-sub'>{previouslySubmittedValues}</div>
      </div>
    </div>
  )
}
