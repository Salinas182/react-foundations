import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
}

export const FormsPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: 'demo@gmail.com',
      password: 'abc123'
    }
  })
  const onSubmit = (form: FormInputs) => {
    console.log({form})
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Forms</h3>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input
            type="text"
            placeholder="E-mail"
            {...register('email', { required: true })}
          />
          <input
            type="text"
            placeholder="Password"
            {...register('password', { required: true })}
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  )
}
