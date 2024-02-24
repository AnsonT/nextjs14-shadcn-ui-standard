import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function SignUp() {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Card style={{ minWidth: '360px' }}>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}
