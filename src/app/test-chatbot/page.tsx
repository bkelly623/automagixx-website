'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function TestChatbotContent() {
  const searchParams = useSearchParams();
  const botId = searchParams.get('id') || 'bot_1763168641649_u788ur7zg';

  useEffect(() => {
    // Create chatbot container
    const container = document.createElement('div');
    container.id = 'automagixx-chat';
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      #automagixx-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #0066FF;
        color: white;
        border: none;
        font-size: 28px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        transition: transform 0.2s;
      }
      #automagixx-btn:hover {
        transform: scale(1.1);
      }
      #automagixx-win {
        display: none;
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 380px;
        height: 600px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        z-index: 9999;
        flex-direction: column;
      }
      #automagixx-win iframe {
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 16px;
      }
    `;
    
    // Create button
    const button = document.createElement('button');
    button.id = 'automagixx-btn';
    button.textContent = '💬';
    button.onclick = () => {
      const win = document.getElementById('automagixx-win');
      const btn = document.getElementById('automagixx-btn');
      if (win && btn) {
        if (win.style.display === 'none' || !win.style.display) {
          win.style.display = 'flex';
          btn.style.display = 'none';
        } else {
          win.style.display = 'none';
          btn.style.display = 'block';
        }
      }
    };
    
    // Create chat window
    const chatWindow = document.createElement('div');
    chatWindow.id = 'automagixx-win';
    
    const iframe = document.createElement('iframe');
    iframe.src = `http://34.41.94.74:3001/widget/${botId}`;
    chatWindow.appendChild(iframe);
    
    // Append elements
    container.appendChild(button);
    container.appendChild(chatWindow);
    document.head.appendChild(style);
    document.body.appendChild(container);
    
    // Cleanup
    return () => {
      container.remove();
      style.remove();
    };
  }, [botId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Chatbot Test Page</h1>
          <p className="text-gray-600 mb-4">
            Testing chatbot ID: <code className="bg-gray-100 px-2 py-1 rounded">{botId}</code>
          </p>
          <p className="text-sm text-gray-500">
            To test a different chatbot, add <code className="bg-gray-100 px-2 py-1 rounded">?id=CHATBOT_ID</code> to the URL
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Sample Content</h2>
          <p className="text-gray-700 mb-4">
            This is a test page to preview how the chatbot will look on a real website. 
            The floating chatbot button should appear in the bottom-right corner.
          </p>
          <p className="text-gray-700 mb-4">
            Click the button to open the chat widget and test the chatbot functionality.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-blue-700 font-semibold">Pro Tip:</p>
            <p className="text-blue-600 text-sm">
              You can use this page to demo chatbots to potential clients or test new configurations before deployment.
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold">Sample Questions to Test:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>What are your room prices?</li>
              <li>Do you have private rooms?</li>
              <li>What time is check-in?</li>
              <li>What amenities do you offer?</li>
              <li>Is parking available?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestChatbotPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <TestChatbotContent />
    </Suspense>
  );
}