'use client'

export default function ContactForm() {
  return (
    <section className="w-full bg-zinc-400 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-16 text-center text-4xl font-extrabold tracking-wide text-black">
          LET&apos;S TALK
        </h2>

        <form className="space-y-10">
          <input
            type="text"
            placeholder="NAME"
            className="w-full rounded-xl bg-[#f3f3f3] px-6 py-5 text-sm tracking-widest text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-zinc-600"
          />

          <input
            type="email"
            placeholder="EMAIL"
            className="w-full rounded-xl bg-[#f3f3f3] px-6 py-5 text-sm tracking-widest text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-zinc-600"
          />

          <textarea
            placeholder="MESSAGE"
            rows={6}
            className="w-full resize-none rounded-xl bg-[#f3f3f3] px-6 py-5 text-sm tracking-widest text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-zinc-600"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-10 py-4 text-sm font-bold tracking-widest text-white transition hover:bg-blue-500 cursor-pointer"
            >
              SEND
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}
