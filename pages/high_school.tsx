import GetData from '@/components/Molecules/GetData';
import React from 'react'

export default function High() {
    return (
        <GetData endpoint={"/api/transfer/high"} />
        );
}
