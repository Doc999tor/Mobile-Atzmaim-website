import { h } from 'preact'

export const Icon = ({ icon, ...props }) => <span {...props} dangerouslySetInnerHTML={{ __html: icon }} />
