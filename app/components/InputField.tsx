import { Description, Field, Input, Label } from '@headlessui/react'

type InputFieldProps = React.ComponentProps<'input'> & { label: string, description: string, isdark: boolean }

export default function InputField({ label, description, isdark, name, type }: InputFieldProps) {
    const commonInputClassName = "mt-3 block w-full rounded-lg border py-1.5 px-3 text-sm/6"
    const inputClassName = `${commonInputClassName} ${isdark ? 'border-neutral-500 bg-neutral-700 text-white' : 'bg-white/10'}`

    return (
        <div className="w-full max-w-md px-4">
            <Field>
                <Label className="text-sm/6 font-medium text-white">{label}</Label>
                <Description className="text-sm/6 text-white/50">{description}</Description>
                <Input
                    name={name}
                    type={type}
                    className={inputClassName}
                />
            </Field>
        </div>
    )
}
