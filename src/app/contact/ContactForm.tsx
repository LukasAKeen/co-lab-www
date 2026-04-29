'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, Check, AlertCircle } from 'lucide-react'
import { submitContact, type ContactState } from './actions'

const initialState: ContactState = { status: 'idle' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white bg-[#5B5BD6] hover:bg-[#4040C0] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-colors active:scale-[0.98]"
    >
      {pending ? 'Sending…' : 'Send message'}
      {!pending && (
        <ArrowRight
          size={15}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      )}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div className="rounded-2xl border border-[#22B574]/40 bg-[#E5F2EB] p-7 sm:p-8 text-center">
        <div className="w-10 h-10 mx-auto rounded-full bg-[#22B574] flex items-center justify-center mb-4">
          <Check size={18} className="text-white" />
        </div>
        <h3 className="display text-[22px] text-[#0B0E1A] mb-2">
          Got it — thanks for reaching out.
        </h3>
        <p className="text-[14.5px] text-[#1F2333] leading-[1.6]">
          We read everything. You&apos;ll hear back from us within a business day.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot — hidden from real users via CSS */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <label>
          Company website
          <input
            type="text"
            name="company_url"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="eyebrow text-[#71768B] block mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={200}
            autoComplete="name"
            className="w-full px-4 py-3 text-[14.5px] text-[#0B0E1A] bg-white border border-[#E7E7EE] rounded-lg focus:border-[#5B5BD6] focus:ring-1 focus:ring-[#5B5BD6] outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="eyebrow text-[#71768B] block mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className="w-full px-4 py-3 text-[14.5px] text-[#0B0E1A] bg-white border border-[#E7E7EE] rounded-lg focus:border-[#5B5BD6] focus:ring-1 focus:ring-[#5B5BD6] outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="eyebrow text-[#71768B] block mb-2"
        >
          Company <span className="text-[#A4A8BC] font-normal normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          maxLength={200}
          autoComplete="organization"
          className="w-full px-4 py-3 text-[14.5px] text-[#0B0E1A] bg-white border border-[#E7E7EE] rounded-lg focus:border-[#5B5BD6] focus:ring-1 focus:ring-[#5B5BD6] outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="eyebrow text-[#71768B] block mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className="w-full px-4 py-3 text-[14.5px] text-[#0B0E1A] bg-white border border-[#E7E7EE] rounded-lg focus:border-[#5B5BD6] focus:ring-1 focus:ring-[#5B5BD6] outline-none transition-colors resize-y"
        />
      </div>

      {state.status === 'error' && (
        <div className="flex items-start gap-2.5 px-4 py-3 rounded-lg bg-[#F7E1E8] border border-[#B84263]/30 text-[13.5px] text-[#8B2747]">
          <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="flex items-center gap-4 pt-2">
        <SubmitButton />
        <span className="text-[12px] text-[#71768B]">
          We&apos;ll reply within 1 business day.
        </span>
      </div>
    </form>
  )
}
