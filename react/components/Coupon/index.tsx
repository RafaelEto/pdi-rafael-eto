import React, { FC, useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface CouponProps {
  couponTitle: string
  couponSubtitle: string
  couponCode: string
}

const CSS_HANDLES: readonly string[] = [
  'couponWrapper',
  'couponTitle',
  'couponSubtitle',
  'couponCode',
  'couponButton',
]

export const Coupon: FC<CouponProps> = ({
  couponTitle,
  couponSubtitle,
  couponCode,
}) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode)
    setIsCopied(true)
  }

  useEffect(() => {
    let timeoutId: any

    if (isCopied) {
      const UNSET_TIME_MS = 2000

      timeoutId = setTimeout(() => {
        setIsCopied(false)
      }, UNSET_TIME_MS)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isCopied])

  return (
    <div
      className={`${handles.couponWrapper} flex justify-between items-center`}
    >
      <div>
        <h3 className={handles.couponTitle}>{couponTitle}</h3>
        <p className={handles.couponSubtitle}>{couponSubtitle}</p>
      </div>
      <div>
        <p className={handles.couponCode}>{couponCode}</p>
        <button className={handles.couponButton} onClick={handleCopy}>
          {isCopied ? 'COPIADO' : 'COPIAR'}
        </button>
      </div>
    </div>
  )
}
