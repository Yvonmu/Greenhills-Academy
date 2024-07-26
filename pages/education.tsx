import React from 'react'
import GetData from '@/components/Molecules/GetData';
export default function Education() {
    return (
      <GetData endpoint={"/api/transfer/education"} />
      );
}
