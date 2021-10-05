import React, { useState } from 'react'
import { Rate } from "antd"

const RateCount = () => {
    const [rateCount, setRateCount] = useState(1.5);
    return (
        <Rate onChange={(val) => setRateCount(val)} value={rateCount} count={3} allowHalf defaultValue={1.5} />
    )
}

export default RateCount
