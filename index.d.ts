declare module 'boring-avatars' {
  import React from 'react';

  export interface AvatarProps {
    size?: number | string;
    name?: string;
    square?: boolean;
    variant?: 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus';
    colors?: string[];
    title?: boolean;
  }

  interface AvatarComponent {
    (props: AvatarProps, context?: any): React.ReactElement | null;
  }

  const Avatar: AvatarComponent;

  export default Avatar;
}
