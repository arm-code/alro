'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';

interface ActiveLinkProps {
  // Define any props you need here
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {

  const pathName = usePathname();

  return (
    <Link href={ path } className={ `${style.link} ${ ( pathName === path ) && style['active-link'] }`}>
      { text }
    </Link>
  );
};
