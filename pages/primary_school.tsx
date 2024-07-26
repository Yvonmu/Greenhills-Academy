import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function Primary() {
    return (
        <GetData endpoint={"/api/transfer/primary"} />
        );
}
