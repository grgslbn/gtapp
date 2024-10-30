import React, { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

export const DomainManager: React.FC = () => {
  const [newDomain, setNewDomain] = useState('');
  const { domains, addDomain, deleteDomain } = useTodoStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDomain.trim() && !domains.includes(newDomain.trim())) {
      addDomain(newDomain.trim());
      setNewDomain('');
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
        <input
          type="text"
          value={newDomain}
          onChange={(e) => setNewDomain(e.target.value)}
          placeholder="Add new domain..."
          className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </form>
      <div className="flex flex-wrap gap-2">
        {domains.map(domain => (
          <div
            key={domain}
            className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
          >
            <span>{domain}</span>
            {domain !== 'Personal' && (
              <button
                onClick={() => deleteDomain(domain)}
                className="text-gray-500 hover:text-red-500"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};