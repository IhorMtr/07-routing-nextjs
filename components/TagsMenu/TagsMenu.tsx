'use client';
import { tag } from '@/types/tag';
import css from './TagsMenu.module.css';
import Link from 'next/link';
import { useState } from 'react';

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
          {tag.map(tag => {
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
