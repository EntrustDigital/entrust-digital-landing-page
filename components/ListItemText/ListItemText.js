import React from 'react'
import Typography from '../Typography/Typography'

export default function ListItemText({
  className = '',
  subtitle,
  subtitleTypographyProps = {},
  secondSubtitle,
  secondSubtitleTypographyProps = {},
  title,
  titleTypographyProps = {},
}) {


  return (
    <div className={`${className}`}>
      {title && (
        <Typography {...titleTypographyProps}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography {...subtitleTypographyProps}>
          {subtitle}
        </Typography>
      )}
      {secondSubtitle && (
        <Typography {...secondSubtitleTypographyProps}>
          {secondSubtitle}
        </Typography>
      )}
    </div>
  )
}
