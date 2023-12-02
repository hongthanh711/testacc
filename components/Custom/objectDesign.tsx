import React from 'react'
import DesignPlace from './designPlace'
import Option from './option'

type Props = {}

export default function ObjectDesign({}: Props) {
    return (
        <div className="flex flex-col gap-6">
            <DesignPlace />
            <Option />
        </div>
    )
}
