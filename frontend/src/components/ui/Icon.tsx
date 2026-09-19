export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'bell'
  | 'bookmark'
  | 'calendar'
  | 'chat'
  | 'chevron-down'
  | 'clock'
  | 'comment'
  | 'edit'
  | 'filter'
  | 'heart'
  | 'home'
  | 'location'
  | 'map'
  | 'medal'
  | 'menu'
  | 'more'
  | 'paper-plane'
  | 'plus'
  | 'scan'
  | 'search'
  | 'share'
  | 'sun'
  | 'user'
  | 'users'
  | 'x';

export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ name, size = 24, strokeWidth = 1.9, className }: IconProps) {
  const commonProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      {...commonProps}
    >
      {name === 'arrow-left' && <path d="m15 18-6-6 6-6" />}
      {name === 'arrow-right' && <path d="m9 18 6-6-6-6" />}
      {name === 'bell' && (
        <>
          <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </>
      )}
      {name === 'bookmark' && <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V22l-6-3.5L6 22z" />}
      {name === 'calendar' && (
        <>
          <rect height="16" rx="2" width="18" x="3" y="5" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </>
      )}
      {name === 'chat' && (
        <>
          <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.3-.6L4 20l1.5-3.7A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
          <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth="2.5" />
        </>
      )}
      {name === 'chevron-down' && <path d="m6 9 6 6 6-6" />}
      {name === 'clock' && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
        </>
      )}
      {name === 'comment' && (
        <>
          <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.3-.6L4 20l1.5-3.7A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
        </>
      )}
      {name === 'edit' && (
        <>
          <path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10z" />
          <path d="m14 7 3 3" />
        </>
      )}
      {name === 'filter' && (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
          <circle cx="9" cy="7" fill="currentColor" r="1.4" stroke="none" />
          <circle cx="15" cy="12" fill="currentColor" r="1.4" stroke="none" />
          <circle cx="11" cy="17" fill="currentColor" r="1.4" stroke="none" />
        </>
      )}
      {name === 'heart' && <path d="M20.8 8.8c0 5.2-8.8 10.1-8.8 10.1S3.2 14 3.2 8.8a4.5 4.5 0 0 1 8.8-1.5 4.5 4.5 0 0 1 8.8 1.5Z" />}
      {name === 'home' && <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z" />}
      {name === 'location' && (
        <>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
      {name === 'map' && (
        <>
          <path d="M9 18.5 3.5 21V6.5L9 4l6 2.5L20.5 4v14.5L15 21z" />
          <path d="M9 4v14.5M15 6.5V21" />
        </>
      )}
      {name === 'medal' && (
        <>
          <circle cx="12" cy="15" r="5" />
          <path d="m8.5 10.5-2-7h4l1.5 4 1.5-4h4l-2 7" />
          <path d="m10 15 1.2 1.2L14.5 13" />
        </>
      )}
      {name === 'menu' && <path d="M4 7h16M4 12h16M4 17h16" />}
      {name === 'more' && <path d="M5 12h.01M12 12h.01M19 12h.01" strokeWidth="3" />}
      {name === 'paper-plane' && <path d="m3 4 18 8-18 8 3-8zM6 12h15" />}
      {name === 'plus' && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v8M8 12h8" />
        </>
      )}
      {name === 'search' && (
        <>
          <circle cx="10.8" cy="10.8" r="6.3" />
          <path d="m16 16 4.5 4.5" />
        </>
      )}
      {name === 'scan' && <path d="M5 5h4M5 5v4M19 5h-4M19 5v4M5 19h4M5 19v-4M19 19h-4M19 19v-4" />}
      {name === 'share' && (
        <>
          <circle cx="18" cy="5" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="19" r="2.5" />
          <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
        </>
      )}
      {name === 'sun' && (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
      )}
      {name === 'user' && (
        <>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
        </>
      )}
      {name === 'users' && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.8M17.5 14a5 5 0 0 1 3.5 4.8" />
        </>
      )}
      {name === 'x' && <path d="m6 6 12 12M18 6 6 18" />}
    </svg>
  );
}
