import { ToastViewport } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { Button } from '../Button'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  buttonText: string
}

export function Toast({
  title,
  description,
  buttonText,
  ...props
}: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastProvider duration={3000}>
      <Button onClick={() => setOpen(true)}>{buttonText}</Button>

      <ToastContainer {...props} open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}
