import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormSchema } from '@/validation/Auth'
import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

interface AuthFormProps {
  form: UseFormReturn<z.infer<typeof FormSchema>>
  onSubmit: SubmitHandler<z.infer<typeof FormSchema>>
}

const AuthForm: React.FC<AuthFormProps> = ({ form, onSubmit }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 w-full px-5 sm:px-10 py-5'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='chirayu@example.com' {...field} />
              </FormControl>
              <FormDescription>
                This is the email associated with your account.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='*****' {...field} />
              </FormControl>
              <FormDescription>
                This is your password for logging into your account.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Get in</Button>
      </form>
    </Form>
  )
}

export default AuthForm
