import type { ComponentDoc } from '~/types/nova'

export const componentRegistry: ComponentDoc[] = [
  {
    slug: 'button',
    name: 'NvButton',
    tag: 'NvButton',
    description:
      'Primary action control wrapping Vuetify v-btn with NovaUI variants, agent-alert tones, and consistent sizing.',
    props: [
      { name: 'variant', type: 'NvButtonVariant', default: 'primary', description: 'Visual style: primary, secondary, ghost, danger, agent-info, agent-urgent' },
      { name: 'size', type: 'sm | md | lg', default: 'md', description: 'Control height and padding' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows spinner and blocks interaction' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents click and lowers emphasis' },
      { name: 'block', type: 'boolean', default: 'false', description: 'Full-width button' },
      { name: 'type', type: 'button | submit | reset', default: 'button', description: 'Native button type' },
    ],
    emits: [
      { name: 'click', payload: 'MouseEvent', description: 'Fired on user click when not disabled or loading' },
    ],
    a11y: [
      'Inherits VBtn focus ring — visible keyboard focus on Tab',
      'loading and disabled states set aria-busy and aria-disabled via Vuetify',
      'Use descriptive slot text; avoid icon-only buttons without aria-label',
      'agent-urgent variant should pair with clear action copy for screen readers',
    ],
    dos: [
      'Use primary for the main action per view; one per dialog or form section',
      'Use agent-info / agent-urgent for support-console alerts that need action',
    ],
    donts: [
      'Do not stack multiple primary buttons side by side',
      'Do not use agent-urgent for non-critical confirmations',
    ],
  },
  {
    slug: 'input',
    name: 'NvInput',
    tag: 'NvInput',
    description:
      'Text field wrapper with density presets, error/hint handling, and v-model support for forms and agent consoles.',
    props: [
      { name: 'modelValue', type: 'string', default: "''", description: 'Bound value (v-model)' },
      { name: 'label', type: 'string', description: 'Visible field label' },
      { name: 'placeholder', type: 'string', description: 'Placeholder when empty' },
      { name: 'hint', type: 'string', description: 'Helper text below field' },
      { name: 'errorMessage', type: 'string', description: 'Error text; sets error state when present' },
      { name: 'density', type: 'compact | comfortable | spacious', default: 'comfortable', description: 'Vertical density preset' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows inline progress' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Non-interactive state' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Marks field as required' },
      { name: 'prependIcon', type: 'string', description: 'MDI icon name for leading icon' },
      { name: 'appendIcon', type: 'string', description: 'MDI icon name for trailing icon' },
    ],
    emits: [
      { name: 'update:modelValue', payload: 'string', description: 'Emitted when value changes' },
      { name: 'blur', payload: 'FocusEvent', description: 'Field lost focus' },
      { name: 'focus', payload: 'FocusEvent', description: 'Field received focus' },
    ],
    a11y: [
      'Label is associated via VTextField; always provide label or aria-label',
      'errorMessage is linked with aria-describedby for screen readers',
      'Keyboard: Tab to focus, type to edit; Escape does not clear by default',
    ],
    dos: [
      'Show errorMessage only after submit or blur (eager validation)',
      'Use hint for format expectations (e.g. ticket ID pattern)',
    ],
    donts: [
      'Do not rely on placeholder alone instead of a label',
      'Do not show generic "Invalid input" — be specific',
    ],
  },
  {
    slug: 'dialog',
    name: 'NvDialog',
    tag: 'NvDialog',
    description:
      'Modal dialog for confirmations and agent workflows. Supports agent-alert styling and default action footer.',
    props: [
      { name: 'modelValue', type: 'boolean', default: 'false', description: 'Open state (v-model)' },
      { name: 'title', type: 'string', description: 'Dialog heading' },
      { name: 'subtitle', type: 'string', description: 'Supporting line under title' },
      { name: 'persistent', type: 'boolean', default: 'false', description: 'Block outside click close' },
      { name: 'maxWidth', type: 'string | number', default: '480', description: 'Max dialog width' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Disables confirm during async work' },
      { name: 'confirmLabel', type: 'string', default: 'Confirm', description: 'Primary action label' },
      { name: 'cancelLabel', type: 'string', default: 'Cancel', description: 'Dismiss action label' },
      { name: 'agentAlert', type: 'info | urgent | null', default: 'null', description: 'Support-console alert border styling' },
    ],
    emits: [
      { name: 'update:modelValue', payload: 'boolean', description: 'Open state changed' },
      { name: 'confirm', payload: 'void', description: 'User clicked confirm' },
      { name: 'cancel', payload: 'void', description: 'User dismissed dialog' },
    ],
    a11y: [
      'role="dialog" and aria-modal="true" on card surface',
      'Focus trap handled by VDialog; first focusable element receives focus on open',
      'Return focus to trigger on close (Vuetify default)',
      'Use persistent only when dismissal would lose unsaved work — document in copy',
    ],
    dos: [
      'Use agentAlert="urgent" for irreversible actions (escalate, refund)',
      'Disable confirm and show loading during API-style async work',
    ],
    donts: [
      'Do not nest dialogs',
      'Do not open dialogs without a clear title',
    ],
  },
]

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return componentRegistry.find((c) => c.slug === slug)
}
