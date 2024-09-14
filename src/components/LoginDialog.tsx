"use client"
import { Dialog } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { DialogContent } from './ui/dialog'
import LoginComponent from './Login'

export default function LoginDialog() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='bg-[#26272B] rounded-3xl'>
        <LoginComponent />
      </DialogContent>
    </Dialog>
  )
}
