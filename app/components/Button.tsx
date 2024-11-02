import { Button as _Button } from '@headlessui/react'
import { ComponentProps } from 'react'

export default function Button(props: ComponentProps<typeof _Button>) {
    return (
        <_Button
            {...props}
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
            {props.children}
        </_Button >
    )
}
