'use client';
import { Tag } from '@/types/tag';
import css from './TagsMenu.module.css';
import Link from 'next/link';
import { useState } from 'react';

const tags: Tag[] = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function TagsMenu() {
  const [isTagListOpened, setIsTagListOpened] = useState(false);

  function handleOpener() {
    setIsTagListOpened(prev => !prev);
  }

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={handleOpener}>
        Notes ▾
      </button>
      {isTagListOpened && (
        <ul className={css.menuList}>
          {tags.map(tag => {
            return (
              <li className={css.menuItem} key={tag}>
                <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
