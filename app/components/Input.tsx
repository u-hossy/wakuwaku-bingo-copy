import { ComponentProps } from 'react'
import { Description, Field, Input as _Input, Label } from '@headlessui/react'

interface InputFieldProps extends ComponentProps<"input"> { label: string, description?: string }

export default function Input({ name, type, label, description }: InputFieldProps) {

    return (
        <div className="min-w-full max-w-md px-4">
            <Field className="w-full">
                <Label className="text-sm/6 font-medium text-white">{label}</Label>
                <Description className="text-sm/6 text-white/50">{description}</Description>
                <_Input
                    name={name}
                    type={type}
                    className="my-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
                />
            </Field>
        </div>
    )
}
