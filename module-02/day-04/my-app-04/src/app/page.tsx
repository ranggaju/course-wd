'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useRef, useCallback } from 'react';

interface ITask {
  id: number;
  name: string;
  isComplete: boolean;
  createdAt: Date;
}

const FILTERS = ['All', 'Active', 'Complete'] as const;
type FilterType = (typeof FILTERS)[number];

function TaskInput({ onAdd }: { onAdd: (name: string) => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (inputRef.current?.value.trim()) {
      onAdd(inputRef.current.value.trim());
      inputRef.current.value = '';
    }
  };

  return (
    <div className="flex gap-[24px] lg:mb-[24px] lg:h-[64px] rounded-[5px] lg:py-[20px] lg:px-[24px] bg-white dark:bg-[#25273D] text-[#494C6B] dark:text-[#C8CBE7]">
      <div className="border border-[#E3E4F1] dark:border-[#393A4B] rounded-full lg:w-[24px] lg:h-[24px]"></div>
      <input
        ref={inputRef}
        type="text"
        className="border-none focus:outline-none font-normal lg:text-[18px] lg:tracking-[-0.25px] w-[350px]"
        placeholder="Create a new todo..."
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function TaskItem({
  task,
  onToggle,
  onDelete,
}: {
  task: ITask;
  onToggle: (task: ITask) => void;
  onDelete: (task: ITask) => void;
}) {
  return (
    <div
      key={task.id}
      className="flex lg:py-[20px] lg:px-[24px] lg:gap-[24px] border-b border-[#E3E4F1] dark:border-[#393A4B]"
    >
      <input type="checkbox" checked={task.isComplete} onChange={() => onToggle(task)} />
      <span className={`w-[400px] ${task.isComplete ? 'line-through text-[#D1D2DA] dark:text-[#4D5067]' : ''}`}>
        {task.name}
      </span>
      <button onClick={() => onDelete(task)}>×</button>
    </div>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<FilterType>('All');
  const { theme, setTheme } = useTheme();

  const addTask = useCallback((name: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1]?.id + 1 || 1,
        name,
        isComplete: false,
        createdAt: new Date(),
      },
    ]);
  }, []);

  const toggleTask = useCallback((task: ITask) => {
    setTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, isComplete: !t.isComplete } : t)));
  }, []);

  const deleteTask = useCallback((task: ITask) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((t) => !t.isComplete));
  }, []);

  const filteredTasks = tasks.filter((t) =>
    filter === 'Active' ? !t.isComplete : filter === 'Complete' ? t.isComplete : true
  );

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-[80px] font-jose">
      <div className="absolute top-0 left-0 w-full h-[300px] -z-10">
        <Image
          src={theme === 'light' ? '/light-jumbotron.png' : '/dark-jumbotron.png'}
          alt="jumbotron background"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col z-10 lg:w-[541px]">
        <div className="flex justify-between mb-[40px]">
          <span className="font-bold lg:text-[40px] lg:tracking-[15px] text-white">TODO</span>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <Image
              src={theme === 'light' ? '/moon-icon.png' : '/sun-icon.png'}
              alt="toggle-icon"
              width={26}
              height={26}
            />
          </button>
        </div>
        <TaskInput onAdd={addTask} />
        <div className="flex flex-col bg-white dark:bg-[#25273D] rounded-[5px] shadow-[0px_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-[0px_35px_50px_-15px_rgba(0,0,0,0.5)] text-[#393A4B] dark:text-[#C8CBE7]">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
          ))}
          <div className="flex justify-between lg:py-[20px] lg:px-[24px] lg:text-[14px] lg:tracking-[-0.19px] text-[#9495A5] dark:text-[#5B5E7E]">
            <span>{tasks.filter((t) => !t.isComplete).length} items left</span>
            <div className="flex gap-[19px]">
              {FILTERS.map((f) => (
                <span
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`hover:cursor-pointer ${filter === f ? 'text-[#3A7CFD]' : ''}`}
                >
                  {f}
                </span>
              ))}
            </div>
            <span className="hover:cursor-pointer" onClick={clearCompleted}>
              Clear Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
