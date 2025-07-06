import Link from 'next/link';
import css from './SidebarNotes.module.css';
import { tag } from '@/types/tag';
export default function Sidebar() {
  return (
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
  );
}
