import React from 'react';
import styles from './SettingsTitle.module.scss';

// - MUI
import { useTheme } from '@mui/material/styles';

interface Props {
  title: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'secondary' | 'primary' | 'success' | 'error' | 'info' | 'warning';
}

export const SettingsTitle = (props: Props) => {
  const theme = useTheme();
  const CustomTag = props?.level ? props?.level : 'h3';
  const ColorTag = props?.color ? theme?.palette[props?.color]?.main : 'inherit';

  return (
    <div className={styles.settings_title}>
      <CustomTag style={{ color: ColorTag }}>{props?.title}</CustomTag>
    </div>
  );
};
