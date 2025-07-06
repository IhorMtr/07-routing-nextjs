import Link from 'next/link';
import css from './SidebarNotes.module.css';
import { tags } from '@/types/tags';
export default function Sidebar() {
  return (
    <ul className={css.menuList}>
      <Link href={`/notes/filter/All`} className={css.menuLink}>
        All
      </Link>
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
  );
}
