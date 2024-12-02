"use client";

import { useChat } from "ai/react";

import type { Message } from "ai/react";

const UserMessage = ({ m }: { m: Message }) => (
  <div key={m.id} className="border px-5 py-2 rounded-3xl w-fit shadow-xl ml-auto bg-white">
    <span className="whitespace-pre-wrap text-black">{m.content}</span>
  </div>
);

const AssistantMessage = ({ m }: { m: Message }) => (
  <div key={m.id} className="border px-5 py-2 rounded-3xl w-fit shadow-xl mr-auto bg-black">
    <span className="text-white whitespace-pre-wrap">{m.content}</span>
  </div>
);

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch gap-3 bg-white">
      {messages.map((m) => (m.role === "user" ? <UserMessage key={m.id} m={m} /> : <AssistantMessage key={m.id} m={m} />))}
      <form onSubmit={handleSubmit}>
        <input className="outline-none fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black" value={input} placeholder="Enterでメッセージを送る" onChange={handleInputChange} />
      </form>
    </div>
  );
}
