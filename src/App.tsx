import React, { useState } from 'react';
import { ViewMode } from './types/todo';
import { ListView } from './components/ListView';
import { KanbanView } from './components/KanbanView';
import { DomainView } from './components/DomainView';
import { TodayView } from './components/TodayView';
import { AddTodo } from './components/AddTodo';
import { DomainManager } from './components/DomainManager';
import { ViewSelector } from './components/ViewSelector';
import { Stats } from './components/Stats';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('today');

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-slate-800">My Tasks</h1>
            <ViewSelector currentView={viewMode} onViewChange={setViewMode} />
          </div>

          <Stats />
          <DomainManager />
          <AddTodo />

          <div className="mt-8">
            {viewMode === 'today' && <TodayView />}
            {viewMode === 'list' && <ListView />}
            {viewMode === 'kanban' && <KanbanView />}
            {viewMode === 'domain' && <DomainView />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;