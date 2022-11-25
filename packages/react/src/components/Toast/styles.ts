import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {
  position: 'absolute',
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(-100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(-100%)',
  },
})

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',

  backgroundColor: '$gray800',
  maxWidth: '16rem',
  padding: '0.75rem 1.25rem',
  borderRadius: '$md',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  color: '$white',
  fontSize: '$xl',
  marginBottom: '$4',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',

  right: '16px',
  top: '16px',

  svg: {
    color: '$gray200',
  },
})

export const ToastViewport = styled(Toast.Viewport, {})
