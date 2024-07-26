import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function Boarding() {
    return (
      <GetData endpoint={"/api/transfer/boarding"} />
      );
}
