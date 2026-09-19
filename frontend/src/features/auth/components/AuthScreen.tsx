'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { LogoLockup } from '@/components/brand/LogoLockup';
import { Icon } from '@/components/ui/Icon';

export function AuthScreen({ mode }: { mode: 'login' | 'register' }) {
  const isRegister = mode === 'register';
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="trek-pattern flex min-h-screen items-center justify-center px-5 py-10 text-[#f2eedf]">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center"><LogoLockup inverse /></div>
        <section className="rounded-[2rem] bg-[#f2eedf] p-6 text-[#18241b] shadow-2xl sm:p-9">
          <div className="mb-7 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#7d8c7e]">Welcome to Trek-Mate</p>
            <h1 className="mt-2 text-3xl font-semibold">{isRegister ? 'Create account' : 'Welcome back'}</h1>
            <p className="mt-2 text-sm text-[#637065]">{isRegister ? 'Find your next trail companion.' : 'Continue your journey with the community.'}</p>
          </div>
          <form className="space-y-4" noValidate onSubmit={handleSubmit}>
            {isRegister && <label className="block text-sm font-medium">Username<input className="mt-2 w-full rounded-xl border border-[#c9cdbf] bg-white/60 px-4 py-3 outline-none focus:border-[#356442]" name="username" placeholder="your trail name" required /></label>}
            <label className="block text-sm font-medium">Email<input className="mt-2 w-full rounded-xl border border-[#c9cdbf] bg-white/60 px-4 py-3 outline-none focus:border-[#356442]" name="email" placeholder="you@example.com" required type="email" /></label>
            <label className="block text-sm font-medium">Password<div className="relative mt-2"><input className="w-full rounded-xl border border-[#c9cdbf] bg-white/60 px-4 py-3 pr-12 outline-none focus:border-[#356442]" name="password" placeholder="••••••••" required type={showPassword ? 'text' : 'password'} /><button aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#637065]" onClick={() => setShowPassword((value) => !value)} type="button"><Icon name={showPassword ? 'x' : 'scan'} size={19} /></button></div></label>
            {isRegister && <label className="flex items-start gap-2 text-xs text-[#637065]"><input className="mt-0.5 accent-[#356442]" required type="checkbox" />I agree to the community guidelines and privacy policy.</label>}
            <button className="w-full rounded-xl bg-[#18241b] px-5 py-3.5 font-semibold text-[#f2eedf] transition hover:bg-[#2c5136]" type="submit">{isRegister ? 'Create account' : 'Log in'}</button>
          </form>
          {submitted && <p className="mt-4 rounded-xl bg-[#d9ead4] px-4 py-3 text-center text-sm text-[#285331]">Demo form submitted — connect this action to your auth endpoint.</p>}
          <div className="my-6 flex items-center gap-3 text-xs text-[#879187]"><span className="h-px flex-1 bg-[#d1d4c9]" />OR<span className="h-px flex-1 bg-[#d1d4c9]" /></div>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#bfc7ba] px-5 py-3 text-sm font-medium" onClick={() => setSubmitted(true)} type="button"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#e2604e] text-xs text-white">G</span>Continue with Google</button>
          <p className="mt-6 text-center text-sm text-[#637065]">{isRegister ? 'Already have an account?' : 'New to Trek-Mate?'} <Link className="font-semibold text-[#285331] underline" href={isRegister ? '/login' : '/register'}>{isRegister ? 'Log in' : 'Create account'}</Link></p>
        </section>
      </div>
    </main>
  );
}
