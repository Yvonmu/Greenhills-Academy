import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function Nursery() {
    return (
        <GetData endpoint={"/api/transfer/nursery"} />
        );
}
