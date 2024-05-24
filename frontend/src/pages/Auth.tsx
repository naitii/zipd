'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/components/ui/use-toast'
import AuthForm from '@/components/Auth/AuthForm'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'

export const FormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, {
      message: 'Enter Valid Email',
    }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

export default function Auth() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className='flex justify-center mt-20'>
      <Card className='lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px]'>
        <CardHeader>
          <h2>Get in and Start zipping your URLs</h2>
        </CardHeader>
        <CardDescription>
          <AuthForm form={form} onSubmit={onSubmit} />
        </CardDescription>
      </Card>
    </div>
  )
}
