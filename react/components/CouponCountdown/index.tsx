import React, { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { useCssHandles } from 'vtex.css-handles'

import { Countdown } from '../Countdown'
import { Coupon } from '../Coupon'

interface CouponCountdownProps {
  expirationDate: string
  couponTitle: string
  couponSubtitle: string
  couponCode: string
}

const CSS_HANDLES: readonly string[] = [
  'couponCountdown',
  'couponCountdownContainer',
  'couponCountdownWrapper',
]

const CouponCountdown: StoreFrontFC<CouponCountdownProps> = ({
  expirationDate,
  couponTitle,
  couponSubtitle,
  couponCode,
}) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  const secondsDiff = differenceInSeconds(new Date(expirationDate), new Date())
  const [timeRemaining, setTimeRemaining] = useState(secondsDiff)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!expirationDate || secondsDiff < 0) {
    return <></>
  }

  return (
    <div className={handles.couponCountdown}>
      <div className={handles.couponCountdownContainer}>
        <div
          className={`${handles.couponCountdownWrapper} flex justify-between items-center`}
        >
          <Countdown timeRemaining={timeRemaining} />
          <Coupon
            couponTitle={couponTitle}
            couponSubtitle={couponSubtitle}
            couponCode={couponCode}
          />
        </div>
      </div>
    </div>
  )
}

CouponCountdown.schema = {
  title: 'Cronômetro com Cupom',
  type: 'object',
  properties: {
    expirationDate: {
      title: 'Data limite',
      type: 'string',
      format: 'date-time',
      default: null,
    },
    couponTitle: {
      title: 'Título do Cupom',
      type: 'string',
      default: null,
    },
    couponSubtitle: {
      title: 'Subtítulo do Cupom',
      type: 'string',
      default: null,
    },
    couponCode: {
      title: 'Código do Cupom',
      type: 'string',
      default: null,
    },
  },
}

export default CouponCountdown
