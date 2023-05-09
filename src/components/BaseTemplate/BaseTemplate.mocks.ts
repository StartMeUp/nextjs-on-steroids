import { BaseTemplateProps } from './BaseTemplate'

const ok: BaseTemplateProps = {
  text: 'this is an ok text for OkTemplateBase',
  variant: 'ok',
  fontWeight: null
}

const warning: BaseTemplateProps = {
  text: 'this is a warning text for WarningTemplateBase',
  variant: 'warning',
  fontWeight: 'medium'
}

const alert: BaseTemplateProps = {
  text: 'this is an alert text for AlertTemplateBase',
  variant: 'alert',
  fontWeight: 'bold'
}

export const mockBaseTemplateProps = {
  ok,
  warning,
  alert
}
