import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface CountdownProps {
  timeRemaining: number
}

const CSS_HANDLES: readonly string[] = [
  'countdown',
  'countdownWrapper',
  'countdownCard',
]

export const Countdown: FC<CountdownProps> = ({ timeRemaining }) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  const days = Math.floor(timeRemaining / 86400)
  const hours = Math.floor((timeRemaining % 86400) / 3600)
  const minutes = Math.floor((timeRemaining % 3600) / 60)
  const seconds = timeRemaining % 60

  return (
    <div className={handles.countdown}>
      <div
        className={`${handles.countdownWrapper} flex justify-center items-center`}
      >
        <div className={handles.countdownCard}>
          <p>{days}</p>
          <span>DIAS</span>
        </div>
        <div className={handles.countdownCard}>
          <p>{hours}</p>
          <span>HRS</span>
        </div>
        <div className={handles.countdownCard}>
          <p>{minutes}</p>
          <span>MIN</span>
        </div>
        <div className={handles.countdownCard}>
          <p>{seconds}</p>
          <span>SEG</span>
        </div>
      </div>
    </div>
  )
}
