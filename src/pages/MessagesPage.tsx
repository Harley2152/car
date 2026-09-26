import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const MessagesPage: React.FC = () => {
  const {
    conversations,
    messages,
    activeConversationId,
    setActiveConversationId,
    sendMessage,
    navigate,
    setOfferModalCar,
    cars
  } = useApp();

  const [inputMessage, setInputMessage] = useState('');

  const activeConv =
    conversations.find((c) => c.id === activeConversationId) || conversations[0];
  const activeMessages = messages.filter((m) => m.conversationId === activeConv?.id);
  const activeCar = cars.find((c) => c.id === activeConv?.carId) || cars[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    sendMessage(activeConv.id, inputMessage.trim());
    setInputMessage('');
  };

  return (
    <div className="w-full bg-[#111317] min-h-[calc(100vh-80px)] py-8">
      <div className="max-w-[1320px] mx-auto px-6 h-[calc(100vh-140px)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#282a2e]/60">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Marketplace Chat &amp; Negotiation Escrow
            </h1>
            <p className="text-xs text-[#c6c9ae]">
              End-to-end encrypted direct buyer-seller channel backed by AutoHub verification.
            </p>
          </div>
        </div>

        {/* 2-Pane Chat Layout */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 rounded-3xl bg-[#1a1c20] border border-[#282a2e] overflow-hidden shadow-2xl">
          {/* Left: Conversation List (4 cols) */}
          <div className="md:col-span-4 border-r border-[#282a2e] flex flex-col bg-[#16181f]">
            <div className="p-4 border-b border-[#282a2e]">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Direct Conversations ({conversations.length})
              </span>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-[#282a2e]/60">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setActiveConversationId(conv.id)}
                  className={`p-4 cursor-pointer transition-colors flex items-start gap-3 ${
                    activeConversationId === conv.id
                      ? 'bg-[#1e2024] border-l-4 border-[#d1f032]'
                      : 'hover:bg-[#1e2024]/50'
                  }`}
                >
                  <img
                    src={conv.carImage}
                    alt={conv.carTitle}
                    className="w-14 h-10 object-contain rounded-lg bg-[#0c0e12] p-1 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white truncate">{conv.participantName}</h4>
                      <span className="text-[10px] text-[#90937a]">{conv.lastMessageTime}</span>
                    </div>
                    <div className="text-[11px] text-[#d1f032] font-semibold truncate">
                      {conv.carTitle}
                    </div>
                    <p className="text-[11px] text-[#c6c9ae] truncate mt-0.5">
                      {conv.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Active Chat Window (8 cols) */}
          <div className="md:col-span-8 flex flex-col bg-[#111317]">
            {/* Top Bar with Vehicle Preview Card */}
            {activeConv && (
              <div className="p-4 bg-[#1a1c20] border-b border-[#282a2e] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#282a2e] text-[#d1f032] font-black flex items-center justify-center text-xs">
                    {activeConv.participantName.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{activeConv.participantName}</span>
                      <span className="material-symbols-outlined text-[14px] text-[#d1f032]">
                        verified
                      </span>
                    </div>
                    <div className="text-[10px] text-[#c6c9ae]">
                      {activeConv.participantRole} • Online
                    </div>
                  </div>
                </div>

                {/* Embedded Vehicle Summary */}
                <div className="hidden sm:flex items-center gap-3 p-2 rounded-2xl bg-[#111317] border border-[#282a2e]">
                  <img
                    src={activeConv.carImage}
                    alt={activeConv.carTitle}
                    className="w-14 h-8 object-contain"
                  />
                  <div className="text-left text-xs">
                    <div className="font-bold text-white truncate max-w-[150px]">
                      {activeConv.carTitle}
                    </div>
                    <div className="text-[#d1f032] font-extrabold">{activeConv.carPrice}</div>
                  </div>
                  <button
                    onClick={() => setOfferModalCar(activeCar)}
                    className="px-3 py-1 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-[10px] hover:bg-[#b5d401] transition-colors"
                  >
                    Make Offer
                  </button>
                </div>
              </div>
            )}

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {activeMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  {/* Vehicle Preview Card in Message if present */}
                  {msg.carPreview && (
                    <div
                      onClick={() => navigate(`/car/${msg.carPreview?.id}`)}
                      className="p-3 rounded-2xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032] cursor-pointer mb-2 flex items-center gap-3 max-w-sm transition-all"
                    >
                      <img
                        src={msg.carPreview.image}
                        alt={msg.carPreview.title}
                        className="w-16 h-10 object-contain rounded-lg bg-[#0c0e12] p-1"
                      />
                      <div className="text-xs">
                        <div className="font-bold text-white">{msg.carPreview.title}</div>
                        <div className="text-[#d1f032] font-bold">{msg.carPreview.price}</div>
                      </div>
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`max-w-md px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#d1f032] text-[#181e00] font-semibold rounded-br-none'
                        : 'bg-[#1a1c20] text-white border border-[#282a2e] rounded-bl-none'
                    }`}
                  >
                    {msg.offerAmount && (
                      <div className="p-2 mb-2 rounded-xl bg-black/10 border border-black/10 font-bold text-xs flex items-center justify-between">
                        <span>Official Offer Submitted:</span>
                        <span>{msg.offerAmount}</span>
                      </div>
                    )}
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-[#90937a] mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}
            </div>

            {/* Message Input Box */}
            <form onSubmit={handleSend} className="p-4 bg-[#1a1c20] border-t border-[#282a2e] flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message, query about paperwork, or propose inspection slot..."
                className="flex-1 px-4 py-3 rounded-2xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOfferModalCar(activeCar)}
                className="px-4 py-3 rounded-2xl bg-[#282a2e] hover:bg-[#333539] text-[#d1f032] font-bold text-xs transition-colors shrink-0"
              >
                + Offer
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all shrink-0 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
