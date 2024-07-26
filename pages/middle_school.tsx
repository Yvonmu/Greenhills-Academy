import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function Middle() {
    return (
        <GetData endpoint={"/api/transfer/middle"} />
        );
}
