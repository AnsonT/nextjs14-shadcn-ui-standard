'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function SignIn() {
  const [isLoading, setIsLoading] = React.useState(false)
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Card style={{ minWidth: '360px' }}>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-6'>
            <form onSubmit={onSubmit}>
              <div className='grid gap-2'>
                <div className='grid gap-1'>
                  <Label className='sr-only' htmlFor='email'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    placeholder='name@example.com'
                    type='email'
                    autoCapitalize='none'
                    autoComplete='email'
                    autoCorrect='off'
                    disabled={isLoading}
                  />
                </div>
                <Button disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  Sign In with Email
                </Button>
              </div>
            </form>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant='outline' type='button' disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <Icons.gitHub className='mr-2 h-4 w-4' />
              )}{' '}
              GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
      <Link
        href='/signup'
        className='hover:text-brand underline underline-offset-4 mt-4'
      >
        Don&apos;t have an account? Sign Up
      </Link>
    </div>
  )
}
