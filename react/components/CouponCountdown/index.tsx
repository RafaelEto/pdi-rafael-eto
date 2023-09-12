import React from "react";

interface CouponCountdownProps {
    targetDate: string
}

const CouponCountdown: StoreFrontFC<CouponCountdownProps> = ({ targetDate }) => {
    return <h2>{targetDate}</h2>
}

CouponCountdown.schema = {
    title: 'Cronômetro com Cupom',
    type: 'object',
    properties: {
        targetDate: {
            title: 'Data limite',
            type: 'string',
            default: null,
        },
    },
}

export default CouponCountdown