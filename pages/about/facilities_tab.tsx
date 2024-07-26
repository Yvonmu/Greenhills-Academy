import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function Facilities_tab() {
    return (
      <GetData endpoint={"/api/transfer/facilities"} />
      );
}
