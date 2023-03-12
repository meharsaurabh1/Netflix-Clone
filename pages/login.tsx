import Head from 'next/head'

import mypic from '../public/loginbackground.png'
import logopic from '../public/Netflix-Logo.png'
import Image from 'next/image'
import { useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
interface Inputs {
  email: string
  password: string
}
function Login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) await signIn(email, password)
    else {
      await signUp(email, password)
    }
  }
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={mypic}
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                This field is required
              </p>
            )}
          </label>
          <label className="inline-block w-full ">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                This field is required
              </p>
            )}
          </label>
        </div>
        <button
          onClick={() => setLogin(true)}
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
        >
          Sign in
        </button>
        <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            onClick={() => setLogin(false)}
            type="submit"
            className="text-white hover:underline"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
