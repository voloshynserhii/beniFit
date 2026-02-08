'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data.message || 'An unknown error occurred.');
      }
    } catch (err) {
      setError('An error occurred while sending the message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="w-full bg-zinc-300 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-16 text-center text-4xl font-extrabold tracking-wide text-black">
          LET&apos;S TALK
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl bg-[#f3f3f3] px-6 py-5 text-sm tracking-widest text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-zinc-600"
          />

          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl bg-[#f3f3f3] px-6 py-5 text-sm tracking-widest text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-zinc-600"
          />

          <textarea
            placeholder="MESSAGE"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full resize-none rounded-xl bg-[#f3f3f3] px-6 py-5 text-sm tracking-widest text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-zinc-600"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-md bg-blue-600 px-10 py-4 text-sm font-bold tracking-widest text-white transition hover:bg-blue-500 cursor-pointer disabled:bg-gray-400"
            >
              {submitting ? 'SENDING...' : 'SEND'}
            </button>
          </div>
          {success && <p className="text-green-500">Message sent successfully!</p>}
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  )
}
